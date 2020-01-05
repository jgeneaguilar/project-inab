import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Button, Avatar, Dropdown, Menu, Row, Col } from 'antd';
import { MODAL_TYPES } from '../../modals';
import './styles.scss';

const BUDGET_MENU = {
  NEW: 'NEW_BUDGET',
  OPEN: 'OPEN_BUDGET',
  RESET: 'RESET_BUDGET'
};

const AppBarView = ({ currentBudget, showModal }) => {

  const [budgetPopoverVisible, setBudgetPopoverVisible] = useState(false);

  const { Header } = Layout;

  const handleBudgetClick = ({key}) => {
    setBudgetPopoverVisible(false);
    switch(key) {
      case BUDGET_MENU.NEW:
        showModal(MODAL_TYPES.CREATE_BUDGET);
        break;
      case BUDGET_MENU.OPEN:
        showModal(MODAL_TYPES.OPEN_BUDGET);
        break;
      default:
        break;
    }
  };

  const budgetPopoverContent = (
    <Menu className='compact link' onClick={handleBudgetClick} align='center'>
      <Menu.Item key={BUDGET_MENU.NEW}>New Budget</Menu.Item>
      <Menu.Item key={BUDGET_MENU.OPEN}>Open Budget</Menu.Item>
      <Menu.Divider />
      <Menu.Item key={BUDGET_MENU.RESET}>Reset Budget</Menu.Item>
    </Menu>
  );

  const handleVisibleChange = visible => {
    setBudgetPopoverVisible(visible);
  };

  const renderBudget = currentBudget ? (
    <Dropdown trigger={['click']} 
      overlay={budgetPopoverContent} 
      visible={budgetPopoverVisible} 
      onVisibleChange={handleVisibleChange}>
      <Button>
        {/** using the first budget as the default */}
        {currentBudget.name || 'My Budget'}
      </Button>
    </Dropdown>
  ) : null;


  return (
    <Header className='appBarContainer'>
      {/* <PageHeader className='dashboardHeader'> */}
      <Row layout='flex' justify="space-between">
        <Col span={12}>
          <Icon className='menuIcon' type='menu' />
          {renderBudget}
        </Col>
        <Col align='right' span={12}>
          <Avatar icon='user' />
        </Col>
      </Row>
    </Header>
  );
}

AppBarView.propTypes = {
  currentBudget: PropTypes.object.isRequired
};

export default AppBarView;
