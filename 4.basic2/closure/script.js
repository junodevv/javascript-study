function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log('Outer function: ' + outerVariable);
        console.log('Inner function: ' + innerVariable);
    }
}
// 바로 outerFunction이 호출되면서 newFunction에는 innerFunction이 할당된다.
const newFunction = outerFunction('outside');
newFunction('inside');

console.log('New function: ' + newFunction);

////////////////////////////////////////////////////////////////

let a = 'a';

function functionA(){
    let b = 'b';
    console.log(a,b);
}
functionA();

////////////////////////////////////////////////////////////////
/* 오류 코드
let aa = 'aa';

function functionBB(){
    let cc = 'cc';
    console.log(aa,bb,cc);
}

function functionAA(){
    let bb = 'bb';
    console.log(aa,bb);
    functionBB();
}
functionAA();
*/
////////////////////////////////////////////////////////////////
/* 오류 해결 코드 Closure이용 */
let aa = 'aa';



function functionAA(){
    let bb = 'bb';
    function functionBB(){
        let cc = 'cc';
        console.log(aa,bb,cc);
    }
    functionBB();
    console.log(aa,bb);
}
functionAA();