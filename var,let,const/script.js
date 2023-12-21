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

greeting3 = 'hi';