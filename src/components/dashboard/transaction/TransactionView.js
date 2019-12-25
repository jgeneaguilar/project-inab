import React, { Fragment } from 'react';
import { Layout } from 'antd';
import TransactionTableContainer from './transactionTable/TransactionTableContainer';
import AddTransactionBtn from './transactionToolbar/AddTransactionBtn';


const TransactionView = () => {

  const { Content } = Layout;

  return (
    <Fragment>
      <header className='dashboardTransactionHeader'>
        <AddTransactionBtn />
      </header>
      <Content className='dashboardTransactionContent'>
        <TransactionTableContainer />
      </Content>
    </Fragment>
  );
}



export default TransactionView;