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
  updateCheckboxListeners();
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
