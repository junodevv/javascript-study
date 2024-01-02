const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

createBtn.addEventListener('click', createTodo);

function createTodo(){
    const todo = {
        id: new Date().getTime(),
        text: '',
        complete: false
    }
    // 배열의 처음에 todo 데이터를 추가
    todos.unshift(todo);

    const {todoEl,inputEl} = createTodoElement(todo);
    
    list.prepend(todoEl);

    inputEl.removeAttribute('disabled');
    // input 요소에 자동 포커스
    inputEl.focus();
    
    saveToLocalStorage();
}

function createTodoElement(todo){
    const todoEl = document.createElement('div');
    todoEl.classList.add('todo');

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = todo.complete;

    if(todo.complete){
        todoEl.classList.add('complete');
    }

    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = todo.text;
    inputEl.setAttribute('disabled', '');

    const actionEl = document.createElement('action');
    actionEl.classList.add('actions');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerText = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons','remove-btn');
    removeBtnEl.innerText = 'remove_circle';

    inputEl.addEventListener('blur', () =>{ // 포커스의 반대, 포커스가 사라질떄 발생하는 이벤트
        inputEl.setAttribute('disabled', '')
        saveToLocalStorage();
    })

    inputEl.addEventListener('input', () =>{
        todo.text = inputEl.value;
    })

    checkboxEl.addEventListener('change', () =>{
        todo.complete = checkboxEl.checked; // 체크가 되었을땐 true, 체크안되었을땐 false이다.

        if(todo.complete){
            todoEl.classList.add('complete');
        } else {
            todoEl.classList.remove('complete');
        }
        saveToLocalStorage();
    })

    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute('disabled');
        inputEl.focus();
    })    

    removeBtnEl.addEventListener('click', () =>{
        todos = todos.filter(t => t.id !== todo.id); // t.id와 todo.id가 다른 것만 골라서 새로운 배열로 반환

        todoEl.remove();
        saveToLocalStorage();
    })
    
    actionEl.append(editBtnEl);
    actionEl.append(removeBtnEl);

    todoEl.append(checkboxEl);
    todoEl.append(inputEl);

    todoEl.append(actionEl);

    return{todoEl, inputEl, editBtnEl, removeBtnEl}
}

// 로컬 스토리지에 저장하는 함수, 로컬스토리지에는 항상 String 타입으로 저장해야한다.
function saveToLocalStorage(){
    const data = JSON.stringify(todos); // 배열 객체를 String 타입으로 변환

    // window.localStorage.setItem('my_todos', data);인데 window 생략가능
    localStorage.setItem('my_todos', data);

}

function loadFromLocalStorage(){
    const data = localStorage.getItem('my_todos');

    if(data){
        todos = JSON.parse(data); // json(String)을 Object로 변환 해준다.
    }
}

function displayTodos(){
    loadFromLocalStorage();
    
    for(let i=0; i<todos.length; i++){
        const item = todos[i];
        const {todoEl} = createTodoElement(item);

        list.append(todoEl);
    }
}

displayTodos();
