/* 
* iterable 한게 무엇인지, 
* iterable 한걸 체크하는것,
* iterable 한값을 어떻게 Iterator로 만드는 지 
*/

// 반복기 생성 = [Symbol.iterator]()
function makeIterator(numbers){
    let nextIndex = 0;

    return{
        next: function(){
            return nextIndex < numbers.length?
            {value: numbers[nextIndex++], done: false} :        {value: undefined, done: true };
        }
    }
}

// 숫자 배열 생성
const numbersArray = [1,2,3];

// const numbersIterator = makeIterator(numbersArray);

// [Symbol.iterator]()를 이용하면 반복가능한 값을 반복기로 생성가능하다
const numbersIterator = numbersArray[Symbol.iterator]();

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

/* (Iterable)반복가능한 객체와 아닌객체를 for..of로 사용해보기 */

const numbersIterable = [1,2,3,];
const numbersNotIterable = {a: 1, b: 2};
numbersIterable[Symbol.iterator]();
console.log(typeof numbersIterable);    // object
console.log(typeof numbersNotIterable); // object -> 둘다 오브젝트(객체) 이다.
//for...of 가 가능하면 iterable 한 객체
for(const n of numbersIterable){
    console.log(n);
}// 가능
/*
for(const n of numbersNotIterable){
    console.log(n);
} // 불가능 -> 에러
*/


const set = new Set([1,2,3,4]);
console.log('set', set);
const map = new Map([['a',1],['b',2]]);
console.log('map', map);

console.log(set[Symbol.iterator]().next());
console.log(map[Symbol.iterator]());