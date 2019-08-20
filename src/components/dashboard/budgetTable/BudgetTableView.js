import React from 'react';
import PropTypes from 'prop-types';
import { Table, Icon } from 'antd';
import './styles.scss';

const columns = [
  {
    title: 'CATEGORY',
    dataIndex: 'category',
    key: 'category',
    render: (text, record) => {
      if (record.type === 'master') {
        return (
          <span className='masterCategoryNameCell'>
            <div className='masterCategoryName'>
              {text}
            </div>
            <Icon 
              type='plus-circle' 
              size='small'
              title='Add a category'
              onClick={() => console.log('I\'m the add button')}
              className='addCategoryIconButton'
            />
          </span>
        );
      } else {
        return text;
      }
    }
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
      size='small'
      rowSelection={{}}
      // onRow={(record, rowIndex) => {
      //   return {
      //     onClick: event => <Icon type='plus-circle'/>, // click row
      //     // onDoubleClick: event => {}, // double click row
      //     // onContextMenu: event => {}, // right button click row
      //     // onMouseEnter: event => {}, // mouse enter row
      //     // onMouseLeave: event => {}, // mouse leave row
      //   };
      // }}
    />
  );
}

BudgetTableView.propTypes = {
  data: PropTypes.array.isRequired
};

export default BudgetTableView;
