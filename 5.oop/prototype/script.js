/* global object prototype 테스트 */
/*
let user = {
    name: 'John',
    age: 45
}

console.log(user.name);
console.log(user.hasOwnProperty('email'));
*/

/* 생성자 만들어서 테스트 */
// 함수명을 대문자로 시작하면 생성자가 됨

// function Person(name, email, birthday){
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
//     /*
//     this.caculateAge = function(){
//         const diff = Date.new() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     */
// }

// 프로토타입에 함수넣기 방법 1
/*
Person.prototype.calculateAge = function(){
    const diff = Date.new() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const john = new Person('john', 'john@exmaple.com', '7-10-91');
const han = new Person('han', 'han@exmaple.com', '2-11-91');

console.log(john);
console.log(han);
*/
// 프로토타입에 함수넣기 방법 2: Object.create()

const personsPrototype = {
    calculateAge(){
    const diff = Date.new() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

function Person(name, email, birthday){
    const person = Object.create(personsPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}

const john = new Person('john', 'john@exmaple.com', '7-10-91');
const han = new Person('han', 'han@exmaple.com', '2-11-91');

console.log(john);
console.log(han);