import React from 'react'
import { Layout } from 'antd';
import BudgetHeaderView from './budgetHeader/BudgetHeaderView';
import BudgetToolbarContainer from './budgetToolbar/BudgetToolbarContainer';
import BudgetTableContainer from './budgetTable/BudgetTableContainer';

const { Content } = Layout;

const BudgetView = () => {
  return (
    <>
      <header className='dashboardBudgetHeader'>
        <BudgetHeaderView />
        <BudgetToolbarContainer />
      </header>
      <Content className='dashboardBudgetContent'>
        <BudgetTableContainer />
      </Content>
    </>
  )
};

export default BudgetView;
