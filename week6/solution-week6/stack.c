#include <stdio.h>
#include <stdlib.h>


typedef struct stack
{
    int top;
    int capacity;
    int* array;
}Stack;

Stack* createStack(int capacity)
{
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->capacity = capacity;
    stack->top = -1;
    stack->array = (int*)malloc(stack->capacity*sizeof(int));
    return stack;
}

int isFull(Stack* stack)
{
    return stack->top == stack->capacity-1;
}

int isEmpty(Stack* stack)
{
    return stack->top == -1;
}

void push(Stack* stack, int item)
{
    if(isFull(stack))
    return;
    stack->array[++stack->top] = item;
    printf("%d pushed to stack\n", item);
}

int pop(Stack* stack)
{
    if(isEmpty(stack))
    return -9999;
    int data = stack->array[stack->top--];
    return data;
}

int peek(Stack* stack)
{
    if(isEmpty(stack))
    return -9999;
    int data = stack->array[stack->top];
    return data;
}

int main()
{
    Stack *stack = createStack(100);
    
    push(stack,10);
    push(stack,20);
    push(stack,30);
    push(stack,40);
    
    printf("%d pop from stack\n", pop(stack));
    printf("%d pop from stack\n", pop(stack));
    
    push(stack,50);
    
    printf("%d pop from stack\n", pop(stack));
    printf("%d pop from stack\n", pop(stack));
    printf("%d pop from stack\n", pop(stack));
    printf("%d pop from stack\n", pop(stack));
    
    return 0;



/*
 * Feed Back
 안녕하세요 9조 여러분 DK코치입니다 :D
드디어 6주간의 미션이 모두 마무리되었네요. 9조 여러분들은 6조동안 한번도 빠지지 않고 꾸준하고 성실하게 모두 잘 제출해주셔서 제가 더 감사한 마음입니다. CS50 코치 중 한명으로써 여러분과 같은 부스터분들이 있어서 정말 좋았습니다. 리드부스터 조지고님과 부스터 gunwoohan님, 연251920님, 히야신스님 모두 6주간 수고 많았습니다!!! 코딩하면서 직접 느끼고 배운 것들이 있기를 바라며 앞으로의 코딩실력도 정말 많이 늘으면 좋겠습니다. 다음은 마지막 미션 피드백입니다.
미션 1번을 선택해서 풀어주셨네요. Skeleton code (보통 기본적으로 제공되는 코드를 스켈레톤 코드라고 부릅니다)에서 pop과 peek의 구현을 기능한 것이 목표인데요, 두 함수 모두 깔끔하고 정확하게 구현했습니다. pop과 peek에서 isEmtpy 함수를 통해 비었는지를 확인하고 비었을 경우 -9999를 잘 리턴해주었습니다. 조건을 isEmpty(stack) == 1처럼 작성하지 않고 isEmpty가 참일 때 1을 리턴한다는 점을 잘 이용해서 if (isEmpty(stack))으로 정확하게 작성했네요. 리턴값을 pop과 peek에서 각각 stack->array[stack->top--]와 stack->array[stack->top]으로 잘 작성했고, 구조체를 어느 수준 이해한 것이 느껴집니다. 리턴값을 조금 더 간단하게 작성하고 싶다면 int data = ... ;를 선언하지 않고 바로 return stack->array[stack->top--];나 return stack->array[stack->top];로 작성할 수도 있습니다. 리턴 이외에 함수 내에서 data 변수를 이용해서 하는 일이 없기 때문이죠.
지금까지 포인터, 구조체, 알고리즘, 데이터 구조 등 c언의 다양한 개념들을 배웠는데요, 개인적으로 지금까지 배운 개념들을 알고 있으면 충분히 보다 복잡하고 어려운 기능의 코드들을 작성할 수 있다고 생각합니다. 이번 CS50에서 배운 것들이 앞으로 부스터 여러분들이 하는 일에 많은 도움이 되기를 바랍니다.
감사합니다!  

*/
