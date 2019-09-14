import { AccountTypes } from '../components/modals/formConstants';


// format currency
export function toCurrency(number) {
  // number is an integer number of cents in string format
  let num = number / 100;
  return new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' })
    .format(num);
}

export function toDecimal(number) {
  let num = number / 100;
  return new Intl.NumberFormat(
    'en-us', { style: 'decimal', minimumFractionDigits: 2 }
  ).format(num);
}

function getSumOfBalance(arr) {
  let newArr = arr.map(account => account.balance);
  return newArr.reduce((a, b) => a + b, 0);
}

export function getTotalBalance(arr) {
  return toCurrency(getSumOfBalance(arr));
}

export function getBudgetAccounts(arr) {
  return arr.filter(account => account.type !== AccountTypes.ASSET_OTHER && account.type !== AccountTypes.LIABILITY_OTHER);
}

export function getTrackingAccounts(arr) {
  return arr.filter(account => account.type === AccountTypes.ASSET_OTHER || account.type === AccountTypes.LIABILITY_OTHER);
}