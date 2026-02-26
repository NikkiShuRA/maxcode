function isStrictlyMonotonic(numbers) {
    if (numbers.length < 2) return true;
    if (numbers [0] === numbers [1]) return false;

    const isIncreasing = (numbers [0] < numbers [1]);

    for (let i = 2; i < numbers.length; i++) {
        if (isIncreasing) {
            if (numbers[i-1] >= numbers[i]) return false;
        } else {
            if (numbers[i-1] <= numbers[i]) return false;
        }
    }
    return true;
}

console.log(isStrictlyMonotonic([1])); // true
console.log(isStrictlyMonotonic([1, 7, 10])); // true
console.log(isStrictlyMonotonic([-6, -10, -777])); // true

console.log(isStrictlyMonotonic([5, 7, 7, 7, 9])); // false
console.log(isStrictlyMonotonic([1,3,2])); // false
