export default function appController() {
  const tasksWrapper = document.querySelector('.t-wrapper');
  const formWrapper = document.querySelector('.f-wrapper');
  function test() {
    tasksWrapper.style.display = 'none';
    formWrapper.classList.toggle('form-show');
    formWrapper.style.display = 'flex';
  }
  function openTaskForm() {
    tasksWrapper.classList.toggle('tasks-hide');
  }

  const button = document.querySelector('.add-btn');
  button.addEventListener('click', () => {
    openTaskForm();

    setTimeout(() => {
      test();
    }, 100);
  });
}
