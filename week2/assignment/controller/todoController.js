import {
  addTodo,
  completeTodo,
  deleteTodo,
  getTodos,
  initTable,
  TodoDTO,
} from '../model/todoModel.js';
import { renderTable } from '../view/todoView.js';

const handleAddTodo = () => {
  const input = document.querySelector('input[type="text"]');
  const priority = document.querySelector('#add_select');

  if (input.value.trim() === '' || !priority.value) {
    alert('할 일과 중요도 중에 빈 값이 있습니다!');
    return;
  }

  const newTodo = new TodoDTO({
    id: Date.now(),
    title: input.value,
    completed: false,
    priority: priority.value,
  });

  addTodo(newTodo);
  renderTable(getTodos());
};

const handleDeleteSelectedTodos = () => {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkboxes.forEach((checkbox) => {
    const id = parseInt(checkbox.dataset.id, 10);
    deleteTodo(id);
  });
  renderTable(getTodos());
};

const handleCompleteTodo = (id) => {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkboxes.forEach((checkbox) => {
    const id = parseInt(checkbox.dataset.id, 10);
    completeTodo(id);
  });
  renderTable(getTodos());
};

const init = () => {
  initTable();
  renderTable(getTodos());
  const addButton = document.querySelector('#add_button');
  const deleteButton = document.querySelector('#delete_button');
  const completeButton = document.querySelector('#complete_button');

  addButton.addEventListener('click', handleAddTodo);
  deleteButton.addEventListener('click', handleDeleteSelectedTodos);
  completeButton.addEventListener('click', handleCompleteTodo);
};

export { init };
