import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
import './styles.scss';
import AppBarContainer from './appbar/AppBarContainer';
import LeftDrawerContainer from './leftDrawer/LeftDrawerContainer';
import BudgetHeaderView from './budgetHeader/BudgetHeaderView';
import BudgetToolbarContainer from './budgetToolbar/BudgetToolbarContainer';
import BudgetTableContainer from './budgetTable/BudgetTableContainer';

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
            <BudgetToolbarContainer />
          </header>
          <Content className='dashboardBudgetContent'>
            <BudgetTableContainer />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default DashboardView;
