import React from 'react';
import PropTypes from 'prop-types' ;
import { Layout, PageHeader, Icon, Button, Divider, Avatar } from 'antd';
import './styles.scss';

const AppBarView = ({ userDetails, budgets }) => {

  const { Header } = Layout;

  return (
    <Header className='appBarContainer'>
      <PageHeader className='dashboardHeader'>
        <Icon className='menuIcon' type='menu' />
        <Button>
          {/** using the first budget as the default */}
          { (budgets[0] && budgets[0]['name']) || 'My Budget' }
        </Button>
        <Divider type='vertical' />
        <Avatar icon='user' src={userDetails.avatar} />
      </PageHeader>
    </Header>
  );
}

AppBarView.propTypes = {
  userDetails: PropTypes.object.isRequired,
  budgets: PropTypes.array.isRequired
};

export default AppBarView;
