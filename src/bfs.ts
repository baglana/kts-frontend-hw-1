const bfs = (tree: object): string[] => {
  if (typeof tree !== 'object') {
    throw new Error('INVALID_ARGUMENT');
  }

  const queue = [Object.keys(tree)[0]];
  const visited: Set<string> = new Set();
  const result: string[] = [];

  while (queue.length) {
    const vertex = queue.shift() || '';

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of tree[vertex]) {
        queue.push(neighbor);
      }
    }
  }

  return result;
};

export default bfs;
