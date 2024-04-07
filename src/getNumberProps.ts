const getNumberProps = (obj: object): string[] => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new Error('INVALID_ARGUMENT');
  }

  function traverse(o: object, numberProps: string[]): string[] {
    for (const prop in o) {
      if (typeof o[prop] === 'number') {
        numberProps.push(prop);
      }
      if (typeof o[prop] === 'object') {
        traverse(o[prop], numberProps);
      }
    }

    return numberProps;
  }

  return traverse(obj, []).sort();
};

export default getNumberProps;
