const flattenMessages = (nestedMessages, prefix = '') => (
  Object
    .keys(nestedMessages)
    .reduce((messages, key) => {
      const value = nestedMessages[key];
      const prefixedKey = prefix ? `${prefix}.${key}` : key;

      return (typeof value === 'string')
        ? { ...messages, [prefixedKey]: value }
        : {
          ...messages,
          ...flattenMessages(value, prefixedKey),
        };
    }, {})
);

export default flattenMessages;
