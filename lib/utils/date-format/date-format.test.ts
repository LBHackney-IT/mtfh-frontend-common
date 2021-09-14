import { formatDate } from './date-format';

test('formats the date correctly', () => {
  expect(formatDate('2021-01-01')).toBe('01/01/2021');
});

test('formatted date treats 1900-01-01 as null', () => {
  expect(formatDate('1900-01-01')).toBe('');
});

test('formatted date will not break with a malformed date string', () => {
  expect(formatDate('hello')).toBe('');
});

test('formatted date will not break with a null date value', () => {
  expect(formatDate(null)).toBe('');
});
