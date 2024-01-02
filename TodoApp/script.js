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
}

function createTodoElement(todo){
    const todoEl = document.createElement('div');
    todoEl.classList.add('todo');

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';

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

    actionEl.append(editBtnEl);
    actionEl.append(removeBtnEl);

    todoEl.append(checkboxEl);
    todoEl.append(inputEl);

    todoEl.append(actionEl);

    return{todoEl, inputEl, actionEl}
}