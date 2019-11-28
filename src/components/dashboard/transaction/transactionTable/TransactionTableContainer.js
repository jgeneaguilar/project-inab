import React from 'react';
import TransactionTableView from './TransactionTableView';
// import PropTypes from 'prop-types';


const TransactionTableContainer = () => {

  const columns = [
    {
      title: 'DATE',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'PAYEE/PAYOR',
      dataIndex: 'payee',
      key: 'payee'
    },
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'INFLOW',
      dataIndex: 'inflow',
      key: 'inflow'
    },
    {
      title: 'OUTFLOW',
      dataIndex: 'outflow',
      key: 'outflow'
    },
  ];

  const data = [
    {
      key: 1,
      date: '11/27/2019',
      name: 'lunch',
      payee: 'foodpanda',
      category: 'Food',
      inflow: '',
      outflow: 123.45
    },
    {
      key: 2,
      date: '11/28/2019',
      name: 'to Work',
      payee: 'Grab',
      category: 'Transportation',
      inflow: '',
      outflow: 236.00
    },
    {
      key: 3,
      date: '11/28/2019',
      name: 'grocery',
      payee: 'Supermarket',
      category: 'Food',
      inflow: '',
      outflow: 569.24
    },
  ];

  return (
    <TransactionTableView 
      columns={columns}
      data={data}
    />
  );
}

// TransactionTableContainer.propTypes = {

// };

export default TransactionTableContainer;
