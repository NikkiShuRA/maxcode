function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2345)); // false
