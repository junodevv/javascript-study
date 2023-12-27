/**
let val;

val = document;

val = document.baseURI; // 웹 페이지의 절대 URI 반환
val = document.head; //<head> 태그 반환
val = document.body; //<body> 태그 반환

val = document.forms; //<form> 태그 '배열' 반환, ※주의 form's'
val = document.forms[0]; // 첫번째 <form>태그 반환, html코드 그대로 나옴
val = document.forms[0].classList; 
val = document.forms[0].className; // form 태그 안의 class="className" 을 반환

val = document.scripts; // 소스코드 내의 script 태그 뿐만아니라 chrome 익스텐션이나 웹페이지에서 따로 추가되는 script까지 보여줌

//index 0 번째의.script태그의.속성(Attribute)인'src'를 반환
val = document.scripts[0].getAttribute('src');
val = document.scripts[1].getAttribute('src');

console.log(val);
*/

/* Document 객체 메소드로 웹페이지내의 태그에 접근하기 */
// id 값으로 접근하기 - getElementById();
const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none'; // 안보이게 하기
// console.log(headerContainer);

headerContainer.textContent='Text Content';
headerContainer.innerText='Inner Text';
headerContainer.innerHTML = '<span>Inner HTML</span>'

// 여러개의 요소에 접근하기
const items = document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.color = 'blue';
items[3].textContent = '요소 변경하기';

let lists = document.getElementsByTagName('li');
console.log(lists) // 이건 콜렉션
/** 콜렉션은 forEach 를 사용할 수 없다.
lists.forEach((list)=>{
    console.log(list);
})
 */
lists = Array.from(lists);
console.log(lists) // 이건 배열 => forEach 사용가능

lists.forEach((list, index)=>{
    list.textContent = `list${list}. ${index}`;
})

// 홀수번째의 'li' 요소들을 골라 배열로 반환하고 배경색상을 회색으로 바꿈
const liOdd = document.querySelectorAll('li:nth-child(odd)');
console.log(liOdd);
liOdd.forEach((li)=>{
    li.style.background = 'gray';
})