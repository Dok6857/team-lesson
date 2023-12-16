/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */
const form = document.querySelector('#task-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  // const { taskName, taskText } = event.target.elements;
  const taskNameValue = event.target.elements.taskName.value;
  const taskTextValue = event.target.elements.taskText.value;

  taskList.insertAdjacentHTML(
    'afterbegin',
    createMarkupItem(taskNameValue, taskTextValue)
  );
}

function createMarkupItem(title, description) {
  return `
    <li class="task-list-item">
        <button class="task-list-item-btn">Удалить</button>
        <h3>${title}</h3>
        <p>${description}</p>
    </li>
    `;
}
