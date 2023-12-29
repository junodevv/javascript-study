class Person {
    constructor(name, email, birthday){
        this.name = name;
        this.email = email;
        this.birthday = new Date(birthday);
    }
    // 이렇게 class 안에서 함수를 만들면 이 함수가 바로 prototype으로 들어간다.
    introduce(){
        return `Hello my name is ${this.name}`;
    }
    //static = 클래스 이름으로 함수를 사용한다.
    static multipleNumbers(x,y){
        return x * y;
    }
}

const juno = new Person('juno', 'juno@example.com', '27-1-99');
console.log(juno);
console.log(juno.introduce());