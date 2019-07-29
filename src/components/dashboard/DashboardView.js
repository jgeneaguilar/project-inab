import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import './styles.scss';
import AppBarView from './appbar/AppBarView';
import LeftDrawerView from './leftDrawer/LeftDrawerView';
import BudgetHeaderView from './budgetHeader/BudgetHeaderView';
import BudgetToolbarView from './budgetToolbar/BudgetToolbarView';
import BudgetTableView from './budgetTable/BudgetTableView';

const DashboardView = ({ userDetails, budgets }) => {

  const { Content } = Layout;

  return (
    <Layout className='dashboardContainer'>
      <AppBarView 
        userDetails={userDetails}
        budgets={budgets}
      /> 
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

DashboardView.propTypes = {
  userDetails: PropTypes.object.isRequired,
  budgets: PropTypes.array.isRequired
};

export default DashboardView;
