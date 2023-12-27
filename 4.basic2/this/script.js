////////////////////////////////////////////////////////
/* Method => Object , 메소드에서 this는 해당 객체를 가리킨다. */
////////////////////////////////////////////////////////
const audio = {
    title: 'a',
    play(){
        console.log('play this', this);
    }
}

audio.play();

audio.stop = function(){
    console.log('stop this', this);
}

audio.stop();

/////////////////////////////////////////////////////////////////
/* Function => Window object, 함수에서의 this는 윈도우 객체를 가리킨다. */
/////////////////////////////////////////////////////////////////

function playAudio(){
    console.log(this);
}

playAudio();

/////////////////////////////////////////////////////////////////
/* Constructor Function => {}, 생성자 함수의 this는 빈객체를 가리킨다. */
/////////////////////////////////////////////////////////////////

function Audio(title){ // 생성자함수명은 대문자로 시작한다.
    this.title = title;
    console.log(this);
} 

const audioC = new Audio('a');

/////////////////////////////////////////////////////////////////
/*  */
/////////////////////////////////////////////////////////////////
const audio3 = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories(){
        this.categories.forEach(function(category){
            console.log(`title: ${this.title}, category: ${category}`);
        },{title: 'audio'})
            // this 도 가능
    }
}

audio3.displayCategories();

/* 화살표 함수 ===> this 는 항상 상위 스코프의 this를 가리키게 된다. */
// Lexical this
const audio4 = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories(){
        this.categories.forEach((category) => {
            console.log(`title: ${this.title}, category: ${category}`);
        })
            // this 도 가능
    }
}

audio4.displayCategories();