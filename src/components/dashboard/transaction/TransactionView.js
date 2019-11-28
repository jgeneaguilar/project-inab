import React, { Fragment } from 'react';
import { Layout, Button } from 'antd';
import TransactionTableContainer from './transactionTable/TransactionTableContainer';


const TransactionView = () => {

  const { Content } = Layout;

  return (
    <Fragment>
      <header className='dashboardTransactionHeader'>
        <Button
          type='primary'
          size='small'
          ghost
          icon='plus-circle'
          className='transactionToolbarAddBtn'
        >
          Add Transaction
        </Button>
      </header>
      <Content className='dashboardTransactionContent'>
        <TransactionTableContainer />
      </Content>
    </Fragment>
  );
}



export default TransactionView;