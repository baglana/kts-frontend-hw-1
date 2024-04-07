const sort = (s: string): string => {
  if (typeof s !== 'string') {
    throw new Error('INVALID_ARGUMENT');
  }

  const tokens = s.toLowerCase().split(' ');

  const sortedTokens = tokens.map((t) => {
    return t.split('').sort().join('');
  });

  return sortedTokens.sort((a, b) => a.length - b.length).join(' ');
};

export default sort;
