import Task from './taskModel';
import Project from './projectModel';

let projects = [];
let allTasksList = new Project('All');

export default function storage() {
  let data = {
    projects,
    tasks: projects.flatMap((project) => project.getTasks()),
    all: allTasksList.getTasks(),
  };

  function saveData() {
    localStorage.setItem('data', JSON.stringify(data));
  }

  function getData() {
    const storedData = localStorage.getItem('data');
    data = JSON.parse(storedData);

    const storedProjects = data.projects.map((project) => {
      const storedTasks = project.tasks.map(
        (task) =>
          new Task(
            task.title,
            task.note,
            task.project,
            task.date,
            task.isStarred,
            task.isComplete
          )
      );
      return new Project(project.name, storedTasks);
    });

    const allTasks = data.all.map(
      (task) =>
        new Task(
          task.title,
          task.note,
          task.project,
          task.date,
          task.isStarred,
          task.isComplete
        )
    );

    data.projects = storedProjects;
    data.tasks = storedProjects.flatMap((project) => project.getTasks());
    data.all = allTasks;
    projects = storedProjects;
    allTasksList = new Project('All', allTasks);
  }

  function setAllTasksList(tasks) {
    allTasksList = new Project('All', tasks);
  }

  return {
    getData,
    saveData,
    projects,
    allTasksList,
    setAllTasksList,
  };
}

export { projects, allTasksList };
