import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Button } from 'antd';
import { 
  toCurrency, 
  getTotalBalance, 
  getBudgetAccounts,
  getTrackingAccounts
} from '../../../utils/currencyUtils';
import './styles.scss';

const LeftDrawerView = ({ accounts, handleClick }) => {

  const { Item, SubMenu, Divider } = Menu;

  return (
      <Menu
        mode='inline'
        theme='light'
        inlineCollapsed={false}
        className='leftDrawerMenu'
        defaultOpenKeys={['budgetAccounts']}
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

        {/* BUDGET ACCOUNTS */}
        { accounts && accounts.length > 0 ?
          (<SubMenu
            key='budgetAccounts'
            title={
              <span>
                <Icon type='wallet' />
                <span className='leftDrawerMenuTitle'>Budget</span>
                <span className='leftDrawerMenuAmount'>
                  {getTotalBalance(getBudgetAccounts(accounts))}
                </span>
              </span>
            }
          >
            {getBudgetAccounts(accounts).map(account => (
              <Item key={account._id}>
                <span className='leftDrawerMenuTitle'>{account.name}</span>
                <span className='leftDrawerMenuAmount'>
                  {toCurrency(account.balance)}
                </span>
              </Item>
            ))}
          </SubMenu>) : null }

        <Divider type='horizontal' className='leftDrawerDivider' />

        {/* TRACKING ACCOUNTS */}
        { accounts && accounts.length > 0 ?
          (<SubMenu
            key='trackingAccounts'
            title={
              <span>
                <Icon type='radar-chart' />
                <span className='leftDrawerMenuTitle'>Tracking</span>
                <span className='leftDrawerMenuAmount'>
                  {getTotalBalance(getTrackingAccounts(accounts))}
                </span>
              </span>
            }
          >
            {getTrackingAccounts(accounts).map(account => (
              <Item key={account._id}>
                <span className='leftDrawerMenuTitle'>{account.name}</span>
                <span className='leftDrawerMenuAmount'>
                  {toCurrency(account.balance)}
                </span>
              </Item>
            ))}
          </SubMenu>) : null }

        <Divider type='horizontal' className='leftDrawerDivider' />

        {/* TODO: research a better way to implement the Add Account Button */}
        <Item
          onClick={handleClick}
        >
          <Button 
            type='primary' 
            icon='plus-circle'
          >
            Add Account
          </Button>
        </Item>
      </Menu>
  );
}

LeftDrawerView.propTypes = {
  handleClick: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired
};

export default LeftDrawerView;
