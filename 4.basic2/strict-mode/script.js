/* 엄격 모드 사용법 */

// 파일전체에 적용
// "use strict"

// 함수에만 적용
function sum(a,b){
    "use strict"
    return a + b;
}

// class 활용 -> 자동으로 strict mode로 사용된다.
class Cat{

}
// 방법 2: HTML에서 <script>태그안에 type속성을 module로 준다.

/* strict 모드와 비엄격모드 차이점 */
// 엄격: 정의되지 않은 변수가 있으면 오류를 띄운다.
// 비엄격: 그냥 패스한다.
let greeting = 'hello';

//오타
greatingg = 'hi';

console.log(greeting);

const obj = {};

Object.defineProperty(obj, "readOnly",{
    writable: false, value: 7
})

console.log(obj);

obj.readOnly = 10; // 할당할 수 없는 변수에 할당하는 상황 -> 엄격: 에러

console.log(obj);

//////////////////////

