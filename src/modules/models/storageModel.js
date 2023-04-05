import Task from './taskModel';
import Project from './projectModel';
// import appController from './projectModel';

export let projects = [];

export default class Storage {
  getProjects() {
    const storedProjects = localStorage.getItem('projects');
    console.log(storedProjects);
    projects = JSON.parse(storedProjects);
    projects = projects.map((project) => new Project(project.name, []));
  }

  saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}
