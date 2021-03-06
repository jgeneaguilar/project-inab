import moment from 'moment';

export const currentMonth = moment();

export const today = moment().format('MM/DD/YYYY');

export function formatTimespan(moment) {
  return moment.format('YYYYMM');
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

export function toTimespan(date) {
  return formatDate(date, 'YYYYMM');
}
