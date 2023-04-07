import Task from './taskModel';
import Project from './projectModel';

let projects = [];
let allTasksList = new Project('All');

export default function storage() {
  let all = allTasksList.getTasks();
  console.log(allTasksList.getTasks());
  let data = {
    projects,
    tasks: projects.flatMap((project) => project.getTasks()),
  };

  function saveData() {
    localStorage.setItem('data', JSON.stringify(data));
  }

  function getData() {
    const storedData = localStorage.getItem('data');
    data = JSON.parse(storedData);
    console.log(data);
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
    // allTasksList = new Project('All');
    const allTasks = all.map(
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
    console.log(allTasks);
    allTasksList = new Project('All', allTasks);
  }
  //   function saveAllTasks() {
  //     localStorage.setItem('allTasks', JSON.stringify(allTasksList));
  //   }
  //   function getAllTasks() {
  //     const storedAllTasks = localStorage.getItem('allTasks');
  //     console.log(storedAllTasks);
  //     if (storedAllTasks) {
  //       all = JSON.parse(storedAllTasks);
  //     } else {
  //       all = new Project('All');
  //     }
  //     console.log(all);
  //     const tempTasks = all.map(
  //       (task) =>
  //         new Task(
  //           task.title,
  //           task.note,
  //           task.project,
  //           task.date,
  //           task.isStarred,
  //           task.isComplete
  //         )
  //     );

  //     all = tempTasks.flatMap((task) => task.getTasks());
  //     allTasksList = tempTasks;
  //     // projects = tempProjects;
  //   }
  return {
    getData,
    saveData,
    projects,
    // saveAllTasks,
    // getAllTasks,
    allTasksList,
  };
}

export { projects };
export { allTasksList };
