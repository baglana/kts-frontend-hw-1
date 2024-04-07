const intersection = (arr1: number[], arr2: number[]): number[] => {
  if (typeof arr1 === 'undefined' || typeof arr2 === 'undefined') {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('INVALID_ARGUMENT');
  }
  if (
    arr1.some(
      (item) =>
        typeof item !== 'number' ||
        arr2.some((item) => typeof item !== 'number')
    )
  ) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }

  return Array.from(
    arr1.reduce((set, num) => {
      if (arr2.includes(num)) {
        set.add(num);
      }
      return set;
    }, new Set<number>())
  );
};

export default intersection;
