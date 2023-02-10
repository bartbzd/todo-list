export default function appController() {
  const tasksWrapper = document.querySelector('.t-wrapper');
  const formWrapper = document.querySelector('.f-wrapper');
  const expandWrapper = document.querySelector('.e-wrapper');

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
  const showTasksRight = () => {
    tasksWrapper.style.display = 'flex';
    tasksWrapper.style.animation = 'ease-out taskRight reverse 0.1s';
    setTimeout(() => {
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

  const hideTasksRight = () => {
    tasksWrapper.style.animation = 'ease-out taskRight 0.1s';
    setTimeout(() => {
      tasksWrapper.style.display = 'none';
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

  const expandTask = () => {
    expandWrapper.style.display = 'flex';
    expandWrapper.style.animation = 'ease-out taskRight reverse 0.1s';
    setTimeout(() => {
      expandWrapper.style.animation = '';
    }, 100);
  };
  const closeTask = () => {
    expandWrapper.style.animation = 'ease-out taskRight 0.1s';
    setTimeout(() => {
      expandWrapper.style.display = 'none';
      expandWrapper.style.animation = '';
    }, 100);
  };
  const renderForm = () => {
    hideTasksRight();
    setTimeout(() => {
      showForm();
    }, 100);
  };
  const renderTasks = (e) => {
    e.preventDefault();
    if (formWrapper.style.display === 'flex') {
      hideForm();
      setTimeout(() => {
        showTasksRight();
      }, 100);
      return;
    }
    if (expandWrapper.style.display === 'flex') {
      closeTask();
      setTimeout(() => {
        showTasksLeft();
      }, 100);
    }
  };
  const renderExpandedTask = () => {
    hideTasksLeft();
    setTimeout(() => {
      expandTask();
    }, 100);
  };

  const checkmark = document.querySelector('.fa-regular');
  const closeBtn = document.querySelector('.close-btn');
  const backBtn = document.querySelector('.back-btn');
  const addBtn = document.querySelector('.add-btn');
  const task = document.querySelector('.task');
  backBtn.addEventListener('click', renderTasks);
  closeBtn.addEventListener('click', renderTasks);
  addBtn.addEventListener('click', renderForm);
  task.addEventListener('click', renderExpandedTask);

  const toggleCheckmark = () => {
    checkmark.classList.toggle('fa-solid');
    checkmark.classList.toggle('fa-circle');
    checkmark.classList.toggle('fa-circle-check');
  };
  checkmark.addEventListener('click', toggleCheckmark);
}
