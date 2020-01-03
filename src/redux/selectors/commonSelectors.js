
export const getTransactions = state => state.transactions;

export const getAccounts = state => state.accounts;

export const getCategories = state => state.categories;

export const getPayees = state => state.payees;

export const getPayeeList = state => Object.values(state.payees);