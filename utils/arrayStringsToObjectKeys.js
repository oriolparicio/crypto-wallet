const arrayStringsToObjectKeys = (strings) => {
  return strings.reduce((current, item) => {
    current[item.name] = '';
    return current;
  }, {});
};

export default arrayStringsToObjectKeys;
