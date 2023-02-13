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
    e.stopImmediatePropagation();
    console.log(tasks);
    openWrapper.style.display = 'flex';
    openWrapper.style.animation = 'ease-out taskRight reverse 0.1s';

    const title = document.querySelector('#open-title');
    console.log(title);
    const note = document.querySelector('#open-note');
    const project = document.querySelector('#projects');
    // const date = document.querySelector('#date');
    const isStarred = formStar.classList.contains('starred');
    const taskId = e.target.dataset.id;

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
  const renderTasksView = () => {
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
    console.log('im here');

    hideTasksLeft();
    // e.stopImmediatePropagation();

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

  const toggleStar = () => {
    formStar.classList.toggle('starred');
  };

  const toggleCheckmark = (e) => {
    e.stopPropagation();
    e.target.classList.toggle('fa-solid');
    e.target.classList.toggle('fa-circle');
    e.target.classList.toggle('fa-circle-check');
  };

  function addTaskHandlers() {
    const taskBox = document.querySelectorAll('.task');
    taskBox.forEach((task) => {
      task.addEventListener('click', renderTasksOpenView);
    });
  }
  addTaskHandlers();

  function addCheckMarkHandlers() {
    const checkmarks = document.querySelectorAll('.fa-regular');
    checkmarks.forEach((mark) => {
      mark.addEventListener('click', toggleCheckmark);
    });
  }
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
    resetTasks();
    tasks.forEach((task) => {
      createTask(task);
    });
    addTaskHandlers();
    addCheckMarkHandlers();
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
      renderTasksView(e);
      renderTasks();
    }
  }

  formStar.addEventListener('click', toggleStar);
  editBtn.addEventListener('click', renderEditView);
  addTaskBtn.addEventListener('click', renderFormView);
  addBtn.addEventListener('click', addTask);
  backBtn.forEach((button) => {
    button.addEventListener('click', renderTasksView);
  });
  document.addEventListener('DOMContentLoaded', (e) => {
    console.log('test');
    const introTask = new Task(
      'Click to expand me!',
      'Tasks can be expanded to view more detailed information about them. \nYou can add notes, projects and due dates from the task form pane.',
      'Introduction'
    );
    tasks.push(introTask);
    renderTasks();
    renderTasksView(e);

    // addTaskHandlers();
  });
}
