#include <stdio.h>
#include <cs50.h>
#include <string.h>

void selection_sort(char* array);

void swap(char* a, char* b);

int main()
{
    char input_a[100] = "123456789";
    char input_b[100] = "918273645";
    
    
    printf("입력값: %s, %s ==> 출력값:  ", input_a, input_b );
    
    selection_sort(input_b);
    
    
    if(strcmp(input_a,input_b) == 0)
    {
        printf("True\n");
        
    }else printf("Flase\n");
    
    return 0;
}

void selection_sort(char* array)
{
    int min_idx = 0;
    
    for(int i=0;i<strlen(array);i++)
    {
        min_idx = i;
        for(int j=i+1;j<strlen(array);j++)
        {
            if(array[min_idx]>array[j])
            {
                min_idx = j;
                
            }
            
        }
        if(i!=min_idx)
        {
            swap(&array[i],&array[min_idx]);
            
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
