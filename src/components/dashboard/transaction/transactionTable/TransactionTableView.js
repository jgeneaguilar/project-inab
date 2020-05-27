import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const TransactionTableView = ({ columns, data }) => {
  return <Table columns={columns} dataSource={data} pagination={false} size="small" />;
};

TransactionTableView.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionTableView;
