const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); // false

const sym3 = Symbol('hi');
console.log(sym3.description); // "hi"
//유니크한 값을 사용하지만 어떤 용도로 사용되는 지 등을 명시하기 위해 description을 사용한다.

/* 활용 방법1 */
let carA ={
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000
}

// carA.id = 300; // -> 이러면 기존의 값인 1을 덮어 써버린다.
const idSym = Symbol('id');
carA[idSym] = 300; // 이러면 진짜 유니크 해지는 거지, 인스턴스의 값에 Symbol()로 300이 들어가 있게됨

console.log(carA);
/* 활용 방법2 */
const idSym2 = Symbol('id');

let carB ={
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000,
    [idSym2]: 300
}

console.log(carB);

/* Symbol 속성(property)는 숨겨져 있다. */
console.log(Object.getOwnPropertyNames(carA));

for(const key in carA){
    console.log(key);
}

/* 전역 심볼, Symbol.for() */
const sym4 = Symbol.for('symfor');
const sym5 = Symbol.for('symfor');

console.log(sym4 === sym5); // true

console.log(Symbol.keyFor(sym4));
console.log(Symbol.keyFor(sym5));