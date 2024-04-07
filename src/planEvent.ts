const planEvent = (cb, timeout: number) => {
  if (typeof cb !== 'function' || typeof timeout !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(cb()), timeout);
  });
};

export default planEvent;
