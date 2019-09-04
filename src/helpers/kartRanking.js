const { convertValue } = require("./convertValue");

const kartRanking = (arr) => {
    const rating = sumLaps(arr)
    return getRanking(rating);
}

const sumLaps = (arr) => {
    const result = arr.reduce((acc, cur) => {
        let pilot = acc[cur.pilotNumber]

        if (pilot) {
            pilot.timeTotal = pilot.timeTotal + cur.timeLap;
            pilot.laps = cur.lap;
            pilot.bestLap = pilot.bestLap <= cur.timeLap ? pilot.bestLap : cur.timeLap;
            pilot.avgTimeTotal = (pilot.avgTimeTotal + cur.avgLap) / 2;
        } else {
            acc[cur.pilotNumber] = {
                pilotNumber: cur.pilotNumber,
                pilotName: cur.pilotName,
                timeTotal: cur.timeLap,
                laps: cur.lap,
                bestLap: cur.timeLap,
                avgTimeTotal: cur.avgLap
            }
        }
        return acc;
    }, {})
    return result;
};

const getRanking = (obj) => {
    const convertArr = Object.keys(obj).map((key) => obj[key]);
    const ranking = convertArr.sort(compareLaps)
    const result = ranking.map((item, index) => {
        item.ranking = index + 1;
        item.afterFinisher = item.timeTotal - ranking[0].timeTotal;
        return item;
    });
    return {
        kartRanking: result.map(item => {
            return {
                ...item,
                timeTotal: convertValue('minutes', item.timeTotal),
                avgTimeTotal: convertValue('minutes', item.avgTimeTotal),
                afterFinisher: convertValue('minutes', item.afterFinisher),
                bestLap: convertValue('minutes', item.bestLap),
            };
        }),
        bestLapKart: convertValue('minutes', bestLapKart(result))
    }
}

const compareLaps = (a, b) => {
    if (a.timeTotal < b.timeTotal) return -1;
    if (a.timeTotal > b.timeTotal) return 1;
    return 0;
}

const bestLapKart = (arr) => {
    return Math.min(...arr.map(item => item.bestLap))
}

module.exports = {
    kartRanking
};