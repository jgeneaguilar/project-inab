import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import './styles.scss';

const columns = [
  {
    title: 'CATEGORY',
    dataIndex: 'category',
    key: 'category'
  },
  {
    title: 'BUDGETED',
    dataIndex: 'budgeted',
    key: 'budgeted'
  },
  {
    title: 'ACTIVITY',
    dataIndex: 'activity',
    key: 'activity'
  },
  {
    title: 'AVAILABLE',
    dataIndex: 'available',
    key: 'available'
  }
];

const BudgetTableView = ({ data }) => {
  return (
    <Table 
      columns={columns}
      dataSource={data}
      defaultExpandAllRows={true}
      // defaultExpandedRowKeys={[1,2]}
      pagination={false}
    />
  );
}

BudgetTableView.propTypes = {
  data: PropTypes.array.isRequired
};

export default BudgetTableView;
