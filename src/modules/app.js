/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import Task, { tasks } from './models/taskModel';
import Project, { projects } from './models/projectModel';
import createTask from './views/taskView';
import createProject from './views/projectView';

export default function appController() {
  const projectForm = document.querySelector('#project-form');
  const taskForm = document.querySelector('.task-form');
  const tasksWrapper = document.querySelector('.t-wrapper');
  const formWrapper = document.querySelector('.f-wrapper');
  const openWrapper = document.querySelector('.o-wrapper');
  const editBtn = document.querySelector('.edit-task-btn');
  const addTaskBtn = document.querySelector('.add-btn');
  const addBtn = document.querySelector('.add-task-btn');
  const addProjectBtn = document.querySelector('.fa-plus');
  const titleInput = document.querySelector('#task');
  const noteInput = document.querySelector('#note');
  const projectsFormInput = document.querySelector('#projects');
  const formStar = document.querySelector('.add-star');
  let taskIndex = 0;
  let projectIndex;
  let currProject;
  let selected = '';
  let incorrectInput = false;

  // animations
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
    console.log(tasks);
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

  // toggles
  const toggleBtn = () => {
    const title = document.querySelector('.form-title-header');
    title.textContent = 'Edit Task';
    editBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
  };
  const toggleComplete = (e) => {
    e.stopPropagation();
    e.target.classList.toggle('fa-solid');
    e.target.classList.toggle('fa-circle');
    e.target.classList.toggle('fa-circle-check');
  };
  const toggleStar = () => {
    formStar.classList.toggle('starred');
  };
  const toggleAddProject = () => {
    const form = document.querySelector('#project-form');
    if (form.hidden === false) {
      form.hidden = true;
    } else form.hidden = false;
    const input = document.querySelector('#project-name');
    input.focus();
  };
  function toggleEditProject(e) {
    console.log(currProject);
    const form = document.querySelector('#project-form');
    form.hidden = false ? true : false;
    const input = document.querySelector('#project-name');
    input.focus();
    projectIndex = e.target.closest('.project').getAttribute('data-id');
    input.value = projects[projectIndex].name;
    selected = e.target.closest('.project');
    selected.classList.toggle('edited');
    selected.style.display = 'none';
  }
  // resets
  function resetProjects() {
    document.querySelector('.project-grp').innerHTML = '';
    document.querySelector('select').innerHTML = '';
  }
  function resetTasks() {
    document.querySelector('.tasks').innerHTML = '';
  }
  function resetForm() {
    document.querySelector('form').reset();
    document.querySelector('.task-form').reset();
  }

  const updateOpenTask = (e) => {
    const title = document.querySelector('#open-title');
    const note = document.querySelector('#open-note');
    const project = document.querySelector('#projects');
    // const date = document.querySelector('#date');
    const isStarred = formStar.classList.contains('starred');
    const id = e.target.closest('.task').getAttribute('data-id');

    title.textContent = currProject.tasks[id].title;
    note.textContent = currProject.tasks[id].note;
  };
  const renderTasksOpenView = (e) => {
    hideTasksLeft();

    setTimeout(() => {
      updateOpenTask(e);
      openTask();
    }, 100);
  };
  const renderFormView = () => {
    resetForm();
    document.querySelector('select').value = currProject.name;
    document.querySelector('.form-title-header').textContent = 'Add Task';
    document.querySelector('select').addEventListener('change', (e) => {
      const project = projects.find((item) => item.name === e.target.value);
      currProject = project;
    });

    hideTasksRight();
    setTimeout(() => {
      showForm();
      titleInput.focus();
    }, 100);
  };
  const renderEditView = (e, project) => {
    taskIndex = e.currentTarget.closest('.task').getAttribute('data-id');
    titleInput.value = project.getTasks()[taskIndex].title;
    noteInput.value = project.getTasks()[taskIndex].note;
    document.querySelector('select').value = currProject.name;
    e.stopImmediatePropagation();
    hideTasksRight();

    setTimeout(() => {
      showForm();
      toggleBtn();
    }, 100);
  };
  const renderTasksView = (e) => {
    resetForm();
    e.preventDefault();
    if (addBtn.classList.contains('hidden')) {
      toggleBtn();
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
      button.addEventListener('click', (e) => {
        renderEditView(e, currProject);
      });
    });
  }
  function renderTasks(project) {
    resetTasks();
    console.log(currProject);
    if (project.getTasks().length === 0) {
      console.log('there are no tasks');
      document.querySelector('.tasks').textContent = 'Add a task to get started';
    }
    project.getTasks().forEach((task) => {
      createTask(task, project.getTasks());
    });
    addTaskHandlers();
  }
  function updateSelectedProject() {
    const projectsList = document.querySelectorAll('.project');
    projectsList.forEach((project) => {
      const i = project.querySelector('i');
      const p = project.querySelector('p');
      if (p.textContent === currProject.name) {
        p.closest('.project').style.backgroundColor = '#24222d';
        i.closest('.folder').className = 'folder material-symbols-rounded';
      }
    });
  }
  function addProjectHandlers() {
    const projectWrapper = document.querySelectorAll('.project');
    const folders = document.querySelectorAll('.folder');
    const editBtns = document.querySelectorAll('.edit-p');

    projectWrapper.forEach((wrapper) => {
      wrapper.addEventListener('click', (e) => {
        projectWrapper.forEach((project) => {
          project.style.backgroundColor = '';
          e.target.style.backgroundColor = '#24222d';
        });
        folders.forEach((folder) => {
          folder.className = 'folder material-symbols-outlined';
        });

        projectIndex = e.currentTarget.closest('.project').getAttribute('data-id');

        const folder = e.currentTarget.querySelector('.folder');
        folder.className = 'folder material-symbols-rounded';

        currProject = projects[projectIndex];
        renderTasks(currProject);
        renderTasksView(e);
      });
    });
    editBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        toggleEditProject(e);
      });
    });
  }
  function renderProjects() {
    resetProjects();
    projects.forEach((x) => {
      createProject(x);
    });
    addProjectHandlers();
  }

  function storeProject() {
    const name = document.querySelector('#project-name').value;
    return new Project(name);
  }
  function projectValidation() {
    const name = document.querySelector('#project-name');
    if (name.value === '') {
      console.log('test');
      name.setCustomValidity('Project cannot be empty');
      name.reportValidity();
      incorrectInput = true;
    }
    if (projects.find((project) => project.name === name.value)) {
      name.setCustomValidity('Project exists');
      name.reportValidity();
      incorrectInput = true;
    }
  }
  function taskValidation() {
    const task = document.querySelector('#task');
    console.log(task);
    if (task.value === '') {
      console.log('test');
      task.setCustomValidity('Task cannot be empty');
      task.reportValidity();
      incorrectInput = true;
    }
    console.log(currProject.getTasks());
    if (currProject.getTasks().find((x) => x.title === task.value)) {
      task.setCustomValidity('Task already exists');
      task.reportValidity();
      incorrectInput = true;
    }
  }
  function addProject() {
    projectValidation();
    if (incorrectInput === true) {
      return;
    }

    const newProject = storeProject();
    const existingProject = projects.find((project) => project.name === newProject.name);
    if (!existingProject) {
      projects.push(newProject);
      currProject = newProject;
      resetForm();
    }
    if (incorrectInput === false) {
      renderProjects();
      toggleAddProject();
    }
  }
  function editProject() {
    projectValidation();
    if (incorrectInput === true) {
      return;
    }
    const name = document.querySelector('#project-name');
    projects[projectIndex].name = name.value;
    resetForm();
    toggleAddProject();
    renderProjects();
  }
  function storeInput() {
    const title = document.querySelector('#task').value;
    const note = document.querySelector('#note').value;
    const project = document.querySelector('#projects').value;
    const date = document.querySelector('#date').value;
    const isStarred = formStar.classList.contains('starred');

    return new Task(title, note, project, date, isStarred);
  }
  function addTask(e, project) {
    taskValidation();
    if (incorrectInput === true) {
      return;
    }
    // console.log(currProject);
    // if (!titleInput.checkValidity()) {
    //   titleInput.innerHTML = titleInput.validationMessage;
    //   return;
    // }

    e.preventDefault();
    const newTask = storeInput();
    const existingTask = project.getTasks().find((task) => task.title === newTask.title);
    if (!existingTask) {
      project.getTasks().push(newTask);
      resetProjects();
      renderProjects(e);
      updateSelectedProject();
      renderTasksView(e);
      renderTasks(currProject);
      // console.log(project.getTasks());
      resetForm();
    }
  }
  function editTask(e, project) {
    taskValidation();
    if (incorrectInput === true) {
      return;
    }
    // if (!titleInput.checkValidity()) {
    //   titleInput.innerHTML = titleInput.validationMessage;
    //   return;
    // }

    e.preventDefault();
    const editedTask = storeInput();
    // const existingTask = project
    //   .getTasks()
    //   .find((task) => task.title === editedTask.title);

    //if editing task to another folder, push it there
    if (projectsFormInput.value !== project.name) {
      const temp = projects.find((x) => x.name === projectsFormInput.value);
      temp.getTasks().push(editedTask);
      currProject = temp;
    } else project.getTasks().splice(taskIndex, 1, editedTask);

    incorrectInput = false;
    resetProjects();
    renderProjects(e);
    updateSelectedProject();
    renderTasksView(e);
    renderTasks(currProject);
  }

  addProjectBtn.addEventListener('click', toggleAddProject);
  formStar.addEventListener('click', toggleStar);
  addTaskBtn.addEventListener('click', renderFormView);
  addBtn.addEventListener('click', (e) => {
    incorrectInput = false;
    addTask(e, currProject);
  });
  editBtn.addEventListener('click', (e) => {
    editTask(e, currProject);
  });

  projectForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (selected !== '' && incorrectInput === false) {
        if (selected.classList.contains('edited')) {
          console.log('edit ran');

          editProject();
          selected.classList.toggle('edited');
          selected = '';
        }
      } else {
        addProject();

        console.log('add ran');
      }
      incorrectInput = false;
      updateSelectedProject();
      renderTasksView(e);
      renderTasks(currProject);
    }
  });
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  taskForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  });

  document.addEventListener('DOMContentLoaded', (e) => {
    const introTask = new Task(
      'Click me for more info',
      'Tasks can be expanded to view more detailed information about them. \nYou can add notes, projects and due dates from the task form pane.',
      'Introduction'
    );
    const introTaskTwo = new Task('Test', 'Test text', 'Tester');
    const introProject = new Project('Default');
    currProject = introProject;
    projects.push(introProject);
    introProject.getTasks().push(introTask);
    introProject.getTasks().push(introTaskTwo);
    renderProjects(e);
    renderTasks(currProject);
    renderTasksView(e);

    const initProject = document.querySelector('.project');
    initProject.style.backgroundColor = '#24222d';
    const folder = document.querySelector('.folder');
    folder.className = 'folder material-symbols-rounded';
  });
}
