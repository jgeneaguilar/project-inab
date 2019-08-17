import React from 'react';
import { PageHeader, Input, Popover, Button } from 'antd';
import './styles.scss';

const BudgetToolbarView = ({ title, content, clicked, handleClickChange }) => {

  const { Search } = Input;

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
        visible={clicked}
        onVisibleChange={handleClickChange}

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
