/*
(
    function(){
        var aName = 'Barry';
}
)();
// IIFE 내부에서 정의 된 변수는 외부 범위에서 접근이 불가.
console.log(aName); // not defined
 */

////////////////////////////////////////////////////////////////

var result = (function (){
    var name = "Barry";
    return name;
})();

console.log(result); // Barry
// 원래 그냥 함수면 log를 찍었을떄 return값이 아니라 함수 자체를 찍는다.
// 근데 IIFE는 즉시 실행 "()" 하기때문에 log를 찍었을때 return 값을 찍게 된다.


////////////////////////////////////////////////////////////////
/* 이름 없는 함수 
 * 조건 1. 함수를 할당받을 변수를 지정해야한다.
 * 조건 2. 함수를 즉시 호출해야한다.
*/

// 에러나는 코드

/* 
function(a,b){

}
 */

// 조건1. 변수에 할당
const name = function(a,b){
    return a+b;
};
// 조건2. 즉시호출
(function (a,b) {
    return console.log(a+b);
})(1, 2);

////////////////////////////////////////////////////////////////

/* 이 코드는 함수를 보여주기만 하게됨
const score = () =>{
    let count = 0;
    return{
        current: () => {return count},
        increment: () => {count++},
        reset: () => {count = 0}
    }
}
console.log(typeof score);
console.log(score);
console.log(score().current()); // 0
score().increment();
console.log(score().current()); // 0
*/

// 이건 실행까지 하게됨
/*
const score = (() =>{
    let count = 0;
    return{
        current: () => {return count},
        increment: () => {count++},
        reset: () => {count = 0}
    }
})();

console.log(typeof score);
console.log(score);

console.log(score.current()); // 0
score.increment();
console.log(score.current()); // 1
*/

// 숫자가 증가하지 않는 코드
/*
const increment = () =>{
    let counter = 0;
    console.log(counter);
    const number = (num) =>
        console.log(`it is ${num} number`);
    return () => {counter++; number(counter);}
}
increment(); // 0
increment(); // 0
*/

//즉시 실행 함수 활용
const increment = (() =>{
    let counter = 0;
    console.log(counter);
    const number = (num) =>
        console.log(`it is ${num} number`);
    return () => {counter++; number(counter);}
})();

console.log(increment);
increment();
increment();