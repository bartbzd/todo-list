export const projects = [];

export default class Project {
  constructor(name, tasks = []) {
    this.name = name;
    this.tasks = tasks;
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }

  removeTask(taskToDelete) {
    const index = this.tasks.findIndex((task) => task.title === taskToDelete.title);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
