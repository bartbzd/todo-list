export default class Task {
  constructor(title, note, project, date, isStarred = false) {
    this.title = title;
    this.note = note;
    this.project = project;
    this.date = date;
    this.isStarred = isStarred;
  }
  //   let tasks = []

  //   editTask(title, note, project, date) {
  //     this.title = title;
  //     this.note = note;
  //     this.project = project;
  //     this.date = date;
  //     this.isStarred = false;
  //   }
}
