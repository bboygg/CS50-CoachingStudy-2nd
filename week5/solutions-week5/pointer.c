#include<stdio.h>

int main()
{

    int arr[6][5] = {{1, 2, 3, 4, 5}, {6, 7, 8, 9, 10}, {11, 12, 13, 14, 15},{16, 17, 18, 19, 20}, {21, 22, 23, 24, 25}, {26, 27, 28, 29, 30}};


    for(int i=5;i>=0;i--)
    {
     for(int j=4;j>=0;j--)
     {
         printf("%d\t",*(*(arr+i)+j));
     }
        printf("\n");
    }


    return 0;
}
