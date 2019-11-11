  
import React from 'react'
import { Layout } from 'antd';
import BudgetToolbarContainer from './budgetToolbar/BudgetToolbarContainer';
import BudgetTableContainer from './budgetTable/BudgetTableContainer';
import BudgetHeaderContainer from './budgetHeader/BudgetHeaderContainer';

const { Content } = Layout;

const BudgetView = () => {
  return (
    <>
      <header className='dashboardBudgetHeader'>
        <BudgetHeaderContainer />
        <BudgetToolbarContainer />
      </header>
      <Content className='dashboardBudgetContent'>
        <BudgetTableContainer />
      </Content>
    </>
  )
};

export default BudgetView;