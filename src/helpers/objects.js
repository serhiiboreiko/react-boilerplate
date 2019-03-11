export const removeFieldsFromObject = (object) => (fields) => Object
  .keys(object)
  .reduce((newObject, field) => (
    fields.includes(field)
      ? newObject
      : { ...newObject, [field]: object[field] }
  ), {});

export const a = 42;
