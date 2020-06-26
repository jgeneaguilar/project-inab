import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import { toCurrency, getTotalBalance } from '../../../utils/currencyUtils';
import ConfirmPopover from '../../../commons/ConfirmPopover';
import './styles.scss';

const LeftDrawerView = ({ accounts, actions }) => {
  const { Item, SubMenu, Divider } = Menu;
  const { budgetAccounts, trackingAccounts } = accounts;

  return (
    <Menu
      mode="inline"
      theme="light"
      inlineCollapsed={false}
      className="leftDrawerMenu"
      defaultOpenKeys={['budgetAccounts']}
    >
      <Item key="budget">
        <Link to="/dashboard">
          <Icon type="reconciliation" />
          <span>Budget</span>
        </Link>
      </Item>
      <Item key="report">
        <Icon type="fund" />
        <span>Reports</span>
      </Item>
      <Item key="accounts">
        <Link to="/dashboard/accounts">
          <Icon type="bank" />
          <span>All Accounts</span>
        </Link>
      </Item>

      <Divider type="horizontal" className="leftDrawerDivider" />

      {/* BUDGET ACCOUNTS */}
      {budgetAccounts && budgetAccounts.length > 0 ? (
        <SubMenu
          key="budgetAccounts"
          title={
            <span>
              <Icon type="wallet" />
              <span className="leftDrawerMenuTitle">Budget</span>
              <span className="leftDrawerMenuAmount">
                {getTotalBalance(budgetAccounts)}
              </span>
            </span>
          }
        >
          {budgetAccounts.map((account) => (
            <Item
              key={account._id}
              itemIcon={(MenuItemProps) =>
                MenuItemProps.active ? (
                  <Fragment>
                    <Icon
                      type="edit"
                      onClick={() => actions.onEditClick(account._id)}
                      className="editAccountIcon"
                      // Used inline styling to override just this icon
                      // May transfer to scss, if able
                      style={{
                        marginLeft: '4px',
                        position: 'absolute',
                        left: '8px',
                        top: '13.5px',
                      }}
                    />
                    <ConfirmPopover
                      title="Delete this account?"
                      asyncFunc={() => actions.onDeleteClick(account._id)}
                      okType="danger"
                    >
                      <Icon
                        type="delete"
                        className="deleteAccountIcon"
                        style={{
                          position: 'absolute',
                          left: '30px',
                          top: '13.5px',
                        }}
                      />
                    </ConfirmPopover>
                  </Fragment>
                ) : null
              }
            >
              <span className="leftDrawerMenuTitle">{account.name}</span>
              <span className="leftDrawerMenuAmount">{toCurrency(account.balance)}</span>
            </Item>
          ))}
        </SubMenu>
      ) : null}

      <Divider type="horizontal" className="leftDrawerDivider" />

      {/* TRACKING ACCOUNTS */}
      {trackingAccounts && trackingAccounts.length > 0 ? (
        <SubMenu
          key="trackingAccounts"
          title={
            <span>
              <Icon type="radar-chart" />
              <span className="leftDrawerMenuTitle">Tracking</span>
              <span className="leftDrawerMenuAmount">
                {getTotalBalance(trackingAccounts)}
              </span>
            </span>
          }
        >
          {trackingAccounts.map((account) => (
            <Item
              key={account._id}
              itemIcon={(MenuItemProps) =>
                MenuItemProps.active ? (
                  <Fragment>
                    <Icon
                      type="edit"
                      onClick={() => actions.onEditClick(account._id)}
                      className="editAccountIcon"
                      // Used inline styling to override just this icon
                      // May transfer to scss, if able
                      style={{
                        marginLeft: '4px',
                        position: 'absolute',
                        left: '8px',
                        top: '13.5px',
                      }}
                    />
                    <ConfirmPopover
                      title="Delete this account?"
                      asyncFunc={() => actions.onDeleteClick(account._id)}
                      okType="danger"
                    >
                      <Icon
                        type="delete"
                        className="deleteAccountIcon"
                        style={{
                          position: 'absolute',
                          left: '30px',
                          top: '13.5px',
                        }}
                      />
                    </ConfirmPopover>
                  </Fragment>
                ) : null
              }
            >
              <span className="leftDrawerMenuTitle">{account.name}</span>
              <span className="leftDrawerMenuAmount">{toCurrency(account.balance)}</span>
            </Item>
          ))}
        </SubMenu>
      ) : null}

      <Divider type="horizontal" className="leftDrawerDivider" />

      <Item>
        <Button type="primary" icon="plus-circle" onClick={actions.onClick}>
          Add Account
        </Button>
      </Item>
    </Menu>
  );
};

LeftDrawerView.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  accounts: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default LeftDrawerView;
