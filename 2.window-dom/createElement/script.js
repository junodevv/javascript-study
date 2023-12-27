// element 생성
const li = document.createElement('li');

// 클래스 추가하기
li.className = 'list-group-item';

// id 추가하가
li.id = 'new-item';

// 생성한 li 를 기존의 ul에 넣기
document.querySelector('ul.list-group').appendChild(li)
// Node.appendChild() 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다.

// li에 속성 추가하기
li.setAttribute('name', 'New list item');

// li에 새로운 text node 생성하고 더하기
li.appendChild(document.createTextNode('새로추가한 li'))

// link element 생성하기
const link = document.createElement('a');
// class 추가
link.className = 'alarm-item';
// Html 추가
link.innerHTML = '<i class="bi-alarm"></i>';

li.appendChild(link);