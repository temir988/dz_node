const db = require("../entities/Database");

module.exports = async (req, res) => {
  const { id } = req.params;

  const image = db.getImage(id);
  db.deleteImage(id);

  return res.json(image);
};
