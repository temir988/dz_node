const db = require("../entities/Database");

module.exports = async (req, res) => {
  const { filename, size, mimetype } = req.file;
  const file = {
    id: filename.slice(0, filename.indexOf(".")),
    uploadedAt: Date.now(),
    size: size,
    mimeType: mimetype,
    filename: filename,
  };

  db.save(file);
  res.json(file);
};
