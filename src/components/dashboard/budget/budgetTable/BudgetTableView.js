import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import './styles.scss';
import { EditableFormRow, EditableCell } from './EditableBudgetTable';


const BudgetTableView = ({ columns, data }) => {

  const components = {
    body: {
      row: EditableFormRow,
      cell: EditableCell  
    }
  };

  return (
    <Table 
      components={components}
      columns={columns}
      dataSource={data}
      defaultExpandAllRows={true}
      pagination={false}
      size='small'
      rowClassName={() => 'editableRow'}
    />
  );
}

BudgetTableView.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export default BudgetTableView;
