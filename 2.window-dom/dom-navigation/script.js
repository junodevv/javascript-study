let val;

const list = document.querySelector('ul.list-group');
const listItem =document.querySelector('li.list-group-item:first-child');

console.log(list); // 이건 그냥 list값을 바로 보내는 반면
console.log('list', list);  // 이건 'list'라는 key 값의 value 값으로 list를 보낸다.
console.log('listItem', listItem);

////////////////
/* childNodes = Collection 반환 */
////////////////
val = list.childNodes; // NodeList 반환, *** line break 도 포함 O ***
val = list.childNodes[0]; // #text와 그정보들을 반환
val = list.childNodes[0].nodeName; // #text - 라는 텍스트(이름)만 반환
val = list.childNodes[3].nodeType; 
/** NodeType
 * 1 - Element
 * 2 - Attribute (deprecated): deprecated = 지금은사용하지 않는다?
 * 3 - Text node: line break
 * 8 - Comment node: 주석
 * 9 - Document itself: Document 자체
 * 10 - Doctype
 */

//////////////
/* children */
//////////////
// children element nodes 반환
val = list.children; // HTML Collection 반환, *** line break 포함 X ***
val = list.children[0];
list.children[1].textContent = 'Hi'; // 접근해서 바로 조작을 해준다.

/***** 첫번째 자식들 *****/
// first child
val = list.firstChild; // child 라서 text 포함
// list.firstChild === list.childNodes[0];
val = list.firstElementChild; // Element만 포함하기 때문에 text는 미포함
//val = list.children[0]; === list.firstElementChild;

/***** 마지막 자식들 *****/
// last child
val = list.lastChild;
// list.lastChild === list.childNodes[list.childNodes.length - 1];
val = list.lastElementChild;

/**** child 요소 count ****/
val = list.childElementCount; // 5

/**** parent node 반환 = 부모선택****/
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;


// next sibling 반환
val = listItem.nextSibling; // text node 포함 O
val = listItem.nextElementSibling; // text node 포함 X
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// previous sibling 반환
val = listItem.previousSibling; // text
val = listItem.previousElementSibling; // null, "li.list-group-item.0"이 없기때문에 null

console.log('val', val);

////////////////
/* Collection */
////////////////
// 특1: for..of 사용가능 , 원래는 배열을 순환할떄 사용하는 메서드
for(let node of list.childNodes){
    console.log(node);  // 컬렉션 내의 모든 노드 보여주기
}
// 특2: 배열은 아니라서 배열 메서드 사용불가
console.log(list.childNodes.filter) // undefined
console.log(list.childNodes.map) // undefined

// 특3: Array.from 을 사용하면 진짜 배열로 변환 가능
console.log(Array.from(list.childNodes).filter); // ƒ filter() { [native code] }