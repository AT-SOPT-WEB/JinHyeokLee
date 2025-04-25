import { todos } from '../data/todoData.js';
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

const completeTodo = (id) => {
  const storedTodos = getTodos();
  const updatedTodos = storedTodos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updatedTodos);
};

export { addTodo, deleteTodo, getTodos, initTable, setTodos, completeTodo, TodoDTO };
