export default class Task {
  constructor(title, note, project, date, isStarred = false) {
    this.title = title;
    this.note = note;
    this.project = project;
    this.date = date;
    this.isStarred = isStarred;
  }

  getTitle() {
    return this.title;
  }

  getProject() {
    return this.project;
  }

  getIsStarred() {
    return this.isStarred;
  }
  //   editTask(title, note, project, date) {
  //     this.title = title;
  //     this.note = note;
  //     this.project = project;
  //     this.date = date;
  //     this.isStarred = false;
  //   }
}
