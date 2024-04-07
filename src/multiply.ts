const multiply = (factor: number): ((x: number) => number) => {
  if (typeof factor !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }

  return function (x) {
    if (typeof x !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    return x * factor;
  };
};

export default multiply;
