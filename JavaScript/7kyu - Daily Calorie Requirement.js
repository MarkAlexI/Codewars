function calorie([name, gender, age, height, weight, activity]) {
  const activityFactor = {
    'little activity': 1.2,
    'moderately active': 1.55,
    'very active': 1.7,
    'extremely active': 1.9,
  };
  const RMR = 10 * weight + 6.25 * height - 5 * age + (gender === 'm' ? 5 : -161);
  const result = RMR * activityFactor[activity];
  return `${name}´s daily calorie requirement is ${(Math.round(result * 100)/100).toFixed(2)} kcal.`
}
