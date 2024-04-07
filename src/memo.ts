const memo = <T extends (...args: any[]) => any>(
  func: T,
  time?: number
): ((...arg: Parameters<T>) => ReturnType<T>) => {
  if (typeof func !== 'function' || typeof time !== 'number' || time < 0) {
    throw new Error('INVALID_ARGUMENT');
  }
  return func;
};

export default memo;
