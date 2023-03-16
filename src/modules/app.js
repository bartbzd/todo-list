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
  const textColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--dk-text');
  const subtextColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--dk-subtext');
  const cardColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--card');

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
    const task = project.getTasks()[taskIndex];
    task.isComplete = !task.isComplete;

    const checkmarkClasses = ['fa-regular', 'fa-solid', 'fa-circle', 'fa-circle-check'];
    checkmarkClasses.forEach((className) => {
      if (e.target.classList.contains('check')) {
        e.target.classList.toggle(className);
      }
    });

    const title = e.target.closest('.task').querySelector('.task-title');
    const wrapper = e.target.closest('.task');
    const actions = e.target.closest('.task').querySelector('.actions');
    const edit = e.target.closest('.task').querySelector('.edit');
    const trash = e.target.closest('.task').querySelector('.delete');
    const star = e.target.closest('.task').querySelector('.fa-star');

    if (title.style.textDecoration === '' && title.style.color !== '#d2d8f7a6') {
      title.style.transition = '0.1s ease-in-out';
      wrapper.style.transition = '0.2s ease-in-out';
      edit.style.transition = '0.1s ease-in-out';
      trash.style.transition = '0.1s ease-in-out';
      star.style.transition = '0.1s ease-in-out';

      wrapper.style.backgroundColor = 'transparent';
      title.style.textDecoration = 'line-through';
      title.style.color = subtextColor;
      edit.style.opacity = '0';
      trash.style.opacity = '1';
      star.style.opacity = '0';

      setTimeout(() => {
        edit.style.display = 'none';
        trash.style.display = 'flex';
        star.style.display = 'none';
      }, 100);
    } else {
      wrapper.style.backgroundColor = componentColor;
      title.style.textDecoration = '';
      title.style.color = textColor;
      edit.style.opacity = '1';
      trash.style.opacity = '0';
      star.style.opacity = '1';

      setTimeout(() => {
        edit.style.display = 'flex';
        trash.style.display = 'none';
        star.style.display = 'flex';
      }, 100);
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
    // if (taskForm.hidden === true) {
    //   return;
    // }
    togglePlusBtn();
    projectForm.hidden = !projectForm.hidden;
    if (!projectForm.hidden) {
      projectGrp.insertBefore(projectForm, projectGrp.firstChild);
      input.focus();
    }

    const projectBtns = document.querySelectorAll('.project-btn-grp .options');
    projectBtns.forEach((btn) => {
      btn.style.opacity = '0';
    });
    if (projectForm.hidden) {
      selected = '';
      resetProjects();
      renderProjects();
      updateSelectedProject();
      updateSelectedFilter();
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
    console.log(!editBtn.classList.contains('hidden'));
    if (editBtn.classList.contains('hidden')) {
      document.querySelector('.task-form').reset();
      document.querySelector('form').reset();
    }
  }
  function resetFilters() {
    const filters = document.querySelectorAll('.filter');
    filters.forEach((filter) => {
      filter.style.backgroundColor = 'transparent';
    });
  }
  function resetSelectedProject() {
    const folders = document.querySelectorAll('.folder');
    folders.forEach((folder) => {
      folder.className = 'folder fa-regular fa-folder';
    });
    const projectsList = document.querySelectorAll('.project');
    projectsList.forEach((project) => {
      project.style.backgroundColor = 'transparent';
    });
  }

  // updates
  function updateOpenTask(e) {
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
  }
  function updateSelectedProject() {
    resetFilters();
    const projectsList = document.querySelectorAll('.project');
    projectsList.forEach((project) => {
      const i = project.querySelector('i');
      const p = project.querySelector('p');
      if (p.textContent === currProject.name) {
        p.closest('.project').style.backgroundColor = componentColor;
        i.closest('.folder').className = 'folder fa-solid fa-folder';
      }
    });
  }
  function updateSelectedFilter() {
    if (currProject.name === 'All') {
      const allTab = document.querySelector('.all');
      // e.target.closest('.filter').style.backgroundColor = componentColor;
      allTab.style.backgroundColor = componentColor;
    }
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
    if (projectForm.hidden === false) {
      toggleAddProject();
    }
    document.querySelector('select').value = currProject.name;
    document.querySelector('.form-title-header').textContent = 'Add Task';

    hideTasksRight();
    setTimeout(() => {
      showForm();
      titleInput.focus();
    }, 100);
  };
  const renderEditView = (e, project) => {
    e.stopImmediatePropagation();
    if (projectForm.hidden === false) {
      toggleAddProject();
    }
    taskIndex = e.currentTarget.closest('.task').getAttribute('data-id');
    titleInput.value = project.getTasks()[taskIndex].title;
    noteInput.value = project.getTasks()[taskIndex].note;
    console.log(project.name);

    const projectName = e.currentTarget
      .closest('.task')
      .getAttribute('data-project-name');
    document.querySelector('select').value = projectName;

    if (project.getTasks()[taskIndex].getIsStarred()) {
      formStar.classList.add('starred');
      formStar.classList.remove('fa-regular');
      formStar.classList.add('fa-solid');
    } else {
      formStar.classList.remove('starred');
      formStar.classList.add('fa-regular');
      formStar.classList.remove('fa-solid');
    }

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
        e.stopPropagation();
        e.target.closest('.task').style.animation = 'ease-in formRight reverse 0.3s';
        e.target.closest('.task').style.opacity = '0';
        // toggleComplete(e, currProject);
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
      ////
      // taskWrapper.setAttribute('data-project-id', projects.indexOf(project));
      taskWrapper.setAttribute('data-project-name', task.project);
      ////
      if (task.getIsStarred()) {
        taskWrapper.querySelector('.fa-star').classList.replace('fa-regular', 'fa-solid');
      }

      if (task.isComplete) {
        const wrapper = taskWrapper.closest('.task');
        const checkmark = taskWrapper.closest('.task').querySelector('.fa-circle-check');
        const title = taskWrapper.closest('.task').querySelector('.task-title');
        // const actions = taskWrapper.closest('.task').querySelector('.actions');
        const edit = taskWrapper.closest('.task').querySelector('.edit');
        const trash = taskWrapper.closest('.task').querySelector('.delete');
        const star = taskWrapper.closest('.task').querySelector('.fa-star');

        console.log(checkmark);

        title.style.textDecoration = 'line-through';
        title.style.color = subtextColor;

        wrapper.style.backgroundColor = cardColor;

        // actions.style.opacity = '0';
        edit.style.display = 'none';
        trash.style.display = 'flex';
        star.style.display = 'none';
      }
    });
    addTaskHandlers();
  }

  function handleProjectClick(e) {
    resetFilters();
    resetSelectedProject();
    const projectWrappers = document.querySelectorAll('.project');
    const project = e.currentTarget.closest('.project');
    projectWrappers.forEach((wrapper) => {
      wrapper.style.backgroundColor = '';
    });
    project.style.backgroundColor = componentColor;

    const folder = project.querySelector('.folder');
    folder.className = 'folder fa-solid fa-folder';

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
  function handleDeleteProjectClick(e) {
    e.stopPropagation();
    deleteProject(e);
    resetProjects();
    renderProjects();

    if (currProject.name === 'All') {
      showAll(e);
    }

    renderTasksView(e);
    renderTasks(currProject);
  }
  function addProjectHandlers() {
    const projectWrappers = document.querySelectorAll('.project');
    const editBtns = document.querySelectorAll('.edit-p');
    const deleteBtns = document.querySelectorAll('.delete-p');

    projectWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', handleProjectClick);
    });

    editBtns.forEach((btn) => {
      btn.addEventListener('click', handleEditProjectClick);
    });

    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', handleDeleteProjectClick);
    });
  }
  function renderProjects() {
    // resetProjects();
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
    resetProjects();
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
  //delete project
  function deleteProject(e) {
    projectIndex = e.target.closest('.project').getAttribute('data-id');
    console.log(projectIndex);
    console.log(projects);
    projects.splice(projectIndex, 1);
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
    const temp = projects.find(({ name }) => name === projectsFormInput.value);
    if (projectsFormInput.value !== project.name && projectsFormInput.value !== '') {
      temp.getTasks().push(newTask);
      currProject = temp;
    } else project.getTasks().push(newTask);

    if (projectForm.hidden === false) {
      toggleAddProject();
    }
    resetProjects();
    renderProjects();
    renderTasksView(e);
    renderTasks(currProject);
    updateSelectedProject();
    updateSelectedFilter();
    resetForm();
  }
  function editTask(e, project) {
    if (!isTaskValid()) return;
    e.preventDefault();
    console.log(currProject.name);
    const editedTask = storeTask();
    const temp = projects.find(({ name }) => name === projectsFormInput.value);
    console.log(temp);
    console.log(currProject.name);
    if (projectsFormInput.value !== project.name && projectsFormInput.value !== '') {
      console.log(taskIndex);
      temp.getTasks().splice(taskIndex, 1, editedTask); //push(editedTask)
      project.getTasks().splice(taskIndex, 1);
      currProject = temp;
    } else project.getTasks().splice(taskIndex, 1, editedTask);

    if (!projectForm.hidden) {
      toggleAddProject();
    }
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
    console.log(projectToDeleteFrom);
    if (projectToDeleteFrom !== undefined) {
      projectToDeleteFrom.removeTask(taskToDelete);
    }

    if (projectToDeleteFrom !== currProject) {
      project.removeTask(taskToDelete);
    }

    renderTasksView(e);
    renderTasks(currProject);
  }

  function showAll(e) {
    resetFilters();
    console.log(projects);
    const allTab = document.querySelector('.all');
    allTab.style.backgroundColor = componentColor;

    const allTasks = projects.flatMap((project) => project.tasks);
    const unassignedTasks = [];
    if (allTasksList !== undefined) {
      allTasksList.getTasks().forEach((task) => {
        if (task.project === '') {
          unassignedTasks.push(task);
        }
      });

      allTasksList = undefined;
    }
    allTasksList = new Project('All', allTasks);
    allTasksList.getTasks().push(...unassignedTasks);
    // updateSelectedProject();
    resetSelectedProject();
    resetProjects();
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
    updateSelectedProject();
    // document.querySelector('.project').style.backgroundColor = componentColor;
    // document.querySelector('.folder').className = 'folder material-symbols-rounded';
  });
}
