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
      arr = value.split(":");
      timeLap = parseInt(arr[0] * 60) + parseFloat(arr[1]);
      return timeLap;
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

  let t = arrObjects.reduce((acc, cur) => {
    if (acc.length > 0) {
      acc.map(item => {
        if (item.pilotNumber === cur.pilotNumber) {
          item.timeTotal = item.timeTotal + cur.timeLap;
          item.laps = cur.lap;
          item.bestLap =
            item.bestLap <= cur.timeLap ? item.bestLap : cur.timeLap;
          item.avgTimeTotal = (item.avgTimeTotal + cur.avgLap) / 2;
          return item;
        } else if (acc.find(item => item.pilotNumber === cur.pilotNumber)) {
          console.log(cur.pilotNumber);
          return;
        } else {
          return acc.push({
            pilotNumber: cur.pilotNumber,
            pilotName: cur.pilotName,
            timeTotal: cur.timeLap,
            laps: cur.lap,
            bestLap: cur.timeLap,
            avgTimeTotal: cur.avgLap
          });
        }
      });
    }

    if (acc.length === 0) {
      acc.push({
        pilotNumber: cur.pilotNumber,
        pilotName: cur.pilotName,
        timeTotal: cur.timeLap,
        laps: cur.lap,
        bestLap: cur.timeLap,
        avgTimeTotal: cur.avgLap
      });
    }

    return acc;
  }, []);

  function compare(a, b) {
    if (a.timeTotal < b.timeTotal) return -1;
    if (a.timeTotal > b.timeTotal) return 1;
    return 0;
  }

  let f = t.sort(compare);

  f.map((item, index) => {
    item.ranking = index + 1;
    item.afterFinisher = item.timeTotal - f[0].timeTotal;
  });

  return {
    finishKart: f,
    bestLapKart: Math.min(...f.map(item => item.bestLap))
  };
};

module.exports = convertFileToArray;
