// 방법1
window.onload = function(){
    // 문서가 로드될때 이 함수를 실행
    
    let text = document.getElementById('text');
    // id값이 "text"인 요소를 return

    text.innerText = 'HTML 문서가 loaded'

}

//방법3
const aElement = document.querySelector('a');
 
aElement.addEventListener('click', () =>{
    alert('a Element Clicked');
})

// 이벤트 객체 가져오기
const buttonElement = document.querySelector('.btn2');

buttonElement.addEventListener('click', (event) =>{
    let val;
    /* 이 밑에가 다 event 객체가 가진 값들 */
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;

    val = event.type;
    // 윈도우로 부터의 거리 좌표
    val = event.clientY;
    // 요소로부터의 거리좌표
    val = event.offsetY;
    ////////////////////////////////////
    
    console.log(val);
})