const removeAnagrams = (strs: string[]): string[] => {
  if (!Array.isArray(strs)) {
    throw new Error('INVALID_ARGUMENT');
  }
  if (strs.some((item) => typeof item !== 'string')) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }

  const getSorted = (s: string): string => {
    return s.split('').sort().join('');
  };

  return strs.filter((str, ind) => {
    return !strs.find((s, i) => {
      return getSorted(s) === getSorted(str) && ind !== i;
    });
  });
};

export default removeAnagrams;
