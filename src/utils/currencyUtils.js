import { AccountTypes } from '../components/modals/formConstants';

// format currency
export function toCurrency(number) {
  // number is an integer number of cents in string format
  let num = number / 100;
  return new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
}

export function toDecimal(number) {
  let num = number / 100;
  return new Intl.NumberFormat('en-us', {
    style: 'decimal',
    minimumFractionDigits: 2,
  }).format(num);
}

function getSumOfBalance(arr) {
  let newArr = arr.map((account) => account.balance);
  return newArr.reduce((a, b) => a + b, 0);
}

export function getTotalBalance(arr) {
  return toCurrency(getSumOfBalance(arr));
}

export function getBudgetAccounts(arr) {
  return arr.filter(
    (account) =>
      account.type !== AccountTypes.ASSET_OTHER &&
      account.type !== AccountTypes.LIABILITY_OTHER,
  );
}

export function getTrackingAccounts(arr) {
  return arr.filter(
    (account) =>
      account.type === AccountTypes.ASSET_OTHER ||
      account.type === AccountTypes.LIABILITY_OTHER,
  );
}

export function getTotalBudgeted(mCat, cat, catBud) {
  return toDecimal(
    cat
      // filter by master category id
      .filter((c) => c.master_category_id === mCat._id)
      // new array of budgeted amount
      .map(
        (c) => (catBud[c._id] ? catBud[c._id]['budgeted'] : 0),
        // sum of budgeted amount
      )
      .reduce((a, b) => a + b, 0),
  );
}

export function getAmount(state, catID) {
  const catData = state[catID];
  if (catData) {
    const amtKey = Object.keys(catData).find(() => 'budgeted' || 'amount');
    console.log(amtKey);
    return toDecimal(catData[amtKey]);
  }
  return toDecimal(0);
}
