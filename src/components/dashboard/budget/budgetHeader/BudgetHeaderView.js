import { Divider, Icon, PageHeader } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { toCurrency } from '../../../../utils/currencyUtils';
import { formatMonthDisplay } from '../../../../utils/timeUtils';
import { type } from './BudgetHeaderContainer';
import './styles.scss';

const BudgetHeaderView = ({ month, dispatch, accounts, totalBudget }) => {
  return (
    <PageHeader className="budgetHeaderContainer">
      <div className="budgetHeaderMonth">
        <Icon type="left-circle" onClick={() => dispatch({ type: type.decrement })} />
        <h3>{formatMonthDisplay(month)}</h3>
        <Icon type="right-circle" onClick={() => dispatch({ type: type.increment })} />
      </div>
      <Divider type="vertical" className="budgetHeaderDivider" />
      <div className="budgetHeaderStats">
        <div className="budgetHeaderTBB">
          <h3> {totalBudget && toCurrency(totalBudget)}</h3>
          <h5>To be Budgeted</h5>
        </div>
        <div className="budgetHeaderTotals">
          <div className="budgetHeaderTotalsValues">
            <span>+Php25,000.00</span>
            <span>Php0.00</span>
            <span>-Php23,000.00</span>
            <span>-Php2,000.00</span>
          </div>
          <div className="budgetHeaderTotalsDesc">
            <span>Funds for July</span>
            <span>Overspent in June</span>
            <span>Budgeted in July</span>
            <span>Budgeted in Future</span>
          </div>
        </div>
      </div>
    </PageHeader>
  );
};

BudgetHeaderView.propTypes = {
  month: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
};

export default BudgetHeaderView;
