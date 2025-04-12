const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let todoItems = [];

const setLocalStorageTodos = () => {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
};

const loadTodos = () => {
  const storedTodos = localStorage.getItem('todoItems');
  if (storedTodos) {
    todoItems = JSON.parse(storedTodos);
    printTodos();
  } else {
    return;
  }
};

// const resetTodos = () => {
//   todoList.innerHTML = '';
//   todoItems = [];
// };

// 로컬 스토리지에서 할 일 목록 불러오기
const printTodos = () => {
  // resetTodos();
  // getLocalStorageTodos();

  todoItems.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    todoList.appendChild(li);
  });
};

// 추가 버튼 클릭 시 할 일 추가
const addTodo = (e) => {
  e.preventDefault();

  // 값이 없다면 return
  const todoText = input.value.trim();
  if (todoText === '') return;

  todoItems.push(todoText);
  input.value = ''; // input 초기화

  setLocalStorageTodos();
  printTodos();
};

addBtn.addEventListener('click', addTodo);

window.addEventListener('DOMContentLoaded', () => {
  loadTodos();
});
