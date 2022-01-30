#include <stdio.h>
#include <cs50.h>
#include <string.h>

void merge_sort(char* array, int l, int r);
void merge(char* array, int l, int r);

void swap(char* a, char* b);

int main()
{
    char input_a[100] = "123456789";
    char input_b[100] = "918273645";
    
    
    printf("입력값: %s, %s ==> 출력값:  ", input_a, input_b );
    
    merge_sort(input_b,0,8);
    
    
    if(strcmp(input_a,input_b) == 0)
    {
        printf("True\n");
        
    }else printf("Flase\n");
    
    return 0;
}

void merge_sort(char* array, int l, int r)
{
    if(l == r)
    {
    return;
        
    }
    int mid = (l+r)/2;
    
    merge_sort(array,l,mid);
    merge_sort(array,mid+1,r);
    merge(array,l,r);
    
}
void merge(char* array, int l, int r)

{
    char sorted[r-l];
    int mid = (l+r)/2;
    int i,j,k;
    
    i = l;
    j = mid+1;
    k = l;
    
    while(i <= mid && j<=r)
    {
        if(array[i] <= array[j])
        {
            sorted[k++]=array[i++];
            
        }
        else
        {
            sorted[k++]=array[j++];
            
        }
        
    }
    
    if(i > mid)
    {
        for(int temp=j; temp<=r;temp++)
        {
            sorted[k++] = array[temp];
            
        }
        
    }
    else
    {
        for(int temp=i; temp<=mid;temp++)
        {
            sorted[k++] = array[temp];
            
        }
        
    }
    
    for(int idx=l;idx<=r;idx++)
    {
        array[idx] = sorted[idx];
        
    }
    
}

void swap(char* a,char* b)
{
    char temp;
    temp = *a;
    *a = *b;
    *b = temp;
}
