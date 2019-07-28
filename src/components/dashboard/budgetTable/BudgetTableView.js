import React from 'react';
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

const mockData = [
  {
    key: 1,
    category: 'Fixed Monthly Expenses',
    budgeted: 'Php8,000.00',
    activity: 'Php6,400.00',
    available: 'Php1,600.00',
    children: [
      {
        key: 11,
        category: 'Rent',
        budgeted: 'Php4,500.00',
        activity: 'Php0.00',
        available: 'Php4,500.00',
      },
      {
        key: 12,
        category: 'Electric',
        budgeted: 'Php500.00',
        activity: '-Php420.00',
        available: 'Php80.00',
      },
    ]
  },
  {
    key: 2,
    category: 'Living Expenses',
    budgeted: 'Php8,000.00',
    activity: '-Php6,400.00',
    available: 'Php1,600.00',
    children: [
      {
        key: 21,
        category: 'Food Allowance',
        budgeted: 'Php4,500.00',
        activity: 'Php0.00',
        available: 'Php4,500.00',
      },
      {
        key: 22,
        category: 'Groceries',
        budgeted: 'Php500.00',
        activity: '-Php420.00',
        available: 'Php80.00',
      },
    ]
  },
  {
    key: 3,
    category: 'Fixed Monthly Expenses',
    budgeted: 'Php8,000.00',
    activity: 'Php6,400.00',
    available: 'Php1,600.00',
    children: [
      {
        key: 31,
        category: 'Rent',
        budgeted: 'Php4,500.00',
        activity: 'Php0.00',
        available: 'Php4,500.00',
      },
      {
        key: 32,
        category: 'Electric',
        budgeted: 'Php500.00',
        activity: '-Php420.00',
        available: 'Php80.00',
      },
    ]
  },
  {
    key: 4,
    category: 'Living Expenses',
    budgeted: 'Php8,000.00',
    activity: '-Php6,400.00',
    available: 'Php1,600.00',
    children: [
      {
        key: 41,
        category: 'Food Allowance',
        budgeted: 'Php4,500.00',
        activity: 'Php0.00',
        available: 'Php4,500.00',
      },
      {
        key: 42,
        category: 'Groceries',
        budgeted: 'Php500.00',
        activity: '-Php420.00',
        available: 'Php80.00',
      },
    ]
  },
];

const BudgetTableView = () => {
  return (
    <Table 
      columns={columns}
      dataSource={mockData}
      // defaultExpandAllRows={true}
      defaultExpandedRowKeys={[1,2]}
      pagination={false}
    />
  );
}

export default BudgetTableView;
