const sum = (...args: number[]): number => {
  if (args.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  if (args.some((arg) => typeof arg !== 'number')) {
    throw new Error('INVALID_ARGUMENT');
  }

  return args.reduce((acc, arg) => acc + arg);
};
export default sum;
