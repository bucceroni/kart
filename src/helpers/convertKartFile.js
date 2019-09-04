const { convertValue } = require("./convertValue");

const nameFields = [
  "time",
  "pilotNumber",
  "none",
  "pilotName",
  "lap",
  "timeLap",
  "avgLap"
];

const convertKartFile = logFile => {
  let rows = [];

  logFile
    .replace(/\t/g, " ")
    .split("\n")
    .map(item => {
      return rows.push(item);
    });

  rows.shift();

  return convertArrayObj(rows);
};

const convertArrayObj = (arr) => {
  const arrObj = [];
  arr.map(item => {
    let obj = {};
    let i = 0;
    item.split(" ").map(item => {
      if (item !== "") {
        obj[nameFields[i]] = convertValue(nameFields[i], item);
        i = i + 1;
      }
    });
    return arrObj.push({ ...obj, none: undefined });
  });
  return arrObj;
}

module.exports = {
  convertKartFile
};
