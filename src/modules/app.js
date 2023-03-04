/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import Task from './models/taskModel';
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
  const projectGrp = document.querySelector('.project-grp');
  const input = document.querySelector('#project-name');
  const selectAll = document.querySelector('.all');

  const componentColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--component');
  let taskIndex = 0;
  let projectIndex;
  let currProject;
  let allTasksList;
  let selected = '';

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
    // console.log(tasks);
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

  // validity
  function isProjectValid() {
    const name = document.querySelector('#project-name');
    if (!name.value) {
      console.log('test');
      name.setCustomValidity('Project cannot be empty');
      name.reportValidity();
      return false;
    }
    if (projects.find((project) => project.name === name.value)) {
      name.setCustomValidity('Project exists');
      name.reportValidity();
      return false;
    }
    return true;
  }
  function isTaskValid() {
    const task = document.querySelector('#task');
    console.log(task);
    if (!task.value) {
      console.log('test');
      task.setCustomValidity('Task cannot be empty');
      task.reportValidity();
      return false;
    }

    // if (project.getTasks().find(({ title }) => title === task.value)) {
    //   task.setCustomValidity('Task already exists');
    //   task.reportValidity();
    //   return false;
    // }
    return true;
  }

  // toggles
  const toggleBtnText = () => {
    const title = document.querySelector('.form-title-header');
    title.textContent = 'Edit Task';
    editBtn.classList.toggle('hidden');
    addBtn.classList.toggle('hidden');
  };
  const toggleComplete = (e, project) => {
    e.stopPropagation();
    taskIndex = e.target.closest('.task').getAttribute('data-id');
    project.getTasks()[taskIndex].isComplete = true;

    const checkmarkClasses = ['fa-regular', 'fa-solid', 'fa-circle', 'fa-circle-check'];
    checkmarkClasses.forEach((className) => e.target.classList.toggle(className));

    const title = e.target.closest('.task').querySelector('.task-title');
    const wrapper = e.target.closest('.task');
    const actions = e.target.closest('.task').querySelector('.actions');

    if (title.style.textDecoration === '' && title.style.color !== '#d2d8f7a6') {
      title.style.transition = '0.2s ease-in-out';
      title.style.textDecoration = 'line-through';
      title.style.color = '#d2d8f7a6';

      wrapper.style.transition = '0.2s ease-in-out';
      wrapper.style.backgroundColor = '#151319';

      actions.style.transition = '0.2s ease-in-out';
      actions.style.opacity = '0';
    } else {
      title.style.textDecoration = '';
      title.style.color = '#d2d8f7';
      actions.style.opacity = '1';
      wrapper.style.backgroundColor = '#24222d'; //card-4
    }
  };
  const toggleFormStar = () => {
    formStar.classList.toggle('starred');
    formStar.classList.toggle('fa-regular');
    formStar.classList.toggle('fa-solid');
  };
  const togglePlusBtn = () => {
    resetForm();
    addProjectBtn.classList.toggle('plus');
    addProjectBtn.classList.toggle('rotated');
  };
  const toggleAddProject = () => {
    togglePlusBtn();
    projectForm.hidden = !projectForm.hidden;
    if (!projectForm.hidden) {
      projectGrp.insertBefore(projectForm, projectGrp.firstChild);
      input.focus();
    }

    const projectBtns = document.querySelectorAll('.options');
    projectBtns.forEach((btn) => {
      btn.style.opacity = '0';
    });
    if (projectForm.hidden) {
      selected = '';
      renderProjects();
      updateSelectedProject();
    }
  };
  function toggleEditProject(e) {
    console.log(currProject);
    togglePlusBtn();
    projectForm.hidden = !projectForm.hidden;
    const projectBtns = document.querySelectorAll('.options');
    projectBtns.forEach((btn) => {
      // btn.style.display = 'none';
      btn.style.opacity = '0';
    });
    if (!projectForm.hidden) {
      projectGrp.insertBefore(projectForm, projectGrp.firstChild);
      projectIndex = e.target.closest('.project').getAttribute('data-id');
      console.log(projectIndex);
      input.value = projects[projectIndex].name;
      input.focus();
      console.log(input);
      selected = e.target.closest('.project');
      selected.classList.toggle('edited');
      selected.style.display = 'none';
    }
  }

  // resets
  function resetStar() {
    document.querySelector('.add-star').className = 'add-star fa-regular fa-star';
  }
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
  function resetFilters() {
    const filters = document.querySelectorAll('.filter');
    filters.forEach((filter) => {
      filter.style.backgroundColor = '#141319';
    });
  }
  function resetSelectedProject() {
    const projectsList = document.querySelectorAll('.project');
    projectsList.forEach((project) => {
      project.style.backgroundColor = '#24222d';
    });
  }

  const updateOpenTask = (e) => {
    const title = document.querySelector('#open-title');
    const note = document.querySelector('#open-note');
    const project = document.querySelector('#open-project');
    // const date = document.querySelector('#date');

    const star = document.querySelector('.open-star');
    const id = e.target.closest('.task').getAttribute('data-id');
    const isStarred = currProject.tasks[id].getIsStarred();
    console.log(isStarred);
    title.textContent = currProject.tasks[id].title;
    note.textContent = currProject.tasks[id].note;
    project.textContent = currProject.tasks[id].project;
    if (isStarred === false) {
      star.style.display = 'none';
    } else star.style.display = 'inline-block';
  };
  function updateSelectedProject() {
    resetFilters();
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

  const renderTasksOpenView = (e) => {
    hideTasksLeft();

    setTimeout(() => {
      openTask();
      updateOpenTask(e);
    }, 100);
  };
  const renderFormView = () => {
    resetForm();
    resetStar();
    document.querySelector('select').value = currProject.name;
    document.querySelector('.form-title-header').textContent = 'Add Task';

    document.querySelector('select').addEventListener('change', (e) => {
      const project = projects.find((item) => item.name === e.target.value);

      // currProject = project;

      // tempProject = project;
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

    console.log(project.getTasks()[taskIndex].getIsStarred());
    if (project.getTasks()[taskIndex].getIsStarred()) {
      formStar.classList.add('starred');
      formStar.classList.remove('fa-regular');
      formStar.classList.add('fa-solid');
      // console.log('test');
    } else {
      formStar.classList.remove('starred');
      formStar.classList.add('fa-regular');
      formStar.classList.remove('fa-solid');
    }
    // document.querySelector('select').addEventListener('change', () => {
    //   tempProject = projects.find((item) => item.name === e.target.value);
    // });
    e.stopImmediatePropagation();
    hideTasksRight();

    setTimeout(() => {
      showForm();
      titleInput.focus();
      toggleBtnText();
    }, 100);
  };
  const renderTasksView = (e) => {
    resetForm();
    e.preventDefault();
    if (addBtn.classList.contains('hidden')) {
      toggleBtnText();
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
    const checkmarks = document.querySelectorAll('.fa-circle, .fa-circle-check');
    const editBtns = document.querySelectorAll('.edit');
    const deleteBtns = document.querySelectorAll('.delete');
    const backBtn = document.querySelectorAll('.back-btn');

    backBtn.forEach((button) => {
      button.addEventListener('click', renderTasksView);
    });
    taskWrapper.forEach((task) => {
      task.addEventListener('click', renderTasksOpenView);
    });
    checkmarks.forEach((checkmark) => {
      checkmark.addEventListener('click', (e) => {
        toggleComplete(e, currProject);
      });
    });
    editBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        renderEditView(e, currProject);
      });
    });
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.target.closest('.task').style.animation = 'ease-in formRight reverse 0.3s';
        toggleComplete(e, currProject);
        setTimeout(() => {
          deleteTask(e, currProject);
        }, 200);
      });
    });
  }
  function renderTasks(project) {
    resetTasks();
    if (project.getTasks().length === 0) {
      document.querySelector('.tasks').appendChild(document.createElement('p'));
      document.querySelector('.tasks p').textContent = 'No tasks found';
      document.querySelector('.tasks p').className = 'no-tasks';
    }

    project.getTasks().forEach((task) => {
      const taskWrapper = createTask(task, project.getTasks());
      document.querySelector('.tasks').append(taskWrapper);

      if (task.getIsStarred()) {
        taskWrapper.querySelector('.fa-star').classList.replace('fa-regular', 'fa-solid');
      }

      if (task.isComplete) {
        const title = taskWrapper.closest('.task').querySelector('.task-title');
        const wrapper = taskWrapper.closest('.task');
        const actions = taskWrapper.closest('.task').querySelector('.actions');
        const checkmark = taskWrapper.closest('.task').querySelector('.fa-circle-check');
        console.log(checkmark);
        //add selector for closest checkmark, toggle status

        title.style.transition = '0.2s ease-in-out';
        title.style.textDecoration = 'line-through';
        title.style.color = '#d2d8f7a6';

        wrapper.style.transition = '0.2s ease-in-out';
        wrapper.style.backgroundColor = '#151319';

        actions.style.transition = '0.2s ease-in-out';
        actions.style.opacity = '0';
      }
    });
    addTaskHandlers();
  }

  function handleProjectClick(e) {
    resetFilters();
    const projectWrappers = document.querySelectorAll('.project');
    const project = e.currentTarget.closest('.project');
    projectWrappers.forEach((wrapper) => {
      wrapper.style.backgroundColor = '';
    });
    project.style.backgroundColor = '#24222d';

    const folders = document.querySelectorAll('.folder');
    folders.forEach((folder) => {
      folder.className = 'folder material-symbols-outlined';
    });
    const folder = project.querySelector('.folder');
    folder.className = 'folder material-symbols-rounded';

    projectIndex = project.getAttribute('data-id');
    currProject = projects[projectIndex];

    renderTasks(currProject);
    renderTasksView(e);
  }
  function handleEditProjectClick(e) {
    e.stopPropagation();
    renderTasks(currProject);

    renderTasksView(e);
    toggleEditProject(e);
  }
  function addProjectHandlers() {
    const projectWrappers = document.querySelectorAll('.project');
    const editBtns = document.querySelectorAll('.edit-p');

    projectWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', handleProjectClick);
    });

    editBtns.forEach((button) => {
      button.addEventListener('click', handleEditProjectClick);
    });
  }
  function renderProjects() {
    resetProjects();
    projects.forEach((project) => {
      createProject(project);
    });
    addProjectHandlers();
  }

  function storeProject() {
    const name = document.querySelector('#project-name').value;
    return new Project(name);
  }
  function addProject() {
    if (!isProjectValid()) return;
    const newProject = storeProject();
    const existingProject = projects.find((project) => project.name === newProject.name);
    if (!existingProject) {
      projects.unshift(newProject);
      currProject = newProject;
      resetForm();
    }
    renderProjects();
    toggleAddProject();
  }
  function editProject() {
    const name = document.querySelector('#project-name');
    if (!name.value) {
      console.log('test');
      name.setCustomValidity('Task cannot be empty');
      name.reportValidity();
      return;
    }

    projects[projectIndex].name = name.value;
    resetForm();
    toggleEditProject();
    renderProjects();
  }

  function storeTask() {
    const title = document.querySelector('#task').value;
    const note = document.querySelector('#note').value;
    const project = document.querySelector('#projects').value;
    const date = document.querySelector('#date').value;
    const isStarred = formStar.classList.contains('starred');

    return new Task(title, note, project, date, isStarred);
  }
  function addTask(e, project) {
    if (!isTaskValid()) return;
    e.preventDefault();

    const newTask = storeTask();
    // const existingTask = project.getTasks().find((task) => task.title === newTask.title);
    // if (!existingTask) {
    project.getTasks().push(newTask);
    resetProjects();
    renderProjects();
    updateSelectedProject();
    renderTasksView(e);
    renderTasks(currProject);
    resetForm();
    // }
  }
  function editTask(e, project) {
    e.preventDefault();
    const editedTask = storeTask();
    const temp = projects.find(({ name }) => name === projectsFormInput.value);

    const task = document.querySelector('#task');
    if (!task.value) {
      task.setCustomValidity('Task cannot be empty');
      task.reportValidity();
      return;
    }

    if (projectsFormInput.value !== project.name) {
      temp.getTasks().push(editedTask);
      project.getTasks().splice(taskIndex, 1);
      currProject = temp;
    } else project.getTasks().splice(taskIndex, 1, editedTask);

    resetProjects();
    renderProjects();
    renderTasksView(e);
    updateSelectedProject();
    renderTasks(currProject);
  }
  function deleteTask(e, project) {
    e.stopImmediatePropagation();
    taskIndex = e.target.closest('.task').getAttribute('data-id');
    const taskToDelete = project.getTasks()[taskIndex];

    // Find project task originally came from
    let projectToDeleteFrom;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].getTasks().includes(taskToDelete)) {
        projectToDeleteFrom = projects[i];
        break;
      }
    }
    project.removeTask(taskToDelete);
    projectToDeleteFrom.removeTask(taskToDelete);

    renderTasksView(e);
    renderTasks(currProject);
    // toggleComplete(e, currProject);
    console.log(projects);
  }

  function showAll(e) {
    // resetProjects();
    resetFilters();
    resetSelectedProject();

    e.target.closest('.filter').style.backgroundColor = '#24222d';

    const allTasks = projects.flatMap((project) => project.tasks);
    allTasksList = new Project('All', allTasks);
    console.log(currProject);
    console.log(allTasksList);

    // updateSelectedProject();
    renderProjects();
    currProject = allTasksList;
    renderTasksView(e);
    renderTasks(currProject);
  }
  selectAll.addEventListener('click', showAll);
  addProjectBtn.addEventListener('click', toggleAddProject);
  formStar.addEventListener('click', toggleFormStar);
  addTaskBtn.addEventListener('click', renderFormView);
  addBtn.addEventListener('click', (e) => {
    // incorrectInput = false;
    addTask(e, currProject);
  });
  editBtn.addEventListener('click', (e) => {
    // incorrectInput = false;
    editTask(e, currProject);
  });

  projectForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (selected === '' && isProjectValid()) {
        addProject();
      } else {
        editProject();
        selected.classList.toggle('edited');
        selected = '';
      }

      updateSelectedProject();
      renderTasksView(e);
      renderTasks(currProject);
    }
  });
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  taskForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
    }
  });

  document.addEventListener('DOMContentLoaded', (e) => {
    const introTask = new Task(
      'Click me to learn more!',
      ' - Tasks can be expanded to view more detailed information about them. \n\n - Add notes, due dates and favorite status from the task form pane. \n\n - Thank you for checking out my project!',
      'Default',
      '',
      'true'
    );
    const introTaskTwo = new Task(
      'Sidebar Info',
      ' - Tasks can be filtered by All, Today or Week. \n\n - Add new projects by pressing the (+) button. \n\n - Hover over existing projects to edit or delete them.',
      'Default',
      '',
      'true'
    );
    const introProject = new Project('Default');
    currProject = introProject;
    projects.push(introProject);
    introProject.getTasks().push(introTask);
    introProject.getTasks().push(introTaskTwo);
    renderProjects();
    resetTasks();
    renderTasks(currProject);
    renderTasksView(e);
    // console.log(projects);
    document.querySelector('.project').style.backgroundColor = componentColor;
    document.querySelector('.folder').className = 'folder material-symbols-rounded';
  });
}
