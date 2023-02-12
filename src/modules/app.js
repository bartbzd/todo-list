/* eslint-disable no-console */
import Task, { tasks } from './models/taskModel';
import createTask from './views/taskView';

export default function appController() {
  const tasksWrapper = document.querySelector('.t-wrapper');
  const formWrapper = document.querySelector('.f-wrapper');
  const openWrapper = document.querySelector('.o-wrapper');
  const editWrapper = document.querySelector('.e-wrapper');

  const showForm = () => {
    formWrapper.style.animation = 'ease-out formRight 0.1s';
    formWrapper.style.display = 'flex';
    setTimeout(() => {
      formWrapper.style.animation = '';
    }, 100);
  };
  const hideForm = () => {
    formWrapper.style.animation = 'ease-out formRight reverse 0.1s';
    setTimeout(() => {
      formWrapper.style.display = 'none';
      formWrapper.style.animation = '';
    }, 100);
  };
  const showEdit = () => {
    editWrapper.style.animation = 'ease-out formRight 0.1s';
    editWrapper.style.display = 'flex';
    setTimeout(() => {
      editWrapper.style.animation = '';
    }, 100);
  };
  const hideEdit = () => {
    editWrapper.style.animation = 'ease-out formRight reverse 0.1s';
    setTimeout(() => {
      editWrapper.style.display = 'none';
      editWrapper.style.animation = '';
    }, 100);
  };

  const showTasksRight = () => {
    tasksWrapper.style.display = 'flex';
    tasksWrapper.style.animation = 'ease-out taskRight reverse 0.1s';
    setTimeout(() => {
      tasksWrapper.style.animation = '';
    }, 100);
  };
  const hideTasksRight = () => {
    tasksWrapper.style.animation = 'ease-out taskRight 0.1s';
    setTimeout(() => {
      tasksWrapper.style.display = 'none';
      tasksWrapper.style.animation = '';
    }, 100);
  };
  const showTasksLeft = () => {
    tasksWrapper.style.display = 'flex';
    tasksWrapper.style.animation = 'ease-out formRight 0.1s';
    setTimeout(() => {
      tasksWrapper.style.animation = '';
    }, 100);
  };
  const hideTasksLeft = () => {
    tasksWrapper.style.animation = 'ease-out formRight reverse 0.1s';
    setTimeout(() => {
      tasksWrapper.style.display = 'none';
      tasksWrapper.style.animation = '';
    }, 100);
  };

  const formStar = document.querySelector('.add-star');
  const openTask = (e) => {
    console.log(tasks);
    openWrapper.style.display = 'flex';
    openWrapper.style.animation = 'ease-out taskRight reverse 0.1s';
    const title = document.querySelector('#open-title');
    const note = document.querySelector('#open-note');
    const project = document.querySelector('#projects');
    // const date = document.querySelector('#date');
    const isStarred = formStar.classList.contains('starred');

    const taskId = e.target.dataset.id;
    console.log(taskId);
    title.textContent = tasks[taskId].title;
    note.textContent = tasks[taskId].note;
    setTimeout(() => {
      openWrapper.style.animation = '';
    }, 100);
  };
  const closeTask = () => {
    openWrapper.style.animation = 'ease-out taskRight 0.1s';
    setTimeout(() => {
      openWrapper.style.display = 'none';
      openWrapper.style.animation = '';
    }, 100);
  };

  const renderFormView = () => {
    hideTasksRight();
    setTimeout(() => {
      showForm();
    }, 100);
  };
  const renderEditView = (e) => {
    e.stopImmediatePropagation();
    hideTasksRight();
    setTimeout(() => {
      showEdit();
    }, 100);
  };
  const renderTasksView = (e) => {
    e.preventDefault();
    if (editWrapper.style.display === 'flex') {
      hideEdit();
      setTimeout(() => {
        showTasksRight();
      }, 100);
      return;
    }
    if (formWrapper.style.display === 'flex') {
      hideForm();
      setTimeout(() => {
        showTasksRight();
      }, 100);
      return;
    }
    if (openWrapper.style.display === 'flex') {
      closeTask();
      setTimeout(() => {
        showTasksLeft();
      }, 100);
    }
  };
  const renderTasksOpenView = (e) => {
    hideTasksLeft();
    setTimeout(() => {
      openTask(e);
    }, 100);
  };

  const editBtn = document.querySelector('.edit');
  const checkmark = document.querySelector('.fa-regular');
  const backBtn = document.querySelectorAll('.back-btn');
  // const taskBox = document.querySelectorAll('.task');
  const addBtn = document.querySelector('.add-task-btn');
  const addTaskBtn = document.querySelector('.add-btn');

  const toggleCheckmark = (e) => {
    e.stopImmediatePropagation();
    checkmark.classList.toggle('fa-solid');
    checkmark.classList.toggle('fa-circle');
    checkmark.classList.toggle('fa-circle-check');
  };
  const toggleStar = () => {
    formStar.classList.toggle('starred');
  };

  function addTaskHandlers() {
    const taskBox = document.querySelectorAll('.task');
    taskBox.forEach((task) => {
      task.addEventListener('click', renderTasksOpenView);
    });
  }
  addTaskHandlers();

  function storeInput() {
    const title = document.querySelector('#task').value;
    const note = document.querySelector('#note').value;
    const project = document.querySelector('#projects').value;
    const date = document.querySelector('#date').value;
    const isStarred = formStar.classList.contains('starred');

    return new Task(title, note, project, date, isStarred);
  }

  const tasksView = document.querySelector('.tasks');
  const form = document.querySelector('form');
  function resetTasks() {
    tasksView.innerHTML = '';
    form.reset();
  }
  function renderTasks() {
    tasks.forEach((task) => {
      createTask(task);
    });
    addTaskHandlers();
  }
  function addTask(e) {
    const title = document.querySelector('#task');
    if (!title.checkValidity()) {
      title.innerHTML = title.validationMessage;
      return;
    }
    e.preventDefault();
    const newTask = storeInput();

    const existingTask = tasks.find((t) => t.title === newTask.title);
    if (!existingTask) {
      tasks.push(newTask);
      console.log(tasks);
      resetTasks();
      renderTasks();
      renderTasksView(e);
    }
  }
  formStar.addEventListener('click', toggleStar);
  checkmark.addEventListener('click', toggleCheckmark);
  editBtn.addEventListener('click', renderEditView);
  addTaskBtn.addEventListener('click', renderFormView);
  addBtn.addEventListener('click', addTask);
  backBtn.forEach((button) => {
    button.addEventListener('click', renderTasksView);
  });
}
