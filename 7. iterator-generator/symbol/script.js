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

/* Symbol을 사용하는 경우 use case */
// Symbol 안썼을때 
/*
const RED = 'red';
const ORANGE = 'orange';
const YELLOW = 'yellow';
const BLUE = 'blue';
const dog = 'blue';
*/
// Symbol을 쓸때
const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const dog = 'blue';

function getImportantLevel(color){
    switch(color){
        case RED:
            return 'vary important';
        case ORANGE:
            return 'important';
        case YELLOW:
            return 'little important';
        case BLUE: 
            return 'not important';
        default:
            console.log(`${color} not included`);        
    }
}

console.log(getImportantLevel(BLUE)); //not important
console.log(getImportantLevel(dog)); //Symbol을 안썼을때: not important, 썻을때: not included

const length = Symbol('length');// length를 출력하지 않게 하기 위해 Symbol을 사용
class Car{
    constructor(){
        this[length] = 0;
    }

    add(brand, name){
        this[brand] = name;
        this[length]++;
    }
}

let myCars = new Car();

myCars.add('kia', 'EV6');
myCars.add('hyundai', 'IONIQ5');
myCars.add('genesis', 'g80');

for(const car in myCars){
    console.log(car, myCars[car]);
}