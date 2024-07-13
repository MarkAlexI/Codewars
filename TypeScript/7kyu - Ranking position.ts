export interface inputMan {
  name: string;
  points: number;
};

export interface outputMan extends inputMan {
  position: number;
};

export function ranking(people: inputMan[]): outputMan[] {
  const sortedPeople = people.sort((a: inputMan, b: inputMan) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    return a.name.localeCompare(b.name);
  });
  
  return sortedPeople.reduce<outputMan[]>((acc, curr, i, arr) => {
    const position = i > 0 && arr[i - 1].points === curr.points
      ? acc[i - 1].position!
      : i + 1;
    acc.push({ ...curr, position });
    return acc;
  }, []);
}
