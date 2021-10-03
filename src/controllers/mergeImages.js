const fs = require("fs");
const path = require("path");
const { replaceBackground } = require("backrem");
const { dbFolder } = require("../config");

const db = require("../entities/Database");

module.exports = async (req, res) => {
  const { front, back, color, threshold } = req.query;
  const rgb = color.split(",").map(Number);

  const frontImg = db.getImage(front);
  const backImg = db.getImage(back);

  try {
    const frontFile = fs.createReadStream(
      path.resolve(dbFolder, frontImg.filename)
    );
    const backFile = fs.createReadStream(
      path.resolve(dbFolder, backImg.filename)
    );

    const result = await replaceBackground(frontFile, backFile, rgb, threshold);

    res.contentType(frontImg.mimeType);
    result.pipe(res);
  } catch (e) {
    res.status(410).send(e.message);
  }
};
