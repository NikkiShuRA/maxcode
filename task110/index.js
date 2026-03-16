function clockAngle(time) {
    const defaultHourDegree = 360 / 12;
    const defaultMinuteDegree = 360 / 60;

    const times = time.split(':');
    const hour = +times[0];
    const minute = +times[1];

    let minuteDegree = minute * defaultMinuteDegree;

    let hourDegree = (hour * defaultHourDegree) + (minute * (defaultHourDegree/60));
    if (hourDegree >= 360) hourDegree -= 360;

    let result = hourDegree > minuteDegree 
        ? hourDegree - minuteDegree
        : minuteDegree - hourDegree;

    if (result > 180) result = 360 - result;
    return result;
}

console.log(clockAngle("15:00")); // 90
console.log(clockAngle("15:20")); // 19.99999999999999
console.log(clockAngle("01:50")); // 114.99999999999999