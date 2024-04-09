const memo = <T extends (...args: any[]) => any>(
  func: T,
  time?: number
): ((...arg: Parameters<T>) => ReturnType<T>) => {
  if (
    typeof func !== 'function' ||
    (typeof time !== 'undefined' && (typeof time !== 'number' || time < 0))
  ) {
    throw new Error('INVALID_ARGUMENT');
  }
  const cache = new Map();
  const timeoutIdCache = new Map();
  return function () {
    const key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.call(this, ...arguments); // (**)

    cache.set(key, result);

    if (time) {
      if (timeoutIdCache.has(key)) {
        clearTimeout(timeoutIdCache.get(key));
      }

      const timeoutId = setTimeout(() => {
        cache.delete(key);
      }, time + 1);

      timeoutIdCache.set(key, timeoutId);
    }

    return result;
  };
};

function hash(args) {
  return [].join.call(args);
}

export default memo;
