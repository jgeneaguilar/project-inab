
export const getTransactions = state => state.transactions;

export const getTransactionsList = state => Object.values(state.transactions);

export const getAccounts = state => state.accounts;

export const getCategories = state => state.categories;

export const getPayees = state => state.payees;

export const getPayeeList = state => Object.values(state.payees);

export const getMasterCategories = state => state.masterCategories;

export const getCategoryBudgets = state => state.categoryBudgets;