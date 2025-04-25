import {
  addTodo,
  completeTodos,
  deleteTodo,
  getTodos,
  initTable,
  TodoDTO,
} from '../model/todoModel.js';
import { renderTable } from '../view/todoView.js';

const resetInput = () => {
  const input = document.querySelector('input[type="text"]');
  const priority = document.querySelector('#add_select');
  input.value = '';
  priority.value = '';
};

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
    priority: parseInt(priority.value, 10),
  });

  addTodo(newTodo);
  resetInput();
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

// const handleCompleteTodo = (id) => {
//   const checkboxes = document.querySelectorAll(
//     'input[type="checkbox"]:checked'
//   );
//   checkboxes.forEach((checkbox) => {
//     const id = parseInt(checkbox.dataset.id, 10);
//     completeTodo(id);
//   });
//   renderTable(getTodos());
// };

const handleCompleteTodo = () => {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const ids = Array.from(checkboxes).map((checkbox) =>
    parseInt(checkbox.dataset.id, 10)
  );

  completeTodos(ids); // 배열로 넘겨주기
  renderTable(getTodos());
};

const handleFilterAll = () => {
  const todos = getTodos();
  renderTable(todos);
};

const handleFilterCompleted = () => {
  const todos = getTodos();
  const completedTodos = todos.filter((todo) => todo.completed);
  renderTable(completedTodos);
};

const handleFilterUncompleted = () => {
  const todos = getTodos();
  const uncompletedTodos = todos.filter((todo) => !todo.completed);
  renderTable(uncompletedTodos);
};

const handlePriorityFilter = (priority) => {
  const todos = getTodos();
  const filteredTodos = todos.filter((todo) => todo.priority === priority);
  renderTable(filteredTodos);
};
const init = () => {
  initTable();
  renderTable(getTodos());

  const addButton = document.querySelector('#add_button');
  const deleteButton = document.querySelector('#delete_button');
  const completeButton = document.querySelector('#complete_button');
  const addTab = document.querySelector('.add_tab');
  const completedTab = document.querySelector('.completed_tab');
  const uncompletedTab = document.querySelector('.uncompleted_tab');
  const dropdownButton = document.querySelector('.dropdown_button');
  const dropdown = document.querySelector('.dropdown');
  const dropdownItems = document.querySelectorAll('.dropdown_item');

  addButton.addEventListener('click', handleAddTodo);
  deleteButton.addEventListener('click', handleDeleteSelectedTodos);
  completeButton.addEventListener('click', handleCompleteTodo);
  addTab.addEventListener('click', handleFilterAll);
  completedTab.addEventListener('click', handleFilterCompleted);
  uncompletedTab.addEventListener('click', handleFilterUncompleted);
  dropdownButton.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
  dropdownItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      const priority = parseInt(e.target.dataset.priority, 10);
      handlePriorityFilter(priority);
      dropdown.classList.remove('open');
    });
  });
};

export { init };
