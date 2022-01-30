#include <stdio.h>
#include <cs50.h>
#include <string.h>

void bubble_sort(char* array);

void swap(char* a, char* b);

int main()
{
    char input_a[100] = "123456789";
    char input_b[100] = "918273645";


    printf("입력값: %s, %s ==> 출력값:  ", input_a, input_b );

    bubble_sort(input_b);


    if(strcmp(input_a,input_b) == 0)
    {
        printf("True\n");

    }else printf("Flase\n");

    return 0;
}

void bubble_sort(char* array)
{
    for(int i = 0 ; i < strlen(array) ; i++)
    {
        for(int j = 0 ; j < strlen(array) - i - 1 ; j++)
        {
            if(array[j] > array[j+1])
            {
                swap(&array[j], &array[j+1]);
            }
        }
    }
}

void swap(char* a,char* b)
{
    char temp;
    temp = *a;
    *a = *b;
    *b = temp;
}

