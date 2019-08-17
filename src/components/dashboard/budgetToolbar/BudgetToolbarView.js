import React from 'react';
import { PageHeader, Input, Popover, Button } from 'antd';
import './styles.scss';

const BudgetToolbarView = () => {

  const { Search } = Input;

  const title = (
    <Input 
      autoFocus
      placeholder='Enter Master Category'
    />
  );

  const content = (
    <div className=''>
      <Button>
        Cancel
      </Button>
      <Button type='primary'>
        OK
      </Button>
    </div>
  );

  return (
    <PageHeader className='budgetToolbarContainer'>
      <Search 
        placeholder='Filter Categories' 
        size='small'
        className='budgetToolbarInputFilter'
      />
      <Popover
        title={title}
        content={content}
        placement='bottom'
        trigger='click'
      >
        <Button 
          type='primary'
          size='small'
          ghost
          icon='plus-circle'
        >
          Category Group
        </Button>
      </Popover>
    </PageHeader>
  );
}

export default BudgetToolbarView;
