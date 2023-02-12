import { tasks } from '../models/taskModel';

export default function createTask(task) {
  const taskWrapper = document.createElement('div');
  const checkmark = document.createElement('div');
  const title = document.createElement('p');

  const actions = document.createElement('div');
  const edit = document.createElement('i');
  const trash = document.createElement('i');
  const star = document.createElement('i');

  taskWrapper.setAttribute('data-id', tasks.indexOf(task));
  taskWrapper.classList.add('task');
  checkmark.classList.add('checkmark');
  title.classList.add('task-title');
  title.textContent = task.title;
  actions.classList.add('actions');
  edit.classList.add('options', 'edit', 'material-symbols-rounded');
  edit.textContent = 'edit';
  trash.classList.add('options', 'material-symbols-rounded');
  trash.textContent = 'delete';
  star.classList.add('fa-solid', 'fa-star');

  document.querySelector('.tasks').append(taskWrapper);
  taskWrapper.append(checkmark, title, actions);
  actions.append(edit, trash, star);
}
