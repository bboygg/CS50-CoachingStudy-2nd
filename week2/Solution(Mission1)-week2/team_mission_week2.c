#include<stdio.h>
#include<cs50.h>
#include<string.h>
#include<time.h>
#include<stdlib.h>

//function prototyping
void printTempTime();
void printLogo();
void printMain();
void screenClear();
void printMainMenu();
void initProgram();
void ChrP2String(string* dst,char* src);


//global variables
// 전역변수 선언
// UI 페이지, 총 상품 갯수
int phase = 0;
int selector = 0;
int itemAmount=0;
int salelogAmount=0;
char flag;

//define structure 
typedef struct product{

    // 구조체 정보
    // 품목번호    : int
    // 품목명      : string
    // 가격        : int
    // 수량        : int
    // 월판매량    : int

    int SKU;
    string Description;
    int Price;
    int Qty;
    int tempQty;
    int salesPerMonth;
}PRODUCT;
typedef struct salerecord{

    // 구조체 정보
    // 품목번호    : int
    // 품목명      : string
    // 판매수량        : int
    int SKU;
    string Description;
    int saleQty;
    int Price;
}SALERECORD;


PRODUCT item[100];
SALERECORD salelog[100];

//main function
int main()
{
    // 저장된 데이터베이스 파일을 읽을 파일포인터 선언
    FILE* stockDataBase = fopen("stock_database.txt","r+");
    FILE* saleDataBase = fopen("sale_database.txt","r+");

    // 데이터베이스를 읽어올 버퍼 선언
    char tempData[100];
    char* tempStr = NULL;
    // 파일에 기록 저장시 사용하는 버퍼 선언
    char buf[100] ={0,};

    //read database file
    // database.txt에 csv 형태로 저장된 데이터를 , 기준으로 파싱해 구조체에 저장
    // EOF(End of File)까지 데이터를 읽어옴
    while(fgets(tempData,sizeof(tempData),stockDataBase))
    {
        tempStr = strtok(tempData, ",");
        item[itemAmount].SKU=atoi(tempStr);
        tempStr = strtok(NULL, ",");
        ChrP2String(&item[itemAmount].Description,tempStr);
        tempStr = strtok(NULL, ",");
        item[itemAmount].Price=atoi(tempStr);
        tempStr = strtok(NULL, ",");
        item[itemAmount].Qty=atoi(tempStr);
        tempStr = strtok(NULL, ",");
        item[itemAmount].salesPerMonth=atoi(tempStr);
        itemAmount++;
    }

    while(fgets(tempData,sizeof(tempData),saleDataBase))
    {
        tempStr = strtok(tempData, ",");
        salelog[salelogAmount].SKU=atoi(tempStr);
        tempStr = strtok(NULL, ",");
        ChrP2String(&salelog[salelogAmount].Description,tempStr);
        tempStr = strtok(NULL, ",");
        salelog[salelogAmount].saleQty=atoi(tempStr);
        salelogAmount++;
    }

    while(1)
    {
        if(phase == 0)
        {
            // 메인메뉴
            printMain();
            phase = get_int("입력:");
        }

        else if(phase==1)
        {
            // 1번 재고관리
            screenClear();

            for(int i=0;i<itemAmount;i++)
            {
                item[i].tempQty = item[i].Qty;
                for(int j=0;j<salelogAmount;j++)
                {
                    if(item[i].SKU == salelog[j].SKU)
                    {
                        salelog[j].Price = item[i].Price;
                        item[i].tempQty -= salelog[j].saleQty;
                    }
                }
            }


            printf("-----------------------------------------------------------------------------------------------------\n");
            printf("|%19s|%19s|%19s|%19s|%19s|\n","SKU","Description","Price","Qty","salesPerMonth");
            printf("-----------------------------------------------------------------------------------------------------\n");
            
            for(int i=0;i<itemAmount;i++)
            {
                printf("|%19d|%19s|%19d|%19d|%19d|",item[i].SKU,item[i].Description,item[i].Price,item[i].tempQty,item[i].salesPerMonth);
                           
            // 구매 우선도별 폰트색상 변경

            if(item[i].Qty - item[i].salesPerMonth < 0)
            {
                printf("%c[1;31m",27);
                printf("\t<- 추가 구매필요\n");
                printf("%c[0m",27);
            }
            else if(item[i].Qty - item[i].salesPerMonth < item[i].salesPerMonth)
            {
                printf("%c[1;33m",27);
                printf("\t<- 추가 구매권장\n");
                printf("%c[0m",27);
            }
            else
            {
                printf("%c[1;32m",27);
                printf("\t<- 재고량 양호\n");
                printf("%c[0m",27);
            }

                printf("-----------------------------------------------------------------------------------------------------\n");
            }
            while('y'!=get_char("이전 메뉴[y] :"));
            phase=0;
        }
        else if(phase==2){
            // 2번 구매 메뉴
            // 입력 받은 후 정보 확인 후 추가할지 안할지 선택
            screenClear();
            item[itemAmount].SKU = get_int("상품SKU : ");
            item[itemAmount].Description= get_string("상품이름 :");
            item[itemAmount].Price= get_int("상품가격 :");
            item[itemAmount].Qty= get_int("상품개수 :");
            item[itemAmount].salesPerMonth= get_int("월판매량 :");

            screenClear();

            printf("-----------------------------------------------------------------------------------------------------\n");
            printf("|%19s|%19s|%19s|%19s|%19s|\n","SKU","Description","Price","Qty","salesPerMonth");
            printf("-----------------------------------------------------------------------------------------------------\n");
            printf("|%19d|%19s|%19d|%19d|%19d|\n",item[itemAmount].SKU,item[itemAmount].Description,item[itemAmount].Price,item[itemAmount].Qty,item[itemAmount].salesPerMonth);
            printf("-----------------------------------------------------------------------------------------------------\n\n\n");

            flag = get_char("위 항목을 추가할까요?[y/n]");
            if(flag=='y')
            {
                sprintf(buf,"%d,%s,%d,%d,%d\n",item[itemAmount].SKU,item[itemAmount].Description,item[itemAmount].Price,item[itemAmount].Qty,item[itemAmount].salesPerMonth);
                fputs(buf,stockDataBase);
                itemAmount++;
            }

            phase = 0;
        }
        else if(phase==3){
            // 3번 판매 메뉴
            screenClear();

            for(int i=0;i<itemAmount;i++)
            {
                for(int j=0;j<salelogAmount;j++)
                {
                    if(item[i].SKU == salelog[j].SKU)
                    {
                        item[i].Qty -= salelog[j].saleQty;
                    }
                }
            }


            printf("-----------------------------------------------------------------------------------------------------\n");
            printf("|%19s|%19s|%19s|%19s|%19s|\n","SKU","Description","Price","Qty","salesPerMonth");
            printf("-----------------------------------------------------------------------------------------------------\n");
            
            for(int i=0;i<itemAmount;i++)
            {
                printf("|%19d|%19s|%19d|%19d|%19d|",item[i].SKU,item[i].Description,item[i].Price,item[i].Qty,item[i].salesPerMonth);
                           
            // 구매 우선도별 폰트색상 변경

            if(item[i].Qty - item[i].salesPerMonth < 0)
            {
                printf("%c[1;31m",27);
                printf("\t<- 추가 구매필요\n");
                printf("%c[0m",27);
            }
            else if(item[i].Qty - item[i].salesPerMonth < item[i].salesPerMonth)
            {
                printf("%c[1;33m",27);
                printf("\t<- 추가 구매권장\n");
                printf("%c[0m",27);
            }
            else
            {
                printf("%c[1;32m",27);
                printf("\t<- 재고량 양호\n");
                printf("%c[0m",27);
            }

                printf("-----------------------------------------------------------------------------------------------------\n");
            }
            printf("\n");


            salelog[salelogAmount].SKU = get_int("상품SKU : ");

            for(int i=0;i<itemAmount;i++)
            {
                if(item[i].SKU == salelog[salelogAmount].SKU)
                {
                    printf("상품이름 :%s\n",item[i].Description);
                    salelog[salelogAmount].Description = item[i].Description;
                    printf("상품 현재재고 : %d\n",item[i].Qty);
                    break;
                }
            }
            salelog[salelogAmount].saleQty= get_int("판매개수 :");

            printf("-------------------------------------------------------------\n");
            printf("|%19s|%19s|%19s|\n","SKU","Description","saleQty");
            printf("-------------------------------------------------------------\n");
            printf("|%19d|%19s|%19d|\n",salelog[salelogAmount].SKU,salelog[salelogAmount].Description,salelog[salelogAmount].saleQty);
            printf("-------------------------------------------------------------\n\n\n");
            
            flag = get_char("위 항목을 추가할까요?[y/n]");
            if(flag=='y')
            {
                sprintf(buf,"%d,%s,%d\n",salelog[salelogAmount].SKU,salelog[salelogAmount].Description,salelog[salelogAmount].saleQty);
                fputs(buf,saleDataBase);
                salelogAmount++;
            }
            phase = 0;
        }
        else if(phase==4){
            // 4번 보고서 메뉴
            for(int i=0;i<itemAmount;i++)
            {
                for(int j=0;j<salelogAmount;j++)
                {
                    if(item[i].SKU == salelog[j].SKU)
                    {
                        salelog[j].Price = item[i].Price;
                    }
                }
            }

            int totalRevenue = 0;            

            printf("---------------------------------------------------------------------------------\n");
            printf("|%19s|%19s|%19s|%19s|\n","SKU","Description","saleQty","Revenue");
            for(int i=0;i<salelogAmount;i++)
            {
                printf("---------------------------------------------------------------------------------\n");
                printf("|%19d|%19s|%19d|%19d|\n",salelog[i].SKU,salelog[i].Description,salelog[i].saleQty,salelog[i].Price * salelog[i].saleQty);
                totalRevenue+=salelog[i].Price * salelog[i].saleQty;
            }
            printf("---------------------------------------------------------------------------------\n");
            printf("total order : %6d%36stotal revenue : %9.1f\n",salelogAmount+1," ",totalRevenue*1.1);
            while('y'!=get_char("이전 메뉴[y] :"));
            phase=0;
        }
        else if(phase==5)
        {
            // 5번 종료
            fclose(saleDataBase);
            fclose(stockDataBase);
            screenClear();
            return 0;
        }   
    }
    return 0;
}


void screenClear()
{
    // 터미널 ESC 명령어 이용 
    // 터미널 화면 clear
    printf("\e[1;1H\e[2J");
}
void printMain()
{
    screenClear();
    printLogo();
    printMainMenu();
}
void printLogo()
{
    // 터미널 ESC 명령어 이용 
    // 문자색깔 36 밝은 파랑색
    // 로고출력
    printf("%c[1;36m",27);
    printf("%30s  ___   ____   ____      _        _ _\n"," ");
    printf("%30s / _ \\ / ___| |  _ \\ ___| |_ __ _(_) |\n"," ");
    printf("%30s| (_) | |  _  | |_) / _ \\ __/ _` | | |\n"," ");
    printf("%30s \\__, | |_| | |  _ <  __/ || (_| | | |\n"," ");
    printf("%30s   /_/ \\____| |_| \\_\\___|\\__\\__,_|_|_|\n"," "); 
    printf("%c[0m",27);
}
void printMainMenu()
{
    printf("\n\n%45s1. 재고관리\n"," ");
    printf("%45s2. 구매\n"," ");
    printf("%45s3. 판매\n"," ");   
    printf("%45s4. 보고서\n"," ");   
    printf("%45s5. 종료\n\n"," ");   
}
void printTempTime()
{
    // 시간출력 테스트용 함수
    // 신경 안써도됌
    // 터미널 폰트 색깔코드 저장용
    time_t t = time(NULL);
    struct tm tm = *localtime(&t);
    printf("%c[1;32m",27);
    printf("now: %d-%d-%d %d:%d:%d\n",
            tm.tm_year+1900, tm.tm_mon+1, tm.tm_mday,
            tm.tm_hour, tm.tm_min, tm.tm_sec);
    printf("%c[0m",27);

    printf("%c[1;33m",27);
    printf("now: %d-%d-%d %d:%d:%d\n",
            tm.tm_year+1900, tm.tm_mon+1, tm.tm_mday,
            tm.tm_hour, tm.tm_min, tm.tm_sec);
    printf("%c[0m",27);

    printf("%c[1;31m",27);
    printf("now: %d-%d-%d %d:%d:%d\n",
            tm.tm_year+1900, tm.tm_mon+1, tm.tm_mday,
            tm.tm_hour, tm.tm_min, tm.tm_sec);
    printf("%c[0m",27);

    printf("%c[1;36m",27);
    printf("now: %d-%d-%d %d:%d:%d\n",
            tm.tm_year+1900, tm.tm_mon+1, tm.tm_mday,
            tm.tm_hour, tm.tm_min, tm.tm_sec);
    printf("%c[0m",27);

}

void ChrP2String(string* dst,char* src)
{
    // char 포인터를 string으로 바꿔주는 함수
    int cnt=0;
    string temp = malloc(sizeof(string) * (strlen(src)+1));
    while(src[cnt]!='\0')
    {
        temp[cnt] = src[cnt];
        cnt++;
    }
    *dst = temp;
}
