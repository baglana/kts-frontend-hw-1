const pow = (
  base: number,
  exponent: number
): number | ((exp: number) => number) => {
  if (typeof exponent === 'undefined') {
    return (exp) => {
      if (typeof base !== 'number' || typeof exp !== 'number') {
        throw new Error('INVALID_ARGUMENT');
      }
      return base ** exp;
    };
  }

  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }

  return base ** exponent;
};

export default pow;
