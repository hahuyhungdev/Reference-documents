import moment from 'moment';

export const formatDateTime = (date: Date, format = 'DD/MM/yyyy') => {
  return moment(date).format(format);
};
export const getDaysDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  (dateFinal.getTime() - dateInitial.getTime()) / (1000 * 3600 * 24);

export const getDaysDiffBetweenDatesString = (dateInitial: Date, dateFinal: Date) => {
  const days = getDaysDiffBetweenDates(dateInitial, dateFinal);
  return days > 0 ? `${days} days` : 'Today';
};

export const getHoursDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  (dateFinal.getTime() - dateInitial.getTime()) / (1000 * 3600);

export const getHoursDiffBetweenDatesString = (dateInitial: Date = new Date(), dateFinal: Date = new Date()) => {
  const hours = Math.round(getHoursDiffBetweenDates(dateInitial, dateFinal));
  return hours > 0 ? `${hours} hours ago` : 'Now';
};

export const getDiffFromNow = (date: Date) => {
  return moment(date).fromNow();
};
