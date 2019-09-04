const fs = require("fs");
const { convertKartFile } = require('../helpers/convertKartFile');
const { kartRanking } = require('../helpers/kartRanking');

module.exports = {
  async getRanking(req, res) {
    const arrObjects = await convertKartFile(fs.readFileSync("./log.txt").toString());
    const ranking = await kartRanking(arrObjects);
    return res.send(ranking);
  },

  async postRanking(req, res) {
    const arrObjects = await convertKartFile(req.file.buffer.toString());
    const ranking = await kartRanking(arrObjects);
    return res.send(ranking);
  },
};