export const tasks = [];

export default class Task {
  constructor(title, note, project, date, isStarred = false) {
    this.title = title;
    this.note = note;
    this.project = project;
    this.date = date;
    this.isStarred = isStarred;
  }

  //   editTask(title, note, project, date) {
  //     this.title = title;
  //     this.note = note;
  //     this.project = project;
  //     this.date = date;
  //     this.isStarred = false;
  //   }
}