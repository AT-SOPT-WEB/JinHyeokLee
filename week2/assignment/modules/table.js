import { todos } from '../data/todoData.js';

const initTable = () => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

const getTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const setTodos = (updateTodos) => {
  localStorage.setItem('todos', JSON.stringify(updateTodos));
};

export const renderTable = () => {
  const todos = getTodos();
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';

  todos.forEach((todo) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="checkbox"/ data-id="${todo.id}"></td>
      <td>${todo.priority}</td>
      <td>${todo.completed ? '✅' : '❌'}</td>
      <td>${todo.title}</td>
    `;
    tableBody.appendChild(row);
  });
};

const addTodo = () => {
  const input = document.querySelector('input[type="text"]');
  const priority = document.querySelector('#add_select');
  const storedTodos = getTodos();

  if (input.value.trim() === '' || !priority.value) {
    alert('할 일과 중요도 중에 빈 값이 있습니다!');
    return;
  }

  const newTodo = {
    id: Date.now(),
    title: input.value,
    completed: false,
    priority: priority.value,
  };

  const updatedTodos = [...storedTodos, newTodo];
  setTodos(updatedTodos);
  renderTable();
};

export const init = () => {
  initTable();
  renderTable();
};

const addButton = document.querySelector('#add_button');
addButton.addEventListener('click', addTodo);
