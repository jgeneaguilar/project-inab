export default function budgetReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_BUDGET':
      return [ ...state, { ...action.budget }];
    default:
      return state;
  }
}