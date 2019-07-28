import React from 'react';
import { PageHeader, Icon, Divider } from 'antd';
import './styles.scss';

const BudgetHeaderView = () => {
  return (
    <PageHeader className='budgetHeaderContainer'>
      <div className='budgetHeaderMonth'>
        <Icon type='left-circle' />
        <h3>July 2019</h3>
        <Icon type='right-circle' />
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

export default BudgetHeaderView;
