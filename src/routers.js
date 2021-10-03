const express = require("express");
const multer = require("multer");
const mime = require("mime-types");
const { generateId } = require("./utils/generateId");
const ping = require("./controllers/ping");
const addImage = require("./controllers/addImage");
const getImages = require("./controllers/getImages");
const getImage = require("./controllers/getImage");
const mergeImages = require("./controllers/mergeImages");
const deleteImage = require("./controllers/deleteImage");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "db/");
  },
  filename: (req, file, cb) => {
    let id = generateId();
    let ext = mime.extension(file.mimetype);
    cb(null, `${id}.${ext}`);
  },
});

const upload = multer({ storage });

const mainRouter = new express.Router();

mainRouter.get("/ping", ping);

mainRouter.post("/upload", upload.single("image"), addImage);
mainRouter.get("/list", getImages);
mainRouter.get("/image/:id", getImage);
mainRouter.delete("/image/:id", deleteImage);
mainRouter.get("/merge", mergeImages);

exports.mainRouter = mainRouter;
