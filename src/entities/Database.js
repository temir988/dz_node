const { EventEmitter } = require("events");

class Database extends EventEmitter {
  constructor() {
    super();

    this.files = [];
  }

  save(file) {
    this.files.push(file);
    this.emit("changed");
  }

  getImages() {
    return this.files;
  }

  getImage(id) {
    return this.files.find((file) => file.id === id);
  }

  deleteImage(id) {
    this.files = this.files.filter((file) => file.id !== id);
  }

  toJSON() {
    return JSON.stringify(this.files);
  }
}

const db = new Database();

module.exports = db;
