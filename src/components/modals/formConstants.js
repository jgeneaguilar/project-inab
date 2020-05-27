// API const
export const AccountTypes = {
  UNDEFINED: 'undefined',
  CHECKING: 'checking',
  SAVINGS: 'savings',
  CREDIT_CARD: 'creditcard',
  CASH: 'cash',
  LINE_OF_CREDIT: 'lineofcredit',
  ASSET_OTHER: 'assetother',
  LIABILITY_OTHER: 'liabilityother',
};

// for Add Account Select
export const BudgetAccounts = [
  { id: AccountTypes.CHECKING, name: 'Checking' },
  { id: AccountTypes.SAVINGS, name: 'Savings' },
  { id: AccountTypes.CREDIT_CARD, name: 'Credit Card' },
  { id: AccountTypes.CASH, name: 'Cash' },
  { id: AccountTypes.LINE_OF_CREDIT, name: 'Line of Credit' },
];

export const TrackingAccounts = [
  { id: AccountTypes.ASSET_OTHER, name: 'Asset (Other)' },
  { id: AccountTypes.LIABILITY_OTHER, name: 'Liability (Other)' },
];
