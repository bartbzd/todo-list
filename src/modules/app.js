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

  const renderEdit = () => {
    hideTasksRight();
    setTimeout(() => {
      showEdit();
    }, 100);
  };
  const renderExpandedTask = () => {
    hideTasksLeft();
    setTimeout(() => {
      openTask();
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

  const editBtn = document.querySelector('.edit');
  const checkmark = document.querySelector('.fa-regular');
  const closeBtn = document.querySelector('.close-btn');
  const backBtn = document.querySelectorAll('.back-btn');
  const addBtn = document.querySelector('.add-btn');
  const task = document.querySelector('.task');
  backBtn.forEach((button) => {
    button.addEventListener('click', renderTasks);
  });
  closeBtn.addEventListener('click', renderTasks);
  addBtn.addEventListener('click', renderForm);
  task.addEventListener('click', renderExpandedTask);
  editBtn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    renderEdit();
  });

  const toggleCheckmark = () => {
    checkmark.classList.toggle('fa-solid');
    checkmark.classList.toggle('fa-circle');
    checkmark.classList.toggle('fa-circle-check');
  };
  checkmark.addEventListener('click', toggleCheckmark);
}
