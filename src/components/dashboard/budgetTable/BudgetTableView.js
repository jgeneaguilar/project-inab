import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import './styles.scss';


const BudgetTableView = ({ columns, data }) => {
  return (
    <Table 
      columns={columns}
      dataSource={data}
      defaultExpandAllRows={true}
      pagination={false}
      size='small'
      rowSelection={{}}
    />
  );
}

BudgetTableView.propTypes = {
  data: PropTypes.array.isRequired
};

export default BudgetTableView;
