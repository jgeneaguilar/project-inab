import React, { Fragment } from 'react';
import { Layout } from 'antd';
import TransactionTableContainer from './transactionTable/TransactionTableContainer';
import AddTransactionBtn from './transactionToolbar/AddTransactionBtn';
import TransferBtn from './transactionToolbar/TransferBtn';

const TransactionView = ({ onAddTransaction, newTransaction, onTransfer }) => {
  const { Content } = Layout;

  return (
    <Fragment>
      <header className="dashboardTransactionHeader">
        <AddTransactionBtn onClick={onAddTransaction} />
        <TransferBtn onClick={onTransfer} />
      </header>
      <Content className="dashboardTransactionContent">
        <TransactionTableContainer newTransaction={newTransaction} />
      </Content>
    </Fragment>
  );
};

export default TransactionView;
