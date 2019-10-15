import moment from 'moment';

export const currentMonth = moment();

export function formatTimespan(moment) {
  return moment.format('MMYYYY');
}

export function formatMonthDisplay(moment) {
  return moment.format('MMM YYYY');
}
