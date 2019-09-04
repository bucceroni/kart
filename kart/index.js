const { convertKartFile } = require('./convertKartFile');
const { kartRanking } = require('./kartRanking');

const kart = (logFile) => {
  const arrObjects = convertKartFile(logFile);
  const result = kartRanking(arrObjects);
  return result;
}

module.exports = {
  kart
};