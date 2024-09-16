function createSecretHolder(secret) {
  const box = { x: secret };

  return {
    getSecret: () => box.x,
    setSecret: (value) => box.x = value,
  };
}
