/* 커링 함수만들기 예시 1 */
const sum = (x,y) => x + y;

const curriedSum = x => y => x + y;

console.log(sum(10,20));
console.log(curriedSum(10));
console.log(curriedSum(10)(20));

/* 예시 2 */
const makeFood = (ingredient1) => {
    return (ingredient2) =>{
        return (ingredient3) => {
            return `${ingredient1} ${ingredient2} ${ingredient3}`;
        }
    }
}
const hamberger = makeFood("bread")("Ham")("tomato");
console.log(hamberger);

// 같은 기능을 깔끔하게 작성한 코드
const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 =>
`${ingredient1} ${ingredient2} ${ingredient3}`;

const newHamberger = cleanerMakeFood("빵")("햄")("토마토");
console.log(newHamberger);


/* 예시 3 */
function log(date, importance, message){
    alert(`[${date.getHours()}: ${date.getMinutes()}]: [${importance}]: ${message}`);
};
/*
log(new Date(), "DEBUG", "some bug");
*/

// currying function

function curry(f){
    return function (a){
        return function (b){
            return function (c){
                return f(a,b,c);
            }
        }
    }
}

const curriedLog = curry(log); // 커링함수로 만듦
curriedLog(new Date())("DEBUG")("some bug"); // log(new Date(), "DEBUG", "some bug");

// 위 방법은 매개변수가 하나 추가될 때마다 새로 return을 만들어야 한다.

/* 다이나믹하게 커링함수를 만드는 방법 */
// 매개변수가 새로 생기면 그걸 반영하는 방법
function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

const sum2 = (x, y, z, j, a) => x + y + z + j + a;

const curriedSum2 = curry(sum2);
console.log(curriedSum2(1)(2)(3)(4)(5));