function findYear(month, dayOfWeek) {
  for (i = 2014; i <= 2050; i++) {
    const newDate = new Date(i, month, 1);
    if (newDate.getDay() === dayOfWeek) {
      return newDate.getFullYear();
    }
  }
  return 0;
}
