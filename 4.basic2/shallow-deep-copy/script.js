/* shallow-copy */
const aArray = [1,2,3];

// shallow copy with spread operator
const bArray = [...aArray, 4];
console.log('aArray', aArray);
console.log('bArray', bArray);
console.log('aArray === bArray', aArray === bArray); // false

// shallow copy with Object.assign()
const cArray = Object.assign([], bArray);
console.log('cArray', cArray);
console.log('bArray === cArray', bArray === cArray); // false, 값은 같으나 참조주소가 다르다.

// Nested Arrays and Objects, 중첩된 배열이나 객체
cArray.push([5,6,7]);
console.log('cArray', cArray); // [1, 2, 3, 4, Array(3)]

const dArray = [...cArray, 10]; // 전개연산자 사용
console.log('dArray', dArray); // [1, 2, 3, 4, Array(3), 10]

dArray[4].push(8); // Array(3) <- 여기에 8을 넣으려는 것
console.log('cArray', cArray); // [1, 2, 3, 4, Array(4)]
console.log('dArray', dArray); // [1, 2, 3, 4, Array(4), 10]

/* 
얕은 복사를 했는데 dArray의 array에 8을 넣었더니 cArray의 array도 변한이유
- 1뎁스까지는 얕은 복사가 되는데 중첩된(2뎁스)는 얕은 복사가 아님
- 얕은 복사: 얕은 부분만 복사가 된다(뎁스1 까지)
- 깊은 부분은 복사가 아니라 그냥 그대로 가져오게 된다.
*/


////////////////////////////////////////////////////////////////

/* 얕은 동결 */
/*
const aObject = {
    "a": "a",
    "b": "b",
    "cObject": { "a": 1, "b": 2 }
}
Object.freeze(aObject);
aObject.a = "c"; // -> 이렇게 해도 변경되지 않음
console.log('aObject', aObject); // 결과: {a: 'a', b: 'b', cObject: {a: 1, b: 2}}

aObject.cObject.a = 3; // -> 이건 변경됨, 깊은곳(뎁스2이상)이니까
console.log('aObject', aObject); 
// 결과: {a: 'a', b: 'b', cObject:{a: 3, b: 2}}
*/

////////////////////////////////////////////////////////////////

/* 깊은 복사 */

// deep copy with json.parse(json.stringify())
const aObject = {
    "a": "a",
    "b": "b",
    "cObject": { "a": 1, "b": 2 }
}
const newObject = JSON.parse(JSON.stringify(aObject));

console.log('aObject', aObject);
console.log('newObject', newObject);

aObject.cObject.a = 3;
console.log('aObject', aObject);     // cObject: {a: 3, b: 2}
console.log('newObject', newObject); // cObject: {a: 1, b: 2}
// 깊은 복사를 했기 때문에 aObject의 cObject는 변경되어도 newObject의 cObject는 변경되지 않음.

// deep copy with nested spread operator
const newAObject = {...aObject, cObject: {...aObject.cObject} };
// => 얕은복사를 중첩 된(깊은) 부분까지 해버리는 거임 ===> 깊은복사
console.log('aObject', aObject);
console.log('newObject', newObject);

aObject.cObject.a = 3;
console.log('aObject', aObject);
console.log('newObject', newObject);