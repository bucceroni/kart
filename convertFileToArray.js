const fs = require("fs");

const convertFileToArray = logFile => {
  let arrRows = [];
  let nameFields = [
    "time",
    "pilotNumber",
    "none",
    "pilotName",
    "lap",
    "timeLap",
    "avgLap"
  ];
  let arrObjects = [];

  let data = fs.readFileSync(logFile).toString();

  data
    .replace(/\t/g, " ")
    .split("\n")
    .map(item => {
      return arrRows.push(item);
    });

  arrRows.shift();

  const convertValue = (str, value) => {
    if (str === "pilotNumber") {
      return parseInt(value);
    }
    if (str === "lap") {
      return parseInt(value);
    }
    if (str === "avgLap") {
      return parseFloat(value.replace(",", "."));
    }
    if (str === "timeLap") {
      return new Date(`1970-01-01T${value}Z`)
    }
    return value;
  };

  arrRows.map(item => {
    let obj = {};
    let i = 0;
    item.split(" ").map(item => {
      if (item !== "") {
        obj[nameFields[i]] = convertValue(nameFields[i], item);
        i = i + 1;
      }
    });
    return arrObjects.push({ ...obj, none: undefined });
  });

  return arrObjects;
};

module.exports = convertFileToArray;
