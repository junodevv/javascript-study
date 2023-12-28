/* Call(); */
const fullName = function(city, country){
    console.log(this.firstName + ' ' + this.lastName, city, country);
}

const person1 ={
    firstName: 'John',
    lastName: 'Smith'
}
// 이 함수가 person1이라는 객체를 가리키게 된다. 그러면 this가 person1이 되는거임
fullName.call(person1, "Yongin", "Korea");

/* Apply(); */
const fullName2 = function(city, country){
    console.log(this.firstName + ' ' + this.lastName, city, country);
}

const person2 ={
    firstName: 'John',
    lastName: 'Smith'
}
// 여기는 인수를 전달할때 "배열"로 넣어주면된다.
fullName2.apply(person2, ["Yongin", "Korea"]);

// * Call과의 차이: 인수 전달 방법 call=그냥, apply=배열

/* bind() */
function func(language){
    if(language === "kor"){
        console.log(`language: ${this.korGreeting}`);
    } else {
        console.log(`language: ${this.engGreeting}`);
    }
}
const greeting = {
    korGreeting: '안녕',
    engGreeting: 'Hi'
}

// call, apply와 다른점: bind는 바인딩만 시켜주고 호출을 직접 해주지는 않는다. (call, apply는 호출까지 해줌)
 
// const boundFunc = func.bind(greeting)('kor'); //이것도 가능
const boundFunc = func.bind(greeting);
boundFunc('kor');
boundFunc('eng');
