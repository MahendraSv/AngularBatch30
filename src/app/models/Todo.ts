export default class Todo {
  text: string;
  completed: boolean;

  constructor(text: string, completed: boolean) {
    this.text = text;
    this.completed = completed;
  }
}
