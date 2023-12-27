/* 동적 할당 */
let foo = 42;

console.log(typeof foo);

foo = "bar";

console.log(typeof foo);

/* 원시 타입 */
// 문자열 String
const name="han";
// Number
const age = 30;
// Boolean
const hasJob = true;
// null -> 항상 소문자로 써야함
const car = null; // 명시적으로 없다고 표현할때 이렇게 할당을 한다.
// undefined
let anything;
// Symbol = 유니크한 값을 만들 수 있는데 나중에 설명
const sym = Symbol();

/* 참조타입 */ 
// Array 배열
const hobbies = ['walking', 'books'];
// Object 객체
const address = {
    province: '경기도',
    city: '성남시'
}
console.log(typeof address);
console.log(typeof hobbies); // object
// array인지 확인하는 방법
console.log(Array.isArray(hobbies)); // true