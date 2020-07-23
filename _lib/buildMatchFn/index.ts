function findKey(object: any, predicate: any) {
  for (const key in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

const findIndex = (array: any[], predicate: any) => {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
};

export default (args: any) => {
  return (dirtyString: any, dirtyOptions: any) => {
    const string = String(dirtyString);
    const options = dirtyOptions || {};
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    let value;
    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, (pattern: any) => {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, (pattern: any) => {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length),
    };
  };
};
