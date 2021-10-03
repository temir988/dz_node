// const fs = require("fs/promises");
// const { existsSync } = require("fs");
const { EventEmitter } = require("events");
// const { dbDumpFile } = require("../config");

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
  // async initFromDump() {
  //   if (existsSync(dbDumpFile) === false) {
  //     return;
  //   }

  //   const dump = require(dbDumpFile);
  //   this.files = dump;
  // }

  // async insert(img, originalContent) {
  //   await img.saveOriginal(originalContent);

  //   this.emit("changed");
  // }

  // async remove(svgId) {
  //   const svgRaw = this.idToSvg[svgId];

  //   const svg = new Svg(svgRaw.id, svgRaw.createdAt);

  //   await svg.removeOriginal();

  //   delete this.idToSvg[svgId];
  //   delete this.likedIds[svgId];

  //   this.emit("changed");

  //   return svgId;
  // }

  // findOne(svgId) {
  //   const svgRaw = this.idToSvg[svgId];

  //   if (!svgRaw) {
  //     return null;
  //   }

  //   const svg = new Svg(svgRaw.id, svgRaw.createdAt);

  //   return svg;
  // }

  // find(isLiked = false) {
  //   let allSvgs = Object.values(this.idToSvg);

  //   if (isLiked === true) {
  //     allSvgs = allSvgs.filter((svg) => this.likedIds[svg.id]);
  //   }

  //   allSvgs.sort((svgA, svgB) => svgB.createdAt - svgA.createdAt);

  //   return allSvgs;
  // }
}

const db = new Database();

// db.initFromDump();

// db.on("changed", () => {
//   fs.writeFile(dbDumpFile, db.toJSON(), { encoding: "utf-8" });
// });

module.exports = db;
