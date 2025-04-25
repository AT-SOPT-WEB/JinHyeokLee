import { getTodos, setTodos } from '../model/todoModel.js';

const renderTable = (todos) => {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';

  todos.forEach((todo) => {
    const row = document.createElement('tr');
    row.setAttribute('draggable', true);
    row.dataset.id = todo.id;

    row.innerHTML = `
      <td><input type="checkbox" data-id="${todo.id}"></td>
      <td>${todo.priority}</td>
      <td>${todo.completed ? '✅' : '❌'}</td>
      <td>${todo.title}</td>
    `;

    // 드래그 앤 드랍 이벤트 리스너
    row.addEventListener('dragstart', (e) => handleDragStart(e, todo.id));
    row.addEventListener('dragover', handleDragOver);
    row.addEventListener('drop', (e) => handleDrop(e, todo.id));

    tableBody.appendChild(row);
  });

  updateCheckboxListeners();
};

let draggedTodoId = null;

const handleDragStart = (e, id) => {
  draggedTodoId = id;
  e.dataTransfer.setData('text/plain', id);
};

const handleDragOver = (e) => {
  e.preventDefault();
};

const handleDrop = (e, id) => {
  e.preventDefault();

  if (draggedTodoId === id) return;

  const todos = getTodos();
  const draggedTodoIndex = todos.findIndex((todo) => todo.id === draggedTodoId);
  const droppedTodoIndex = todos.findIndex((todo) => todo.id === id);

  // 순서 변경
  const [draggedTodo] = todos.splice(draggedTodoIndex, 1);
  todos.splice(droppedTodoIndex, 0, draggedTodo);

  setTodos(todos);
  renderTable(todos);
};

const showModal = (message) => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.modal_overlay');
  const modalMessage = document.querySelector('.modal_msg');

  modalMessage.textContent = message;
  modal.style.display = 'flex';
  overlay.style.display = 'block';

  const closeModalButton = document.querySelector('.close_button');
  closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });
};

const updateCheckboxListeners = () => {
  const thCheckbox = document.querySelector('#th_checkbox');
  const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');

  const isAllChecked = () => {
    return Array.from(checkboxes).every((checkbox) => checkbox.checked);
  };
  const handleAllChecked = () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = thCheckbox.checked;
    });
  };

  const updateThCheckbox = () => {
    thCheckbox.checked = isAllChecked();
  };

  thCheckbox.addEventListener('click', handleAllChecked);

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', updateThCheckbox);
  });
};

export { renderTable, showModal };
