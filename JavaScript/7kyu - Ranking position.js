function ranking(people) {
  return people.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return a.name.localeCompare(b.name);
  })
    .reduce((acc, curr, i) => {
      const position = i > 0 && acc[i - 1].points === curr.points
        ? acc[i - 1].position
        : i + 1;
      acc.push({ ...curr, position });
      return acc;
    }, []);
}
