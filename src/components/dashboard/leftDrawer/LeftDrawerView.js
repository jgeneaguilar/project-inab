import React from 'react';
import { Menu, Icon } from 'antd';
import './styles.scss';

const LeftDrawerView = () => {

  const { Item, SubMenu, Divider } = Menu;

  return (
      <Menu
        mode='inline'
        theme='light'
        inlineCollapsed={false}
        className='leftDrawerMenu'
      >
        <Item key='budget'>
          <Icon type='reconciliation' />
          <span>Budget</span>
        </Item>
        <Item key='report'>
          <Icon type='fund' />
          <span>Reports</span>
        </Item>
        <Item key='accounts'>
          <Icon type='bank' />
          <span>All Accounts</span>
        </Item>
        <Divider type='horizontal' className='leftDrawerDivider' />
        <SubMenu
          key='budgetAccounts'
          title={
            <span>
              <Icon type='wallet' />
              <span className='leftDrawerMenuTitle'>Budget</span>
              <span className='leftDrawerMenuAmount'>P 100,000</span>
            </span>
          }
        >
          <Item>
            <span className='leftDrawerMenuTitle'>Cash</span>
            <span className='leftDrawerMenuAmount'>P 50,000</span>
          </Item>
          <Item>
            <span className='leftDrawerMenuTitle'>Savings</span>
            <span className='leftDrawerMenuAmount'>P 50,000</span>
          </Item>
        </SubMenu>
        <Divider type='horizontal' className='leftDrawerDivider' />
        <SubMenu
          key='trackingAccounts'
          title={
            <span>
              <Icon type='radar-chart' />
              <span className='leftDrawerMenuTitle'>Tracking</span>
              <span className='leftDrawerMenuAmount'>P 240,000</span>
            </span>
          }
        >
          <Item>
            <span className='leftDrawerMenuTitle'>Mutual Fund</span>
            <span className='leftDrawerMenuAmount'>P 180,000</span>
          </Item>
          <Item>
            <span className='leftDrawerMenuTitle'>Emergency Fund</span>
            <span className='leftDrawerMenuAmount'>P 60,000</span>
          </Item>
        </SubMenu>
      </Menu>
  );
}

export default LeftDrawerView;
