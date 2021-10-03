const path = require("path");
const db = require("../entities/Database");
const { dbFolder } = require("../config");

module.exports = async (req, res) => {
  const { id } = req.params;

  const image = db.getImage(id);
  const filepath = path.resolve(dbFolder, image.filename);

  res.download(filepath);
};
