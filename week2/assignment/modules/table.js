import { todos } from '../data/todoData.js';

const initStorage = () => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

const getTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

export const loadTable = () => {
  const todos = getTodos();
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';

  todos.forEach((todo) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${todo.id}</td>
      <td>${todo.title}</td>
      <td>${todo.completed ? '✅' : '❌'}</td>
      <td>${todo.priority}</td>
    `;
    tableBody.appendChild(row);
  });
};

export const init = () => {
  initStorage();
  loadTable();
};
