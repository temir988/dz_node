const db = require("../entities/Database");

module.exports = async (req, res) => {
  const images = db.getImages();
  res.json(images);
};
