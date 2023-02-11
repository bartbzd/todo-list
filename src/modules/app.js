/* eslint-disable no-console */
import Task from './models/taskModel';
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

  const openTask = () => {
    openWrapper.style.display = 'flex';
    openWrapper.style.animation = 'ease-out taskRight reverse 0.1s';
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

  const renderForm = () => {
    hideTasksRight();
    setTimeout(() => {
      showForm();
    }, 100);
  };
  const renderEdit = (e) => {
    e.stopImmediatePropagation();
    hideTasksRight();
    setTimeout(() => {
      showEdit();
    }, 100);
  };
  const renderTasks = (e) => {
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
  const renderOpenTask = () => {
    hideTasksLeft();
    setTimeout(() => {
      openTask();
    }, 100);
  };

  const editBtn = document.querySelector('.edit');
  const checkmark = document.querySelector('.fa-regular');
  const backBtn = document.querySelectorAll('.back-btn');
  const addBtn = document.querySelector('.add-btn');
  const task = document.querySelector('.task');
  const addTaskBtn = document.querySelector('.add-task-btn');
  const formStar = document.querySelector('.add-star');
  const toggleCheckmark = (e) => {
    e.stopImmediatePropagation();
    checkmark.classList.toggle('fa-solid');
    checkmark.classList.toggle('fa-circle');
    checkmark.classList.toggle('fa-circle-check');
  };

  const toggleStar = () => {
    formStar.classList.toggle('starred');
  };
  formStar.addEventListener('click', toggleStar);
  checkmark.addEventListener('click', toggleCheckmark);
  task.addEventListener('click', renderOpenTask);
  editBtn.addEventListener('click', renderEdit);
  addBtn.addEventListener('click', renderForm);
  backBtn.forEach((button) => {
    button.addEventListener('click', renderTasks);
  });

  function storeInput() {
    const title = document.querySelector('#task').value;
    const note = document.querySelector('#note').value;
    const project = document.querySelector('#projects').value;
    const date = document.querySelector('#date').value;
    const isStarred = formStar.classList.contains('starred');

    return new Task(title, note, project, date, isStarred);
  }
  const tasks = [];
  const tasksView = document.querySelector('.tasks');
  function resetTasks() {
    tasksView.innerHTML = '';
  }
  function updateTasks() {
    resetTasks();
    tasks.forEach((t) => {
      createTask(t);
    });
  }
  function addTask(e) {
    e.preventDefault();
    const newTask = storeInput();
    tasks.push(newTask);
    console.log(tasks);
    updateTasks();
    renderTasks(e);
  }
  addTaskBtn.addEventListener('click', addTask);
}
