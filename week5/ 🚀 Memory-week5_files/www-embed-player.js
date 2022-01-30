(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function p(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
p("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||ia});
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function r(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Z=b.prototype}
function qa(){this.D=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.A=this.j=null}
function sa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
qa.prototype.u=function(a){this.i=a};
function ta(a,b){a.j={vb:b,zb:!0};a.h=a.m||a.o}
qa.prototype.return=function(a){this.j={return:a};this.h=this.o};
function u(a,b,c){a.h=c;return{value:b}}
qa.prototype.s=function(a){this.h=a};
function ua(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function wa(a,b){a.h=b;a.m=0}
function xa(a){a.m=0;var b=a.j.vb;a.j=null;return b}
function ya(a){a.A=[a.j];a.m=0;a.o=0}
function za(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.zb?a.h=a.m||a.o:void 0!=b.s&&a.o<b.s?(a.h=b.s,a.j=null):a.h=a.o:a.h=0}
function Aa(a){this.h=new qa;this.i=a}
function Ba(a,b){sa(a.h);var c=a.h.l;if(c)return Ca(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Da(a)}
function Ca(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.l=null,ta(a.h,g),Da(a)}a.h.l=null;d.call(a.h,f);return Da(a)}
function Da(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ta(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.zb)throw b.vb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){sa(a.h);a.h.l?b=Ca(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=Da(a));return b};
this.throw=function(b){sa(a.h);a.h.l?b=Ca(a,a.h.l["throw"],b,a.h.u):(ta(a.h,b),b=Da(a));return b};
this.return=function(b){return Ba(a,b)};
this[Symbol.iterator]=function(){return this}}
function Fa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Fa(new Ea(new Aa(a)))}
function Ga(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
p("Reflect",function(a){return a?a:{}});
p("Reflect.construct",function(){return ka});
p("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
p("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.D=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(n){k||(k=!0,m.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.S),reject:g(this.o)}};
b.prototype.S=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ga(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.L(g):this.m(g)}};
b.prototype.L=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.qa(h,g):this.m(g)};
b.prototype.o=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.A()};
b.prototype.Y=function(){var g=this;e(function(){if(g.K()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.K=function(){if(this.D)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ga=function(g){var h=this.l();g.Ka(h.resolve,h.reject)};
b.prototype.qa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(z,v){return"function"==typeof z?function(C){try{m(z(C))}catch(D){n(D)}}:v}
var m,n,t=new b(function(z,v){m=z;n=v});
this.Ka(k(g,m),k(h,n));return t};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ka=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.D=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=q(g),n=m.next();!n.done;n=m.next())d(n.value).Ka(h,k)})};
b.all=function(g){var h=q(g),k=h.next();return k.done?d([]):new b(function(m,n){function t(C){return function(D){z[C]=D;v--;0==v&&m(z)}}
var z=[],v=0;do z.push(void 0),v++,d(k.value).Ka(t(z.length-1),n),k=h.next();while(!k.done)})};
return b});
p("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=q(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ha(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),n=new a([[k,2],[m,3]]);if(2!=n.get(k)||3!=n.get(m))return!1;n.delete(k);n.set(m,4);return!n.has(k)&&4==n.get(m)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)?delete k[g][this.h]:!1};
return b});
p("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return ea(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var n=h.data_[m];if(n&&ha(h.data_,m))for(h=0;h<n.length;h++){var t=n[h];if(k!==k&&t.key!==t.key||k===t.key)return{id:m,list:n,index:h,entry:t}}return{id:m,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(t){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
p("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
p("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
p("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
p("Object.setPrototypeOf",function(a){return a||pa});
p("Set",function(a){function b(c){this.h=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
p("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
p("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
p("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
p("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
p("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
p("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
p("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
p("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push(b[d]);return c}});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ja(){}
function Ka(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua=Sa:Ua=Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(a,b){y(a,b,void 0)}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.Z=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oo=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Pb=b)}
Xa($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(){var a=B("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;function xb(){if(void 0===wb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){x.console&&x.console.error(c.message)}wb=a}else wb=a}return wb}
;function yb(a,b){this.j=a===zb&&b||""}
yb.prototype.i=!0;yb.prototype.h=function(){return this.j};
function Ab(a){return new yb(zb,a)}
var zb={};Ab("");var Bb={};function Cb(a){this.j=Bb===Bb?a:"";this.i=!0}
Cb.prototype.h=function(){return this.j.toString()};
Cb.prototype.toString=function(){return this.j.toString()};function Db(a,b){this.j=b===Eb?a:""}
Db.prototype.i=!0;Db.prototype.h=function(){return this.j.toString()};
Db.prototype.toString=function(){return this.j+""};
function Fb(a){if(a instanceof Db&&a.constructor===Db)return a.j;La(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Gb(a){var b=xb();a=b?b.createScriptURL(a):a;return new Db(a,Eb)}
;var Hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Ib(a,b){this.j=b===Jb?a:""}
Ib.prototype.i=!0;Ib.prototype.h=function(){return this.j.toString()};
Ib.prototype.toString=function(){return this.j.toString()};
function Kb(a){if(a instanceof Ib&&a.constructor===Ib)return a.j;La(a);return"type_error:SafeUrl"}
var Lb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Jb={};function Mb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
function E(a){return-1!=Mb().indexOf(a)}
;function Nb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")||E("Silk")}
;var Ob={};function Pb(a){this.j=Ob===Ob?a:"";this.i=!0}
Pb.prototype.h=function(){return this.j.toString()};
Pb.prototype.toString=function(){return this.j.toString()};function Qb(a,b){b instanceof Ib||b instanceof Ib||(b="object"==typeof b&&b.i?b.h():String(b),Lb.test(b)||(b="about:invalid#zClosurez"),b=new Ib(b,Jb));a.href=Kb(b)}
function Rb(a,b){a.rel="stylesheet";a.href=Fb(b).toString();(b=Sb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Tb(){return Sb("script[nonce]",void 0)}
var Ub=/^[\w+/_-]+[=]{0,2}$/;function Sb(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Ub.test(a)?a:"":""}
;function Vb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Wb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xb(a){return a?decodeURI(a):a}
function Yb(a){return Xb(a.match(Wb)[3]||null)}
function Zb(a){var b=a.match(Wb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function $b(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)$b(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ac(a){var b=[],c;for(c in a)$b(c,a[c],b);return b.join("&")}
function bc(a,b){b=ac(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var cc=/#|$/;function dc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function ec(a){ec[" "](a);return a}
ec[" "]=Ja;var fc=E("Opera"),gc=E("Trident")||E("MSIE"),hc=E("Edge"),ic=E("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),jc=-1!=Mb().toLowerCase().indexOf("webkit")&&!E("Edge"),kc=E("Android");function lc(){var a=x.document;return a?a.documentMode:void 0}
var mc;a:{var nc="",oc=function(){var a=Mb();if(ic)return/rv:([^\);]+)(\)|;)/.exec(a);if(hc)return/Edge\/([\d\.]+)/.exec(a);if(gc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jc)return/WebKit\/(\S+)/.exec(a);if(fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
oc&&(nc=oc?oc[1]:"");if(gc){var pc=lc();if(null!=pc&&pc>parseFloat(nc)){mc=String(pc);break a}}mc=nc}var qc=mc,rc;if(x.document&&gc){var sc=lc();rc=sc?sc:parseInt(qc,10)||void 0}else rc=void 0;var tc=rc;var uc=dc()||E("iPod"),vc=E("iPad");!E("Android")||Nb();Nb();var wc=E("Safari")&&!(Nb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(dc()||E("iPad")||E("iPod"));var xc={},yc=null;
function zc(a,b){Ma(a);void 0===b&&(b=0);if(!yc){yc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));xc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===yc[h]&&(yc[h]=g)}}}b=xc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ac="function"===typeof Uint8Array;var Bc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Cc(a){Object.isFrozen(a)||(Bc?a[Bc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function Dc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Ec,Fc=Object.freeze(Cc([]));function Gc(a,b){if(Hc){var c={};Object.defineProperties(a,(c[Symbol.hasInstance]={value:b,configurable:!1,writable:!1,enumerable:!1},c))}}
var Hc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Ic(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.N[b+a.j]}
function G(a,b,c,d){b<a.l&&(void 0===d||!d)?a.N[b+a.j]=c:(a.i||(a.i=a.N[a.l+a.j]={}))[b]=c;return a}
function Jc(a,b,c){c=void 0===c?!1:c;var d=Ic(a,b,c);null==d&&(d=Fc);d===Fc&&(d=Cc(d.slice()),G(a,b,d,c));return d}
function Kc(a,b,c,d){(c=Lc(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),G(a,c,void 0));return G(a,b,d)}
function Lc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Ic(a,e)&&(0!==c&&G(a,c,void 0,!1),c=e)}return c}
function Mc(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=Ic(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);return a.h[c]=b}
function Nc(a,b,c,d){a.h||(a.h={});var e=a.h[c];if(!e){d=Jc(a,c,void 0===d?!1:d);e=[];for(var f=0;f<d.length;f++)e[f]=new b(d[f]);a.h[c]=e}return e}
function H(a,b,c,d){a.h||(a.h={});var e=c?c.N:c;a.h[b]=c;return G(a,b,e,void 0===d?!1:d)}
function Oc(a,b,c){var d=Pc;a.h||(a.h={});var e=c?c.N:c;a.h[b]=c;Kc(a,b,d,e)}
function Qc(a,b,c,d){var e=Nc(a,c,b,void 0===e?!1:e);c=d?d:new c;a=Jc(a,b);e.push(c);a.push(c.N)}
;function Rc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Ac&&null!=a&&a instanceof Uint8Array)return zc(a)}return a}
;function Sc(a,b){if(null!=a){if(Array.isArray(a))a=Tc(a,b);else if(Dc(a)){var c={},d;for(d in a)c[d]=Sc(a[d],b);a=c}else a=b(a);return a}}
function Tc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Sc(c[d],b);if(Array.isArray(a)){var e;Bc?e=a[Bc]:e=a.h;a=!!((null==e?0:e)&1)}else a=!1;a&&Cc(c);return c}
function Uc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Rc(a);return Array.isArray(a)?Tc(a,Uc):a}
function Vc(a){return Ac&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;var Wc;function Xc(a,b,c){var d=Wc;Wc=null;a||(a=d);d=this.constructor.vo;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.uo||0);this.h=void 0;this.N=a;a:{d=this.N.length;a=d-1;if(d&&(d=this.N[a],Dc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.N[a])?Array.isArray(d)&&Cc(d):this.N[a]=Fc;else{d=this.i||(this.i=this.N[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Cc(e):d[a]=Fc}}
Xc.prototype.toJSON=function(){var a=this.N;return Ec?a:Tc(a,Uc)};
function Yc(a,b){return Rc(b)}
Xc.prototype.toString=function(){return this.N.toString()};
Xc.prototype.clone=function(){var a=this.constructor,b;Wc=b=Tc(this.N,Vc);a=new a(b);Wc=null;Zc(a,this);return a};
function Zc(a,b){b.o&&(a.o=b.o.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Nc(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)Zc(f[g],e[g])}else(f=Mc(a,e.constructor,g,void 0,f))&&Zc(f,e)}}}}
;function $c(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;if(b){var e=Cc([]);for(var f=0;f<b.length;f++)e[f]=b[f].N;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=Fc;a=G(a,c,e,d)}else a=H(a,c,b,!0);return a}
;function ad(){Xc.apply(this,arguments)}
r(ad,Xc);Gc(ad,function(){throw Error("Cannot perform instanceof checks for MutableMessage");});function I(){ad.apply(this,arguments)}
r(I,ad);Gc(I,Hc?Object[Symbol.hasInstance]:void 0);function bd(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function cd(a){this.i=!1;var b=a.program;a=a.globalName;var c=new bd;this.j=c.promise;this.l=q((0,x[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Ob:d,wc:e})})},!0)).next().value;
this.vc=c.promise.then(function(){})}
cd.prototype.snapshot=function(a){if(this.i)throw Error("Already disposed");return this.j.then(function(b){var c=b.Ob;return new Promise(function(d){c(function(e){d(e)},[a.qb,
a.xc])})})};
cd.prototype.Jb=function(a){if(this.i)throw Error("Already disposed");return this.l([a.qb,a.xc])};
cd.prototype.dispose=function(){this.i=!0;this.j.then(function(a){(a=a.wc)&&a()})};
cd.prototype.h=function(){return this.i};var dd=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var ed={};function fd(){}
function gd(a){this.h=a}
r(gd,fd);gd.prototype.toString=function(){return this.h};
var hd=new gd("about:invalid#zTSz",ed);function id(a){if(a instanceof fd)if(a instanceof gd)a=a.h;else throw Error("");else a=Kb(a);return a}
;function jd(a,b){a.src=Fb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function kd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=kd.prototype;l.clone=function(){return new kd(this.x,this.y)};
l.equals=function(a){return a instanceof kd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function ld(a,b){this.width=a;this.height=b}
l=ld.prototype;l.clone=function(){return new ld(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function md(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function nd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function od(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function pd(a){var b=qd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function rd(){var a=[];pd(function(b){a.push(b)});
return a}
var qd={Mc:"allow-forms",Nc:"allow-modals",Oc:"allow-orientation-lock",Pc:"allow-pointer-lock",Qc:"allow-popups",Rc:"allow-popups-to-escape-sandbox",Sc:"allow-presentation",Tc:"allow-same-origin",Uc:"allow-scripts",Vc:"allow-top-navigation",Wc:"allow-top-navigation-by-user-activation"},sd=bb(function(){return rd()});
function td(){var a=ud(),b={};db(sd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ud(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function vd(a){this.isValid=a}
function wd(a){return new vd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var xd=[wd("data"),wd("http"),wd("https"),wd("mailto"),wd("ftp"),new vd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function yd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var zd=(new Date).getTime();var Ad=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(1959);function Bd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Cd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(t){for(var z=g,v=0;64>v;v+=4)z[v/4]=t[v]<<24|t[v+1]<<16|t[v+2]<<8|t[v+3];for(v=16;80>v;v++)t=z[v-3]^z[v-8]^z[v-14]^z[v-16],z[v]=(t<<1|t>>>31)&4294967295;t=e[0];var C=e[1],D=e[2],F=e[3],P=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var U=F^C&(D^F);var W=1518500249}else U=C^D^F,W=1859775393;else 60>v?(U=C&D|F&(C|D),W=2400959708):(U=C^D^F,W=3395469782);U=((t<<5|t>>>27)&4294967295)+U+P+W+z[v]&4294967295;P=F;F=D;D=(C<<30|C>>>2)&4294967295;C=t;t=U}e[0]=e[0]+t&4294967295;e[1]=e[1]+C&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+P&4294967295}
function c(t,z){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var v=[],C=0,D=t.length;C<D;++C)v.push(t.charCodeAt(C));t=v}z||(z=t.length);v=0;if(0==m)for(;v+64<z;)b(t.slice(v,v+64)),v+=64,n+=64;for(;v<z;)if(f[m++]=t[v++],n++,64==m)for(m=0,b(f);v+64<z;)b(t.slice(v,v+64)),v+=64,n+=64}
function d(){var t=[],z=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var v=63;56<=v;v--)f[v]=z&255,z>>>=8;b(f);for(v=z=0;5>v;v++)for(var C=24;0<=C;C-=8)t[z++]=e[v]>>C&255;return t}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,n;a();return{reset:a,update:c,digest:d,Sb:function(){for(var t=d(),z="",v=0;v<t.length;v++)z+="0123456789ABCDEF".charAt(Math.floor(t[v]/16))+"0123456789ABCDEF".charAt(t[v]%16);return z}}}
;function Dd(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,Ed(Bd(d),a,c||null)].join(" "):null}
function Ed(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Fd(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Fd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Fd(a){var b=Cd();b.update(a);return b.Sb().toLowerCase()}
;var Gd={};function Hd(a){this.h=a||{cookie:""}}
l=Hd.prototype;l.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Co;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Qa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Hb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Qa:0,path:b,domain:c});return d};
l.ab=function(){return Id(this).keys};
l.isEmpty=function(){return!this.h.cookie};
l.clear=function(){for(var a=Id(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Id(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Hb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Jd=new Hd("undefined"==typeof document?null:document);function Kd(a){return!!Gd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ld(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;Kd(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new Hd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Kd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Md(a,b,c,d){(a=x[a])||(a=(new Hd(document)).get(b));return a?Dd(a,c,d):null}
function Nd(a){var b=void 0===b?!1:b;var c=Bd(String(x.location.href)),d=[];if(Ld(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new Hd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Dd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Kd(b)&&((b=Md("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Md("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Od(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Pd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Pd.apply(null,d):Od(d)}}
;function J(){this.D=this.D;this.o=this.o}
J.prototype.D=!1;J.prototype.h=function(){return this.D};
J.prototype.dispose=function(){this.D||(this.D=!0,this.H())};
function Qd(a,b){a.D?b():(a.o||(a.o=[]),a.o.push(b))}
J.prototype.H=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function Rd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Rd.prototype.stopPropagation=function(){this.j=!0};
Rd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Sd(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Td(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ud[c])c=Ud[c];else{c=String(c);if(!Ud[c]){var f=/function\s+([^\(]+)/m.exec(c);Ud[c]=f?f[1]:"[Anonymous]"}c=Ud[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Td(a,b){b||(b={});b[Vd(a)]=!0;var c=a.stack||"";(a=a.Pb)&&!b[Vd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Td(a,b));return c}
function Vd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ud={};var Wd=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",Ja,b),x.removeEventListener("test",Ja,b)}catch(c){}return a}();function Xd(a,b){Rd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(Xd,Rd);var Yd={2:"touch",3:"pen",4:"mouse"};
Xd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(ic){a:{try{ec(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Yd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Xd.Z.preventDefault.call(this)};
Xd.prototype.stopPropagation=function(){Xd.Z.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Xd.prototype.preventDefault=function(){Xd.Z.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Zd="closure_listenable_"+(1E6*Math.random()|0);var $d=0;function ae(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Na=e;this.key=++$d;this.Aa=this.Ja=!1}
function be(a){a.Aa=!0;a.listener=null;a.proxy=null;a.src=null;a.Na=null}
;function ce(a){this.src=a;this.listeners={};this.h=0}
ce.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=de(a,b,d,e);-1<g?(b=a[g],c||(b.Ja=!1)):(b=new ae(b,this.src,f,!!d,e),b.Ja=c,a.push(b));return b};
ce.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=de(e,b,c,d);return-1<b?(be(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ee(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(be(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function de(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Aa&&f.listener==b&&f.capture==!!c&&f.Na==d)return e}return-1}
;var fe="closure_lm_"+(1E6*Math.random()|0),ge={},he=0;function ie(a,b,c,d,e){if(d&&d.once)je(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ie(a,b[f],c,d,e);else c=ke(c),a&&a[Zd]?a.ba(b,c,Na(d)?!!d.capture:!!d,e):le(a,b,c,!1,d,e)}
function le(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=me(a);h||(a[fe]=h=new ce(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ne();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Wd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(oe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");he++}}
function ne(){function a(c){return b.call(a.src,a.listener,c)}
var b=pe;return a}
function je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)je(a,b[f],c,d,e);else c=ke(c),a&&a[Zd]?a.i.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):le(a,b,c,!0,d,e)}
function qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)qe(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=ke(c),a&&a[Zd])?a.i.remove(String(b),c,d,e):a&&(a=me(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=de(b,c,d,e)),(c=-1<a?b[a]:null)&&re(c))}
function re(a){if("number"!==typeof a&&a&&!a.Aa){var b=a.src;if(b&&b[Zd])ee(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(oe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);he--;(c=me(b))?(ee(c,a),0==c.h&&(c.src=null,b[fe]=null)):be(a)}}}
function oe(a){return a in ge?ge[a]:ge[a]="on"+a}
function pe(a,b){if(a.Aa)a=!0;else{b=new Xd(b,this);var c=a.listener,d=a.Na||a.src;a.Ja&&re(a);a=c.call(d,b)}return a}
function me(a){a=a[fe];return a instanceof ce?a:null}
var se="__closure_events_fn_"+(1E9*Math.random()>>>0);function ke(a){if("function"===typeof a)return a;a[se]||(a[se]=function(b){return a.handleEvent(b)});
return a[se]}
;function te(){J.call(this);this.i=new ce(this);this.Y=this;this.K=null}
Xa(te,J);te.prototype[Zd]=!0;te.prototype.addEventListener=function(a,b,c,d){ie(this,a,b,c,d)};
te.prototype.removeEventListener=function(a,b,c,d){qe(this,a,b,c,d)};
function ue(a,b){var c=a.K;if(c){var d=[];for(var e=1;c;c=c.K)d.push(c),++e}a=a.Y;c=b.type||b;"string"===typeof b?b=new Rd(b,a):b instanceof Rd?b.target=b.target||a:(e=b,b=new Rd(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=ve(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ve(g,c,!0,b)&&e,b.j||(e=ve(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ve(g,c,!1,b)&&e}
te.prototype.H=function(){te.Z.H.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,be(d[e]);delete a.listeners[c];a.h--}}this.K=null};
te.prototype.ba=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function ve(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Aa&&g.capture==c){var h=g.listener,k=g.Na||g.src;g.Ja&&ee(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function we(a){te.call(this);var b=this;this.A=this.l=0;this.V=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
U:clearTimeout};var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return w(function(e){return u(e,xe(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||ye(this)}
r(we,te);we.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.V.U(this.A);delete we.h};
we.prototype.G=function(){return this.j};
function ye(a){a.A=a.V.M(function(){var b;return w(function(c){if(1==c.h)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.s(3):u(c,xe(a),3):u(c,xe(a),3);ye(a);c.h=0})},3E4)}
function xe(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ua(h,2,3),d&&(a.l=a.V.M(function(){d.abort()},b||2E4)),u(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:ya(h);a.u=void 0;a.l&&(a.V.U(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?ue(a,"networkstatus-online"):ue(a,"networkstatus-offline"));c(g);za(h);break;case 2:xa(h),g=!1,h.s(3)}})})}
;var ze={Vn:"WEB_DISPLAY_MODE_UNKNOWN",Rn:"WEB_DISPLAY_MODE_BROWSER",Tn:"WEB_DISPLAY_MODE_MINIMAL_UI",Un:"WEB_DISPLAY_MODE_STANDALONE",Sn:"WEB_DISPLAY_MODE_FULLSCREEN"};function Ae(){this.data_=[];this.h=-1}
Ae.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Ae.prototype.get=function(a){return!!this.data_[a]};
function Be(a){-1==a.h&&(a.h=gb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ce(){var a={};this.C=function(b,c){return null!=a[b]?a[b]:c}}
;function De(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
De.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ee(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Fe;function Ge(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=nd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ob;c.ob=null;e()}};
return function(e){d.next={ob:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function He(a){x.setTimeout(function(){throw a;},0)}
;function Ie(){this.i=this.h=null}
Ie.prototype.add=function(a,b){var c=Je.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ie.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Je=new De(function(){return new Ke},function(a){return a.reset()});
function Ke(){this.next=this.scope=this.h=null}
Ke.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Ke.prototype.reset=function(){this.next=this.scope=this.h=null};function Le(a,b){Me||Ne();Oe||(Me(),Oe=!0);Pe.add(a,b)}
var Me;function Ne(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Me=function(){a.then(Qe)}}else Me=function(){var b=Qe;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!E("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Fe||(Fe=Ge()),Fe(b)):x.setImmediate(b)}}
var Oe=!1,Pe=new Ie;function Qe(){for(var a;a=Pe.remove();){try{a.h.call(a.scope)}catch(b){He(b)}Ee(Je,a)}Oe=!1}
;function Re(a,b){this.h=a[x.Symbol.iterator]();this.i=b;this.j=0}
Re.prototype[Symbol.iterator]=function(){return this};
Re.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Se(a,b){return new Re(a,b)}
;function Te(){this.blockSize=-1}
;function Ue(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(Ue,Te);Ue.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Ve(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ue.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)Ve(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ve(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ve(this,e);f=0;break}}this.i=f;this.l+=b}};
Ue.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Ve(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function We(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Xe(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ye(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:We(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function Ze(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ye(a,"inverted-hdpi")&&Xe(a,Array.prototype.filter.call(a.classList?a.classList:We(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var $e="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function af(){}
af.prototype.da=function(){throw $e;};
af.prototype.next=function(){return bf};
var bf={done:!0,value:void 0};function cf(a){return{value:a,done:!1}}
function df(a){if(a.done)throw $e;return a.value}
af.prototype.T=function(){return this};function ef(a){if(a instanceof ff||a instanceof gf||a instanceof hf)return a;if("function"==typeof a.da)return new ff(function(){return jf(a)});
if("function"==typeof a[Symbol.iterator])return new ff(function(){return a[Symbol.iterator]()});
if("function"==typeof a.T)return new ff(function(){return jf(a.T())});
throw Error("Not an iterator or iterable.");}
function jf(a){if(!(a instanceof af))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.da();break}catch(d){if(d!==$e)throw d;b=!0}return{value:c,done:b}}}}
function ff(a){this.h=a}
ff.prototype.T=function(){return new gf(this.h())};
ff.prototype[Symbol.iterator]=function(){return new hf(this.h())};
ff.prototype.i=function(){return new hf(this.h())};
function gf(a){this.h=a}
r(gf,af);gf.prototype.da=function(){var a=this.h.next();if(a.done)throw $e;return a.value};
gf.prototype.next=function(){return this.h.next()};
gf.prototype[Symbol.iterator]=function(){return new hf(this.h)};
gf.prototype.i=function(){return new hf(this.h)};
function hf(a){ff.call(this,function(){return a});
this.j=a}
r(hf,ff);hf.prototype.next=function(){return this.j.next()};function kf(a,b){this.i={};this.h=[];this.ja=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof kf)for(c=a.ab(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=kf.prototype;l.ab=function(){lf(this);return this.h.concat()};
l.has=function(a){return mf(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||nf;lf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function nf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.i={};this.ja=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return mf(this.i,a)?(delete this.i[a],--this.size,this.ja++,this.h.length>2*this.size&&lf(this),!0):!1};
function lf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];mf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],mf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return mf(this.i,a)?this.i[a]:b};
l.set=function(a,b){mf(this.i,a)||(this.size+=1,this.h.push(a),this.ja++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.ab(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new kf(this)};
l.keys=function(){return ef(this.T(!0)).i()};
l.values=function(){return ef(this.T(!1)).i()};
l.entries=function(){var a=this;return Se(this.keys(),function(b){return[b,a.get(b)]})};
l.T=function(a){lf(this);var b=0,c=this.ja,d=this,e=new af;e.next=function(){if(c!=d.ja)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return bf;var g=d.h[b++];return cf(a?g:d.i[g])};
var f=e.next;e.da=function(){return df(f.call(e))};
return e};
function mf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function of(a){pf();return Gb(a)}
var pf=Ja;function qf(a){var b=[];rf(new sf,a,b);return b.join("")}
function sf(){}
function rf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),rf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),tf(d,c),c.push(":"),rf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":tf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var uf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},vf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function tf(a,b){b.push('"',a.replace(vf,function(c){var d=uf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),uf[c]=d);return d}),'"')}
;function wf(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function xf(a){this.h=0;this.D=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){yf(b,2,c)},function(c){yf(b,3,c)})}catch(c){yf(this,3,c)}}
function zf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
zf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Af=new De(function(){return new zf},function(a){a.reset()});
function Bf(a,b,c){var d=Af.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Cf(a){return new xf(function(b,c){c(a)})}
xf.prototype.then=function(a,b,c){return Df(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
xf.prototype.$goog_Thenable=!0;function Ef(a,b){return Df(a,null,b,void 0)}
xf.prototype.cancel=function(a){if(0==this.h){var b=new Ff(a);Le(function(){Gf(this,b)},this)}};
function Gf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Gf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Hf(c),If(c,e,3,b)))}a.j=null}else yf(a,3,b)}
function Jf(a,b){a.i||2!=a.h&&3!=a.h||Kf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Df(a,b,c,d){var e=Bf(null,null,null);e.h=new xf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ff?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;Jf(a,e);return e.h}
xf.prototype.A=function(a){this.h=0;yf(this,2,a)};
xf.prototype.K=function(a){this.h=0;yf(this,3,a)};
function yf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.A,f=a.K;if(d instanceof xf){Jf(d,Bf(e||Ja,f||null,a));var g=!0}else if(wf(d))d.then(e,f,a),g=!0;else{if(Na(d))try{var h=d.then;if("function"===typeof h){Lf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.D=c,a.h=b,a.j=null,Kf(a),3!=b||c instanceof Ff||Mf(a,c))}}
function Lf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Kf(a){a.m||(a.m=!0,Le(a.u,a))}
function Hf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
xf.prototype.u=function(){for(var a;a=Hf(this);)If(this,a,this.h,this.D);this.m=!1};
function If(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,Nf(b,c,d);else try{b.j?b.i.call(b.context):Nf(b,c,d)}catch(e){Of.call(null,e)}Ee(Af,b)}
function Nf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Mf(a,b){a.o=!0;Le(function(){a.o&&Of.call(null,b)})}
var Of=He;function Ff(a){$a.call(this,a)}
Xa(Ff,$a);Ff.prototype.name="cancel";function K(a){J.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Xa(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function Pf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.wa(b)}}
l.wa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ja):(c&&jb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.ka=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Qf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.wa(c)}}return 0!=e}return!1};
function Qf(a,b,c){Le(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.wa,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.H=function(){K.Z.H.call(this);this.clear();this.l.length=0};function Rf(a){this.h=a}
Rf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,qf(b))};
Rf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Rf.prototype.remove=function(a){this.h.remove(a)};function Sf(a){this.h=a}
Xa(Sf,Rf);function Tf(a){this.data=a}
function Uf(a){return void 0===a||a instanceof Tf?a:new Tf(a)}
Sf.prototype.set=function(a,b){Sf.Z.set.call(this,a,Uf(b))};
Sf.prototype.i=function(a){a=Sf.Z.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Sf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Vf(a){this.h=a}
Xa(Vf,Sf);Vf.prototype.set=function(a,b,c){if(b=Uf(b)){if(c){if(c<Date.now()){Vf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Vf.Z.set.call(this,a,b)};
Vf.prototype.i=function(a){var b=Vf.Z.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Vf.prototype.remove.call(this,a);else return b}};function Wf(){}
;function Xf(){}
Xa(Xf,Wf);Xf.prototype[Symbol.iterator]=function(){return ef(this.T(!0)).i()};
Xf.prototype.clear=function(){var a=Array.from(this);a=q(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Yf(a){this.h=a}
Xa(Yf,Xf);l=Yf.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.T=function(a){var b=0,c=this.h,d=new af;d.next=function(){if(b>=c.length)return bf;var f=c.key(b++);if(a)return cf(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return cf(f)};
var e=d.next;d.da=function(){return df(e.call(d))};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function Zf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Xa(Zf,Yf);function $f(a,b){this.i=a;this.h=null;var c;if(c=gc)c=!(9<=Number(tc));if(c){ag||(ag=new kf);this.h=ag.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),ag.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa($f,Xf);var bg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ag=null;function cg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return bg[b]})}
l=$f.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(cg(a),b);dg(this)};
l.get=function(a){a=this.h.getAttribute(cg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(cg(a));dg(this)};
l.T=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new af;d.next=function(){if(b>=c.length)return bf;var f=c[b++];if(a)return cf(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return cf(f)};
var e=d.next;d.da=function(){return df(e.call(d))};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);dg(this)};
function dg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function eg(a,b){this.i=a;this.h=b+"::"}
Xa(eg,Xf);eg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
eg.prototype.get=function(a){return this.i.get(this.h+a)};
eg.prototype.remove=function(a){this.i.remove(this.h+a)};
eg.prototype.T=function(a){var b=this.i.T(!0),c=this,d=new af;d.next=function(){try{var f=b.da()}catch(g){if(g===$e)return bf;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.da()}catch(g){if(g===$e)return bf;throw g;}return cf(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.da=function(){return df(e.call(d))};
return d};function fg(a){I.call(this,a)}
r(fg,I);fg.prototype.getKey=function(){return Ic(this,1)};
fg.prototype.getValue=function(){return Ic(this,2===Lc(this,gg)?2:-1)};
fg.prototype.setValue=function(a){return Kc(this,2,gg,a)};
var gg=[2,3,4,5,6];function hg(a){I.call(this,a)}
r(hg,I);function ig(a){I.call(this,a)}
r(ig,I);function jg(a){I.call(this,a)}
r(jg,I);function kg(a){I.call(this,a,-1,lg)}
r(kg,I);kg.prototype.getPlayerType=function(){return Ic(this,36)};
kg.prototype.setHomeGroupInfo=function(a){return H(this,81,a)};
var lg=[9,66,24,32,86,100,101];function mg(a){I.call(this,a,-1,ng)}
r(mg,I);var ng=[15,26,28];function og(a){I.call(this,a)}
r(og,I);og.prototype.setToken=function(a){return G(this,2,a)};function pg(a){I.call(this,a,-1,qg)}
r(pg,I);pg.prototype.setSafetyMode=function(a){return G(this,5,a)};
var qg=[12];function rg(a){I.call(this,a,-1,sg)}
r(rg,I);var sg=[12];function tg(a){I.call(this,a)}
r(tg,I);var ug={rh:0,bh:1,ih:2,jh:4,oh:8,kh:16,lh:32,qh:64,ph:128,eh:256,gh:512,nh:1024,fh:2048,hh:4096,dh:8192,mh:16384};function vg(a){I.call(this,a)}
r(vg,I);function wg(a,b){H(a,1,b)}
vg.prototype.X=function(a){G(this,2,a)};
function xg(a){I.call(this,a)}
r(xg,I);function yg(a,b){H(a,1,b)}
;function zg(a){I.call(this,a,-1,Ag)}
r(zg,I);zg.prototype.X=function(a){G(this,1,a)};
function Bg(a,b){H(a,2,b)}
var Ag=[3];function Cg(a){I.call(this,a)}
r(Cg,I);Cg.prototype.X=function(a){G(this,1,a)};function Dg(a){I.call(this,a)}
r(Dg,I);Dg.prototype.X=function(a){G(this,1,a)};function Eg(a){I.call(this,a)}
r(Eg,I);Eg.prototype.X=function(a){G(this,1,a)};function Fg(a){I.call(this,a)}
r(Fg,I);function Gg(a){I.call(this,a)}
r(Gg,I);function Hg(a){I.call(this,a,-1,Ig)}
r(Hg,I);Hg.prototype.getPlayerType=function(){var a=Ic(this,7);return null==a?0:a};
Hg.prototype.setVideoId=function(a){return G(this,19,a)};
function Jg(a){I.call(this,a)}
r(Jg,I);Jg.prototype.getId=function(){var a=Ic(this,2);return null==a?"":a};
var Ig=[83,68];function Kg(a){I.call(this,a)}
r(Kg,I);function Lg(a){I.call(this,a)}
r(Lg,I);function Mg(a){I.call(this,a)}
r(Mg,I);function Ng(a){I.call(this,a,421)}
r(Ng,I);
var Pc=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,413,414,415,416,417,418,419,420,117];function Og(a){I.call(this,a)}
r(Og,I);function Pg(a){I.call(this,a)}
r(Pg,I);Pg.prototype.setVideoId=function(a){return Kc(this,1,Qg,a)};
Pg.prototype.getPlaylistId=function(){return Ic(this,2===Lc(this,Qg)?2:-1)};
var Qg=[1,2];function Rg(a){I.call(this,a,-1,Sg)}
r(Rg,I);var Sg=[3];function Tg(a){I.call(this,a,1)}
r(Tg,I);function Ug(a){I.call(this,a)}
r(Ug,I);var Vg;Vg=new function(a,b,c,d){this.h=a;this.fieldName=b;this.isRepeated=d;this.i=$c}(406606992,{so:0},Ug,0);function Wg(){Ug.apply(this,arguments)}
r(Wg,Ug);function Xg(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Yg=x.window,Zg,$g,ah=(null==Yg?void 0:null==(Zg=Yg.yt)?void 0:Zg.config_)||(null==Yg?void 0:null==($g=Yg.ytcfg)?void 0:$g.data_)||{},bh,ch=(null==Yg?void 0:null==(bh=Yg.ytcfg)?void 0:bh.obfuscatedData_)||[];function dh(){Tg.apply(this,arguments)}
r(dh,Tg);var eh=new dh(ch),fh=ah.EXPERIMENT_FLAGS;if(!fh||!fh.jspb_i18n_extension){var gh=new Wg;Vg.i(eh,gh)}y("yt.config_",ah,void 0);y("yt.configJspb_",ch,void 0);function hh(){Xg(ah,arguments)}
function B(a,b){return a in ah?ah[a]:b}
function ih(a){return B(a,void 0)}
;function L(a){a=jh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function kh(a,b){a=jh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function lh(){return B("EXPERIMENTS_TOKEN","")}
function jh(a){var b=B("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:B("EXPERIMENT_FLAGS",{})[a]}
function mh(){var a=[],b=B("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=B("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var nh={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},oh={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var ph=0,qh=jc?"webkit":ic?"moz":gc?"ms":fc?"o":"";y("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++ph},void 0);var rh=[];function sh(a){rh.forEach(function(b){return b(a)})}
function th(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){uh(b)}}:a}
function uh(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=B("ERRORS",[]),e.push([a,"ERROR",b,c,d]),hh("ERRORS",e));sh(a)}
function vh(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=B("ERRORS",[]),e.push([a,"WARNING",b,c,d]),hh("ERRORS",e))}
;var wh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in wh||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function yh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
xh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=x.ytEventsEventsListeners||{};y("ytEventsEventsListeners",nb,void 0);var zh=x.ytEventsEventsCounter||{count:0};y("ytEventsEventsCounter",zh,void 0);
function Ah(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Bh=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ch(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ah(a,b,c,d);if(e)return e;e=++zh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new xh(h);if(!od(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new xh(h);
h.currentTarget=a;return c.call(a,h)};
g=th(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function Dh(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;var Eh=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Fh(a,b){"function"===typeof a&&(a=th(a));return window.setTimeout(a,b)}
function Gh(a){window.clearTimeout(a)}
;function Hh(a){this.K=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.S=Ch(window,"mousemove",Ua(this.Y,this));a=Ua(this.L,this);"function"===typeof a&&(a=th(a));this.ga=window.setInterval(a,25)}
Xa(Hh,J);Hh.prototype.Y=function(a){void 0===a.h&&yh(a);var b=a.h;void 0===a.i&&yh(a);this.i=new kd(b,a.i)};
Hh.prototype.L=function(){if(this.i){var a=Eh();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.K();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Hh.prototype.H=function(){window.clearInterval(this.ga);Dh(this.S)};function Ih(){}
function Jh(a,b){return Kh(a,0,b)}
Ih.prototype.M=function(a,b){return Kh(a,1,b)};
function Lh(a,b){Kh(a,2,b)}
function Mh(a){var b=A("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Nh(){Ih.apply(this,arguments)}
r(Nh,Ih);function Oh(){Nh.h||(Nh.h=new Nh);return Nh.h}
function Kh(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Fh(a,c||0)}
Nh.prototype.U=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):Gh(a)}};
Nh.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Nh.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};var Ph=Oh();var Qh={};
function Rh(a){var b=void 0===a?{}:a;a=void 0===b.fc?!1:b.fc;b=void 0===b.Ub?!0:b.Ub;if(null==A("_lact",window)){var c=parseInt(B("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&Sh();Ch(document,"keydown",Sh);Ch(document,"keyup",Sh);Ch(document,"mousedown",Sh);Ch(document,"mouseup",Sh);a?Ch(window,"touchmove",function(){Th("touchmove",200)},{passive:!0}):(Ch(window,"resize",function(){Th("resize",200)}),b&&Ch(window,"scroll",function(){Th("scroll",200)}));
new Hh(function(){Th("mouse",100)});
Ch(document,"touchstart",Sh,{passive:!0});Ch(document,"touchend",Sh,{passive:!0})}}
function Th(a,b){Qh[a]||(Qh[a]=!0,Ph.M(function(){Sh();Qh[a]=!1},b))}
function Sh(){null==A("_lact",window)&&Rh();var a=Date.now();y("_lact",a,window);-1==A("_fact",window)&&y("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function Uh(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function Vh(){var a=Wh;A("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function Xh(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;var Yh=/^[\w.]*$/,Zh={q:!0,search_query:!0};function $h(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ai(f[0]||""),h=ai(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(t){var k=t,m=f[0],n=String($h);k.args=[{key:m,value:f[1],query:a,method:bi==n?"unchanged":n}];Zh.hasOwnProperty(m)||vh(k)}}return c}
var bi=String($h);function ci(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function di(a){"?"==a.charAt(0)&&(a=a.substr(1));return $h(a,"&")}
function ei(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),di(1<a.length?a[1]:a[0])):{}}
function fi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=di(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return bc(a,e)+d}
function gi(a){if(!b)var b=window.location.href;var c=a.match(Wb)[1]||null,d=Yb(a);c&&d?(a=a.match(Wb),b=b.match(Wb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Yb(b)==d&&(Number(b.match(Wb)[4]||null)||null)==(Number(a.match(Wb)[4]||null)||null):!0;return a}
function ai(a){return a&&a.match(Yh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function hi(a){var b=ii;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=zd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(hb){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?dd:g;try{var h=g.history.length}catch(hb){h=0}e.u_his=h;var k;e.u_h=null==(k=dd.screen)?void 0:k.height;var m;e.u_w=null==(m=dd.screen)?void 0:m.width;var n;e.u_ah=null==(n=dd.screen)?void 0:n.availHeight;var t;e.u_aw=
null==(t=dd.screen)?void 0:t.availWidth;var z;e.u_cd=null==(z=dd.screen)?void 0:z.colorDepth}catch(hb){}h=b.h;try{var v=h.screenX;var C=h.screenY}catch(hb){}try{var D=h.outerWidth;var F=h.outerHeight}catch(hb){}try{var P=h.innerWidth;var U=h.innerHeight}catch(hb){}try{var W=h.screenLeft;var Ra=h.screenTop}catch(hb){}try{P=h.innerWidth,U=h.innerHeight}catch(hb){}try{var Y=h.screen.availWidth;var va=h.screen.availTop}catch(hb){}v=[W,Ra,v,C,Y,va,D,F,P,U];try{var Q=(b.h.top||window).document,ra="CSS1Compat"==
Q.compatMode?Q.documentElement:Q.body;var Za=(new ld(ra.clientWidth,ra.clientHeight)).round()}catch(hb){Za=new ld(-12245933,-12245933)}Q=Za;Za={};ra=new Ae;x.SVGElement&&x.document.createElementNS&&ra.set(0);C=td();C["allow-top-navigation-by-user-activation"]&&ra.set(1);C["allow-popups-to-escape-sandbox"]&&ra.set(2);x.crypto&&x.crypto.subtle&&ra.set(3);x.TextDecoder&&x.TextEncoder&&ra.set(4);ra=Be(ra);Za.bc=ra;Za.bih=Q.height;Za.biw=Q.width;Za.brdim=v.join();b=b.i;Q="ma";Ce.ma&&Ce.hasOwnProperty(Q)?
Q=Ce.ma:(ra=new Ce,Ce.ma=ra,Ce.hasOwnProperty(Q),Q=ra);b=(Za.vis=Q.C(Ad.flag,Ad.defaultValue)&&b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Za.wgl=!!dd.WebGLRenderingContext,Za);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ii=new function(){var a=window.document;this.h=window;this.i=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ci(hi(a))},void 0);Date.now();var ji="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function ki(){if(!ji)return null;var a=ji();return"open"in a?a:null}
function li(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var mi={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ni="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" "))),oi=!1;
function pi(a,b){b=void 0===b?{}:b;var c=gi(a),d=L("web_ajax_ignore_global_headers_if_set"),e;for(e in mi){var f=B(mi[e]);!f||!c&&Yb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Yb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Yb(a))b["X-YouTube-Ad-Signals"]=ci(hi(void 0));return b}
function qi(a){var b=window.location.search,c=Yb(a);L("debug_handle_relative_url_for_query_forward_killswitch")||c||!gi(a)||(c=document.location.hostname);var d=Xb(a.match(Wb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=di(b),f={};db(ni,function(g){e[g]&&(f[g]=e[g])});
return fi(a,f||{},!1)}
function ri(a,b){var c=b.format||"JSON";a=si(a,b);var d=ti(a,b),e=!1,f=ui(a,function(k){if(!e){e=!0;h&&Gh(h);var m=li(k),n=null,t=400<=k.status&&500>k.status,z=500<=k.status&&600>k.status;if(m||t||z)n=vi(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};t=b.context||x;m?b.onSuccess&&b.onSuccess.call(t,k,n):b.onError&&b.onError.call(t,k,n);b.onFinish&&b.onFinish.call(t,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Fh(function(){e||(e=!0,f.abort(),Gh(h),g.call(b.context||x,f))},b.timeout)}return f}
function si(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=B("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=fi(a,b||{},!0);return a}
function ti(a,b){var c=B("XSRF_FIELD_NAME",void 0),d=B("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=ih("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Yb(a)&&!b.withCredentials&&Yb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=di(e),vb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):ac(e));f=e||f&&!ob(f);!oi&&f&&"POST"!=
b.method&&(oi=!0,uh(Error("AJAX request with postData should use POST")));return e}
function vi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,vh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?wi(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=xi(g)})}d&&yi(e);
return e}
function yi(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Ab("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=xb();d=e?e.createHTML(d):d;a[c]=new Pb(d)}else yi(a[b])}}
function wi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function xi(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ui(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&th(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ki();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;L("debug_forward_web_query_parameters")&&(a=qi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=pi(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var zi=x.ytPubsubPubsubInstance||new K,Ai=x.ytPubsubPubsubSubscribedKeys||{},Bi=x.ytPubsubPubsubTopicToKeys||{},Ci=x.ytPubsubPubsubIsSynchronous||{};function Di(a,b){var c=Ei();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Ai[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Ci[a]?f():Fh(f,0)}catch(g){uh(g)}},void 0);
Ai[d]=!0;Bi[a]||(Bi[a]=[]);Bi[a].push(d);return d}return 0}
function Fi(a){var b=Ei();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete Ai[c]}))}
function Gi(a,b){var c=Ei();c&&c.publish.apply(c,arguments)}
function Hi(a){var b=Ei();if(b)if(b.clear(a),a)Ii(a);else for(var c in Bi)Ii(c)}
function Ei(){return x.ytPubsubPubsubInstance}
function Ii(a){Bi[a]&&(a=Bi[a],db(a,function(b){Ai[b]&&delete Ai[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.wa;K.prototype.publish=K.prototype.ka;K.prototype.clear=K.prototype.clear;y("ytPubsubPubsubInstance",zi,void 0);y("ytPubsubPubsubTopicToKeys",Bi,void 0);y("ytPubsubPubsubIsSynchronous",Ci,void 0);y("ytPubsubPubsubSubscribedKeys",Ai,void 0);var Ji=window,M=Ji.ytcsi&&Ji.ytcsi.now?Ji.ytcsi.now:Ji.performance&&Ji.performance.timing&&Ji.performance.now&&Ji.performance.timing.navigationStart?function(){return Ji.performance.timing.navigationStart+Ji.performance.now()}:function(){return(new Date).getTime()};var Ki=kh("initial_gel_batch_timeout",2E3),Li=Math.pow(2,16)-1,Mi=void 0;function Ni(){this.j=this.h=this.i=0}
var Oi=new Ni,Pi=new Ni,Qi=!0,Ri=x.ytLoggingTransportGELQueue_||new Map;y("ytLoggingTransportGELQueue_",Ri,void 0);var Si=x.ytLoggingTransportGELProtoQueue_||new Map;y("ytLoggingTransportGELProtoQueue_",Si,void 0);var Ti=x.ytLoggingTransportTokensToCttTargetIds_||{};y("ytLoggingTransportTokensToCttTargetIds_",Ti,void 0);var Ui=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};y("ytLoggingTransportTokensToJspbCttTargetIds_",Ui,void 0);
function Vi(a,b){if("log_event"===a.endpoint){var c=Wi(a),d=Ri.get(c)||[];Ri.set(c,d);d.push(a.payload);Xi(b,d,c)}}
function Yi(a,b){if("log_event"===a.endpoint){var c=Wi(a,!0),d=Si.get(c)||[];Si.set(c,d);d.push(a.payload);Xi(b,d,c,!0)}}
function Xi(a,b,c,d){d=void 0===d?!1:d;a&&(Mi=new a);a=kh("tvhtml5_logging_max_batch")||kh("web_logging_max_batch")||100;var e=M(),f=d?Pi.j:Oi.j;b.length>=a?Zi({writeThenSend:!0},L("flush_only_full_queue")?c:void 0,d):10<=e-f&&($i(d),d?Pi.j=e:Oi.j=e)}
function aj(a,b){if("log_event"===a.endpoint){var c=Wi(a),d=new Map;d.set(c,[a.payload]);b&&(Mi=new b);return new xf(function(e){Mi&&Mi.isReady()?bj(d,e,{bypassNetworkless:!0},!0):e()})}}
function cj(a,b){if("log_event"===a.endpoint){var c=Wi(a,!0),d=new Map;d.set(c,[a.payload]);b&&(Mi=new b);return new xf(function(e){Mi&&Mi.isReady()?dj(d,e,{bypassNetworkless:!0},!0):e()})}}
function Wi(a,b){var c="";if(a.xa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Pg;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Kc(d,2,Qg,c.playlistId);Ui[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Ti[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Zi(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new xf(function(d){c?(Gh(Pi.i),Gh(Pi.h),Pi.h=0):(Gh(Oi.i),Gh(Oi.h),Oi.h=0);if(Mi&&Mi.isReady())if(void 0!==b)if(c){var e=new Map,f=Si.get(b)||[];e.set(b,f);dj(e,d,a);Si.delete(b)}else e=new Map,f=Ri.get(b)||[],e.set(b,f),bj(e,d,a),Ri.delete(b);else c?(dj(Si,d,a),Si.clear()):(bj(Ri,d,a),Ri.clear());else $i(c),d()})}
function $i(a){a=void 0===a?!1:a;if(L("web_gel_timeout_cap")&&(!a&&!Oi.h||a&&!Pi.h)){var b=Fh(function(){Zi({writeThenSend:!0},void 0,a)},6E4);
a?Pi.h=b:Oi.h=b}Gh(a?Pi.i:Oi.i);b=B("LOGGING_BATCH_TIMEOUT",kh("web_gel_debounce_ms",1E4));L("shorten_initial_gel_batch_timeout")&&Qi&&(b=Ki);b=Fh(function(){Zi({writeThenSend:!0},void 0,a)},b);
a?Pi.i=b:Oi.i=b}
function bj(a,b,c,d){var e=Mi;c=void 0===c?{}:c;var f=Math.round(M()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var m=k=k.next().value;k=tb({context:ej(e.config_||fj())});k.events=m;(m=Ti[h])&&gj(k,h,m);delete Ti[h];h="visitorOnlyApprovedKey"===h;hj(k,f,h);ij(c);jj(e,"log_event",k,kj(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
Qi=!1}}
function dj(a,b,c,d){var e=Mi;c=void 0===c?{}:c;var f=Math.round(M()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var m=k=k.next().value;k=new Rg;var n=lj(e.config_||fj());H(k,1,n);for(n=0;n<m.length;n++)Qc(k,3,Ng,m[n]);(m=Ui[h])&&mj(k,h,m);delete Ui[h];h="visitorOnlyApprovedKey"===h;nj(k,f,h);ij(c);a:{Ec=!0;try{var t=JSON.stringify(k.toJSON(),Yc);break a}finally{Ec=!1}t=void 0}k=t;h=kj(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;jj(e,"log_event","",h);Qi=!1}}
function ij(a){L("always_send_and_write")&&(a.writeThenSend=!1)}
function kj(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Bb:a,xa:b,po:!!e,headers:{},postBodyFormat:"",postBody:""}}
function hj(a,b,c){a.requestTimeMs=String(b);L("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=B("EVENT_ID",void 0))&&(c=oj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function nj(a,b,c){G(a,2,b);if(!c&&(b=B("EVENT_ID",void 0))){c=oj();var d=new Og;G(d,1,b);G(d,2,c);H(a,5,d)}}
function oj(){var a=B("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*Li/2));a++;a>Li&&(a=1);hh("BATCH_CLIENT_COUNTER",a);return a}
function gj(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function mj(a,b,c){if(Ic(c,1===Lc(c,Qg)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,4,c);a=Mc(a,rg,1)||new rg;c=Mc(a,pg,3)||new pg;var e=new og;e.setToken(b);G(e,1,d);Qc(c,12,og,e);H(a,3,c)}
;var pj=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",pj,void 0);
function qj(a,b,c,d){d=void 0===d?{}:d;if(L("lr_drop_other_and_business_payloads")){if(oh[a]||nh[a])return}else if(L("lr_drop_other_payloads")&&oh[a])return;var e={},f=Math.round(d.timestamp||M());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Uh();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};L("log_sequence_info_on_gel_web")&&d.W&&(a=e.context,b=d.W,b={index:rj(b),groupKey:b},a.sequence=b,d.ub&&delete pj[d.W]);(d.nc?aj:Vi)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
xa:d.xa},c)}
function rj(a){pj[a]=a in pj?pj[a]+1:0;return pj[a]}
;function sj(a){var b=this;this.h=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.h=c})}
function tj(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function uj(){var a=tj();a=Object.keys(ze).indexOf(a);return-1===a?null:a}
;function vj(a,b,c,d,e){Jd.set(""+a,b,{Qa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function wj(a){return Jd.get(""+a,void 0)}
function xj(){if(!Jd.isEnabled())return!1;if(!Jd.isEmpty())return!0;Jd.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==Jd.get("TESTCOOKIESENABLED"))return!1;Jd.remove("TESTCOOKIESENABLED");return!0}
;var yj=A("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",yj,void 0);function zj(){this.h=B("ALT_PREF_COOKIE_NAME","PREF");this.i=B("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=wj(this.h);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(yj[d]=c.toString())}}}
zj.prototype.get=function(a,b){Aj(a);Bj(a);a=void 0!==yj[a]?yj[a].toString():null;return null!=a?a:b?b:""};
zj.prototype.set=function(a,b){Aj(a);Bj(a);if(null==b)throw Error("ExpectedNotNull");yj[a]=b.toString()};
function Cj(a){return!!((Dj("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
zj.prototype.remove=function(a){Aj(a);Bj(a);delete yj[a]};
zj.prototype.clear=function(){for(var a in yj)delete yj[a]};
function Bj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Aj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Dj(a){a=void 0!==yj[a]?yj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ka(zj);var Ej={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Fj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Gj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Hj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ij(){var a=x.navigator;return a?a.connection:void 0}
function Jj(){var a=Ij();if(a){var b=Ej[a.type||"unknown"]||"CONN_UNKNOWN";a=Ej[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Kj(){var a=Ij();if(null!=a&&a.effectiveType)return Hj.hasOwnProperty(a.effectiveType)?Hj[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Lj(){return"INNERTUBE_API_KEY"in ah&&"INNERTUBE_API_VERSION"in ah}
function fj(){return{innertubeApiKey:B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:B("INNERTUBE_API_VERSION",void 0),cb:B("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),eb:B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wb:B("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),yb:B("INNERTUBE_CONTEXT_HL",void 0),xb:B("INNERTUBE_CONTEXT_GL",void 0),Xb:B("INNERTUBE_HOST_OVERRIDE",void 0)||"",Zb:!!B("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Yb:!!B("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:B("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function ej(a){var b={client:{hl:a.yb,gl:a.xb,clientName:a.eb,clientVersion:a.innertubeContextClientVersion,configInfo:a.cb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=lh();""!==c&&(b.client.experimentsToken=c);c=mh();0<c.length&&(b.request={internalExperimentFlags:c});Mj(a,void 0,b);Nj(a,void 0,b);Oj(void 0,b);Pj(a,void 0,b);Qj(void 0,b);B("DELEGATED_SESSION_ID")&&!L("pageid_as_header_web")&&(b.user=
{onBehalfOfUser:B("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=q(Object.entries(di(B("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=q(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function lj(a){var b=new rg,c=new kg;G(c,1,a.yb);G(c,2,a.xb);G(c,16,a.Wb);G(c,17,a.innertubeContextClientVersion);if(a.cb){var d=a.cb,e=new hg;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,62,e)}(d=x.devicePixelRatio)&&1!=d&&G(c,65,d);d=lh();""!==d&&G(c,54,d);d=mh();if(0<d.length){e=new mg;for(var f=0;f<d.length;f++){var g=new fg;G(g,1,d[f].key);g.setValue(d[f].value);Qc(e,15,fg,g)}H(b,
5,e)}Mj(a,c);Nj(a,c);Oj(c);Pj(a,c);Qj(c);B("DELEGATED_SESSION_ID")&&!L("pageid_as_header_web")&&(a=new pg,G(a,3,B("DELEGATED_SESSION_ID")));a=q(Object.entries(di(B("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=q(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,1,c);return b}
function Mj(a,b,c){a=a.eb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Mc(b,ig,96)||new ig;var d=uj();null!==d&&G(c,3,d);H(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=tj())}
function Nj(a,b,c){a=a.eb;if(("WEB_REMIX"===a||76===a)&&!L("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=Mc(b,jg,70))?d:new jg;d=uj();null!==d&&G(c,10,d);H(b,70,c)}else if(c){var e;c.client.Ab=null!=(e=c.client.Ab)?e:{};c.client.Ab.webDisplayMode=tj()}}
function Oj(a,b){var c;if(L("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Pj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Mc(b,hg,62))?d:new hg;G(c,6,a.appInstallData);H(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Qj(a,b){var c=Jj();c&&(a?G(a,61,Fj[c]):b&&(b.client.connectionType=c));L("web_log_effective_connection_type")&&(c=Kj())&&(a?G(a,94,Gj[c]):b&&(b.client.effectiveConnectionType=c))}
function Rj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||B("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.no||B("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().mo:b=Nd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=B("SESSION_INDEX",0),L("pageid_as_header_web")&&(d["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return d}
;function Sj(a){a=Object.assign({},a);delete a.Authorization;var b=Nd();if(b){var c=new Ue;c.update(B("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=zc(c.digest(),3)}return a}
;function Tj(a){var b=new Zf;(b=b.isAvailable()?a?new eg(b,a):b:null)||(a=new $f(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Vf(a):null;this.i=document.domain||window.location.hostname}
Tj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(qf(b))}catch(f){return}else e=escape(b);vj(a,e,c,this.i)};
Tj.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=wj(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Tj.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Jd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Uj;function Vj(){Uj||(Uj=new Tj("yt.innertube"));return Uj}
function Wj(a,b,c,d){if(d)return null;d=Vj().get("nextId",!0)||1;var e=Vj().get("requests",!0)||{};e[d]={method:a,request:b,authState:Sj(c),requestTime:Math.round(M())};Vj().set("nextId",d+1,86400,!0);Vj().set("requests",e,86400,!0);return d}
function Xj(a){var b=Vj().get("requests",!0)||{};delete b[a];Vj().set("requests",b,86400,!0)}
function Yj(a){var b=Vj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(M())-d.requestTime)){var e=d.authState,f=Sj(Rj(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(M())),jj(a,d.method,e,{}));delete b[c]}}Vj().set("requests",b,86400,!0)}}
;var Zj=uc||vc;function ak(a){var b=Mb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var bk=function(){var a;return function(){a||(a=new Tj("ytidb"));return a}}();
function ck(){var a;return null==(a=bk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var dk=[],ek,fk=!1;function gk(){var a={};for(ek=new hk(void 0===a.handleError?ik:a.handleError,void 0===a.logEvent?jk:a.logEvent);0<dk.length;)switch(a=dk.shift(),a.type){case "ERROR":ek.handleError(a.payload);break;case "EVENT":ek.logEvent(a.eventType,a.payload)}}
function kk(a){fk||(ek?ek.handleError(a):(dk.push({type:"ERROR",payload:a}),10<dk.length&&dk.shift()))}
function lk(a,b){fk||(ek?ek.logEvent(a,b):(dk.push({type:"EVENT",eventType:a,payload:b}),10<dk.length&&dk.shift()))}
;function mk(a){var b=Ga.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
r(mk,Error);function nk(){try{return ok(),!0}catch(a){return!1}}
function ok(){if(void 0!==B("DATASYNC_ID",void 0))return B("DATASYNC_ID",void 0);throw new mk("Datasync ID not set","unknown");}
;function pk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function qk(a){return a.substr(0,a.indexOf(":"))||a}
;var rk={},sk=(rk.AUTH_INVALID="No user identifier specified.",rk.EXPLICIT_ABORT="Transaction was explicitly aborted.",rk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",rk.MISSING_INDEX="Index not created.",rk.MISSING_OBJECT_STORES="Object stores not created.",rk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",rk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",rk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
rk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",rk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",rk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",rk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",rk),tk={},uk=(tk.AUTH_INVALID="ERROR",tk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",tk.EXPLICIT_ABORT="IGNORED",tk.IDB_NOT_SUPPORTED="ERROR",tk.MISSING_INDEX=
"WARNING",tk.MISSING_OBJECT_STORES="ERROR",tk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",tk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",tk.QUOTA_EXCEEDED="WARNING",tk.QUOTA_MAYBE_EXCEEDED="WARNING",tk.UNKNOWN_ABORT="WARNING",tk.INCOMPATIBLE_DB_VERSION="WARNING",tk),vk={},wk=(vk.AUTH_INVALID=!1,vk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,vk.EXPLICIT_ABORT=!1,vk.IDB_NOT_SUPPORTED=!1,vk.MISSING_INDEX=!1,vk.MISSING_OBJECT_STORES=!1,vk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,vk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,vk.QUOTA_EXCEEDED=!1,vk.QUOTA_MAYBE_EXCEEDED=!0,vk.UNKNOWN_ABORT=!0,vk.INCOMPATIBLE_DB_VERSION=!1,vk);function xk(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?sk[a]:c;d=void 0===d?uk[a]:d;e=void 0===e?wk[a]:e;mk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,xk.prototype)}
r(xk,mk);function yk(a,b){xk.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},sk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,yk.prototype)}
r(yk,xk);function zk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,zk.prototype)}
r(zk,Error);var Ak=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Bk(a,b,c,d){b=qk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof xk)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new xk("QUOTA_EXCEEDED",a);if(wc&&"UnknownError"===e.name)return new xk("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof zk)return new xk("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ak.some(function(f){return e.message.includes(f)}))return new xk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new xk("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cb:e.name})];e.level="WARNING";return e}
function Ck(a,b,c){var d=ck();return new xk("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Dk(a){if(!a)throw Error();throw a;}
function Ek(a){return a}
function Fk(a){this.h=a}
function Gk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=q(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=q(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Gk.all=function(a){return new Gk(new Fk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={oa:0};f.oa<a.length;f={oa:f.oa},++f.oa)Hk(Gk.resolve(a[f.oa]).then(function(g){return function(h){d[g.oa]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
Gk.resolve=function(a){return new Gk(new Fk(function(b,c){a instanceof Gk?a.then(b,c):b(a)}))};
Gk.reject=function(a){return new Gk(new Fk(function(b,c){c(a)}))};
Gk.prototype.then=function(a,b){var c=this,d=null!=a?a:Ek,e=null!=b?b:Dk;return new Gk(new Fk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Ik(c,c,d,f,g)}),c.onRejected.push(function(){Jk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ik(c,c,d,f,g):"REJECTED"===c.state.status&&Jk(c,c,e,f,g)}))};
function Hk(a,b){a.then(void 0,b)}
function Ik(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Gk?Kk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Jk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Gk?Kk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Kk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Gk?Kk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Lk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Mk(a){return new Promise(function(b,c){Lk(a,b,c)})}
function Nk(a){return new Gk(new Fk(function(b,c){Lk(a,b,c)}))}
;function Ok(a,b){return new Gk(new Fk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Pk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(M());this.i=!1}
l=Pk.prototype;l.add=function(a,b,c){return Qk(this,[a],{mode:"readwrite",O:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Qk(this,[a],{mode:"readwrite",O:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Qk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).count(b)})};
function Rk(a,b,c){a=a.h.createObjectStore(b,c);return new Sk(a)}
l.delete=function(a,b){return Qk(this,[a],{mode:"readwrite",O:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Qk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).get(b)})};
function Tk(a,b){return Qk(a,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(c){c=c.objectStore("LogsRequestsStore");return Nk(c.h.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Qk(a,b,c,d){var e,f,g,h,k,m,n,t,z,v,C,D;return w(function(F){switch(F.h){case 1:var P={mode:"readonly",O:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?P.mode=c:Object.assign(P,c);e=P;a.transactionCount++;f=e.O?3:1;g=0;case 2:if(h){F.s(3);break}g++;k=Math.round(M());ua(F,4);m=a.h.transaction(b,e.mode);P=new Uk(m);P=Vk(P,d);return u(F,P,6);case 6:return n=F.i,t=Math.round(M()),Wk(a,k,t,g,void 0,b.join(),e),F.return(n);case 4:z=xa(F);v=Math.round(M());C=Bk(z,a.h.name,b.join(),a.h.version);
if((D=C instanceof xk&&!C.h)||g>=f)Wk(a,k,v,g,C,b.join(),e),h=C;F.s(2);break;case 3:return F.return(Promise.reject(h))}})}
function Wk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof xk&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&lk("QUOTA_EXCEEDED",{dbName:qk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof xk&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),lk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Xk(a,!1,d,f,b,g.tag),kk(e)):Xk(a,!0,d,f,b,g.tag)}
function Xk(a,b,c,d,e,f){lk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function Sk(a){this.h=a}
l=Sk.prototype;l.add=function(a,b){return Nk(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return Nk(this.h.clear()).then(function(){})};
l.count=function(a){return Nk(this.h.count(a))};
function Yk(a,b){return Zk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Yk(this,a):Nk(this.h.delete(a))};
l.get=function(a){return Nk(this.h.get(a))};
l.index=function(a){try{return new $k(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new zk(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function Zk(a,b,c){a=a.h.openCursor(b.query,b.direction);return al(a).then(function(d){return Ok(d,c)})}
function Uk(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=xk;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Vk(a,b){var c=new Promise(function(d,e){try{Hk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return q(d).next().value})}
Uk.prototype.abort=function(){this.h.abort();this.i=!0;throw new xk("EXPLICIT_ABORT");};
Uk.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Sk(a),this.j.set(a,b));return b};
function $k(a){this.h=a}
l=$k.prototype;l.count=function(a){return Nk(this.h.count(a))};
l.delete=function(a){return bl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Nk(this.h.get(a))};
l.getKey=function(a){return Nk(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function bl(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return al(a).then(function(d){return Ok(d,c)})}
function cl(a,b){this.request=a;this.cursor=b}
function al(a){return Nk(a).then(function(b){return b?new cl(a,b):null})}
l=cl.prototype;l.advance=function(a){this.cursor.advance(a);return al(this.request)};
l.continue=function(a){this.cursor.continue(a);return al(this.request)};
l.delete=function(){return Nk(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Nk(this.cursor.update(a))};function dl(a,b,c){return new Promise(function(d,e){function f(){z||(z=new Pk(g.result,{closed:t}));return z}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.zc,n=c.upgrade,t=c.closed,z;g.addEventListener("upgradeneeded",function(v){try{if(null===v.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");v.dataLoss&&"none"!==v.dataLoss&&lk("IDB_DATA_CORRUPTED",{reason:v.dataLossMessage||"unknown reason",dbName:qk(a)});var C=f(),D=new Uk(g.transaction);
n&&n(C,function(F){return v.oldVersion<F&&v.newVersion>=F},D);
D.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var v=g.result;k&&v.addEventListener("versionchange",function(){k(f())});
v.addEventListener("close",function(){lk("IDB_UNEXPECTEDLY_CLOSED",{dbName:qk(a),dbVersion:v.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function el(a,b,c){c=void 0===c?{}:c;return dl(a,b,c)}
function fl(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return ua(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),u(g,Mk(c),4);
if(2!=g.h)return wa(g,0);f=xa(g);throw Bk(f,a,"",-1);})}
;function gl(a){return new Promise(function(b){Lh(function(){b()},a)})}
function hl(a,b){this.name=a;this.options=b;this.l=!0;this.m=this.o=0;this.i=500}
hl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return el(a,b,c)};
hl.prototype.delete=function(a){a=void 0===a?{}:a;return fl(this.name,a)};
function il(a,b){return new xk("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function jl(a,b){if(!b)throw Ck("openWithToken",qk(a.name));return a.open()}
hl.prototype.open=function(){function a(){var f,g,h,k,m,n,t,z,v,C;return w(function(D){switch(D.h){case 1:return g=null!=(f=Error().stack)?f:"",ua(D,2),u(D,c.j(c.name,c.options.version,e),4);case 4:h=D.i;for(var F=c.options,P=[],U=q(Object.keys(F.za)),W=U.next();!W.done;W=U.next()){W=W.value;var Ra=F.za[W],Y=void 0===Ra.ic?Number.MAX_VALUE:Ra.ic;!(h.h.version>=Ra.Xa)||h.h.version>=Y||h.h.objectStoreNames.contains(W)||P.push(W)}k=P;if(0===k.length){D.s(5);break}m=Object.keys(c.options.za);n=h.objectStoreNames();
if(c.m<kh("ytidb_reopen_db_retries",0))return c.m++,h.close(),kk(new xk("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:n})),D.return(a());if(!(c.o<kh("ytidb_remake_db_retries",1))){D.s(6);break}c.o++;if(!L("ytidb_remake_db_enable_backoff_delay")){D.s(7);break}return u(D,gl(c.i),8);case 8:c.i*=2;case 7:return u(D,c.delete(),9);case 9:return kk(new xk("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:n})),D.return(a());
case 6:throw new yk(n,m);case 5:return D.return(h);case 2:t=xa(D);if(t instanceof DOMException?"VersionError"!==t.name:"DOMError"in self&&t instanceof DOMError?"VersionError"!==t.name:!(t instanceof Object&&"message"in t)||"An attempt was made to open a database using a lower version than the existing version."!==t.message){D.s(10);break}return u(D,c.j(c.name,void 0,Object.assign({},e,{upgrade:void 0})),11);case 11:z=D.i;v=z.h.version;if(void 0!==c.options.version&&v>c.options.version+1)throw z.close(),
c.l=!1,il(c,v);return D.return(z);case 10:throw b(),t instanceof Error&&!L("ytidb_async_stack_killswitch")&&(t.stack=t.stack+"\n"+g.substring(g.indexOf("\n")+1)),Bk(t,c.name,"",null!=(C=c.options.version)?C:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw il(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,zc:b,upgrade:this.options.upgrade};return this.h=d=a()};var kl=new hl("YtIdbMeta",{za:{databases:{Xa:1}},upgrade:function(a,b){b(1)&&Rk(a,"databases",{keyPath:"actualName"})}});
function ll(a,b){var c;return w(function(d){if(1==d.h)return u(d,jl(kl,b),2);c=d.i;return d.return(Qk(c,["databases"],{O:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Nk(f.h.put(a,void 0)).then(function(){})})}))})}
function ml(a,b){var c;return w(function(d){if(1==d.h)return a?u(d,jl(kl,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function nl(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],u(e,jl(kl,b),2)):3!=e.h?(d=e.i,u(e,Qk(d,["databases"],{O:!0,mode:"readonly"},function(f){c.length=0;return Zk(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function ol(a){return nl(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function pl(a,b){return nl(function(c){return void 0!==c.userIdentifier&&!a.includes(c.userIdentifier)},b)}
;var ql,rl=new function(){}(new function(){});
function sl(){var a,b,c,d;return w(function(e){switch(e.h){case 1:a=ck();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Zj)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||hc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ua(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return u(e,ll(d,rl),4);case 4:return u(e,ml("yt-idb-test-do-not-use",rl),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function tl(){if(void 0!==ql)return ql;fk=!0;return ql=sl().then(function(a){fk=!1;var b;if(null!=(b=bk())&&b.h){var c;b={hasSucceededOnce:(null==(c=ck())?void 0:c.hasSucceededOnce)||a};var d;null==(d=bk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function ul(){return A("ytglobal.idbToken_")||void 0}
function vl(){var a=ul();return a?Promise.resolve(a):tl().then(function(b){(b=b?rl:void 0)&&y("ytglobal.idbToken_",b,void 0);return b})}
;var wl=0;function xl(a){wl||(wl=Ph.M(function(){var b,c,d,e,f;return w(function(g){switch(g.h){case 1:return u(g,vl(),2);case 2:b=g.i;if(!b)return g.return();c=!0;ua(g,3);return u(g,pl(a,b),5);case 5:d=g.i;if(!d.length){c=!1;g.s(6);break}e=d[0];return u(g,fl(e.actualName),7);case 7:return u(g,ml(e.actualName,b),6);case 6:wa(g,4);break;case 3:f=xa(g),kk(f),c=!1;case 4:Ph.U(wl),wl=0,c&&xl(a),g.h=0}})}))}
new bd;function yl(a){if(!nk())throw a=new xk("AUTH_INVALID",{dbName:a}),kk(a),a;var b=ok();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function zl(a,b,c,d){var e,f,g,h,k,m;return w(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",u(n,vl(),2);case 2:g=n.i;if(!g)throw h=Ck("openDbImpl",a,b),L("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),kk(h),h;pk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:yl(a);ua(n,3);return u(n,ll(k,g),5);case 5:return u(n,el(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return m=xa(n),ua(n,7),u(n,ml(k.actualName,g),9);case 9:wa(n,
8);break;case 7:xa(n);case 8:throw m;}})}
function Al(a,b,c){c=void 0===c?{}:c;return zl(a,b,!1,c)}
function Bl(a,b,c){c=void 0===c?{}:c;return zl(a,b,!0,c)}
function Cl(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return u(e,vl(),2);if(3!=e.h){c=e.i;if(!c)return e.return();pk(a);d=yl(a);return u(e,fl(d.actualName,b),3)}return u(e,ml(d.actualName,c),0)})}
function Dl(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?u(e,fl(d.actualName,b),2):u(e,ml(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function El(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return u(d,vl(),2);if(3!=d.h){b=d.i;if(!b)return d.return();pk("LogsDatabaseV2");return u(d,ol(b),3)}c=d.i;return u(d,Dl(c,a,b),0)})}
function Fl(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return u(d,vl(),2);if(3!=d.h){c=d.i;if(!c)return d.return();pk(a);return u(d,fl(a,b),3)}return u(d,ml(a,c),0)})}
;function Gl(a){this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.sa=function(){};
this.now=Date.now;this.ya=!1;var b;this.Kb=null!=(b=a.Kb)?b:100;var c;this.Hb=null!=(c=a.Hb)?c:1;var d;this.Fb=null!=(d=a.Fb)?d:2592E6;var e;this.Db=null!=(e=a.Db)?e:12E4;var f;this.Gb=null!=(f=a.Gb)?f:5E3;var g;this.v=null!=(g=a.v)?g:void 0;this.Ma=!!a.Ma;var h;this.La=null!=(h=a.La)?h:.1;var k;this.Sa=null!=(k=a.Sa)?k:10;a.handleError&&(this.handleError=a.handleError);a.sa&&(this.sa=a.sa);a.ya&&(this.ya=a.ya);this.C=a.C;this.V=a.V;this.J=a.J;this.I=a.I;this.ea=a.ea;this.ib=a.ib;this.hb=a.hb;this.v&&
(!this.C||this.C("networkless_logging"))&&Hl(this)}
function Hl(a){a.v&&!a.ya&&(a.h=!0,a.Ma&&Math.random()<=a.La&&a.J.Qb(a.v),Il(a),a.I.G()&&a.Ca(),a.I.ba(a.ib,a.Ca.bind(a)),a.I.ba(a.hb,a.nb.bind(a)))}
l=Gl.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J.set(d,this.v).then(function(e){d.id=e;c.I.G()&&Jl(c,d)}).catch(function(e){Jl(c,d);
Kl(c,e)})}else this.ea(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C&&this.C("nwl_skip_retry")&&(e.skipRetry=c);if(this.I.G()||this.C&&this.C("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.h)return u(k,d.J.set(e,d.v).catch(function(m){Kl(d,m)}),2);
f(g,h);k.h=0})}}this.ea(a,b,e.skipRetry)}else this.J.set(e,this.v).catch(function(g){d.ea(a,b,e.skipRetry);
Kl(d,g)})}else this.ea(a,b,this.C&&this.C("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.J.ra(d.id,c.v):e=!0;c.I.ca&&c.C&&c.C("vss_network_hint")&&c.I.ca(!0);f(g,h)};
this.ea(d.url,d.options);this.J.set(d,this.v).then(function(g){d.id=g;e&&c.J.ra(d.id,c.v)}).catch(function(g){Kl(c,g)})}else this.ea(a,b)};
l.Ca=function(){var a=this;if(!this.v)throw Ck("throttleSend");this.i||(this.i=this.V.M(function(){var b;return w(function(c){if(1==c.h)return u(c,a.J.wb("NEW",a.v),2);if(3!=c.h)return b=c.i,b?u(c,Jl(a,b),3):(a.nb(),c.return());a.i&&(a.i=0,a.Ca());c.h=0})},this.Kb))};
l.nb=function(){this.V.U(this.i);this.i=0};
function Jl(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!a.v)throw c=Ck("immediateSend"),c;if(void 0===b.id){e.s(2);break}return u(e,a.J.ac(b.id,a.v),3);case 3:(d=e.i)?b=d:a.sa(Error("The request cannot be found in the database."));case 2:if(Ll(a,b,a.Fb)){e.s(4);break}a.sa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return u(e,a.J.ra(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=Ml(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return u(e,a.J.ra(b.id,a.v),8);case 8:a.ea(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Ml(a,b){if(!a.v)throw Ck("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.h){case 1:g=Nl(f);if(!(a.C&&a.C("nwl_consider_error_code")&&g||a.C&&!a.C("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Sa)){m.s(2);break}if(!a.I.fa){m.s(3);break}return u(m,a.I.fa(),3);case 3:if(a.I.G()){m.s(2);break}c(e,f);if(!a.C||!a.C("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.s(6);break}return u(m,a.J.jb(b.id,a.v,!1),6);case 6:return m.return();case 2:if(a.C&&a.C("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Sa)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.s(8);break}return b.sendCount<a.Hb?u(m,a.J.jb(b.id,a.v),12):u(m,a.J.ra(b.id,a.v),8);case 12:a.V.M(function(){a.I.G()&&a.Ca()},a.Gb);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):u(h,a.J.ra(b.id,a.v),2);a.I.ca&&a.C&&a.C("vss_network_hint")&&a.I.ca(!0);d(e,f);h.h=0})};
return b}
function Ll(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Il(a){if(!a.v)throw Ck("retryQueuedRequests");a.J.wb("QUEUED",a.v).then(function(b){b&&!Ll(a,b,a.Db)?a.V.M(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):u(c,a.J.jb(b.id,a.v),2);Il(a);c.h=0})}):a.I.G()&&a.Ca()})}
function Kl(a,b){a.Lb&&!a.I.G()?a.Lb(b):a.handleError(b)}
function Nl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Ol(a,b){this.version=a;this.args=b}
;function Pl(a,b){this.topic=a;this.h=b}
Pl.prototype.toString=function(){return this.topic};var Ql=A("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.wa;K.prototype.publish=K.prototype.ka;K.prototype.clear=K.prototype.clear;y("ytPubsub2Pubsub2Instance",Ql,void 0);var Rl=A("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Rl,void 0);var Sl=A("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",Sl,void 0);var Tl=A("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Tl,void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Ul(a,b){var c=Vl();c&&c.publish.call(c,a.toString(),a,b)}
function Wl(a){var b=Xl,c=Vl();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Rl[d])try{if(f&&b instanceof Pl&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ja){var m=new h;h.ja=m.version}var n=h.ja}catch(F){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var t=n.construct;
var z=k.args,v=z.length;if(0<v){var C=Array(v);for(k=0;k<v;k++)C[k]=z[k];var D=C}else D=[];f=t.call(n,h,D)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){uh(F)}},Tl[b.toString()]?A("yt.scheduler.instance")?Ph.M(g):Fh(g,0):g())});
Rl[d]=!0;Sl[b.toString()]||(Sl[b.toString()]=[]);Sl[b.toString()].push(d);return d}
function Yl(){var a=Zl,b=Wl(function(c){a.apply(void 0,arguments);$l(b)});
return b}
function $l(a){var b=Vl();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete Rl[c]}))}
function Vl(){return A("ytPubsub2Pubsub2Instance")}
;function am(a,b){hl.call(this,a,b);this.options=b;pk(a)}
r(am,hl);function bm(a,b){var c;return function(){c||(c=new am(a,b));return c}}
am.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.kb?Bl:Al)(a,b,Object.assign({},c))};
am.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.kb?Fl:Cl)(this.name,a)};
function cm(a,b){return bm(a,b)}
;var dm;
function em(){if(dm)return dm();var a={};dm=cm("LogsDatabaseV2",{za:(a.LogsRequestsStore={Xa:2},a),kb:!1,upgrade:function(b,c,d){c(2)&&Rk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return dm()}
;function fm(a){return jl(em(),a)}
function gm(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:M(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},u(g,fm(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:B("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),u(g,Tk(d,e),3);f=g.i;c.Ac=M();hm(c);return g.return(f)})}
function im(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.h)return c={startTime:M(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},u(m,fm(b),2);if(3!=m.h)return d=m.i,e=B("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,M()],h=IDBKeyRange.bound(f,g),k=void 0,u(m,Qk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(n){return bl(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(t){t.getValue()&&(k=t.getValue(),"NEW"===a&&(k.status="QUEUED",
t.update(k)))})}),3);
c.Ac=M();hm(c);return m.return(k)})}
function jm(a,b){var c;return w(function(d){if(1==d.h)return u(d,fm(b),2);c=d.i;return d.return(Qk(c,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Nk(f.h.put(g,void 0)).then(function(){return g})})}))})}
function km(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.h)return u(e,fm(b),2);d=e.i;return e.return(Qk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Nk(g.h.put(h,void 0)).then(function(){return h})):Gk.resolve(void 0)})}))})}
function lm(a,b){var c;return w(function(d){if(1==d.h)return u(d,fm(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function mm(a){var b,c;return w(function(d){if(1==d.h)return u(d,fm(a),2);b=d.i;c=M()-2592E6;return u(d,Qk(b,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){return Zk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function nm(){return w(function(a){return u(a,El(),0)})}
function hm(a){L("nwl_csi_killswitch")||.01>=Math.random()&&Ul("nwl_transaction_latency_payload",a)}
;var om={},pm=cm("ServiceWorkerLogsDatabase",{za:(om.SWHealthLog={Xa:1},om),kb:!0,upgrade:function(a,b){b(1)&&Rk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function qm(a){return jl(pm(),a)}
function rm(a){var b,c;return w(function(d){if(1==d.h)return u(d,qm(a),2);b=d.i;c=M()-2592E6;return u(d,Qk(b,["SWHealthLog"],{mode:"readwrite",O:!0},function(e){return Zk(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function sm(a){var b;return w(function(c){if(1==c.h)return u(c,qm(a),2);b=c.i;return u(c,b.clear("SWHealthLog"),0)})}
;var tm={},um=0;
function vm(a){var b=void 0===b?"":b;if(a)if(b)ui(a,void 0,"POST",b,void 0);else if(B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ui(a,void 0,"GET","",void 0);else{b:{try{var c=new ab({url:a});if(c.j&&c.i||c.l){var d=Xb(a.match(Wb)[5]||null),e;if(!(e=!d||!d.endsWith("/aclk"))){var f=a.search(cc);d:{for(b=0;0<=(b=a.indexOf("ri",b))&&b<f;){var g=a.charCodeAt(b-1);if(38==g||63==g){var h=a.charCodeAt(b+2);if(!h||61==h||38==h||35==h){var k=b;break d}}b+=3}k=-1}if(0>k)var m=null;else{var n=a.indexOf("&",k);if(0>
n||n>f)n=f;k+=3;m=decodeURIComponent(a.substr(k,n-k).replace(/\+/g," "))}e="1"!==m}var t=!e;break b}}catch(v){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(v){}z=!1}t=z?!0:!1}else t=!1;t||wm(a)}}
function wm(a){var b=new Image,c=""+um++;tm[c]=b;b.onload=b.onerror=function(){delete tm[c]};
b.src=a}
;function xm(){this.h=new Map;this.i=!1}
function ym(){if(!xm.h){var a=A("yt.networkRequestMonitor.instance")||new xm;y("yt.networkRequestMonitor.instance",a,void 0);xm.h=a}return xm.h}
xm.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
xm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
xm.prototype.removeParams=function(a){return a.split("?")[0]};
xm.prototype.removeParams=xm.prototype.removeParams;xm.prototype.isEndpointCFR=xm.prototype.isEndpointCFR;xm.prototype.requestComplete=xm.prototype.requestComplete;xm.getInstance=ym;var zm;function Am(){zm||(zm=new Tj("yt.offline"));return zm}
function Bm(a){if(L("offline_error_handling")){var b=Am().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Am().set("errors",b,2592E3,!0)}}
function Cm(){if(L("offline_error_handling")){var a=Am().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new mk(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;uh(c)}Am().set("errors",{},2592E3,!0)}}}
;var Dm=kh("network_polling_interval",3E4);function N(){te.call(this);this.L=0;this.S=this.m=!1;this.l=this.bb();L("use_shared_nsm")?(we.h||(we.h=new we(Ph)),this.j=we.h):(Em(this),Fm(this))}
r(N,te);function Gm(){if(!N.h){var a=A("yt.networkStatusManager.instance")||new N;y("yt.networkStatusManager.instance",a,void 0);N.h=a}return N.h}
l=N.prototype;l.G=function(){if(L("use_shared_nsm")&&this.j){var a;return null==(a=this.j)?void 0:a.G()}return this.l};
l.ca=function(a){if(L("use_shared_nsm")&&this.j){var b;null!=(b=this.j)&&(b.j=a)}else a!==this.l&&(this.l=a)};
l.cc=function(a){!L("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.L||Hm(this))};
l.bb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Tb=function(){this.S=!0};
l.ba=function(a,b){return L("use_shared_nsm")&&this.j?this.j.ba(a,b):te.prototype.ba.call(this,a,b)};
function Fm(a){window.addEventListener("online",function(){return w(function(b){if(1==b.h)return u(b,a.fa(),2);a.S&&Cm();b.h=0})})}
function Em(a){window.addEventListener("offline",function(){return w(function(b){return u(b,a.fa(),0)})})}
function Hm(a){a.L=Jh(function(){return w(function(b){if(1==b.h)return a.l?a.bb()||!a.m?b.s(3):u(b,a.fa(),3):u(b,a.fa(),3);Hm(a);b.h=0})},Dm)}
l.fa=function(a){var b=this;if(L("use_shared_nsm")&&this.j){var c=xe(this.j,a);c.then(function(d){L("use_cfr_monitor")&&ym().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g,h;return w(function(k){switch(k.h){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,ua(k,2,3),e&&(b.A=Ph.M(function(){e.abort()},a||2E4)),u(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ya(k);L("use_cfr_monitor")&&ym().requestComplete("generate_204",h);b.u=void 0;b.A&&Ph.U(b.A);h!==b.l&&(b.l=h,b.l&&b.m?ue(b,"ytnetworkstatus-online"):b.m&&ue(b,"ytnetworkstatus-offline"));d(h);za(k);break;case 2:xa(k),h=!1,k.s(3)}})})};
N.prototype.sendNetworkCheckRequest=N.prototype.fa;N.prototype.listen=N.prototype.ba;N.prototype.enableErrorFlushing=N.prototype.Tb;N.prototype.getWindowStatus=N.prototype.bb;N.prototype.monitorNetworkStatusChange=N.prototype.cc;N.prototype.networkStatusHint=N.prototype.ca;N.prototype.isNetworkAvailable=N.prototype.G;N.getInstance=Gm;function Im(a){a=void 0===a?{}:a;te.call(this);var b=this;this.l=this.L=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";L("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.j=Gm();var c=A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.tb);a.Pa&&!L("use_shared_nsm")&&(c=A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=A("yt.networkStatusManager.instance.listen").bind(this.j))a.Ua?
(this.Ua=a.Ua,c(this.u,function(){Jm(b,"publicytnetworkstatus-online");L("use_shared_nsm")&&a.Pa&&Cm()}),c(this.m,function(){Jm(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){ue(b,"publicytnetworkstatus-online");
L("use_shared_nsm")&&a.Pa&&Cm()}),c(this.m,function(){ue(b,"publicytnetworkstatus-offline")}))}
r(Im,te);Im.prototype.G=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Im.prototype.ca=function(a){var b=A("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Im.prototype.fa=function(a){var b=this,c;return w(function(d){c=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return L("skip_network_check_if_cfr")&&ym().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ca((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.G())})):c?d.return(c(a)):d.return(!0)})};
function Jm(a,b){a.Ua?a.l?(Ph.U(a.L),a.L=Ph.M(function(){a.A!==b&&(ue(a,b),a.A=b,a.l=M())},a.Ua-(M()-a.l))):(ue(a,b),a.A=b,a.l=M()):ue(a,b)}
;var Km;function Lm(){Gl.call(this,{J:{Qb:mm,ra:lm,wb:im,ac:jm,jb:km,set:gm},I:Mm(),handleError:uh,sa:vh,ea:Nm,now:M,Lb:Bm,V:Oh(),ib:"publicytnetworkstatus-online",hb:"publicytnetworkstatus-offline",Ma:!0,La:.1,Sa:kh("potential_esf_error_limit",10),C:L,ya:!nk()});this.j=new bd;L("networkless_immediately_drop_all_requests")&&nm();Fl("LogsDatabaseV2")}
r(Lm,Gl);function Om(){var a=A("yt.networklessRequestController.instance");a||(a=new Lm,y("yt.networklessRequestController.instance",a,void 0),L("networkless_logging")&&vl().then(function(b){a.v=b;Hl(a);a.j.resolve();a.Ma&&Math.random()<=a.La&&a.v&&rm(a.v);L("networkless_immediately_drop_sw_health_store")&&Pm(a)}));
return a}
Lm.prototype.writeThenSend=function(a,b){b||(b={});nk()||(this.h=!1);Gl.prototype.writeThenSend.call(this,a,b)};
Lm.prototype.sendThenWrite=function(a,b,c){b||(b={});nk()||(this.h=!1);Gl.prototype.sendThenWrite.call(this,a,b,c)};
Lm.prototype.sendAndWrite=function(a,b){b||(b={});nk()||(this.h=!1);Gl.prototype.sendAndWrite.call(this,a,b)};
Lm.prototype.awaitInitialization=function(){return this.j.promise};
function Pm(a){var b;w(function(c){if(!a.v)throw b=Ck("clearSWHealthLogsDb"),b;return c.return(sm(a.v).catch(function(d){a.handleError(d)}))})}
function Nm(a,b,c){L("use_cfr_monitor")&&Qm(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(M());c&&0===Object.keys(b).length?vm(a):ri(a,b)}
function Mm(){Km||(Km=new Im({Pa:!0,tb:!0}));return Km}
function Qm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){ym().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){ym().requestComplete(a,!0);d(e,f)}}
;var Rm=!1,Sm=0,Tm=0,Um,Vm=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Rm,potentialEsfErrorCounter:Tm};y("ytNetworklessLoggingInitializationOptions",Vm,void 0);
function Wm(){var a;w(function(b){switch(b.h){case 1:return u(b,vl(),2);case 2:a=b.i;if(!a||!nk()&&!L("nwl_init_require_datasync_id_killswitch")){b.s(0);break}Rm=!0;Vm.isNwlInitialized=Rm;return u(b,Fl("LogsDatabaseV2"),4);case 4:if(!(.1>=Math.random())){b.s(5);break}return u(b,mm(a),6);case 6:return u(b,rm(a),5);case 5:Xm();Ym().G()&&Zm();Ym().ba("publicytnetworkstatus-online",Zm);Ym().ba("publicytnetworkstatus-offline",$m);if(!L("networkless_immediately_drop_sw_health_store")){b.s(8);break}return u(b,
an(),8);case 8:if(L("networkless_immediately_drop_all_requests"))return u(b,nm(),0);b.s(0)}})}
function bn(a,b){function c(d){var e=Ym().G();if(!cn()||!d||e&&L("vss_networkless_bypass_write"))dn(a,b);else{var f={url:a,options:b,timestamp:M(),status:"NEW",sendCount:0};gm(f,d).then(function(g){f.id=g;Ym().G()&&en(f)}).catch(function(g){en(f);
Ym().G()?uh(g):Bm(g)})}}
b=void 0===b?{}:b;L("skip_is_supported_killswitch")?vl().then(function(d){c(d)}):c(ul())}
function fn(a,b){function c(d){if(cn()&&d){var e={url:a,options:b,timestamp:M(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){L("use_cfr_monitor")&&ym().requestComplete(e.url,!0);void 0!==e.id?lm(e.id,d):f=!0;L("vss_network_hint")&&Ym().ca(!0);g(k,m)};
if(L("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){ym().requestComplete(e.url,!1);h(k,m)}}dn(e.url,e.options);
gm(e,d).then(function(k){e.id=k;f&&lm(e.id,d)}).catch(function(k){Ym().G()?uh(k):Bm(k)})}else dn(a,b)}
b=void 0===b?{}:b;L("skip_is_supported_killswitch")?vl().then(function(d){c(d)}):c(ul())}
function Zm(){var a=ul();if(!a)throw Ck("throttleSend");Sm||(Sm=Ph.M(function(){var b;return w(function(c){if(1==c.h)return u(c,im("NEW",a),2);if(3!=c.h)return b=c.i,b?u(c,en(b),3):($m(),c.return());Sm&&(Sm=0,Zm());c.h=0})},100))}
function $m(){Ph.U(Sm);Sm=0}
function en(a){var b,c,d;return w(function(e){switch(e.h){case 1:b=ul();if(!b)throw c=Ck("immediateSend"),c;if(void 0===a.id){e.s(2);break}return u(e,jm(a.id,b),3);case 3:(d=e.i)?a=d:vh(Error("The request cannot be found in the database."));case 2:if(gn(a,2592E6)){e.s(4);break}vh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return u(e,lm(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=hn(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(M());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return u(e,lm(a.id,b),8);case 8:dn(a.url,a.options,!!a.skipRetry),e.h=0}})}
function hn(a){var b=ul();if(!b)throw Ck("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.h){case 1:L("use_cfr_monitor")&&ym().requestComplete(a.url,!1);g=Nl(f);if(!(L("nwl_consider_error_code")&&g||!L("nwl_consider_error_code")&&jn()<=kh("potential_esf_error_limit",10))){m.s(2);break}if(L("skip_checking_network_on_cfr_failure")&&(!L("skip_checking_network_on_cfr_failure")||ym().isEndpointCFR(a.url))){m.s(3);break}return u(m,Ym().fa(),3);case 3:if(Ym().G()){m.s(2);break}c(e,f);if(!L("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.s(6);break}return u(m,km(a.id,b,!1),6);case 6:return m.return();case 2:if(L("nwl_consider_error_code")&&!g&&jn()>kh("potential_esf_error_limit",10))return m.return();A("ytNetworklessLoggingInitializationOptions")&&Vm.potentialEsfErrorCounter++;Tm++;if(void 0===(null==(k=a)?void 0:k.id)){m.s(8);break}return 1>a.sendCount?u(m,km(a.id,b),12):u(m,lm(a.id,b),8);case 12:Ph.M(function(){Ym().G()&&Zm()},5E3);
case 8:c(e,f),m.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return L("use_cfr_monitor")&&ym().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.s(2):u(h,lm(a.id,b),2);L("vss_network_hint")&&Ym().ca(!0);d(e,f);h.h=0})};
return a}
function gn(a,b){a=a.timestamp;return M()-a>=b?!1:!0}
function Xm(){var a=ul();if(!a)throw Ck("retryQueuedRequests");im("QUEUED",a).then(function(b){b&&!gn(b,12E4)?Ph.M(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):u(c,km(b.id,a),2);Xm();c.h=0})}):Ym().G()&&Zm()})}
function an(){var a,b;return w(function(c){a=ul();if(!a)throw b=Ck("clearSWHealthLogsDb"),b;return c.return(sm(a).catch(function(d){uh(d)}))})}
function Ym(){if(L("use_new_nwl"))return Mm();Um||(Um=new Im({Pa:!0,tb:!0}));return Um}
function dn(a,b,c){c&&0===Object.keys(b).length?vm(a):ri(a,b)}
function cn(){return A("ytNetworklessLoggingInitializationOptions")?Vm.isNwlInitialized:Rm}
function jn(){return A("ytNetworklessLoggingInitializationOptions")?Vm.potentialEsfErrorCounter:Tm}
;function kn(a){var b=this;this.config_=null;a?this.config_=a:Lj()&&(this.config_=fj());Jh(function(){Yj(b)},5E3)}
kn.prototype.isReady=function(){!this.config_&&Lj()&&(this.config_=fj());return!!this.config_};
function jj(a,b,c,d){function e(C){C=void 0===C?!1:C;var D;if(d.retry&&"www.youtube-nocookie.com"!=h&&(C||L("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(D=Wj(b,c,m,k)),D)){var F=g.onSuccess,P=g.onFetchSuccess;g.onSuccess=function(U,W){Xj(D);F(U,W)};
c.onFetchSuccess=function(U,W){Xj(D);P(U,W)}}try{C&&d.retry&&!d.Bb.bypassNetworkless?(g.method="POST",d.Bb.writeThenSend?L("use_new_nwl")?Om().writeThenSend(v,g):bn(v,g):L("use_new_nwl")?Om().sendAndWrite(v,g):fn(v,g)):(g.method="POST",g.postParams||(g.postParams={}),ri(v,g))}catch(U){if("InvalidAccessError"==U.name)D&&(Xj(D),D=0),vh(Error("An extension is blocking network request."));
else throw U;}D&&Jh(function(){Yj(a)},5E3)}
!B("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&vh(new mk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new mk("innertube xhrclient not ready",b,c,d);uh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(C,D){if(d.onSuccess)d.onSuccess(D)},
onFetchSuccess:function(C){if(d.onSuccess)d.onSuccess(C)},
onError:function(C,D){if(d.onError)d.onError(D)},
onFetchError:function(C){if(d.onError)d.onError(C)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Xb)&&(h=f);var k=a.config_.Zb||!1,m=Rj(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,t={alt:"json"},z=a.config_.Yb&&f;z=z&&f.startsWith("Bearer");z||(t.key=a.config_.innertubeApiKey);var v=fi(""+h+n,t||{},!0);L("use_new_nwl")&&Om().h||!L("use_new_nwl")&&
cn()?tl().then(function(C){e(C)}):e(!1)}
;function jk(a,b,c){c=void 0===c?{}:c;var d=kn;B("ytLoggingEventsDefaultDisabled",!1)&&kn==kn&&(d=null);qj(a,b,d,c)}
;var ln=[{gb:function(a){return"Cannot read property '"+a.key+"'"},
Ra:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{gb:function(a){return"Cannot call '"+a.key+"'"},
Ra:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{gb:function(a){return a.key+" is not defined"},
Ra:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var nn={ia:[],ha:[{la:mn,weight:500}]};function mn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function on(){this.ha=[];this.ia=[]}
var pn;function qn(){if(!pn){var a=pn=new on;a.ia.length=0;a.ha.length=0;nn.ia&&a.ia.push.apply(a.ia,nn.ia);nn.ha&&a.ha.push.apply(a.ha,nn.ha)}return pn}
;var rn=new K;function sn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=tn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=tn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=tn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function tn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function un(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=vn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=sn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?vn(e+".ve",f,g,h):0;d+=g;d+=vn(e,a[e],b,c);if(500<d)break}}else c[b]=wn(a),d+=c[b].length;else c[b]=wn(a),d+=c[b].length;return d}
function vn(a,b,c,d){c+="."+a;a=wn(b);d[c]=a;return c.length+a.length}
function wn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var xn=new Set,yn=0,zn=0,An=0,Bn=[],Cn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ik(a){Dn(a)}
function En(a){Dn(a,"WARNING")}
function Dn(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||B("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),L("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=yn))){d=Bn;var g=Sd(a);e=g.message||"Unknown Error";f=g.name||"UnknownError";var h=g.stack||a.i||"Not available";if(h.startsWith(f+": "+e)){var k=h.split("\n");k.shift();h=k.join("\n")}k=g.lineNumber||"Not available";g=g.fileName||"Not available";var m=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var n=0;n<a.args.length&&!(m=un(a.args[n],"params."+n,c,m),500<=m);n++);else if(a.hasOwnProperty("params")&&
a.params){var t=a.params;if("object"===typeof a.params)for(n in t){if(t[n]){var z="params."+n,v=wn(t[n]);c[z]=v;m+=z.length+v.length;if(500<m)break}}else c.params=wn(t)}if(d.length)for(n=0;n<d.length&&!(m=un(d[n],"params.context."+n,c,m),500<=m);n++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);n={message:e,name:f,lineNumber:k,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(n.lineNumber=n.lineNumber+":"+c);if("IGNORED"===a.level)a=
0;else a:{a=qn();c=q(a.ia);for(d=c.next();!d.done;d=c.next())if(d=d.value,n.message&&n.message.match(d.wo)){a=d.weight;break a}a=q(a.ha);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.la(n)){a=c.weight;break a}a=1}n.sampleWeight=a;a=q(ln);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ra[n.name])for(e=q(c.Ra[n.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=n.message.match(f.regexp)){n.params["params.error.original"]=d[0];e=f.groups;f={};for(k=0;k<e.length;k++)f[e[k]]=d[k+1],n.params["params.error."+
e[k]]=d[k+1];n.message=c.gb(f);break}n.params||(n.params={});a=qn();n.params["params.errorServiceSignature"]="msg="+a.ia.length+"&cb="+a.ha.length;n.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(n.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Ab("sample").constructor!==yb&&(n.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(n);if(0!==n.sampleWeight&&!xn.has(n.message)){"ERROR"===
b?(rn.ka("handleError",n),L("record_app_crashed_web")&&0===An&&1===n.sampleWeight&&(An++,a={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},L("report_client_error_with_app_crash_ks")||(a.systemHealth={crashData:{clientError:{logMessage:{message:n.message}}}}),jk("appCrashed",a)),zn++):"WARNING"===b&&rn.ka("handleWarning",n);if(L("kevlar_gel_error_routing")){a=b;b:{c=q(Cn);for(d=c.next();!d.done;d=c.next())if(ak(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:n.stack};n.fileName&&
(d.filename=n.fileName);c=n.lineNumber&&n.lineNumber.split?n.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:n.message,errorClassName:n.name,sampleWeight:n.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};
e={pageUrl:window.location.href,kvPairs:[]};B("FEXP_EXPERIMENTS")&&(e.experimentIds=B("FEXP_EXPERIMENTS"));f=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);k=ah.EXPERIMENT_FLAGS;if((!k||!k.web_disable_gel_stp_ecatcher_killswitch)&&f)for(g=q(Object.keys(f)),k=g.next();!k.done;k=g.next())k=k.value,e.kvPairs.push({key:k,value:String(f[k])});if(f=n.params)for(g=q(Object.keys(f)),k=g.next();!k.done;k=g.next())k=k.value,e.kvPairs.push({key:"client."+k,value:String(f[k])});f=ih("SERVER_NAME");k=ih("SERVER_VERSION");
f&&k&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:k}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(jk("clientError",c),("ERROR"===a||L("errors_flush_gel_always_killswitch"))&&Zi())}if(!L("suppress_error_204_logging")){a=n.params||{};b={urlParams:{a:"logerror",t:"jserror",type:n.name,msg:n.message.substr(0,250),line:n.lineNumber,level:b,"client.name":a.name},postParams:{url:B("PAGE_NAME",window.location.href),file:n.fileName},method:"POST"};a.version&&
(b["client.version"]=a.version);if(b.postParams){n.stack&&(b.postParams.stack=n.stack);c=q(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=q(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=B("SERVER_NAME",void 0);c=B("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}ri(B("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{xn.add(n.message)}catch(C){}yn++}}}
function Fn(a){var b=Ga.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,fa(b))}
;function Gn(){this.register=new Map}
function Hn(a){a=q(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.zo("ABORTED")}
Gn.prototype.clear=function(){Hn(this);this.register.clear()};
var In=new Gn;var Jn=Date.now().toString();
function Kn(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Jn)for(a=1,b=0;b<Jn.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Jn.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Ln,Mn=x.ytLoggingDocDocumentNonce_;Mn||(Mn=Kn(),Wa("ytLoggingDocDocumentNonce_",Mn));Ln=Mn;var Nn={ng:0,nd:1,vd:2,Pj:3,pg:4,Kn:5,Fk:6,em:7,Gl:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function On(a){this.h=a}
function Pn(a){return new On({trackingParams:a})}
On.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
On.prototype.getAsJspb=function(){var a=new tg;void 0!==this.h.trackingParams?G(a,1,this.h.trackingParams):(void 0!==this.h.veType&&G(a,2,this.h.veType),void 0!==this.h.veCounter&&G(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&G(a,3,this.h.elementIndex));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();H(a,7,b)}void 0!==this.h.youtubeData&&H(a,8,this.h.jspbYoutubeData);return a};
On.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
On.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Qn(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Rn(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Sn(a){return B(Rn(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",Sn,void 0);function Tn(a){return(a=Sn(void 0===a?0:a))?new On({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Un(){var a=B("csn-to-ctt-auth-info");a||(a={},hh("csn-to-ctt-auth-info",a));return a}
function Vn(a){a=void 0===a?0:a;var b=B(Qn(a));if(!b&&!B("USE_CSN_FALLBACK",!0))return null;b||!L("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
y("yt_logging_screen.getCurrentCsn",Vn,void 0);function Wn(a,b,c){var d=Un();(c=Vn(c))&&delete d[c];b&&(d[a]=b)}
function Xn(a){return Un()[a]}
y("yt_logging_screen.getCttAuthInfo",Xn,void 0);function Yn(a,b,c,d){c=void 0===c?0:c;if(a!==B(Qn(c))||b!==B(Rn(c)))Wn(a,d,c),hh(Qn(c),a),hh(Rn(c),b),b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:Ln,clientScreenNonce:a};L("use_default_heartbeat_client")?jk("foregroundHeartbeatScreenAssociated",e):qj("foregroundHeartbeatScreenAssociated",e,kn)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
y("yt_logging_screen.setCurrentScreen",Yn,void 0);var Zn=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Zn,void 0);function $n(a){Xg(Zn,arguments)}
;var ao={md:3611,Bc:27686,Cc:85013,Dc:23462,Fc:42016,Gc:62407,Hc:26926,Ec:43781,Ic:51236,Jc:79148,Kc:50160,Lc:77504,Xc:87907,Yc:18630,Zc:54445,bd:80935,cd:105675,dd:37521,ed:47786,fd:98349,gd:123695,hd:6827,jd:29434,kd:7282,ld:124448,pd:32276,od:76278,qd:93911,rd:106531,sd:27259,td:27262,ud:27263,wd:21759,xd:27107,yd:62936,zd:49568,Ad:38408,Bd:80637,Cd:68727,Dd:68728,Ed:80353,Fd:80356,Gd:74610,Hd:45707,Id:83962,Jd:83970,Kd:46713,Ld:89711,Md:74612,Nd:93265,Od:74611,Pd:131380,Rd:128979,Sd:139311,Td:128978,
Qd:131391,Ud:105350,Wd:139312,Xd:134800,Vd:131392,Zd:113533,ae:93252,be:99357,de:94521,ee:114252,ge:113532,he:94522,ce:94583,ie:88E3,je:139580,ke:93253,le:93254,me:94387,ne:94388,oe:93255,pe:97424,Yd:72502,qe:110111,re:76019,te:117092,ue:117093,se:89431,we:110466,xe:77240,ye:60508,ze:137401,Ae:137402,Be:137046,Ce:73393,De:113534,Ee:92098,Fe:131381,Ge:84517,He:83759,Ie:80357,Je:86113,Ke:72598,Le:72733,Me:107349,Ne:124275,Oe:118203,Pe:133275,Qe:133274,Re:133272,Se:133273,Te:133276,Ue:144507,Ve:143247,
We:143248,Xe:143249,Ye:143250,Ze:143251,af:144401,cf:117431,bf:133797,df:128572,ef:133405,ff:117429,gf:117430,hf:117432,jf:120080,kf:117259,lf:121692,mf:132972,nf:133051,pf:133658,qf:132971,rf:97615,tf:143359,sf:143356,vf:143361,uf:143358,xf:143360,wf:143357,yf:142303,zf:143353,Af:143354,Bf:144479,Cf:143355,Df:31402,Ff:133624,Gf:133623,Hf:133622,Ef:133621,If:84774,Jf:95117,Kf:98930,Lf:98931,Mf:98932,Nf:43347,Of:129889,Pf:45474,Qf:100352,Rf:84758,Sf:98443,Tf:117985,Uf:74613,Vf:74614,Wf:64502,Xf:136032,
Yf:74615,Zf:74616,ag:122224,cg:74617,dg:77820,eg:74618,fg:93278,gg:93274,hg:93275,ig:93276,jg:22110,kg:29433,lg:133798,mg:132295,og:120541,qg:82047,rg:113550,sg:75836,tg:75837,ug:42352,vg:84512,wg:76065,xg:75989,yg:16623,zg:32594,Ag:27240,Bg:32633,Cg:74858,Eg:3945,Dg:16989,Fg:45520,Gg:25488,Hg:25492,Ig:25494,Jg:55760,Kg:14057,Lg:18451,Mg:57204,Ng:57203,Og:17897,Pg:57205,Qg:18198,Rg:17898,Sg:17909,Tg:43980,Ug:46220,Vg:11721,Wg:49954,Xg:96369,Yg:3854,Zg:56251,ah:25624,sh:16906,th:99999,uh:68172,vh:27068,
wh:47973,xh:72773,yh:26970,zh:26971,Ah:96805,Bh:17752,Ch:73233,Dh:109512,Eh:22256,Fh:14115,Gh:22696,Hh:89278,Ih:89277,Jh:109513,Kh:43278,Lh:43459,Mh:43464,Nh:89279,Oh:43717,Ph:55764,Qh:22255,Rh:89281,Sh:40963,Th:43277,Uh:43442,Vh:91824,Wh:120137,Xh:96367,Yh:36850,Zh:72694,ai:37414,bi:36851,di:124863,ci:121343,fi:73491,gi:54473,hi:43375,ii:46674,ji:143815,ki:139095,li:144402,mi:32473,ni:72901,oi:72906,ri:50947,si:50612,ti:50613,vi:50942,wi:84938,xi:84943,yi:84939,zi:84941,Ai:84944,Bi:84940,Ci:84942,
Di:35585,Ei:51926,Fi:79983,Gi:63238,Hi:18921,Ii:63241,Ji:57893,Ki:41182,Li:135732,Mi:33424,Ni:22207,Oi:42993,Pi:36229,Qi:22206,Ri:22205,Si:18993,Ti:19001,Ui:18990,Vi:18991,Wi:18997,Xi:18725,Yi:19003,Zi:36874,aj:44763,bj:33427,cj:67793,dj:22182,ej:37091,fj:34650,gj:50617,hj:47261,ij:22287,jj:25144,kj:97917,lj:62397,mj:125598,nj:137935,oj:36961,pj:108035,qj:27426,rj:27857,sj:27846,tj:27854,uj:69692,vj:61411,wj:39299,xj:38696,yj:62520,zj:36382,Aj:108701,Bj:50663,Cj:36387,Dj:14908,Ej:37533,Fj:105443,
Gj:61635,Hj:62274,Ij:133818,Jj:65702,Kj:65703,Lj:65701,Mj:76256,Nj:37671,Oj:49953,Qj:36216,Rj:28237,Sj:39553,Tj:29222,Uj:26107,Vj:38050,Wj:26108,Yj:120745,Xj:26109,Zj:26110,ak:66881,bk:28236,ck:14586,dk:57929,ek:74723,fk:44098,gk:44099,jk:23528,kk:61699,hk:134104,ik:134103,lk:59149,mk:101951,nk:97346,pk:118051,qk:95102,rk:64882,sk:119505,tk:63595,uk:63349,vk:95101,wk:75240,xk:27039,yk:68823,zk:21537,Ak:83464,Bk:75707,Ck:83113,Dk:101952,Ek:101953,Gk:79610,Hk:125755,Ik:24402,Jk:24400,Kk:32925,Lk:57173,
Mk:122502,Nk:138480,Ok:64423,Pk:64424,Qk:33986,Rk:100828,Sk:129089,Tk:21409,Xk:135155,Yk:135156,Zk:135157,al:135158,bl:135159,dl:135160,fl:135161,il:135162,jl:135163,kl:135164,ll:135165,ml:135166,Uk:11070,Vk:11074,Wk:17880,nl:14001,pl:30709,ql:30707,rl:30711,sl:30710,ul:30708,ol:26984,vl:63648,wl:63649,xl:51879,yl:111059,zl:5754,Al:20445,Cl:130975,Bl:130976,Dl:110386,El:113746,Fl:66557,Hl:17310,Il:28631,Jl:21589,Kl:68012,Ll:60480,Ml:138664,Nl:141121,Ol:31571,Pl:141978,Ql:76980,Rl:41577,Sl:45469,Tl:38669,
Ul:13768,Vl:13777,Wl:141842,Xl:62985,Yl:4724,Zl:59369,am:43927,bm:43928,cm:12924,dm:100355,gm:56219,hm:27669,im:10337,fm:47896,jm:122629,lm:139723,km:139722,mm:121258,nm:107598,om:127991,pm:96639,qm:107536,rm:130169,sm:96661,tm:96658,um:116646,vm:121122,wm:96660,xm:127738,ym:127083,zm:104443,Am:96659,Bm:106442,Cm:134840,Dm:63667,Em:63668,Fm:63669,Gm:130686,Hm:78314,Im:55761,Jm:127098,Km:134841,Lm:96368,Mm:67374,Nm:48992,Om:49956,Pm:31961,Qm:26388,Rm:23811,Sm:5E4,Tm:126250,Um:96370,Vm:47355,Wm:47356,
Xm:37935,Ym:45521,Zm:21760,an:83769,bn:49977,cn:49974,dn:93497,en:93498,fn:34325,gn:140759,hn:115803,jn:123707,kn:100081,ln:35309,mn:68314,nn:25602,pn:100339,qn:143516,rn:59018,sn:18248,tn:50625,un:9729,vn:37168,wn:37169,xn:21667,yn:16749,zn:18635,An:39305,Bn:18046,Cn:53969,Dn:8213,En:93926,Fn:102852,Gn:110099,Hn:22678,In:69076,Jn:137575,Ln:139224,Mn:100856,Nn:17736,On:3832,Pn:55759,Qn:64031,Wn:93044,Xn:93045,Yn:34388,Zn:17657,ao:17655,bo:39579,co:39578,eo:77448,fo:8196,ho:11357,jo:69877,ko:8197,
lo:82039};function bo(){var a=sb(co),b;return Ef(new xf(function(c,d){a.onSuccess=function(e){li(e)?c(new eo(e)):d(new fo("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new fo("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new fo("Request timed out","net.timeout",e))};
b=ri("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Ff&&b.abort();
return Cf(c)})}
function fo(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(fo,$a);function eo(a){this.xhr=a}
;function go(){this.i=0;this.h=null}
go.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),wf(a)?a:ho(a)):2===this.i&&b?(a=b.call(c,this.h),wf(a)?a:io(a)):this};
go.prototype.getValue=function(){return this.h};
go.prototype.$goog_Thenable=!0;function io(a){var b=new go;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function ho(a){var b=new go;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function jo(){if(Ld())return!0;var a=B("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||Zj&&ak("applewebkit")&&!ak("version")&&(!ak("safari")||ak("gsa/"))||kc&&ak("version/")?!0:(a=wj("CONSENT"))?a.startsWith("YES+"):!0}
;function ko(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof lo;this.isTimeout=a instanceof fo&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ff}
r(ko,$a);ko.prototype.name="BiscottiError";function lo(){$a.call(this,"Biscotti ID is missing from server")}
r(lo,$a);lo.prototype.name="BiscottiMissingError";var co={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},mo=null;function Wh(){if(L("disable_biscotti_fetch_entirely_for_all_web_clients"))return Cf(Error("Biscotti id fetching has been disabled entirely."));if(!jo())return Cf(Error("User has not consented - not fetching biscotti id."));if("1"==qb())return Cf(Error("Biscotti ID is not available in private embed mode"));mo||(mo=Ef(bo().then(no),function(a){return oo(2,a)}));
return mo}
function no(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new lo;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new lo;a=a.id;Xh(a);mo=ho(a);po(18E5,2);return a}
function oo(a,b){b=new ko(b);Xh("");mo=io(b);0<a&&po(12E4,a-1);throw b;}
function po(a,b){Fh(function(){Ef(bo().then(no,function(c){return oo(b,c)}),Ja)},a)}
function qo(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Wh()}catch(b){return Cf(b)}}
;function ro(a){if("1"!=qb()){a&&Vh();try{qo().then(function(){},function(){}),Fh(ro,18E5)}catch(b){uh(b)}}}
;function so(){this.yc=!0}
function to(a){var b={},c=Nd([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(B("SESSION_INDEX",0)),c=isNaN(c)?0:c),b["X-Goog-AuthUser"]=c,"INNERTUBE_HOST_OVERRIDE"in ah||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in ah&&(b["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return b}
;var uo={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var vo=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),wo=["/fashion","/feed/fashion_destination","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ"];function xo(){var a=void 0===a?window.location.href:a;if(L("kevlar_disable_theme_param"))return null;var b=Xb(a.match(Wb)[5]||null);if(yo(b))return"USER_INTERFACE_THEME_DARK";try{var c=ei(a).theme;return vo.get(c)||null}catch(d){}return null}
function yo(a){var b=wo.map(function(c){return c.toLowerCase()});
return!L("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function zo(){this.h={};if(this.i=xj()){var a=wj("CONSISTENCY");a&&Ao(this,{encryptedTokenJarContents:a})}}
zo.prototype.handleResponse=function(a,b){var c,d;b=(null==(c=b.aa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar)&&this.replace(b,a)};
zo.prototype.replace=function(a,b){a=q(a);for(var c=a.next();!c.done;c=a.next())delete this.h[c.value.encryptedTokenJarContents];Ao(this,b)};
function Ao(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&vj("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Bo=window.location.hostname.split(".").slice(-2).join(".");function Co(){var a=B("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===B("INNERTUBE_CLIENT_NAME")&&(this.h=Do(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Eo;Co.getInstance=function(){Eo=A("yt.clientLocationService.instance");Eo||(Eo=new Co,y("yt.clientLocationService.instance",Eo,void 0));return Eo};
Co.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=1E7*this.i.coords.latitude,a.client.locationInfo.longitudeE7=1E7*this.i.coords.longitude,a.client.locationInfo.horizontalAccuracyMeters=this.i.coords.accuracy,a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Co.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===B("INNERTUBE_CLIENT_NAME")?(this.h=Do(this))&&this.h.set("yt-location-playability-token",a,15552E3):vj("YT_CL",JSON.stringify({loctok:a}),15552E3,Bo,!0))};
function Do(a){return void 0===a.h?new Tj("yt-client-location"):a.h}
Co.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!L("web_enable_browser_geolocation_api")&&!L("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;L("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Co.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Fo(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.Ba&&(c=b.Ba[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.Rb&&(d=b.Rb[a.continuationCommand.request]))return d();for(var e in a)if(b.pb[e]&&(a=b.pb[e]))return a()}
;function Go(a){return function(){return new a}}
;var Ho={},Io=(Ho.WEB_UNPLUGGED="^unplugged/",Ho.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Ho.WEB_UNPLUGGED_OPS="^unplugged/",Ho.WEB_UNPLUGGED_PUBLIC="^unplugged/",Ho.WEB_CREATOR="^creator/",Ho.WEB_KIDS="^kids/",Ho.WEB_EXPERIMENTS="^experiments/",Ho.WEB_MUSIC="^music/",Ho.WEB_REMIX="^music/",Ho.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Ho.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Ho);
function Jo(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Io[b];if(c){var d=new RegExp(c),e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Io).forEach(function(g){var h=q(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Ko(a,b){return{method:void 0===b?"POST":b,mode:gi(a)?"same-origin":"cors",credentials:gi(a)?"same-origin":"include"}}
;function Lo(){}
Lo.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?uo:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=B("INNERTUBE_CONTEXT");if(g){g=tb(g);L("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=B("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;zj.getInstance();var m="USER_INTERFACE_THEME_LIGHT";Cj(165)?m="USER_INTERFACE_THEME_DARK":Cj(174)?m="USER_INTERFACE_THEME_LIGHT":!L("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:xo()||m;h.userInterfaceTheme=k;if(!f){if(k=
Jj())h.connectionType=k;L("web_log_effective_connection_type")&&(k=Kj())&&(g.client.effectiveConnectionType=k)}var n;if(L("web_log_memory_total_kbytes")&&(null==(n=x.navigator)?0:n.deviceMemory)){var t;n=null==(t=x.navigator)?void 0:t.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}t=ei(x.location.href);!L("web_populate_internal_geo_killswitch")&&t.internalcountrycode&&(h.internalGeo=t.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},L("kevlar_woffle")&&
sj.h&&(h.mainAppWebInfo.pwaInstallabilityStatus=sj.h.h?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=tj(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!L("web_lr_app_quality_killswitch")&&(t=B("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:t})),t=B("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:t}));
if(!L("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var z=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Q){}z=void 0}z&&(h.timeZone=z)}(z=lh())?h.experimentsToken=z:delete h.experimentsToken;z=mh();zo.h||(zo.h=new zo);h=zo.h.h;t=[];n=0;for(var v in h)t[n++]=h[v];g.request=Object.assign({},g.request,{internalExperimentFlags:z,consistencyTokenJars:t});!L("web_prequest_context_killswitch")&&(v=B("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
v);z=zj.getInstance();v=Cj(58);z=z.get("gsml","");g.user=Object.assign({},g.user);v&&(g.user.enableSafetyMode=v);z&&(g.user.lockedSafetyMode=!0);L("warm_op_csn_cleanup")?e&&(f=Vn())&&(g.clientScreenNonce=f):!f&&(f=Vn())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=A("yt.mdx.remote.remoteClient_"))g.remoteClient=d;L("web_enable_client_location_service")&&Co.getInstance().setLocationOnInnerTubeContext(g);try{var C=hi(void 0),D=C.bid;delete C.bid;g.adSignalsInfo={params:[],
bid:D};var F=q(Object.entries(C));for(var P=F.next();!P.done;P=F.next()){var U=q(P.value),W=U.next().value,Ra=U.next().value;C=W;D=Ra;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:C,value:""+D})}}catch(Q){Dn(Q)}F=g}else Dn(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(P=this.h(a)){this.i(F,P,b);var Y;b="/youtubei/v1/"+Jo(this.j());var va;(a=null==(Y=a.commandMetadata)?void 0:null==(va=Y.webCommandMetadata)?void 0:va.apiUrl)&&(b=a);Y=b;(va=B("INNERTUBE_HOST_OVERRIDE"))&&
(Y=String(va)+String(Zb(Y)));va={};va.key=B("INNERTUBE_API_KEY");L("json_condensed_response")&&(va.prettyPrint="false");Y=fi(Y,va||{},!1);Y={input:Y,ta:Ko(Y),aa:F,config:Object.assign({},void 0)};Y.config.Ia?Y.config.Ia.identity=c:Y.config.Ia={identity:c};return Y}Dn(new mk("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Lo.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Mo(){}
r(Mo,Lo);Mo.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",ta:Ko("/getDatasyncIdsEndpoint","GET"),aa:{}}};
Mo.prototype.j=function(){return[]};
Mo.prototype.h=function(){};
Mo.prototype.i=function(){};var No={},Oo=(No.GET_DATASYNC_IDS=Go(Mo),No);function Po(a){var b=Ga.apply(1,arguments);if(!Qo(a)||b.some(function(e){return!Qo(e)}))throw Error("Only objects may be merged.");
var c=a;b=q(b);for(var d=b.next();!d.done;d=b.next())Ro(c,d.value);return c}
function Ro(a,b){for(var c in b)if(Qo(b[c])){if(c in a&&!Qo(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ro(a[c],b[c])}else if(So(b[c])){if(c in a&&!So(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);To(a[c],b[c])}else a[c]=b[c];return a}
function To(a,b){b=q(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Qo(c)?a.push(Ro({},c)):So(c)?a.push(To([],c)):a.push(c);return a}
function Qo(a){return"object"===typeof a&&!Array.isArray(a)}
function So(a){return"object"===typeof a&&Array.isArray(a)}
;function Uo(a,b){Ol.call(this,1,arguments);this.timer=b}
r(Uo,Ol);var Vo=new Pl("aft-recorded",Uo);var Wo=window;function Xo(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var O=Wo.performance||Wo.mozPerformance||Wo.msPerformance||Wo.webkitPerformance||new Xo;var Yo=!1,Zo={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},
$o=Ua(O.clearResourceTimings||O.webkitClearResourceTimings||O.mozClearResourceTimings||O.msClearResourceTimings||O.oClearResourceTimings||Ja,O);function ap(a){var b=bp(a);if(b.aft)return b.aft;a=B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function cp(){var a;if(L("csi_use_performance_navigation_timing")){var b,c,d,e=null==O?void 0:null==(a=O.getEntriesByType)?void 0:null==(b=a.call(O,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=dp(e.requestStart),e.responseEnd=dp(e.responseEnd),e.redirectStart=dp(e.redirectStart),e.redirectEnd=dp(e.redirectEnd),e.domainLookupEnd=dp(e.domainLookupEnd),e.connectStart=dp(e.connectStart),e.connectEnd=dp(e.connectEnd),e.responseStart=dp(e.responseStart),
e.secureConnectionStart=dp(e.secureConnectionStart),e.domainLookupStart=dp(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=O.timing}else a=O.timing;return a}
function ep(){return L("csi_use_time_origin")&&O.timeOrigin?Math.floor(O.timeOrigin):O.timing.navigationStart}
function dp(a){return Math.round(ep()+a)}
function fp(a){y("ytglobal.timing"+(a||"")+"ready_",!0,void 0)}
function gp(a){return A("ytcsi."+(a||"")+"data_")||hp(a)}
function ip(a){a=gp(a);a.info||(a.info={});return a.info}
function bp(a){a=gp(a);a.tick||(a.tick={});return a.tick}
function jp(a){a=gp(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function kp(a){a=jp(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function lp(a){var b=gp(a).nonce;b||(b=Kn(),gp(a).nonce=b);return b}
function hp(a){var b={tick:{},info:{}};y("ytcsi."+(a||"")+"data_",b,void 0);return b}
function mp(a){var b=bp(a||""),c=ap(a);c&&!Yo&&(Ul(Vo,new Uo(Math.round(c-b._start),a)),Yo=!0)}
function np(a,b){for(var c=q(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!np(a[d],b[d]))return!1;return!0}
;function op(){if(O.getEntriesByType){var a=O.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return dp(a.startTime)}a=O.timing;
return a.dc?Math.max(0,a.dc):0}
;function pp(){var a=A("ytcsi.debug");a||(a=[],y("ytcsi.debug",a,void 0),y("ytcsi.reference",{},void 0));return a}
function qp(a){a=a||"";var b=rp();if(b[a])return b[a];var c=pp(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
function rp(){var a=A("ytcsi.reference");if(a)return a;pp();return A("ytcsi.reference")}
;var R={},sp=(R.auto_search="LATENCY_ACTION_AUTO_SEARCH",R.ad_to_ad="LATENCY_ACTION_AD_TO_AD",R.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",R["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",R.app_startup="LATENCY_ACTION_APP_STARTUP",R["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",R["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",R["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",R.browse="LATENCY_ACTION_BROWSE",R.cast_splash="LATENCY_ACTION_CAST_SPLASH",
R.channels="LATENCY_ACTION_CHANNELS",R.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",R["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",R["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",R["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",R["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",R["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",R["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",R["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",R["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",R["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",R["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",R["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",R.chips="LATENCY_ACTION_CHIPS",R["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",R["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",R.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
R.embed="LATENCY_ACTION_EMBED",R.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",R.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",R.explore="LATENCY_ACTION_EXPLORE",R.home="LATENCY_ACTION_HOME",R.library="LATENCY_ACTION_LIBRARY",R.live="LATENCY_ACTION_LIVE",R.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",R.onboarding="LATENCY_ACTION_ONBOARDING",R.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",R.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",R.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",R.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",R["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",R["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",R.prebuffer="LATENCY_ACTION_PREBUFFER",R.prefetch="LATENCY_ACTION_PREFETCH",R.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",R.profile_switcher="LATENCY_ACTION_LOGIN",R.reel_watch="LATENCY_ACTION_REEL_WATCH",R.results="LATENCY_ACTION_RESULTS",
R.search_ui="LATENCY_ACTION_SEARCH_UI",R.search_suggest="LATENCY_ACTION_SUGGEST",R.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",R.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",R.seek="LATENCY_ACTION_PLAYER_SEEK",R.settings="LATENCY_ACTION_SETTINGS",R.tenx="LATENCY_ACTION_TENX",R.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",R.watch="LATENCY_ACTION_WATCH",R.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",R["watch,watch7"]="LATENCY_ACTION_WATCH",R["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
R["watch,watch7ad"]="LATENCY_ACTION_WATCH",R["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",R.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",R.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",R["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",R["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",R["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",R["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",R["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",R["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",R["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",R["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",R["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",R.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",R.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",R.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",R),S={},tp=(S.ad_allowed="adTypesAllowed",S.yt_abt="adBreakType",
S.ad_cpn="adClientPlaybackNonce",S.ad_docid="adVideoId",S.yt_ad_an="adNetworks",S.ad_at="adType",S.aida="appInstallDataAgeMs",S.browse_id="browseId",S.p="httpProtocol",S.t="transportProtocol",S.cs="commandSource",S.cpn="clientPlaybackNonce",S.ccs="creatorInfo.creatorCanaryState",S.ctop="creatorInfo.topEntityType",S.csn="clientScreenNonce",S.docid="videoId",S.GetHome_rid="requestIds",S.GetSearch_rid="requestIds",S.GetPlayer_rid="requestIds",S.GetWatchNext_rid="requestIds",S.GetBrowse_rid="requestIds",
S.GetLibrary_rid="requestIds",S.is_continuation="isContinuation",S.is_nav="isNavigation",S.b_p="kabukiInfo.browseParams",S.is_prefetch="kabukiInfo.isPrefetch",S.is_secondary_nav="kabukiInfo.isSecondaryNav",S.nav_type="kabukiInfo.navigationType",S.prev_browse_id="kabukiInfo.prevBrowseId",S.query_source="kabukiInfo.querySource",S.voz_type="kabukiInfo.vozType",S.yt_lt="loadType",S.mver="creatorInfo.measurementVersion",S.yt_ad="isMonetized",S.nr="webInfo.navigationReason",S.nrsu="navigationRequestedSameUrl",
S.pnt="performanceNavigationTiming",S.prt="playbackRequiresTap",S.plt="playerInfo.playbackType",S.pis="playerInfo.playerInitializedState",S.paused="playerInfo.isPausedOnLoad",S.yt_pt="playerType",S.fmt="playerInfo.itag",S.yt_pl="watchInfo.isPlaylist",S.yt_pre="playerInfo.preloadType",S.yt_ad_pr="prerollAllowed",S.pa="previousAction",S.yt_red="isRedSubscriber",S.rce="mwebInfo.responseContentEncoding",S.rc="resourceInfo.resourceCache",S.scrh="screenHeight",S.scrw="screenWidth",S.st="serverTimeMs",S.ssdm=
"shellStartupDurationMs",S.br_trs="tvInfo.bedrockTriggerState",S.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",S.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",S.label="tvInfo.label",S.is_mdx="tvInfo.isMdx",S.preloaded="tvInfo.isPreloaded",S.aac_type="tvInfo.authAccessCredentialType",S.upg_player_vis="playerInfo.visibilityState",S.query="unpluggedInfo.query",S.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",S.yt_vst="videoStreamType",S.vph="viewportHeight",S.vpw="viewportWidth",
S.yt_vis="isVisible",S.rcl="mwebInfo.responseContentLength",S.GetSettings_rid="requestIds",S.GetTrending_rid="requestIds",S.GetMusicSearchSuggestions_rid="requestIds",S.REQUEST_ID="requestIds",S),up="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
vp={},wp=(vp.ccs="CANARY_STATE_",vp.mver="MEASUREMENT_VERSION_",vp.pis="PLAYER_INITIALIZED_STATE_",vp.yt_pt="LATENCY_PLAYER_",vp.pa="LATENCY_ACTION_",vp.ctop="TOP_ENTITY_TYPE_",vp.yt_vst="VIDEO_STREAM_TYPE_",vp),xp="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function yp(a){return sp[a]||"LATENCY_ACTION_UNKNOWN"}
function zp(a,b,c){c=jp(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in tp){c=tp[a];0<=cb(up,c)&&(b=!!b);a in wp&&"string"===typeof b&&(b=wp[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Po({},d)}0<=cb(xp,a)||En(new mk("Unknown label logged with GEL CSI",a))}
;var T={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,
LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,
LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,
LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,
LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,
LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,
LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,
LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,
LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,
LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,
LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};T[T.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";T[T.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";T[T.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
T[T.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";T[T.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";T[T.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";T[T.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";T[T.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";T[T.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";T[T.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";
T[T.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";T[T.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";T[T.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";T[T.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";T[T.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";T[T.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";T[T.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";
T[T.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";T[T.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";T[T.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";T[T.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";T[T.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";T[T.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";
T[T.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";T[T.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";T[T.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";T[T.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";T[T.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";T[T.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";
T[T.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";T[T.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";T[T.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";T[T.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";T[T.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";T[T.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";
T[T.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";T[T.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";T[T.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";T[T.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";T[T.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";T[T.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";T[T.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";
T[T.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";T[T.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";T[T.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";T[T.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";T[T.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";T[T.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";T[T.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";
T[T.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";T[T.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";T[T.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";T[T.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";T[T.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";T[T.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";T[T.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
T[T.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";T[T.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";T[T.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";T[T.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";T[T.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";T[T.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";T[T.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";
T[T.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";T[T.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";T[T.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";T[T.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";T[T.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";T[T.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";
T[T.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";T[T.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";T[T.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";T[T.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";T[T.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";T[T.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";T[T.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";T[T.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";
T[T.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";T[T.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";T[T.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";T[T.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";T[T.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";T[T.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";
T[T.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";T[T.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";T[T.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";T[T.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";T[T.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
T[T.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";T[T.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";T[T.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";T[T.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";T[T.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";T[T.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";
T[T.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";T[T.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";T[T.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";T[T.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";T[T.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";T[T.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";
T[T.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";T[T.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";T[T.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";T[T.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";T[T.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";T[T.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";
T[T.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";T[T.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";T[T.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";T[T.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";T[T.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";T[T.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";
T[T.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";T[T.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";T[T.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";T[T.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";T[T.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";T[T.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";T[T.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";
T[T.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";T[T.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";T[T.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";T[T.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";T[T.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";T[T.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";T[T.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";T[T.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";
T[T.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";T[T.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";T[T.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";T[T.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";T[T.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";T[T.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";T[T.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";T[T.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";
T[T.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";T[T.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";T[T.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";T[T.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";T[T.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";T[T.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";T[T.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";T[T.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";T[T.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";
T[T.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";T[T.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";T[T.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";T[T.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";T[T.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Ap={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Ap[Ap.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Ap[Ap.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Ap[Ap.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var V={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};V[V.CONN_INVALID]="CONN_INVALID";V[V.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";V[V.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";V[V.CONN_WIFI_METERED]="CONN_WIFI_METERED";V[V.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";V[V.CONN_DISCO]="CONN_DISCO";
V[V.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";V[V.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";V[V.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";V[V.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";V[V.CONN_WIFI]="CONN_WIFI";V[V.CONN_NONE]="CONN_NONE";V[V.CONN_UNKNOWN]="CONN_UNKNOWN";V[V.CONN_DEFAULT]="CONN_DEFAULT";
var X={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};X[X.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
X[X.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";X[X.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";X[X.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";X[X.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";X[X.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";X[X.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
X[X.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";X[X.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";X[X.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";X[X.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";X[X.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";X[X.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";X[X.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";X[X.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
X[X.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";X[X.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";X[X.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";X[X.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";X[X.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";X[X.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";X[X.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";X[X.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
X[X.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";X[X.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";X[X.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";X[X.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Bp={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Bp[Bp.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Bp[Bp.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Bp[Bp.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Bp[Bp.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Bp[Bp.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Bp[Bp.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Bp[Bp.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Bp[Bp.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Cp={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Cp[Cp.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Cp[Cp.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Cp[Cp.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Cp[Cp.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Dp={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Dp[Dp.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Dp[Dp.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Ep={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Ep[Ep.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Ep[Ep.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Ep[Ep.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Ep[Ep.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Ep[Ep.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Ep[Ep.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Fp={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Fp[Fp.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Fp[Fp.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Fp[Fp.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Fp[Fp.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Gp={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Gp[Gp.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Gp[Gp.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Gp[Gp.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Hp={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Hp[Hp.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Hp[Hp.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Hp[Hp.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Ip=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",Ip,void 0);function Jp(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||M());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Uh();d=new Mg;G(d,1,c.timestamp||!isFinite(e)?-1:e);if(L("log_sequence_info_on_gel_web")&&c.W){e=c.W;var f=rj(e),g=new Lg;G(g,2,f);G(g,1,e);H(d,3,g);c.ub&&delete Ip[c.W]}H(a,33,d);(c.nc?cj:Yi)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,xa:c.xa},b)}
;function Kp(a,b){b=void 0===b?{}:b;var c=!1;B("ytLoggingEventsDefaultDisabled",!1)&&kn===kn&&(c=!0);Jp(a,c?null:kn,b)}
;function Lp(a,b,c){var d=new Ng;Oc(d,72,a);c?Jp(d,c,b):Kp(d,b)}
function Mp(a,b,c){var d=new Ng;Oc(d,73,a);c?Jp(d,c,b):Kp(d,b)}
function Np(a,b,c){var d=new Ng;Oc(d,78,a);c?Jp(d,c,b):Kp(d,b)}
function Op(a,b,c){var d=new Ng;Oc(d,208,a);c?Jp(d,c,b):Kp(d,b)}
function Pp(a,b,c){var d=new Ng;Oc(d,156,a);c?Jp(d,c,b):Kp(d,b)}
function Qp(a,b,c){var d=new Ng;Oc(d,215,a);c?Jp(d,c,b):Kp(d,b)}
;var Rp=x.ytLoggingLatencyUsageStats_||{};y("ytLoggingLatencyUsageStats_",Rp,void 0);function Sp(){this.h=0}
function Tp(){Sp.h||(Sp.h=new Sp);return Sp.h}
Sp.prototype.tick=function(a,b,c,d){Up(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},L("web_csi_via_jspb")?(d=new Kg,G(d,1,a),G(d,2,b),a=new Ng,Oc(a,5,d),Kp(a,c)):jk("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Sp.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Up(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,jk("latencyActionInfo",a,{cttAuthInfo:c}))};
Sp.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Up(this,"info_"+d+"_"+b)||(G(a,2,b),b={cttAuthInfo:c},c=new Ng,Oc(c,7,a),Kp(c,b))};
Sp.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Up(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,jk("latencyActionSpan",a,{cttAuthInfo:c}))};
function Up(a,b){Rp[b]=Rp[b]||{count:0};var c=Rp[b];c.count++;c.time=M();a.h||(a.h=Jh(function(){var d=M(),e;for(e in Rp)Rp[e]&&6E4<d-Rp[e].time&&delete Rp[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new mk("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||En(c)),!0):!1}
;function Vp(){var a=["ol"];qp("").info.actionType="embed";a&&hh("TIMING_AFT_KEYS",a);hh("TIMING_ACTION","embed");a=B("TIMING_INFO",{});for(var b in a)a.hasOwnProperty(b)&&Wp(b,a[b]);b={isNavigation:!0,actionType:yp(ih("TIMING_ACTION"))};if(a=ih("PREVIOUS_ACTION"))b.previousAction=yp(a);if(a=B("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=B("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=Vn())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=Xp();if(1===a||-1===a)b.isVisible=!0;a=ip();b.loadType="cold";var c=
cp(),d=ep();d&&(Z("srt",c.responseStart),1!==a.prerender&&Z("_start",d,void 0));a=op();0<a&&Z("fpt",a);a=cp();a.isPerformanceNavigationTiming&&Yp({performanceNavigationTiming:!0},void 0);Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<
a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=ep()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));O&&"getEntriesByType"in O&&Zp();a=[];if(document.querySelector&&O&&O.getEntriesByName)for(var e in Zo)Zo.hasOwnProperty(e)&&(c=Zo[e],$p(e,c)&&a.push(c));if(0<a.length)for(b.resourceInfo=[],e=q(a),a=e.next();!a.done;a=e.next())b.resourceInfo.push({resourceCache:a.value});
Yp(b);e=ip();b=kp();if("cold"===e.yt_lt||"cold"===b.loadType){a=bp();c=jp();c=c.gelTicks?c.gelTicks:c.gelTicks={};for(var f in a)f in c||Z(f,a[f]);f={};a=!1;c=q(Object.keys(e));for(d=c.next();!d.done;d=c.next())d=d.value,(d=zp(d,e[d]))&&!np(kp(void 0),d)&&(Po(b,d),Po(f,d),a=!0);a&&Yp(f)}fp();f=ih("TIMING_ACTION");A("ytglobal.timingready_")&&f&&"_start"in bp(void 0)&&ap()&&mp()}
function Wp(a,b,c){null!==b&&(ip(c)[a]=b,(a=zp(a,b,c))&&Yp(a,c))}
function Yp(a,b){if(L("web_csi_via_jspb")){var c=new Hg,d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++)switch(d[e]){case "actionType":G(c,1,T[a[e]]);break;case "clientActionNonce":G(c,2,a[e]);break;case "clientScreenNonce":G(c,4,a[e]);break;case "actionVisualElement":H(c,88,a[e]);break;case "loadType":G(c,3,a[e]);break;case "isFirstInstall":G(c,55,a[e]);break;case "networkType":G(c,5,Ap[a[e]]);break;case "connectionType":G(c,26,V[a[e]]);break;case "detailedConnectionType":G(c,27,X[a[e]]);
break;case "isVisible":G(c,6,a[e]);break;case "playerType":G(c,7,Bp[a[e]]);break;case "clientPlaybackNonce":G(c,8,a[e]);break;case "adClientPlaybackNonce":G(c,28,a[e]);break;case "previousCpn":G(c,77,a[e]);break;case "targetCpn":G(c,76,a[e]);break;case "isMonetized":G(c,9,a[e]);break;case "isPrerollAllowed":G(c,16,a[e]);break;case "isPrerollShown":G(c,17,a[e]);break;case "adType":G(c,12,a[e]);break;case "adTypesAllowed":G(c,36,a[e]);break;case "adNetworks":G(c,37,a[e]);break;case "previousAction":G(c,
13,T[a[e]]);break;case "isRedSubscriber":G(c,14,a[e]);break;case "serverTimeMs":G(c,15,a[e]);break;case "spinnerInfo":H(c,18,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":G(c,20,a[e]);break;case "targetVideoId":G(c,78,a[e]);break;case "adBreakType":G(c,21,Cp[a[e]]);break;case "isNavigation":G(c,25,a[e]);break;case "viewportHeight":G(c,29,a[e]);break;case "viewportWidth":G(c,30,a[e]);break;case "screenHeight":G(c,84,a[e]);break;case "screenWidth":G(c,85,a[e]);break;case "browseId":G(c,
31,a[e]);break;case "isCacheHit":G(c,32,a[e]);break;case "httpProtocol":G(c,33,a[e]);break;case "transportProtocol":G(c,34,a[e]);break;case "searchQuery":G(c,41,a[e]);break;case "isContinuation":G(c,42,a[e]);break;case "availableProcessors":G(c,43,a[e]);break;case "sdk":G(c,44,a[e]);break;case "isLocalStream":G(c,45,a[e]);break;case "navigationRequestedSameUrl":G(c,64,a[e]);break;case "shellStartupDurationMs":G(c,70,a[e]);break;case "appInstallDataAgeMs":G(c,73,a[e]);break;case "latencyActionError":G(c,
71,Dp[a[e]]);break;case "actionStep":G(c,79,a[e]);break;case "jsHeapSizeLimit":G(c,80,a[e]);break;case "totalJsHeapSize":G(c,81,a[e]);break;case "usedJsHeapSize":G(c,82,a[e]);break;case "resourceInfo":Qc(c,83,Gg,a[e]);break;case "sourceVideoDurationMs":G(c,90,a[e]);break;case "playerInfo":H(c,22,a[e]);break;case "commentInfo":H(c,23,a[e]);break;case "mdxInfo":H(c,24,a[e]);break;case "watchInfo":H(c,35,a[e]);break;case "adPrebufferedTimeSecs":G(c,39,a[e]);break;case "thumbnailLoadInfo":H(c,40,a[e]);
break;case "creatorInfo":H(c,46,a[e]);break;case "unpluggedInfo":H(c,50,a[e]);break;case "isLivestream":G(c,47,a[e]);break;case "liveStreamMode":G(c,91,Ep[a[e]]);break;case "adCpn2":G(c,48,a[e]);break;case "adDaiDriftMillis":G(c,49,a[e]);break;case "videoStreamType":G(c,53,Fp[a[e]]);break;case "reelInfo":H(c,54,a[e]);break;case "subscriptionsFeedInfo":H(c,72,a[e]);break;case "playbackRequiresTap":G(c,56,a[e]);break;case "requestIds":Qc(c,68,Jg,a[e]);break;case "mediaBrowserActionInfo":H(c,58,a[e]);
break;case "performanceNavigationTiming":G(c,67,a[e]);break;case "musicLoadActionInfo":H(c,69,a[e]);break;case "transactionType":G(c,74,Gp[a[e]]);break;case "shoppingInfo":H(c,75,a[e]);break;case "prefetchInfo":H(c,86,a[e]);break;case "accelerationSession":H(c,87,a[e]);break;case "playerRotationType":G(c,101,Hp[a[e]]);break;case "webInfo":H(c,38,a[e]);break;case "tvInfo":H(c,51,a[e]);break;case "kabukiInfo":H(c,52,a[e]);break;case "mwebInfo":H(c,59,a[e]);break;case "musicInfo":H(c,65,a[e]);break;
case "allowedPreroll":G(c,10,a[e]);break;case "shownPreroll":G(c,11,a[e]);break;case "getHomeRequestId":G(c,57,a[e]);break;case "getSearchRequestId":G(c,60,a[e]);break;case "getPlayerRequestId":G(c,61,a[e]);break;case "getWatchNextRequestId":G(c,62,a[e]);break;case "getBrowseRequestId":G(c,63,a[e]);break;case "getLibraryRequestId":G(c,66,a[e])}a=jp(b);a.jspbInfos||(a.jspbInfos=[]);a.jspbInfos.push(c);qp(b||"").jspbInfo.push(c);a=lp(b);b=gp(b).cttAuthInfo;Tp().jspbInfo(c,a,b)}else c=qp(b||""),Po(c.info,
a),Po(kp(b),a),c=lp(b),b=gp(b).cttAuthInfo,Tp().info(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;O.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),O.mark(d))}qp(c||"").tick[a]=b||M();d=jp(c);d.gelTicks&&(d.gelTicks[a]=!0);d=bp(c);var e=b||M();d[a]=e;e=lp(c);var f=gp(c).cttAuthInfo;if("_start"===a){var g=Tp();Up(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},L("web_csi_via_jspb")?(f=new Fg,G(f,1,e),e=new Ng,Oc(e,6,f),Kp(e,b)):jk("latencyActionBaselined",{clientActionNonce:e},b))}else Tp().tick(a,e,b,f);mp(c);return d[a]}
function aq(){var a=lp(void 0);requestAnimationFrame(function(){setTimeout(function(){a===lp(void 0)&&Z("ol",void 0,void 0)},0)})}
function Xp(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=qh+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function $p(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Tb()&&a.setAttribute("nonce",Tb());return c?(a=O.getEntriesByName(c))&&a[0]&&(a=a[0],c=ep(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Zp(){var a=window.location.protocol,b=O.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",dp(b.startTime)),Z("wffe",dp(b.responseEnd)))}
var bq=window;bq.ytcsi&&(bq.ytcsi.info=Wp,bq.ytcsi.tick=Z);var cq=["consistency","mss","client_location","entities","store"];function dq(a,b,c,d,e){this.o=a;this.I=b;this.l=c;this.m=d;this.j=e;this.i=void 0;this.h=new Map;a.Ba||(a.Ba={});a.Ba=Object.assign({},Oo,a.Ba)}
function eq(a,b,c,d,e){if(void 0!==dq.h){if(d=dq.h,a=[a!==d.o,b!==d.I,c!==d.l,!1,!1,void 0!==d.i],a.some(function(f){return f}))throw new mk("InnerTubeTransportService is already initialized",a);
}else dq.h=new dq(a,b,c,d,e)}
function fq(){var a=dq.h,b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?uo:c;var d=Fo(b,a.o);if(!d)return Cf(new mk("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new xf(function(f){var g,h,k;return w(function(m){if(1==m.h)return h="cors"===(null==(g=e.ta)?void 0:g.mode)?"cors":void 0,u(m,gq(a,e.config,h),2);k=m.i;f(hq(a,e,k));m.h=0})}):Cf(new mk("Error: Failed to build request for command.",b))}
function hq(a,b,c){var d,e,f,g,h,k,m,n,t,z,v,C,D,F,P,U,W,Ra,Y,va;return w(function(Q){switch(Q.h){case 1:Q.s(2);break;case 3:if((d=Q.i)&&!d.isExpired())return Q.return(Promise.resolve(d.h()));case 2:if((f=null==(e=b.config)?void 0:e.Ao)&&a.h.has(f)&&L("web_memoize_inflight_requests"))return Q.return(a.h.get(f));if(null==(g=b)?0:null==(h=g.aa)?0:h.context)for(k=q([]),m=k.next();!m.done;m=k.next())n=m.value,n.yo(b.aa.context);if(null==(t=a.i)?0:t.l(b.input,b.aa))return Q.return(a.i.j(b.input,b.aa));
z=JSON.stringify(b.aa);b.ta=Object.assign({},b.ta,{headers:c});v=Object.assign({},b.ta);"POST"===b.ta.method&&(v=Object.assign({},v,{body:z}));(null==(C=b.config)?0:C.jc)&&Z(b.config.jc);D=a.I.fetch(b.input,v,b.config);f&&a.h.set(f,D);return u(Q,D,4);case 4:F=Q.i;f&&a.h.has(f)&&a.h.delete(f);(null==(P=b.config)?0:P.kc)&&Z(b.config.kc);if(F||null==(U=a.i)||!U.h(b.input,b.aa)){Q.s(5);break}return u(Q,a.i.i(b.input,b.aa),6);case 6:F=Q.i;case 5:if(L("web_ordered_response_processors")&&F&&a.j)for(W=q(cq),
m=W.next();!m.done;m=W.next())Ra=m.value,a.j[Ra]&&a.j[Ra].handleResponse(F,b);else if(F&&a.m)for(Y=q(a.m),m=Y.next();!m.done;m=Y.next())va=m.value,va.handleResponse(F,b);return Q.return(F)}})}
function gq(a,b,c){return w(function(d){if(a.l.yc){var e=d.return,f,g=null==b?void 0:null==(f=b.Ia)?void 0:f.sessionIndex;f=to({sessionIndex:g});f=Object.assign({},iq(c),f);d=e.call(d,f)}else d=d.return(jq(b,c));return d})}
function jq(a,b){var c,d,e,f;return w(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ia)?void 0:d.sessionIndex;var h=to({sessionIndex:e});if(!(h instanceof xf)){var k=new xf(Ja);yf(k,2,h);h=k}return u(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},iq(b),f)))})}
function iq(a){var b={"Content-Type":"application/json"};L("enable_web_eom_visitor_data")&&B("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=B("EOM_VISITOR_DATA"):B("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=B("VISITOR_DATA"));"cors"!==a&&((a=B("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=B("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=B("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),L("forward_domain_admin_state_on_embeds")&&(a=
B("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var kq=["share/get_web_player_share_panel"],lq=["feedback"],mq=["notification/modify_channel_preference"],nq=["browse/edit_playlist"],oq=["subscription/subscribe"],pq=["subscription/unsubscribe"];function qq(){}
r(qq,Lo);qq.prototype.j=function(){return oq};
qq.prototype.h=function(a){return a.subscribeEndpoint};
qq.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(qq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function rq(){}
r(rq,Lo);rq.prototype.j=function(){return pq};
rq.prototype.h=function(a){return a.unsubscribeEndpoint};
rq.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(rq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function sq(){}
r(sq,Lo);sq.prototype.j=function(){return lq};
sq.prototype.h=function(a){return a.feedbackEndpoint};
sq.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(sq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function tq(){}
r(tq,Lo);tq.prototype.j=function(){return mq};
tq.prototype.h=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
tq.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function uq(){}
r(uq,Lo);uq.prototype.j=function(){return nq};
uq.prototype.h=function(a){return a.playlistEditEndpoint};
uq.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function vq(){}
r(vq,Lo);vq.prototype.j=function(){return kq};
vq.prototype.h=function(a){return a.webPlayerShareEntityServiceEndpoint};
vq.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function wq(){}
wq.prototype.fetch=function(a,b){var c=this,d,e,f;return w(function(g){if(1==g.h){d=new window.Request(a,b);if(L("web_fetch_promise_cleanup_killswitch"))return g.return(Promise.resolve(fetch(d).then(function(h){return c.handleResponse(h)}).catch(function(h){En(h)})));
ua(g,3);return u(g,fetch(d),5)}if(3!=g.h)return e=g.i,g.return(c.handleResponse(e));f=xa(g);En(f);return g.return(void 0)})};
wq.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok||(b=b.then(function(c){En(new mk("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};var xq;function yq(a){Ol.call(this,1,arguments);this.csn=a}
r(yq,Ol);var Xl=new Pl("screen-created",yq),zq=[],Bq=Aq,Cq=0;function Dq(a,b,c,d,e,f,g){function h(){En(new mk("newScreen() parent element does not have a VE - rootVe",b))}
var k=Bq();f=new On({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,W:k};if(L("il_via_jspb")){var m=new vg;m.X(k);wg(m,f.getAsJspb());c&&c.visualElement?(f=new xg,c.clientScreenNonce&&G(f,2,c.clientScreenNonce),yg(f,c.visualElement.getAsJspb()),g&&G(f,4,ug[g]),H(m,5,f)):c&&h();d&&G(m,3,d);Pp(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?qj("screenCreated",f,a,e):jk("screenCreated",f,e);Ul(Xl,new yq(k));return k}
function Eq(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Xn(b),
W:b};d=q(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&En(Error("Child VE logged with no data"));if(L("il_via_jspb")){var h=new zg;h.X(b);Bg(h,c.getAsJspb());fb(e,function(k){k=k.getAsJspb();Qc(h,3,tg,k)});
"UNDEFINED_CSN"==b?Fq("visualElementAttached",h,f):Qp(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:fb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Fq("visualElementAttached",c,f):a?qj("visualElementAttached",c,a,f):jk("visualElementAttached",c,f)}
function Aq(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return zc(b,3)}
function Fq(a,b,c){zq.push({payloadName:a,payload:b,options:c});Cq||(Cq=Yl())}
function Zl(a){if(zq){for(var b=q(zq),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(L("il_via_jspb"))switch(c.payload.X(a.csn),c.payloadName){case "screenCreated":Pp(c.payload,c.options);break;case "visualElementAttached":Qp(c.payload,c.options);break;case "visualElementShown":Lp(c.payload,c.options);break;case "visualElementHidden":Mp(c.payload,c.options);break;case "visualElementGestured":Np(c.payload,c.options);break;case "visualElementStateChanged":Op(c.payload,c.options);break;default:En(new mk("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,qj(c.payloadName,c.payload,null,c.options);zq.length=0}Cq=0}
;function Gq(){this.i=new Set;this.h=new Set;this.j=new Map}
Gq.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ka(Gq);function Hq(){this.o=[];this.D=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.u=new Map}
function Iq(a,b,c){c=void 0===c?0:c;b.then(function(d){a.i.has(c)&&a.j&&a.j();var e=Vn(c),f=Tn(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Eq(a.client,e,f,[Pn(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Eq(a.client,e,f,[Pn(d.playerResponse.trackingParams)])}})}
function Jq(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=Vn(d);c=c||Tn(d);e&&c&&Eq(a.client,e,c,[b])}}
Hq.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Vn(void 0===c?0:c)){a=this.client;var e=Pn(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:Xn(c),W:c};if(L("il_via_jspb")){var g=new Cg;g.X(c);e=e.getAsJspb();H(g,2,e);G(g,4,ug[f]);b&&H(g,3,void 0);"UNDEFINED_CSN"==c?Fq("visualElementGestured",g,d):Np(g,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?Fq("visualElementGestured",f,d):a?qj("visualElementGestured",
f,a,d):jk("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Kq(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Lq(a,b,c);var f=Tn(c.layer);if(f){for(var g=q(a.o),h=g.next();!h.done;h=g.next())h=h.value,Jq(a,h[0],h[1]||f,c.layer);f=q(a.D);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Vn(g);var m=k[0]||Tn(g);if(h&&m){g=a.client;var n=k[1];k={cttAuthInfo:Xn(h),W:h};L("il_via_jspb")?(n=new Eg,n.X(h),m=m.getAsJspb(),H(n,2,m),"UNDEFINED_CSN"==h?Fq("visualElementStateChanged",n,k):Op(n,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:n},"UNDEFINED_CSN"==h?Fq("visualElementStateChanged",m,k):g?qj("visualElementStateChanged",m,g,k):jk("visualElementStateChanged",m,k))}}}};
Vn(c.layer)||a.j();if(c.sb)for(var d=q(c.sb),e=d.next();!e.done;e=d.next())Iq(a,e.value,c.layer);else Dn(Error("Delayed screen needs a data promise."))}
function Lq(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.ec?c.ec:c.layer;var e=Vn(d);d=Tn(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=B("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Dq(a.client,b,f,c.rb,c.cttAuthInfo,g,c.to)}catch(m){Fn(m,{Bo:b,rootVe:d,parentVisualElement:void 0,qo:e,xo:f,rb:c.rb});Dn(m);return}Yn(k,b,
c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=L("screen_manager_skip_hide_killswitch"))){a:{b=q(Object.values(Nn));for(f=b.next();!f.done;f=b.next())if(Vn(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:Xn(e),W:e,ub:g},L("il_via_jspb")?(h=new Dg,h.X(e),d=d.getAsJspb(),H(h,2,d),G(h,4,g?16:8),"UNDEFINED_CSN"==e?Fq("visualElementHidden",h,f):Mp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Fq("visualElementHidden",
d,f):b?qj("visualElementHidden",d,b,f):jk("visualElementHidden",d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Yp({clientScreenNonce:k});Gq.getInstance().clear();d=Tn(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(L("web_mark_root_visible")||L("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:Xn(e),W:e},L("il_via_jspb")?(b=new Dg,b.X(e),f=d.getAsJspb(),H(b,2,f),G(b,4,1),"UNDEFINED_CSN"==e?Fq("visualElementShown",b,k):Lp(b,k,void 0)):(b={csn:e,ve:d.getAsJson(),eventType:1},
"UNDEFINED_CSN"==e?Fq("visualElementShown",b,k):jk("visualElementShown",b,k)));a.i.delete(c.layer||0);a.j=void 0;e=q(a.u);for(k=e.next();!k.done;k=e.next())b=q(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Jq(a,k,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(m){Dn(m)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Dn(m)}}}
;function Mq(){var a;return w(function(b){if(1==b.h)return u(b,fq(),2);if(a=b.i)return a.errorMetadata?(Dn(Error("Datasync IDs fetch responded with "+a.errorMetadata.code+": "+a.error)),b.return(void 0)):b.return(a.ro);En(Error("Network request to get Datasync IDs failed."));return b.return(void 0)})}
;var Nq=x.caches,Oq;function Pq(a){var b=a.indexOf(":");return-1===b?{Cb:a}:{Cb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Qq(){return w(function(a){if(void 0!==Oq)return a.return(Oq);Oq=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return ua(d,2),u(d,Nq.open("test-only"),4);case 4:return u(d,Nq.delete("test-only"),5);case 5:wa(d,3);break;case 2:if(c=xa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Oq)})}
function Rq(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.h)return u(k,Qq(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return u(k,Nq.keys(),3)}c=k.i;d=q(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Pq(f),h=g.datasyncId,!h||a.includes(h)||b.push(Nq.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(n){return n})}))})}
;function Sq(){Mq().then(function(a){if(a&&(xl(a),Rq(a),L("clear_user_partitioned_ls"))){var b=void 0===b?{}:b;"_start"in bp("cupls")&&Z("aa",void 0,"cupls");var c=rp();c.cupls&&delete c.cupls;var d={timerName:"cupls",info:{},tick:{},span:{},jspbInfo:[]};pp().push(d);c.cupls=d;hp("cupls");$o();gp("cupls").useGel=!0;qp("cupls").info.actionType="cupls";b.cttAuthInfo&&(gp("cupls").cttAuthInfo=b.cttAuthInfo);hh("cuplsTIMING_ACTION","cupls");Z("_start",b.startTime,"cupls");b={actionType:yp("cupls")};(c=
Vn())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);Yp(b,"cupls");fp("cupls");Z("cuplss",void 0,"cupls");try{try{var e=!!self.localStorage}catch(t){e=!1}if(e)for(var f=Object.keys(window.localStorage),g=q(f),h=g.next();!h.done;h=g.next()){var k=h.value;var m=k.match(/(.*)::.*::.*/);var n=null!==m?m[1]:void 0;e=n;void 0===e||a.includes(e)||self.localStorage.removeItem(k)}Z("cuplsc",void 0,"cupls")}catch(t){Dn(t),Z("cuplse",void 0,"cupls")}}})}
function Tq(){var a=new Im;Ph.M(function(){a.G()?Sq():a.i.add("publicytnetworkstatus-online",Sq,!0,void 0,void 0)})}
;function Uq(a){a&&(a.dataset?a.dataset[Vq("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Wq(a,b){return a?a.dataset?a.dataset[Vq(b)]:a.getAttribute("data-"+b):null}
var Xq={};function Vq(a){return Xq[a]||(Xq[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Yq=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Zq=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function $q(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Yq,""),c=c.replace(Zq,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ar(a,b,c)}
function ar(a,b,c){c=void 0===c?null:c;var d=br(a),e=document.getElementById(d),f=e&&Wq(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Di(d,b),b=""+Oa(b),cr[b]=f),g||(e=dr(a,d,function(){Wq(e,"loaded")||(Uq(e),Gi(d),Fh(Va(Hi,d),0))},c)))}
function dr(a,b,c,d){d=void 0===d?null:d;var e=nd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);jd(e,of(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function er(a){a=br(a);var b=document.getElementById(a);b&&(Hi(a),b.parentNode.removeChild(b))}
function fr(a,b){a&&b&&(a=""+Oa(b),(a=cr[a])&&Fi(a))}
function br(a){var b=document.createElement("a");Qb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Vb(a)}
var cr={};var gr=[],hr=!1;function ir(){if(!L("disable_biscotti_fetch_for_ad_blocker_detection")&&!L("disable_biscotti_fetch_entirely_for_all_web_clients")&&jo()&&"1"!=qb()){var a=function(){hr=!0;"google_ad_status"in window?hh("DCLKSTAT",1):hh("DCLKSTAT",2)};
try{$q("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}gr.push(Ph.M(function(){if(!(hr||"google_ad_status"in window)){try{fr("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}hr=!0;hh("DCLKSTAT",3)}},5E3))}}
function jr(){var a=Number(B("DCLKSTAT",0));return isNaN(a)?0:a}
;function kr(){this.state=1;this.h=null}
l=kr.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Ab("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=xb())?f.createScript(e):e,e=(new Cb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Ab("From proto message. b/166824318"),d=Gb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());lr(this,e,
d,a.program,b,c)}else En(Error("Cannot initialize botguard without program"))};
function lr(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,$q(c,function(){window[g]?mr(a,d,g,e):(a.state=3,er(c),En(new mk("Unable to load Botguard","from "+c)))},f)):b&&(f=nd("SCRIPT"),f.textContent=b,f.nonce=Tb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?mr(a,d,g,e):(a.state=4,En(Error("Unable to load Botguard from JS"))))}
l.isInitialized=function(){return!!this.h};
l.getState=function(){return this.state};
function mr(a,b,c,d){a.state=5;if(L("use_bg_facade"))if(window[c])try{var e=new cd({program:b,globalName:c});e.vc.then(function(){a.state=6;d&&d(b)});
nr(a,e)}catch(k){k instanceof Error&&(a.state=7,En(k))}else a.state=7,En(Error("VM not loaded, cannot start"));else{var f,g,h;if(e=null!=(h=null==(f=window[c])?void 0:f.ad)?h:null==(g=window[c])?void 0:g.bg){try{nr(a,new e(b)),a.state=6}catch(k){a.state=7,k instanceof Error&&En(k)}d&&d(b)}else a.state=7,En(Error("Failed to finish initializing VM"))}}
l.invoke=function(a){a=void 0===a?{}:a;if(this.h){if(this.h.Jb)return this.h.Jb({qb:a});if(this.h.hot)return this.h.hot(void 0,void 0,a);if(this.h.invoke)return this.h.invoke(void 0,void 0,a);En(Error("VM has unknown interface"))}return null};
l.dispose=function(){nr(this,null);this.state=8};
function nr(a,b){Od(a.h);a.h=b}
;var or=new kr;function pr(){return or.isInitialized()}
function qr(a){a=void 0===a?{}:a;return or.invoke(a)}
;function rr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Oh():d;this.l=c;this.j=d;this.i=new bd;this.h=a;a={};c=q(this.h.entries());for(d=c.next();!d.done;a={va:a.va,Da:a.Da},d=c.next()){var e=q(d.value);d=e.next().value;e=e.next().value;a.Da=d;a.va=e;d=function(f){return function(){f.va.fb();b.h[f.Da].Ta=!0;b.h.every(function(g){return!0===g.Ta})&&b.i.resolve()}}(a);
e=Kh(d,sr(this,a.va));this.h[a.Da]=Object.assign({},a.va,{fb:d,Oa:e})}}
function tr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return sr(a,a.h[e])-sr(a,a.h[d])});
b=q(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.Oa||c.Ta||(a.j.U(c.Oa),Kh(c.fb,10))}
rr.prototype.cancel=function(){for(var a=q(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Oa||b.Ta||this.j.U(b.Oa),b.Ta=!0;this.i.resolve()};
function sr(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function ur(a){this.state=a;this.plugins=[];this.m=void 0}
ur.prototype.install=function(){this.plugins.push.apply(this.plugins,fa(Ga.apply(0,arguments)))};
ur.prototype.transition=function(a,b){var c=this,d=this.D.find(function(f){return f.from===c.state&&f.B===a});
if(d){this.j&&(tr(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(vr(this,e,this.m),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function vr(a,b,c){return function(){var d=Ga.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
Oh();var g={};e=q(e);for(var h=e.next();!h.done;g={Ea:g.Ea},h=e.next())g.Ea=h.value,Mh(function(k){return function(){k.Ea.la.apply(k.Ea,fa(d))}}(g));
f=f.map(function(k){var m;return{fb:function(){k.la.apply(k,fa(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.j=new rr(f))}}
da.Object.defineProperties(ur.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function wr(a){ur.call(this,void 0===a?"document_active":a);var b=this;this.m=10;this.h=new Map;this.D=[{from:"document_active",B:"document_disposed_preventable",action:this.u},{from:"document_active",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"flush_logs",action:this.o},{from:"document_disposed_preventable",B:"document_active",action:this.i},{from:"document_disposed",B:"flush_logs",action:this.o},
{from:"document_disposed",B:"document_active",action:this.i},{from:"document_disposed",B:"document_disposed",action:function(){}},
{from:"flush_logs",B:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",c)});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",c)})}
r(wr,ur);wr.prototype.u=function(a,b){if(!this.h.get("document_disposed_preventable")&&(a(b),(null==b?0:b.defaultPrevented)||(null==b?0:b.returnValue))){b.returnValue||(b.returnValue=!0);b.defaultPrevented||b.preventDefault();this.h=new Map;this.transition("document_active");return}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
wr.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
wr.prototype.o=function(a,b){a(b);this.transition("document_active")};
wr.prototype.i=function(){this.h=new Map};function xr(a){ur.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.D=[{from:"document_visibility_unknown",B:"document_visible",action:this.i},{from:"document_visibility_unknown",B:"document_hidden",action:this.h},{from:"document_visibility_unknown",B:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",B:"document_backgrounded",action:this.l},{from:"document_visible",B:"document_hidden",action:this.h},{from:"document_visible",B:"document_foregrounded",action:this.o},
{from:"document_visible",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_hidden",action:this.h},{from:"document_foregrounded",B:"document_foregrounded",action:this.o},{from:"document_hidden",B:"document_visible",action:this.i},{from:"document_hidden",B:"document_backgrounded",action:this.l},{from:"document_hidden",B:"document_hidden",action:this.h},{from:"document_backgrounded",B:"document_hidden",action:this.h},
{from:"document_backgrounded",B:"document_backgrounded",action:this.l},{from:"document_backgrounded",B:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",c):b.transition("document_hidden",c)});
L("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",c)}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",c)}))}
r(xr,ur);xr.prototype.i=function(a,b){a(b);L("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
xr.prototype.h=function(a,b){a(b);L("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
xr.prototype.l=function(a,b){a(b)};
xr.prototype.o=function(a,b){a(b)};function yr(){this.h=new wr;this.i=new xr}
yr.prototype.install=function(){var a=Ga.apply(0,arguments);this.h.install.apply(this.h,fa(a));this.i.install.apply(this.i,fa(a))};function zr(){yr.call(this);var a={};this.install((a.document_disposed={la:this.j},a));a={};this.install((a.flush_logs={la:this.l},a))}
var Ar;r(zr,yr);zr.prototype.l=function(){jk("finalPayload",{csn:Vn()})};
zr.prototype.j=function(){Hn(In)};function Br(){}
Br.getInstance=function(){var a=A("ytglobal.storage_");a||(a=new Br,y("ytglobal.storage_",a,void 0));return a};
Br.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Cr()):d.return()})};
function Cr(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
y("ytglobal.storageClass_",Br,void 0);function hk(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=kh("ytidb_transaction_ended_event_rate_limit",.02)}
hk.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":L("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":L("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Dr(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Dr(a,b){Br.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Er(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Er(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Er(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var Fr=window;
function Gr(){var a=Fr.uaChPolyfill.state;if(0===a.type)jk("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Dn(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);jk("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),jk("clientHintsPolyfillDiagnostics",
b))}}
var Hr=!1;function Ir(){var a;1===(null==(a=Fr.uaChPolyfill)?void 0:a.state.type)?Hr||(Fr.uaChPolyfill.onReady=Ir,Hr=!0):Fr.uaChPolyfill&&Gr()}
;function Jr(a,b,c){J.call(this);var d=this;c=c||B("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.K="*";this.l=c;this.sessionId=null;this.channel="widget";this.L=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.L&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.K=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=cb(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
r(Jr,J);Jr.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.K)}catch(d){vh(d)}}};
Jr.prototype.H=function(){window.removeEventListener("message",this.A);J.prototype.H.call(this)};function Kr(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Jr(!!B("WIDGET_ID_ENFORCE")),b=this.hc.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=B("WIDGET_ID"))this.h.sessionId=a}
l=Kr.prototype;l.hc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Lr(this,a)),this.j[a]=!0)):this.lb(a,b,c)};
l.lb=function(){};
function Lr(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Vb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Za());this.sendMessage("onReady");db(this.i,this.Ib,this);this.i=[]};
l.Za=function(){return null};
function Mr(a,b){a.sendMessage("infoDelivery",b)}
l.Ib=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Ib({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};function Nr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Or(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Pr(a,b,c,d){if(Na(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Qr(a){Kr.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.sc.bind(this));this.addEventListener("onVolumeChange",this.tc.bind(this));this.addEventListener("onApiChange",this.lc.bind(this));this.addEventListener("onPlaybackQualityChange",this.oc.bind(this));this.addEventListener("onPlaybackRateChange",this.pc.bind(this));this.addEventListener("onStateChange",this.qc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.uc.bind(this))}
r(Qr,Kr);l=Qr.prototype;
l.lb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Nr(a)){var d=b;if(Na(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Or(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Or(e);break;case "loadPlaylist":case "cuePlaylist":e=Pr(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Nr(a)&&Mr(this,this.Za())}};
l.onReady=function(){var a=this.Vb.bind(this);this.h.i=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Za=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.qc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Mr(this,a)};
l.oc=function(a){Mr(this,{playbackQuality:a})};
l.pc=function(a){Mr(this,{playbackRate:a})};
l.lc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.tc=function(){Mr(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.sc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Mr(this,a)};
l.uc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Mr(this,a)};
l.dispose=function(){Kr.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Rr(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Eb,this)}
r(Rr,J);l=Rr.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.na("RECEIVING"))};
l.na=function(a,b){this.started&&!this.h()&&this.connection.na(a,b)};
l.Eb=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Sr(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Tr(a,c))&&this.na(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.mc.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.mc=function(a,b){this.started&&!this.h()&&this.connection.na(a,this.Ya(a,b))};
l.Ya=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.H=function(){var a=this.connection;a.h()||Pf(a.i,"command",this.Eb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.H.call(this)};function Ur(a,b){Rr.call(this,b);this.api=a;this.start()}
r(Ur,Rr);Ur.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Ur.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Sr(a,b){switch(a){case "loadVideoById":return a=Or(b),[a];case "cueVideoById":return a=Or(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Pr(b),[a];case "cuePlaylist":return a=Pr(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Tr(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ur.prototype.Ya=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Rr.prototype.Ya.call(this,a,b)};
Ur.prototype.H=function(){Rr.prototype.H.call(this);delete this.api};function Vr(a){a=void 0===a?!1:a;J.call(this);this.i=new K(a);Qd(this,Va(Od,this.i))}
Xa(Vr,J);Vr.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Vr.prototype.l=function(a,b){this.h()||this.i.ka.apply(this.i,arguments)};function Wr(a,b,c){Vr.call(this);this.j=a;this.destination=b;this.id=c}
r(Wr,Vr);Wr.prototype.na=function(a,b){this.h()||this.j.na(this.destination,this.id,a,b)};
Wr.prototype.H=function(){this.destination=this.j=null;Vr.prototype.H.call(this)};function Xr(a,b,c){J.call(this);this.destination=a;this.origin=c;this.i=Ch(window,"message",this.j.bind(this));this.connection=new Wr(this,a,b);Qd(this,Va(Od,this.connection))}
r(Xr,J);Xr.prototype.na=function(a,b,c,d){this.h()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(qf(a),this.origin))};
Xr.prototype.j=function(a){var b;if(b=!this.h())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h()||c.l("command",b.command,b.data,a.origin))}};
Xr.prototype.H=function(){Dh(this.i);this.destination=null;J.prototype.H.call(this)};function Yr(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sb(b);this.assets=a.assets||{};this.attrs=a.attrs||sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Yr.prototype.clone=function(){var a=new Yr,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=sb(c):a[b]=c}return a};var Zr=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function $r(a){a=a||"";if(window.spf){var b=a.match(Zr);spf.style.load(a,b?b[1]:"",void 0)}else as(a)}
function as(a){var b=bs(a),c=document.getElementById(b),d=c&&Wq(c,"loaded");d||c&&!d||(c=cs(a,b,function(){Wq(c,"loaded")||(Uq(c),Gi(b),Fh(Va(Hi,b),0))}))}
function cs(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=of(a);Rb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function bs(a){var b=nd("A");Ab("This URL is never added to the DOM");Qb(b,new Ib(a,Jb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Vb(a)}
;function ds(){J.call(this);this.i=[]}
r(ds,J);ds.prototype.H=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.la,void 0)}J.prototype.H.call(this)};function es(){ds.apply(this,arguments)}
r(es,ds);function fs(a,b,c,d){J.call(this);var e=this;this.L=b;this.webPlayerContextConfig=d;this.Va=!1;this.api={};this.Fa=this.u=null;this.S=new K;this.i={};this.ga=this.Ga=this.elementId=this.Wa=this.config=null;this.Y=!1;this.l=this.A=null;this.Ha={};this.Mb=["onReady"];this.lastError=null;this.mb=NaN;this.K={};this.Nb=new es(this);this.qa=0;this.j=this.m=a;Qd(this,Va(Od,this.S));gs(this);hs(this);Qd(this,Va(Od,this.Nb));c?this.qa=Fh(function(){e.loadNewVideoConfig(c)},0):d&&(is(this),js(this))}
r(fs,J);l=fs.prototype;l.getId=function(){return this.L};
l.loadNewVideoConfig=function(a){if(!this.h()){this.qa&&(Gh(this.qa),this.qa=0);var b=a||{};b instanceof Yr||(b=new Yr(b));this.config=b;this.setConfig(a);js(this);this.isReady()&&ks(this)}};
function is(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.L,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.L:a.config.attrs.id=a.L);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.Wa=a;this.config=ls(a);is(this);if(!this.Ga){var b;this.Ga=ms(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=yd(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=yd(Number(a)||a))};
function ks(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function ns(a){var b=!0,c=os(a);c&&a.config&&(a=ps(a),b=Wq(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function js(a){if(!a.h()&&!a.Y){var b=ns(a);if(b&&"html5"===(os(a)?"html5":null))a.ga="html5",a.isReady()||qs(a);else if(rs(a),a.ga="html5",b&&a.l&&a.m)a.m.appendChild(a.l),qs(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=ss(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?ls(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);qs(a)};
a.Y=!0;b?a.A():($q(ps(a),a.A),(b=ts(a))&&$r(b),us(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function os(a){var b=md(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function qs(a){if(!a.h()){var b=os(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!ss(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}vs(a)}else a.mb=Fh(function(){qs(a)},50)}}
function vs(a){gs(a);a.Va=!0;var b=os(a);if(b){a.u=ws(a,b,"addEventListener");a.Fa=ws(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=ws(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);ks(a);a.Ga&&a.Ga(a.api);a.S.ka("onReady",a.api)}
function ws(a,b,c){var d=b[c];return function(){var e=Ga.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,En(f))}}}
function gs(a){a.Va=!1;if(a.Fa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Fa(b,a.i[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&Gh(Number(c));a.K={};a.u=null;a.Fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Wa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Va};
function hs(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Gi("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Gi("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Gi("a11y-announce",b)})}
l.addEventListener=function(a,b){var c=this,d=ms(this,b);d&&(0<=cb(this.Mb,a)||this.i[a]||(b=xs(this,a),this.u&&this.u(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&Fh(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=ms(this,b))&&Pf(this.S,a,b)};
function ms(a,b){var c=b;if("string"===typeof b){if(a.Ha[b])return a.Ha[b];c=function(){var d=Ga.apply(0,arguments),e=A(b);if(e)try{e.apply(x,d)}catch(f){Dn(f)}};
a.Ha[b]=c}return c?c:null}
function xs(a,b){var c="ytPlayer"+b+a.L;a.i[b]=c;x[c]=function(d){var e=Fh(function(){if(!a.h()){a.S.ka(b,null!=d?d:void 0);var f=a.K,g=String(e);g in f&&delete f[g]}},0);
pb(a.K,String(e))};
return c}
l.getPlayerType=function(){return this.ga||(os(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function rs(a){a.cancel();gs(a);a.ga=null;a.config&&(a.config.loaded=!1);var b=os(a);b&&(ns(a)||!us(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.A&&fr(ps(this),this.A);Gh(this.mb);this.Y=!1};
l.H=function(){rs(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Dn(b)}this.Ha=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(x[this.i[a]]=null);this.Wa=this.config=this.api=null;delete this.m;delete this.j;J.prototype.H.call(this)};
function us(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function ps(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function ts(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function ss(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===$h(c||"","&")[b]}
function ls(a){for(var b={},c=q(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?sb(e):e}return b}
;var ys={},zs="player_uid_"+(1E9*Math.random()>>>0);function As(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?md(d):d;var e=zs+"_"+Oa(d),f=ys[e];if(f&&c)return Bs(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new fs(d,e,a,b);ys[e]=f;Gi("player-added",f.api);Qd(f,function(){delete ys[f.getId()]});
return f.api}
function Bs(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Cs=null,Ds=null,Es=null;function Fs(){var a=Cs.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Gs(a,b,c){a="ST-"+Vb(a).toString(36);b=b?ac(b):"";c=c||5;jo()&&vj(a,b,c)}
;function Hs(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=B("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=B("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Yb(window.location.href);g&&f.push(g);g=Yb(d);if(0<=cb(f,g)||!g&&0==d.lastIndexOf("/",0))if(L("autoescape_tempdata_url")&&(f=document.createElement("a"),Qb(f,d),d=f.href),d&&(d=Zb(d),f=d.indexOf("#"),d=0>f?d:d.substr(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Vn()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Gs(d,b,h)}else Gs(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var n=void 0===n?window:n;c=n.location;a=bc(a,k)+m;var t=void 0===t?xd:t;a:{t=void 0===t?xd:t;for(k=0;k<t.length;++k)if(m=t[k],m instanceof vd&&m.isValid(a)){t=new gd(a,ed);break a}t=void 0}c.href=id(t||hd)}return!0}
;y("yt.setConfig",hh,void 0);y("yt.config.set",hh,void 0);y("yt.setMsg",$n,void 0);y("yt.msgs.set",$n,void 0);y("yt.logging.errors.log",Dn,void 0);
y("writeEmbed",function(){var a=B("PLAYER_CONFIG",void 0);if(!a){var b=B("PLAYER_VARS",void 0);b&&(a={args:b})}ro(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=B("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);L("embeds_js_api_set_1p_cookie")&&(c=ei(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));Vp();
if((c=B("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=ei(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Cs=As(a,c,!1)}else Cs=As(a);Cs.addEventListener("onVideoDataChange",Fs);a=B("POST_MESSAGE_ID","player");B("ENABLE_JS_API")?Es=new Qr(Cs):B("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Ds=new Xr(window.parent,
a,b),Es=new Ur(Cs,Ds.connection));ir();L("ytidb_create_logger_embed_killswitch")||gk();L("flush_gel_on_teardown")&&(a={},Ar||(Ar=new zr),Ar.install((a.flush_logs={la:function(){Zi()}},a)));
L("networkless_logging_web_embedded")&&(L("embeds_web_enable_new_nwl")?Om():Wm());L("embeds_enable_ua_ch_polyfill")&&Ir();L("ytidb_clear_embedded_player")&&Ph.M(function(){if(!xq){var e={pb:{feedbackEndpoint:Go(sq),modifyChannelNotificationPreferenceEndpoint:Go(tq),playlistEditEndpoint:Go(uq),subscribeEndpoint:Go(qq),unsubscribeEndpoint:Go(rq),webPlayerShareEntityServiceEndpoint:Go(vq)}},f=L("web_enable_client_location_service")?Co.getInstance():void 0,g=[],h={};f&&(g.push(f),h.client_location=f);
if(void 0===k){so.h||(so.h=new so);var k=so.h}if(void 0===m){wq.h||(wq.h=new wq);var m=wq.h}eq(e,m,k,g,h);xq=dq.h}Tq()})},void 0);
var Is=th(function(){aq();var a=zj.getInstance(),b=Cj(119),c=1<window.devicePixelRatio;if(document.body&&Ye(document.body,"exp-invert-logo"))if(c&&!Ye(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ye(d,"inverted-hdpi")){var e=We(d);Xe(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ye(document.body,"inverted-hdpi")&&Ze();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Dj(b)||0;d=c?d|67108864:d&-67108865;0==d?delete yj[b]:(c=d.toString(16),
yj[b]=c.toString());c=!0;L("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in yj)d.push(f+"="+encodeURIComponent(String(yj[f])));vj(b,d.join("&"),63072E3,a.i,c)}Hq.h||(Hq.h=new Hq);a=Hq.h;f=16623;var g=void 0===g?{}:g;Object.values(ao).includes(f)||(En(new mk("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.D=[];g.sb?Kq(a,f,g):Lq(a,f,g)}),Js=th(function(){Cs&&Cs.sendAbandonmentPing&&Cs.sendAbandonmentPing();
B("PL_ATT")&&or.dispose();for(var a=0,b=gr.length;a<b;a++)Ph.U(gr[a]);gr.length=0;er("//static.doubleclick.net/instream/ad_status.js");hr=!1;hh("DCLKSTAT",0);Pd(Es,Ds);Cs&&(Cs.removeEventListener("onVideoDataChange",Fs),Cs.destroy())});
window.addEventListener?(window.addEventListener("load",Is),window.addEventListener("unload",Js)):window.attachEvent&&(window.attachEvent("onload",Is),window.attachEvent("onunload",Js));Wa("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||pr);Wa("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||qr);Wa("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||jr);
Wa("yt.player.exports.navigate",A("yt.player.exports.navigate")||Hs);Wa("yt.util.activity.init",A("yt.util.activity.init")||Rh);Wa("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||Uh);Wa("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||Sh);}).call(this);
