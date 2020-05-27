import { Layout } from 'antd';
import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AppBarContainer from './appbar/AppBarContainer';
import BudgetView from './budget/BudgetView';
import LeftDrawerContainer from './leftDrawer/LeftDrawerContainer';
import TransactionContainer from './transaction/TransactionContainer';
import './styles.scss';

const DashboardView = () => {
  const { Content } = Layout;

  let { path } = useRouteMatch();

  return (
    <Layout className="dashboardContainer">
      <AppBarContainer />
      <Content className="dashboardContent">
        <LeftDrawerContainer />
        <Layout className="dashboardBudgetContainer">
          <Switch>
            <Route path={`${path}/accounts`}>
              <TransactionContainer />
            </Route>
            <Route>
              <BudgetView />
            </Route>
          </Switch>
        </Layout>
      </Content>
    </Layout>
  );
};

export default withRouter(DashboardView);
