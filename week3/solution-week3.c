//1번 문제 코드입니다. 

#include <cs50.h>
#include <stdio.h>


const int NUM_OF_GRADES = 9;
const int SCORES[NUM_OF_GRADES] = {95, 90, 85, 80, 75, 70, 65, 60, 0};
const string GRADES[NUM_OF_GRADES] = {"A+","A","B+","B","C+","C","D+","D","F"};
const int EXIT = 999;

int main(void) {
printf("학점 프로그램\n\n");


printf("종료를 원하면 %i 를 입력\n\n", EXIT);


printf("[학점 테이블]\n");

printf("점수: ");

for(int i=0,n = NUM_OF_GRADES ; i<n ; i++){
printf("%10i",SCORES[i]);
}printf("\n");

printf("학점: ");

for(int i = 0, n = NUM_OF_GRADES; i<n ; i++){
printf("%10s",GRADES[i]);
}printf("\n");


while(1){

int input = get_int("성적을 입력하세요 (0~100) : ");
if( input == EXIT){
printf("프로그램을 종료합니다.\n");
return 0;
}
if( input < 0 || input > 100 ){
printf("성적을 올바르게 입력하세요! (0~100)\n");
}else if (input < 60){
printf("학점은 F 입니다.\n");
}else if(input < 65){
printf("학점은 D 입니다.\n");
}else if(input < 70){
printf("학점은 D+ 입니다.\n");
}else if(input < 75){
printf("학점은 C 입니다.\n");
}else if(input < 80){
printf("학점은 C+ 입니다.\n");
}else if(input < 85){
printf("학점은 B 입니다.\n");
}else if(input < 90){
printf("학점은 B+ 입니다.\n");
}else if(input < 95){
printf("학점은 A 입니다.\n");
}else
printf("학점은 A+ 입니다.\n");

}
}
