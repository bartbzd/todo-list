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

  removeTask(selectedTask) {
    // prettier-ignore
    const index = this.tasks.findIndex(
      (task) => task.title === selectedTask.title
    );
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
