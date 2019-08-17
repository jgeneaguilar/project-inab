import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
import './styles.scss';
import AppBarContainer from './appbar/AppBarContainer';
import LeftDrawerContainer from './leftDrawer/LeftDrawerContainer';
import BudgetHeaderView from './budgetHeader/BudgetHeaderView';
import BudgetToolbarView from './budgetToolbar/BudgetToolbarView';
import BudgetTableView from './budgetTable/BudgetTableView';

const DashboardView = () => {

  const { Content } = Layout;

  return (
    <Layout className='dashboardContainer'>
      <AppBarContainer /> 
      <Content className='dashboardContent'>
        <LeftDrawerContainer />
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

export default DashboardView;
