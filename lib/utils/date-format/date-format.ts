import { format, isSameDay, isValid, parseISO } from 'date-fns';

const voidDate = new Date('1900-01-01T00:00:00');

export const formatDate = (date: string | null): string => {
  if (!date) return '';
  const parsedDate = parseISO(date);
  if (isSameDay(parsedDate, voidDate) || !isValid(parsedDate)) {
    return '';
  }
  return format(parsedDate, 'dd/MM/yyyy');
};
