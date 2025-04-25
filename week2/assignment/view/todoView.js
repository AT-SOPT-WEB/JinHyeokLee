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

export { renderTable, showModal };
