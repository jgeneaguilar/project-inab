import React from 'react';
import { Layout } from 'antd';
import './styles.scss';
import AppBarView from './appbar/AppBarView';
import LeftDrawerView from './leftDrawer/LeftDrawerView';
import BudgetHeaderView from './budgetHeader/BudgetHeaderView';
import BudgetToolbarView from './budgetToolbar/BudgetToolbarView';
import BudgetTableView from './budgetTable/BudgetTableView';

const DashboardContainer = () => {

  const { Content } = Layout;

  return (
    <Layout className='dashboardContainer'>
      <AppBarView /> {/** already includes <Header /> */}
      <Content className='dashboardContent'>
        <LeftDrawerView />
        <Layout className='dashboardBudgetContainer'>
          <header className='dashboardBudgetHeader'>
            <BudgetHeaderView />
            <BudgetToolbarView />
          </header>
          <Content className='dashboardBudgetContent'>
            <BudgetTableView />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default DashboardContainer;
