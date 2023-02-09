export default function appController() {
  const tasksWrapper = document.querySelector('.t-wrapper');
  const formWrapper = document.querySelector('.f-wrapper');

  const showForm = () => {
    formWrapper.style.animation = 'ease-out formRight 0.1s';
    formWrapper.style.display = 'flex';
    setTimeout(() => {
      formWrapper.style.animation = '';
    }, 100);
  };
  const animateFormOut = () => {
    formWrapper.style.animation = 'ease-out formRight reverse 0.1s';
    setTimeout(() => {
      formWrapper.style.display = 'none';
      formWrapper.style.animation = '';
    }, 100);
  };
  const showTasks = () => {
    tasksWrapper.style.display = 'flex';
    tasksWrapper.style.animation = 'ease-out taskRight reverse 0.1s';
    setTimeout(() => {
      tasksWrapper.style.animation = '';
    }, 100);
  };

  const animateTasksOut = () => {
    tasksWrapper.style.animation = 'ease-out taskRight 0.1s';
    setTimeout(() => {
      tasksWrapper.style.display = 'none';
      tasksWrapper.style.animation = '';
    }, 100);
  };

  const renderForm = () => {
    animateTasksOut();
    setTimeout(() => {
      showForm();
    }, 100);
  };
  const renderTasks = (e) => {
    e.preventDefault();
    animateFormOut();
    setTimeout(() => {
      showTasks();
    }, 100);
  };

  const backBtn = document.querySelector('.back-btn');
  const addBtn = document.querySelector('.add-btn');
  backBtn.addEventListener('click', renderTasks);
  addBtn.addEventListener('click', renderForm);

  const checkmark = document.querySelector('.fa-regular', '.fa-solid');
  checkmark.addEventListener('click', () => {
    if (checkmark.classList.contains('fa-solid')) {
      checkmark.classList.replace('fa-solid', 'fa-regular');
      return;
    }
    checkmark.classList.replace('fa-regular', 'fa-solid');
  });
}
