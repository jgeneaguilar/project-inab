export default {
  user: {},
  budgets: [],
  currentBudget: null, // type obj
  accounts: [],
  masterCategories: [],
  modal: {
    modalType: null,
    modalProps: {},
  }
};



/** STORE SCHEMA
{
  user: {
    isLoggedIn,
    _id,
    first_name,
    last_name,
    avatar
  }
};

{
  budgets: [array of all budgets]
}

{
  currentBudget: {object of basic current/selected budget info}
}

{
  accounts: [array of all accounts from current budget id]
}

{
  categories: []/ master category
}

{
  transactions: []
}

{
  payees: []
}

{
  modal: {
    modalType: null,
    modalProps: {},
  } 
};

 */

