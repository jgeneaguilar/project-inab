import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import BudgetToolbarView from './BudgetToolbarView';
import { Input, Button } from 'antd';

const BudgetToolbarContainer = props => {

  // Input value
  const [masterCategory, setMasterCategory] = useState('');

  // Toggle popover
  const [clicked, setClicked] = useState(false);

  function handleChange(event) {
    setMasterCategory(event.target.value);
  }

  function handleClickChange(visible) {
    setClicked(visible);
    setMasterCategory('');
  }

  function onCancel() {
    handleClickChange(false);
  }

  // function onSubmit() {
  //   // onClick OK
  // }

  const title = (
    <Input 
      ref={(input) => input && input.focus()}
      placeholder='Enter Master Category'
      value={masterCategory}
      onChange={handleChange}
    />
  );

  const content = (
    <div className=''>
      <Button
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button type='primary'>
        OK
      </Button>
    </div>
  );

  return (
    <BudgetToolbarView 
      title={title}
      content={content}
      clicked={clicked}
      handleClickChange={handleClickChange}
    />
  );
}

// BudgetToolbarContainer.propTypes = {

// };

export default BudgetToolbarContainer;
