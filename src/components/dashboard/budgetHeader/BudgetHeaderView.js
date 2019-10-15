import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Icon, Divider } from 'antd';
import './styles.scss';
import { type } from './BudgetHeaderContainer';
import { formatMonthDisplay } from '../../../utils/timeUtils';


const BudgetHeaderView = ({ month, dispatch }) => {
  return (
    <PageHeader className='budgetHeaderContainer'>
      <div className='budgetHeaderMonth'>
        <Icon 
          type='left-circle' 
          onClick={() => dispatch({ type: type.decrement })}
        />
        <h3>{formatMonthDisplay(month)}</h3>
        <Icon 
          type='right-circle' 
          onClick={() => dispatch({ type: type.increment })
        }/>
      </div>
      <Divider type='vertical' className='budgetHeaderDivider' />
      <div className='budgetHeaderStats'>
        <div className='budgetHeaderTBB'>
          <h3>Php 0.00</h3>
          <h5>To be Budgeted</h5>
        </div>
        <div className='budgetHeaderTotals'>
          <div className='budgetHeaderTotalsValues'>
            <span>+Php25,000.00</span>
            <span>Php0.00</span>
            <span>-Php23,000.00</span>
            <span>-Php2,000.00</span>
          </div>
          <div className='budgetHeaderTotalsDesc'>
            <span>Funds for July</span>
            <span>Overspent in June</span>
            <span>Budgeted in July</span>
            <span>Budgeted in Future</span>
          </div>
        </div>
      </div>
    </PageHeader>
  );
}

BudgetHeaderView.propTypes = {
  month: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default BudgetHeaderView;
