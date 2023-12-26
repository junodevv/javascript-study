/////////////
/* 요소 제거 */
/////////////

// 부모노드 가져오기
const listParent = document.querySelector('ul');
// 'li'인 자식노드 모두 가져오기
const list = document.querySelectorAll('li');

// 요소 지우기 remove
// listParent.removeChild(list[0]);

/////////////
/* 요소 교체 */
/////////////

// 기존 요소 가져오기
const oldElement = document.getElementById('A');
// 새로운 요소 생성
const newElement = document.createElement('span');

newElement.textContent='Hi 새로운 요소';

oldElement.parentElement.replaceChild(newElement, oldElement);