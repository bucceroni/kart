const convertValue = (key, value) => {
    switch (key) {
        case "pilotNumber":
            return parseInt(value);
        case "lap":
            return parseInt(value);
        case "avgLap":
            return parseFloat(value.replace(",", "."));
        case "timeLap":
            const arr = value.split(":");
            const timeLap = parseInt(arr[0] * 60) + parseFloat(arr[1]);
            return timeLap;
        case "minutes":
            const minutes = parseInt(value / 60)
            const secondsValue = parseFloat((value % 60).toFixed(3))
            const seconds = secondsValue < 10 ? `0${secondsValue}` : secondsValue
            const result = seconds === '00' ? '-' : minutes === 0 ? `${seconds}` : `${minutes}:${seconds}`
            return result;
        default:
            return value;
    }
}

module.exports = {
    convertValue
}