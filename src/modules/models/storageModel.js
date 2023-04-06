import Task from './taskModel';
import Project from './projectModel';

let projects = [];

export default function storage() {
  let data = {
    projects,
    tasks: projects.flatMap((project) => project.getTasks()),
  };

  function saveData() {
    localStorage.setItem('data', JSON.stringify(data));
  }

  function getProjects() {
    const storedData = localStorage.getItem('data');
    data = JSON.parse(storedData);
    // console.log(data);
    // console.log(data.projects[0]);
    const tempProjects = data.projects.map((project) => {
      const tempTasks = project.tasks.map(
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
      return new Project(project.name, tempTasks);
    });
    data = {
      projects: tempProjects,
      tasks: tempProjects.flatMap((project) => project.getTasks()),
    };
    projects = tempProjects;
    // console.log(data);
    // console.log(projects);
  }

  return {
    getProjects,
    saveData,
    projects,
  };
}

export { projects };
