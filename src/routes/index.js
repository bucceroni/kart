const express = require("express");
const multer = require("multer");
const upload = multer();

const KartController = require("../controllers/KartController");
const routes = new express.Router();

routes.get('/ranking-kart', KartController.getRanking);
routes.post('/ranking-kart', upload.single("upFile"), KartController.postRanking);

module.exports = routes;