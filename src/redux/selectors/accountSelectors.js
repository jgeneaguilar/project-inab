import { createSelector } from 'reselect';
import { getTransactionsList, getAccounts } from './commonSelectors';
import { groupArrayToId } from '../../utils/commonUtils';

export const getAccountBalances = createSelector(
  getAccounts,
  getTransactionsList,
  (accounts, transactions) => {
    const acc_transactions = groupArrayToId(transactions, 'account_id', (item) => {
      return item.amount;
    });

    Object.keys(acc_transactions).forEach(function (key, index) {
      acc_transactions[key] = acc_transactions[key].reduce((total, item) => total + item);
    });

    return accounts.map((acc) => {
      return {
        ...acc,
        balance: acc_transactions[acc._id] || 0,
      };
    });
  }
);
