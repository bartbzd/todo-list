/* eslint-disable no-console */
import Task, { tasks } from './models/taskModel';
import Project, { projects } from './models/projectModel';
import createTask from './views/taskView';
import createProject from './views/projectView';

export default function appController() {
  const projectForm = document.querySelector('#project-form');
  const tasksWrapper = document.querySelector('.t-wrapper');
  const formWrapper = document.querySelector('.f-wrapper');
  const openWrapper = document.querySelector('.o-wrapper');
  const editBtn = document.querySelector('.edit-task-btn');
  const addTaskBtn = document.querySelector('.add-btn');
  const addBtn = document.querySelector('.add-task-btn');
  const addProjectBtn = document.querySelector('.fa-plus');
  const titleInput = document.querySelector('#task');
  const noteInput = document.querySelector('#note');
  const formStar = document.querySelector('.add-star');
  let taskIndex = 0;
  let projectIndex = 0;
  let currProject;

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
  function toggleAddProject() {
    const form = document.querySelector('#project-form');
    if (form.hidden === false) {
      form.hidden = true;
    } else form.hidden = false;
    const input = document.querySelector('#project-name');
    input.focus();
  }

  // resets
  function resetProjects() {
    document.querySelector('.project-grp').innerHTML = '';
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

    title.textContent = tasks[id].title;
    note.textContent = tasks[id].note;
  };

  const renderFormView = () => {
    resetForm();
    hideTasksRight();
    setTimeout(() => {
      showForm();

      const title = document.querySelector('.form-title-header');
      title.textContent = 'Add Task';
    }, 100);
  };
  const renderEditView = (e, project) => {
    taskIndex = e.currentTarget.closest('.task').getAttribute('data-id');
    titleInput.value = project.getTasks()[taskIndex].title;
    noteInput.value = project.getTasks()[taskIndex].note;
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
        // toggleBtn();
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
      updateOpenTask(e);
      openTask();
    }, 100);
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
    console.log(project);
    project.getTasks().forEach((task) => {
      createTask(task, project.getTasks());
    });
    addTaskHandlers();
  }
  function addProjectHandlers() {
    const projectWrapper = document.querySelectorAll('.project');
    const folders = document.querySelectorAll('.folder');
    projectWrapper.forEach((project) => {
      project.addEventListener('click', (e) => {
        projectWrapper.forEach((proj) => {
          proj.style.backgroundColor = '';
        });
        folders.forEach((folder) => {
          folder.className = 'folder material-symbols-outlined';
        });
        projectIndex = e.currentTarget.closest('.project').getAttribute('data-id');
        currProject = projects[projectIndex];
        e.currentTarget.style.backgroundColor = '#24222d';

        const folder = e.currentTarget.querySelector('.folder');

        folder.className = 'folder material-symbols-rounded';

        // const folderIndex;
        // folderIndex = currProject;
        console.log(currProject);
        renderTasks(currProject);
        renderTasksView(e);
      });
    });
  }

  function renderProjects() {
    projects.forEach((x) => {
      createProject(x);
      const initProject = document.querySelector('.project');
      initProject.style.backgroundColor = '#24222d';
      const folder = document.querySelector('.folder');
      folder.className = 'folder material-symbols-rounded';
    });
    addProjectHandlers();
  }

  function storeProject() {
    const name = document.querySelector('#project-name').value;
    return new Project(name);
  }
  function addProject(e) {
    // if (!titleInput.checkValidity()) {
    //   titleInput.innerHTML = titleInput.validationMessage;
    //   return;
    // }
    e.preventDefault();
    const newProject = storeProject();
    const existingProject = projects.find((project) => project.name === newProject.name);
    if (!existingProject) {
      projects.push(newProject);
      resetForm();
    }
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
    if (!titleInput.checkValidity()) {
      titleInput.innerHTML = titleInput.validationMessage;
      return;
    }

    e.preventDefault();
    const newTask = storeInput();
    const existingTask = project.getTasks().find((task) => task.title === newTask.title);
    if (!existingTask) {
      project.getTasks().push(newTask);
      renderTasksView(e);
      renderTasks(project);
      resetForm();
    }
  }
  function editTask(e, project) {
    if (!titleInput.checkValidity()) {
      titleInput.innerHTML = titleInput.validationMessage;
      return;
    }

    e.preventDefault();
    const editedTask = storeInput();
    project.getTasks().splice(taskIndex, 1, editedTask);
    renderTasksView(e);
    renderTasks(currProject);
  }

  addProjectBtn.addEventListener('click', toggleAddProject);
  formStar.addEventListener('click', toggleStar);
  addTaskBtn.addEventListener('click', renderFormView);
  addBtn.addEventListener('click', (e) => {
    addTask(e, currProject);
  });
  editBtn.addEventListener('click', editTask);

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  projectForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      resetProjects();
      addProject(e);
      console.log(projects);
      renderProjects();
      toggleAddProject();
    }
  });

  document.addEventListener('DOMContentLoaded', (e) => {
    console.log('test');
    const introTask = new Task(
      'Click me for more info',
      'Tasks can be expanded to view more detailed information about them. \nYou can add notes, projects and due dates from the task form pane.',
      'Introduction'
    );
    const introTaskTwo = new Task('Test', 'Test text');
    const introProject = new Project('Tester');
    currProject = introProject;
    projects.push(introProject);
    introProject.getTasks().push(introTask);
    introProject.getTasks().push(introTaskTwo);
    console.log(projects);
    // tasks.push(introTask);
    renderProjects();
    renderTasks(currProject);
    renderTasksView(e);
  });
}
