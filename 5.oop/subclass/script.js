class Person{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    introduce(){
        return `Hello my name is ${this.name}`;
    }
}

class Client extends Person{
    constructor(name,email,phone,address){
        super(name,email);

        this.phone;
        this.address;
    }
}

const juno = new Client('juno', 'juno@example.com', '010-0000-0000', '서울');
console.log(juno.introduce());