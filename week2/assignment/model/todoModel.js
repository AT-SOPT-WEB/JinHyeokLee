import { todos } from '../data/todoData.js';
import { showModal } from '../view/todoView.js';
class TodoDTO {
  constructor({ id, title, completed, priority }) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.priority = priority;
  }
}

const initTable = () => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

const getTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos).map((todo) => new TodoDTO(todo)) : [];
};

const setTodos = (updateTodos) => {
  localStorage.setItem('todos', JSON.stringify(updateTodos));
};

const addTodo = (newTodo) => {
  const storedTodos = getTodos();
  const updatedTodos = [...storedTodos, new TodoDTO(newTodo)];
  setTodos(updatedTodos);
};

const deleteTodo = (id) => {
  const storedTodos = getTodos();
  const updatedTodos = storedTodos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};

const completeTodos = (ids) => {
  const todos = getTodos();
  const selected = todos.filter((todo) => ids.includes(todo.id));

  const hasCompleted = selected.some((todo) => todo.completed);
  if (hasCompleted) {
    showModal('이미 완료된 todo가 포함되어 있어요!');
    return;
  }

  const updatedTodos = todos.map((todo) => {
    if (ids.includes(todo.id)) {
      return { ...todo, completed: true };
    }
    return todo;
  });

  setTodos(updatedTodos);
};

export {
  addTodo,
  completeTodos,
  deleteTodo,
  getTodos,
  initTable,
  setTodos,
  TodoDTO,
};
