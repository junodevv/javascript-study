/* Impure 함수 */
// 함수 외부의 변수를 바꾼다. => impure
/*
let x = 0;
const numberUp = () => x += 1;
console.log(numberUp());
console.log(x);
 */

/* pure함수 */
let x = 0;
const pureNumberUp = (num) => num += 1;
console.log(pureNumberUp(x));
console.log(x);

////////////////////////////////////////////////////////////////
/* impure 함수 */
// 외부 배열인 alphabetArray를 변형시킨다. => impure
 const alphabetArray = ['A', 'B'];
 const addItemToArray = (originalArray, newItem) => {
    originalArray.push(newItem);
    return originalArray;
 }

 console.log(addItemToArray(alphabetArray, 'C'));
 console.log(alphabetArray);

/* pure 함수 */

const pureAddItemToArray = (originalArray, newItem) =>{
    return [...originalArray, newItem];
}
console.log(pureAddItemToArray(alphabetArray, 'C'));
 console.log(alphabetArray);