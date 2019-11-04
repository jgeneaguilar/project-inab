import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
import './styles.scss';
import AppBarContainer from './appbar/AppBarContainer';
import LeftDrawerContainer from './leftDrawer/LeftDrawerContainer';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import BudgetView from './budget/BudgetView';
import SessionExpired from '../SessionExpired';
import AccountsView from './accounts/AccountsView';

const DashboardView = ({ computedMatch }) => {
  const { Content } = Layout;

  return (
    <Layout className='dashboardContainer'>
      <AppBarContainer />
      <Content className='dashboardContent'>
        <LeftDrawerContainer />
        <Layout className='dashboardBudgetContainer'>
          <Switch>
            <Route path='/dashboard/accounts'>
              <AccountsView />
            </Route>
            <Route>
              <BudgetView />
            </Route>
          </Switch>
        </Layout>
      </Content>
    </Layout>
  );
}

export default withRouter(DashboardView);
