/*
 * v1.0.8
 * 20190121
 * 쿠키에 seq값이 있으면 무조건 재사용하도록 수정
 * 쿠키에 seq값에 오류가 있으면 쿠키값 초기화 하도록 수정
 * 시퀀스요청시 품절체크 함수 추가
*/

/**
 * 대기열 시퀀스 관리쪽
 * @param oOptions
 * @returns
 */
function SequenceManager(oOptions) {
	var self = this;
	this.oOptions = {
		serviceId: "test",
		cookieTime: 180, //minute 단위
		jsonpId: "standby",
		apiHost: "http://10.113.111.142:8001",
		apiPath: "/getSeq",
		timeout: 50000,
		successCallback: null,
		failCallback: null,
		errorCallback: null,
		debug: false
	};

	this.getSequence = function() {
		return self.getCookie(self.getSequenceCookieKey());
	};

	this.getAjaxFullUrl = function() {
		return self.oOptions.apiHost + self.oOptions.apiPath + "?serviceId=" + self.oOptions.serviceId;
	};

	// sequence 요청 후 내부 변수에 sequence 세팅
	this.requestSequence = function() {
		var seq = self.getSequence();

		if(seq != null && seq != "") {
			self.oOptions.successCallback();
			return;
		}

		jQuery.ajax({
			url: self.getAjaxFullUrl(),
			async: true,
			dataType: "jsonp",
			cache: false,
			jsonp: self.oOptions.jsonpId,
			timeout: self.oOptions.timeout,
			type: "get",
			success: function(response) {
				self.log(response);
				if( "success" == response.result ){
					//self._sSequence = response.seq;
					self.saveSequence(response.seq);
					if( "function" === jQuery.type(self.oOptions.successCallback) ){
						self.oOptions.successCallback(response);
					}
				}else if( "fail" == response.result ){
					if( "function" === jQuery.type(self.oOptions.failCallback) ){
						self.oOptions.failCallback(response);
					}
					// 품절일 경우
				}else if( "sold out" == response.result){
					if( "function" === jQuery.type(self.oOptions.soldoutCallback) ){
						self.oOptions.soldoutCallback(response);
					}
					return false;
				} else{
					if( "function" === jQuery.type(self.oOptions.errorCallback) ){
						self.oOptions.errorCallback(response);
					}
				}
			},
			error: function(error) {
				if( "function" === jQuery.type(self.oOptions.errorCallback) ){
					self.oOptions.errorCallback(error);
				}
			}
		});
	};

	this.getCookie = function(sKey) {
		var sCookiePrefix = sKey + "=";
		var aCookies = document.cookie.split(";");

		for (var i = 0; i < aCookies.length; i++) {
			var sCurrentCookie = jQuery.trim(aCookies[i]);
			if ( 0 == sCurrentCookie.indexOf(sCookiePrefix) ){
				return sCurrentCookie.substring(sCookiePrefix.length, sCurrentCookie.length);
			}
		}
		return null;
	};

	this.setCookie = function(sKey, sValue, nMinute) {
		var oDate = new Date();
		oDate.setTime(oDate.getTime() + 60 * nMinute * 1000);
		sExpires = "expires=" + oDate.toGMTString();
		document.cookie = sKey + "=" + sValue + "; " + sExpires + "; path=/; naver.com";
	};

	//sequence가 저장 되는 cookie key값 return
	this.getSequenceCookieKey = function(){
		return "f1_" + self.oOptions.serviceId;
	};

	//cookie에 sequence 저장
	this.saveSequence = function(seq){
		self.log(self.getSequenceCookieKey() + " : saveCookie : " +seq + " : " + self.oOptions.cookieTime);
		self.setCookie(self.getSequenceCookieKey(), seq, self.oOptions.cookieTime);
	};

	//cookie타입을 5분으로 수정
	this.updateCookieTime = function () {
		var seq = self.getSequence();
		var cookieTime = 5;
		self.log(self.getSequenceCookieKey() + " : saveCookie : " +seq + " : " + cookieTime);
		self.setCookie(self.getSequenceCookieKey(), seq, cookieTime);
	};

	//cookie에서 sequence 조회하여 return
	this.hasSequence = function(){
		return self.getSequence() !== null;
	};


	this.log = function(sMessage) {
		if( self.oOptions.debug ){
			console.log(sMessage);
		}
	};

	(function () {
		jQuery.extend(self.oOptions, oOptions);
	})();
}


/**
 * 대기열 동작 정의
 * @param oSequenceManager
 * @param oOptions
 * @returns
 */


function Heartbeat(oSequenceManager,oOptions) {
	var self = this;
	this.oSequenceManager = null;
	this.oTimeout = null;
	this.nDrawAllowCount = 0;

	this.oOptions = {
		serviceId: "test",
		jsonpId: "standby",
		apiHost: "http://10.113.111.142:8001",
		apiPath: "/heartbeat",
		timeout: 50000,
		interval: 1000,
		successCallback: null,
		failCallback: null,
		soldoutCallback: null,
		errorCallback: null,
		successRun : false,
		resaveCookie : false,
		debug: false
	};

	this.getAjaxFullUrl = function() {
		return self.oOptions.apiHost + self.oOptions.apiPath + "?ServiceId=" + self.oOptions.serviceId;
	};

	this.requestHeartbeat = function() {
		var seqParam = "&seq=" + oSequenceManager.getSequence();

		jQuery.ajax({
			url: self.getAjaxFullUrl()+seqParam,
			async: true,
			dataType: "jsonp",
			cache: false,
			jsonp: self.oOptions.jsonpId,
			timeout: self.oOptions.timeout,
			type: "get",
			success: function(response) {
				//우선 기존에 존재하던 타이머 제거
				self.close();

				self.log(response);

				//진입성공
				if( "success" == response.result ){
					if( self.oOptions.resaveCookie ){
						self.oSequenceManager.updateCookieTime();
					}
					if( "function" === jQuery.type(self.oOptions.successCallback) ){
						self.oOptions.successCallback(response);
					}
					if(self.oOptions.successRun){
						self.oTimeout = setTimeout(self.requestHeartbeat, self.oOptions.interval);
					}
					return false;
				}

				//진입실패, 대기
				if( "fail" == response.result ) {
					//3초 뒤 failCallback 실행
					if(self.nDrawAllowCount > 3 ) {
						if( "function" === jQuery.type(self.oOptions.failCallback) ) {
							self.oOptions.failCallback(response);
						}
					}else{
						self.nDrawAllowCount++
					}

					self.oTimeout = setTimeout(self.requestHeartbeat, self.oOptions.interval);
					return false;
				}

				// 품절일 경우
				if( "sold out" == response.result){
					if( "function" === jQuery.type(self.oOptions.soldoutCallback) ){
						self.oOptions.soldoutCallback(response);
					}
					return false;
				}

				// 에러일 경우(불법접근시)
				if( "function" === jQuery.type(self.oOptions.errorCallback) ){
					self.oOptions.errorCallback(response);
				}
			},
			error: function(response) {
				self.stop();
				self.oOptions.errorCallback(response);
				// setTimeout(self.requestHeartbeat, self.oOptions.interval);
			}
		})
	};

	//heartbeat 시작
	this.start = function() {
		self.requestHeartbeat();
	};

	//heartbeat 멈춤
	this.stop = function() {
		clearTimeout(self.oTimeout);
		oSequenceManager.setCookie(oSequenceManager.getSequenceCookieKey(),"",-180);
	};

	this.close = function() {
		clearTimeout(self.oTimeout);
	}

	//log
	this.log = function(sMessage) {
		if(self.oOptions.debug) {
			console.log(sMessage);
		}
	};

	(function () {
		if ( !oSequenceManager ){
			new Error("SequenceManager empty");
		}

		if(oSequenceManager.getSequence() == null){
			new Error("SequenceManager sequence empty");
		}

		self.oSequenceManager = oSequenceManager;
		jQuery.extend(self.oOptions, oOptions)

	})();
}