#include<stdio.h>

void sort(int n,int* array);

int main()
{
    int n = 7;
    int arr[7] = { 0, 25, 10, 17, 6, 12, 9 };
    sort(n, arr);
    for(int i=0;i<7;i++)
    {
        printf("%i\t",arr[i]);
    }
    printf("\n");
return 0;
}

void sort(int n,int* array)
{
    int temp;
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n-i-1;j++)
        {
            if(*(array+j)>*(array+j+1))
            {
                    temp = *(array+j);
                    *(array+j) = *(array+j+1);
                    *(array+j+1) = temp;
            }
        }
    }
}
