import { AccountTypes } from '../../components/modals/formConstants';

export const getTransactions = (state) => state.transactions;

export const getTransactionsList = (state) => Object.values(state.transactions);

export const getAccounts = (state) => state.accounts;

export const getCategories = (state) => Object.values(state.categories);

export const getPayees = (state) => state.payees;

export const getPayeeList = (state) => Object.values(state.payees);

export const getMasterCategories = (state) => Object.values(state.masterCategories);

export const getCategoryBudgets = (state) => state.categoryBudgets;

export const getCategoryBudgetList = (state) => Object.values(state.categoryBudgets);

export const getCurrentTimespan = (state) => state.currentTimespan;

export const getBudgetAccounts = (state) =>
  state.accounts.filter(
    (acc) =>
      acc.type !== AccountTypes.ASSET_OTHER && acc.type !== AccountTypes.LIABILITY_OTHER,
  );
