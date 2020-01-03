import { createSelector } from 'reselect';
import { getTransactions, getAccounts, getCategories, getPayees } from './commonSelectors';
import { formatDefaultDate } from '../../utils/timeUtils';
import moment from 'moment';

export const getAllTransactions = createSelector(
  getTransactions,
  getAccounts,
  getCategories,
  getPayees,
  (transactions, accounts, categories, payees) => {
    // TODO: Categories and Payees could be objects instead of arrays
    let data =  Object
      .values(transactions)
      .map(item => {
        return {
          ...item,
          key: item._id,
          id: item._id,
          date: formatDefaultDate(item.date),
          account: accounts.find(account => account._id === item.account_id),
          payee: payees[item.payee_id],
          inflow: item.amount > 0 && item.amount,
          outflow: item.amount < 0 && Math.abs(item.amount),
          category: categories.find(cat => cat._id === item.category_id),
        };
      })
      .sort((t1, t2) => moment(t1.date) > moment(t2.date));
    return data;
  }
)