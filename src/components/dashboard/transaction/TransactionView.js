import React, { Fragment } from 'react';
import { Layout } from 'antd';
import TransactionTableContainer from './transactionTable/TransactionTableContainer';
import AddTransactionBtn from './transactionToolbar/AddTransactionBtn';

const TransactionView = ({ onAddTransaction, newTransaction }) => {
  const { Content } = Layout;

  return (
    <Fragment>
      <header className="dashboardTransactionHeader">
        <AddTransactionBtn onClick={onAddTransaction} />
      </header>
      <Content className="dashboardTransactionContent">
        <TransactionTableContainer newTransaction={newTransaction} />
      </Content>
    </Fragment>
  );
};

export default TransactionView;
