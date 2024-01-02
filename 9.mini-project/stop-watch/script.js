const startBtn = document.querySelector('.button-start');
const stopBtn = document.querySelector('.button-stop');
const resetBtn = document.querySelector('.button-reset');

const elementSeconds = document.getElementById('seconds');
const elementTens = document.getElementById('tens');

let tens = 0;
let seconds = 0;
let interval; // setInterval의 반환 값을 넣고 clearInterval에 전달해줄 변수

startBtn.onclick = function(){
    interval = setInterval(startTimer, 10); // 10ms(0.01초)마다 함수 실행
    console.log("시작");
}
stopBtn.onclick = function(){
    clearInterval(interval);
    console.log("멈춤");
}
resetBtn.onclick = function(){
    clearInterval(interval); // reset할거면 타이머도 멈춰야 하니까 멈추기
    seconds = 0;
    tens = 0;
    elementSeconds.innerText = seconds;
    elementTens.innerText = tens;
    console.log("리셋(+멈춤)");
}

function startTimer(){
    tens++;

    if(tens>99){
        seconds++;
        elementSeconds.innerText = seconds;
        tens = 0;
        elementTens.innerText = tens;
    } else {
        tens++;
        elementTens.innerText = tens;
    }
}