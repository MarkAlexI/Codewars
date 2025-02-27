function count(addresses) {
  const stateCounts = new Map();

  for (const address of addresses) {
    if (!address.state) {
      throw new Error("Missed 'state' property ");
    }

    if (!stateCounts.has(address.state)) {
      stateCounts.set(address.state, {
        state: address.state,
        count: 0
      });
    }

    stateCounts.get(address.state).count++;
  }

  return Array.from(stateCounts.values());
}
