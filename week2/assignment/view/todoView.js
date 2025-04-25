const renderTable = (todos) => {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';

  todos.forEach((todo) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="checkbox" data-id="${todo.id}"></td>
      <td>${todo.priority}</td>
      <td>${todo.completed ? '✅' : '❌'}</td>
      <td>${todo.title}</td>
    `;
    tableBody.appendChild(row);
  });
};

export { renderTable };
