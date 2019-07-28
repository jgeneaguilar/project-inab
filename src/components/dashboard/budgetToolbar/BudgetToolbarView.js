import React from 'react';
import { PageHeader, Input, Button } from 'antd';
import './styles.scss';

const BudgetToolbarView = () => {

  const { Search } = Input;

  return (
    <PageHeader className='budgetToolbarContainer'>
      <Search 
        placeholder='Filter Categories' 
        size='small'
        className='budgetToolbarInputFilter'
      />
      <Button 
        type='primary'
        size='small'
        ghost
        icon='plus-circle'
      >
        Category Group
      </Button>
    </PageHeader>
  );
}

export default BudgetToolbarView;
