/* eslint-disable no-console */
import Task, { tasks } from './models/taskModel';
import createTask from './views/taskView';

export default function appController() {
  const tasksWrapper = document.querySelector('.t-wrapper');
  const formWrapper = document.querySelector('.f-wrapper');
  const openWrapper = document.querySelector('.o-wrapper');
  const editBtn = document.querySelector('.edit-task-btn');
  const addTaskBtn = document.querySelector('.add-btn');
  const addBtn = document.querySelector('.add-task-btn');
  const titleInput = document.querySelector('#task');
  const noteInput = document.querySelector('#note');
  const formStar = document.querySelector('.add-star');
  let taskIndex = 0;

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
  // const showEdit = () => {
  //   editWrapper.style.animation = 'ease-out formRight 0.1s';
  //   editWrapper.style.display = 'flex';
  //   setTimeout(() => {
  //     editWrapper.style.animation = '';
  //   }, 100);
  // };
  // const hideEdit = () => {
  //   editWrapper.style.animation = 'ease-out formRight reverse 0.1s';
  //   setTimeout(() => {
  //     editWrapper.style.display = 'none';
  //     editWrapper.style.animation = '';
  //   }, 100);
  // };

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
      const title = document.querySelector('.form-title-header');
      title.textContent = 'Add Task';
    }, 100);
  };
  const updateBtn = () => {
    const title = document.querySelector('.form-title-header');
    title.textContent = 'Edit Task';
    editBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
  };

  const renderEditView = (e) => {
    taskIndex = e.currentTarget.closest('.task').getAttribute('data-id');
    titleInput.value = tasks[taskIndex].title;
    noteInput.value = tasks[taskIndex].note;
    e.stopImmediatePropagation();
    hideTasksRight();
    setTimeout(() => {
      showForm();
      updateBtn();
    }, 100);
  };
  const renderTasksView = (e) => {
    e.preventDefault();
    // if (editWrapper.style.display === 'flex') {
    //   hideEdit();
    //   setTimeout(() => {
    //     showTasksRight();
    //   }, 100);
    //   return;
    // }
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

  const toggleStar = () => {
    formStar.classList.toggle('starred');
  };
  const toggleComplete = (e) => {
    e.stopPropagation();
    e.target.classList.toggle('fa-solid');
    e.target.classList.toggle('fa-circle');
    e.target.classList.toggle('fa-circle-check');
  };

  function storeInput() {
    const title = document.querySelector('#task').value;
    const note = document.querySelector('#note').value;
    const project = document.querySelector('#projects').value;
    const date = document.querySelector('#date').value;
    const isStarred = formStar.classList.contains('starred');

    return new Task(title, note, project, date, isStarred);
  }
  function resetTasks() {
    document.querySelector('.tasks').innerHTML = '';
  }
  function resetForm() {
    document.querySelector('form').reset();
  }
  function addTaskHandlers() {
    const taskWrapper = document.querySelectorAll('.task');
    const checkmarks = document.querySelectorAll('.fa-regular');
    const editBtns = document.querySelectorAll('.edit');
    const backBtn = document.querySelectorAll('.back-btn');
    backBtn.forEach((button) => {
      button.addEventListener('click', renderTasksView);
    });
    taskWrapper.forEach((task) => {
      task.addEventListener('click', renderTasksOpenView);
    });
    checkmarks.forEach((checkmark) => {
      checkmark.addEventListener('click', toggleComplete);
    });
    editBtns.forEach((button) => {
      button.addEventListener('click', renderEditView);
    });
  }
  function renderTasks() {
    resetTasks();
    tasks.forEach((task) => {
      createTask(task);
    });
    addTaskHandlers();
  }

  function addTask(e) {
    if (!titleInput.checkValidity()) {
      titleInput.innerHTML = titleInput.validationMessage;
      return;
    }

    e.preventDefault();
    const newTask = storeInput();
    const existingTask = tasks.find((task) => task.title === newTask.title);
    if (!existingTask) {
      tasks.push(newTask);
      renderTasksView(e);
      renderTasks();
      resetForm();
    }
  }
  function editTask(e) {
    if (!titleInput.checkValidity()) {
      titleInput.innerHTML = titleInput.validationMessage;
      return;
    }

    e.preventDefault();
    const editedTask = storeInput();
    tasks.splice(taskIndex, 1, editedTask);
    renderTasksView(e);
    renderTasks();
    updateBtn();
  }

  formStar.addEventListener('click', toggleStar);
  addTaskBtn.addEventListener('click', renderFormView);
  addBtn.addEventListener('click', addTask);
  editBtn.addEventListener('click', editTask);

  document.addEventListener('DOMContentLoaded', (e) => {
    console.log('test');
    const introTask = new Task(
      'Click me for more info',
      'Tasks can be expanded to view more detailed information about them. \nYou can add notes, projects and due dates from the task form pane.',
      'Introduction'
    );
    tasks.push(introTask);
    renderTasks();
    renderTasksView(e);

    // addTaskHandlers();
  });
}
