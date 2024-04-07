const dfs = (tree: object): string[] => {
  if (typeof tree !== 'object') {
    throw new Error('INVALID_ARGUMENT');
  }

  const stack = [Object.keys(tree)[0]];
  const visited: Set<string> = new Set();
  const result: string[] = [];

  while (stack.length) {
    const vertex = stack.pop() || '';

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of tree[vertex].reverse()) {
        stack.push(neighbor);
      }
    }
  }

  return result;
};

export default dfs;
