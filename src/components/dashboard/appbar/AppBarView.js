import React from 'react';
import PropTypes from 'prop-types' ;
import { Layout, PageHeader, Icon, Button, Divider, Avatar } from 'antd';
import './styles.scss';

const AppBarView = ({ currentBudget }) => {

  const { Header } = Layout;

  return (
    <Header className='appBarContainer'>
      <PageHeader className='dashboardHeader'>
        <Icon className='menuIcon' type='menu' />
        { currentBudget ? (
          <Button>
          {/** using the first budget as the default */}
          { currentBudget['name'] || 'My Budget' }
        </Button>
        ): null}
        <Divider type='vertical' />
        <Avatar icon='user' />
      </PageHeader>
    </Header>
  );
}

AppBarView.propTypes = {
  currentBudget: PropTypes.object.isRequired
};

export default AppBarView;
