export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    this.members.forEach((element) => {
      if (element === char) {
        throw new Error('Персонаж уже существует в команде');
      }
    });
    this.members.add(char);
  }

  addAll(...chars) {
    chars.forEach((element) => this.members.add(element));
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}
