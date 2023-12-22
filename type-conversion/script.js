////////////////////
/* 함수를 사용한 변환 */
////////////////////
let val;

val=111;
console.log(val);
console.log(typeof val);
/* Number to String */
val = String(111);
console.log(val);
console.log(typeof val);
val = String(8+4);
console.log(val);
console.log(typeof val);
console.log(val.length); // 2

/* Boolean to String */
val =false;
console.log(val);
console.log(typeof val);
console.log(val.length); // undefined

/* Date to String */
val = new Date();
console.log(val);
console.log(typeof val);
console.log(val.length); // undefined

/* Array to String */
val = String([1,2,3,4,5]);
console.log(val);
console.log(typeof val);
console.log(val.length); // 9

/* toString() */
val = (5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length); // 9

/* String to Number */
val = Number('1');
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number([1,2,3]); // NaN = Not a Number

console.log(val);
console.log(typeof val);
console.log(val.length);

val = parseInt('111.40'); // 111
val = parseFloat('111.40'); // 111.4 , 0은 생략, 만약 '111.41' 이면 결과 = 111.41 로 나옴

console.log(val);
console.log(typeof val);
console.log(val.length);

////////////////////
/* 자동 형변환 */
////////////////////

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2; // '23'

console.log(sum);
console.log(typeof sum); // String, 자동으로 변경됨