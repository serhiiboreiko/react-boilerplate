import { removeFieldsFromObject } from './objects';

const OBJECT = {
  foo: 'foo',
  bar: 'bar',
};

test('Remove some fields', () => {
  expect(removeFieldsFromObject(OBJECT)(['foo'])).toEqual({ bar: 'bar' });
});

test('Nothing to remove', () => {
  expect(removeFieldsFromObject(OBJECT)([])).toEqual(OBJECT);
});
