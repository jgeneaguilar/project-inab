import React from 'react';
import { Layout, PageHeader, Icon, Button, Divider, Avatar } from 'antd';
import './styles.scss';

const AppBarView = () => {

  const { Header } = Layout;

  return (
    <Header className='appBarContainer'>
      <PageHeader className='dashboardHeader'>
        <Icon className='menuIcon' type='menu' />
        <Button>
          My Budget
        </Button>
        <Divider type='vertical' />
        <Avatar icon='user' />
      </PageHeader>
    </Header>
  );
}

export default AppBarView;
