function serpentineTree(node) {
  if (!node) return [];

  let result = [];
  let currLevel = [node];
  let leftToRight = true;

  while (currLevel.length) {
    let levelValues = [];
    let nextLevel = [];

    for (let _node of currLevel) {
      levelValues.push(_node.data);
      if (_node.left) nextLevel.push(_node.left);
      if (_node.right) nextLevel.push(_node.right);
    }

    if (!leftToRight) levelValues.reverse();

    result.push(...levelValues);

    currLevel = nextLevel;
    leftToRight = !leftToRight;
  }

	return result;
}
