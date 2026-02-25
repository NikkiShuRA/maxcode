function yearsToTarget(
  initialPopulation,
  naturalIncrease,
  immigration,
  targetPopulation,
) {
    let years = 0;
    for (let population = initialPopulation; population < targetPopulation; years++) {
        population += Math.trunc(population * (naturalIncrease/100) + immigration);
        console.log(population);
    }
    return years;
}

console.log(yearsToTarget(1000, 2, 50, 1200)); // 3
