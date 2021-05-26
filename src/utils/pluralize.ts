const pluralize = (word: string, value: number): string =>
  `${word}${Math.abs(value) !== 1 ? 's' : ''}`;

export default pluralize;
