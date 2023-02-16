export const projects = [];

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }
}
