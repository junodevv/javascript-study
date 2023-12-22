const n1 = 20;
const n2 = 10;

let val;

val = n1 + n2; // 30
val = n1 * n2; // 200
val = n1 - n2; // 10
val = n1 / n2; // 2
val = n1 % n2; // 0 

// Math Object
val = Math.E; // Euler's number
val = Math.PI; // 3.14...
val = Math.round(2.4); // 가장가까운 정수 = 2
val = Math.ceil(2.4); // 반올림 = 3
val = Math.floor(2.8); // 반내림 = 2
val = Math.abs(-2); // 절댓값 = 2
val = Math.min(2,3,4,5,65,6,34,4,-1); // 최소값 = -1
val = Math.max(2,3,4,5,65,6,34,4,-1); // 최댓값 = 65
val = Math.random(); // 0~1사이의 랜덤값
// 1 ~ 20
val = Math.floor(Math.random() * 20 + 1);


console.log(val);