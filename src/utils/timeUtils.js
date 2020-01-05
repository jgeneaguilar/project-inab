import moment from 'moment';

export const currentMonth = moment();

export function formatTimespan(moment) {
  return moment.format('MMYYYY');
}

export function formatMonthDisplay(moment) {
  return moment.format('MMM YYYY');
}

export function parseDate(text, format) {
  return moment(text, format);
}

export function formatDate(text, format) {
  return moment(text).format(format);
}

export function sortByDateDesc(ldate, rdate, format) {
  return moment(rdate, format) - moment(ldate, format);
}

export function timeFromNow(text) {
  return moment(text).fromNow();
}