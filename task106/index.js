const twoMaxNumbers = (numbers) => [...new Set(numbers)].sort((a,b) => b - a).slice(0, 2);

const numbers = [8, 5, 6, 6, 10, 3, 19, 19, 10, 19, 7];
console.log(twoMaxNumbers(numbers)); // [19, 10];
