///////////////////////////
/* 변수선언 재선언, 재할당 실습 */
///////////////////////////

// var: 같은 변수에 여러번 할당 가능
var greeting = "hello";
console.log(greeting);

var greeting = "hi";
console.log(greeting);

greeting = "how are you?";
console.log(greeting);

// let: 중복선언불가, 재할당 가능
let greeting2 = 'hello';
console.log(greeting2);

// let greeting2 = 'hi'; 불가능
greeting2 = 'hi'; // 재할당 가능
console.log(greeting2);

// const: 중복선언 X, 재할당 X
const greeting3 = 'hello';
console.log(greeting3);

//greeting3 = 'hi';

//////////////////////
/* 변수의 참조 범위 실습 */
//////////////////////

// var = 함수레벨 스코프
function func(){
    if(true){
        var a = 'a';
        console.log(a);
    }
    console.log(a); // 함수 안에서는 참조가능
}
/** 함수 밖에서는 참조 불가능
console.log(a); 
 */
func();

// let, const => block 레벨 스코프
function func2(){
    if(true){
        const a = 'a';
        console.log(a); // 블록 내에서는 참조 가능
    }
    /** 블록 밖에서는 참조 불가능
    console.log(a);
     */
}

func2();