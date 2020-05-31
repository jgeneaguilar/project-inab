import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import BudgetHeaderView from './BudgetHeaderView';
import { connect } from 'react-redux';
import { currentMonth } from '../../../../utils/timeUtils';
import { loadTimespanElements } from '../../../../redux/actions/timespanActions';
import { formatTimespan } from '../../../../utils/timeUtils';
import { getBudgetCalculation } from '../../../../redux/selectors/budgetCalculationSelectors';

export const type = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  reset: 'RESET',
};

function monthReducer(state, action) {
  switch (action.type) {
    case type.increment:
      return { month: state.month.add(1, 'month') };
    case type.decrement:
      return { month: state.month.subtract(1, 'month') };
    // case type.reset:
    //   return;
    default:
      return state;
  }
}

const BudgetHeaderContainer = ({
  currentBudget,
  accounts,
  budgetCalculation,
  loadTimespanElements,
}) => {

  console.log('BudgetHeaderContainer', budgetCalculation);
  const initialState = { month: currentMonth };

  const [state, dispatch] = useReducer(monthReducer, initialState);

  useEffect(() => {
    if (Object.keys(currentBudget).length > 0) {
      loadTimespanElements(currentBudget._id, formatTimespan(state.month));
    }
  }, [loadTimespanElements, currentBudget, state]);

  return (
    <BudgetHeaderView
      month={state.month}
      dispatch={dispatch}
      accounts={accounts}
      totalBudget={budgetCalculation.toBeBudgeted}
    />
  );
};

BudgetHeaderContainer.propTypes = {
  currentBudget: PropTypes.object.isRequired,
  accounts: PropTypes.array.isRequired,
  loadTimespanElements: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentBudget: state.currentBudget,
    accounts: state.accounts,
    budgetCalculation: getBudgetCalculation(state),
  };
}

export default connect(mapStateToProps, { loadTimespanElements })(BudgetHeaderContainer);
