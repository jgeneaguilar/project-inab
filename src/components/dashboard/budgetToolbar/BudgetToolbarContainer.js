import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BudgetToolbarView from './BudgetToolbarView';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { addMasterCategory } from '../../../redux/actions/masterCategoryActions';


const BudgetToolbarContainer = ({ currentBudget, addMasterCategory }) => {

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

  function onSubmit() {
    addMasterCategory(currentBudget._id, masterCategory)
      .then(() => onCancel()); // exit and clear field
  }

  const title = (
    <Input 
      ref={(input) => input && input.focus()}
      placeholder='Enter Master Category'
      value={masterCategory}
      onChange={handleChange}
      onPressEnter={onSubmit}
    />
  );

  const content = (
    <div className='masterCategoryPopoverActions'>
      <Button
        onClick={onCancel}
        className='masterCategoryPopoverCancel'
      >
        Cancel
      </Button>
      <Button 
        type='primary' 
        onClick={onSubmit}
        className='masterCategoryPopoverOK'
      >
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

BudgetToolbarContainer.propTypes = {
  currentBudget: PropTypes.object.isRequired,
  addMasterCategory: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { currentBudget: state.currentBudget };
}

export default connect(
  mapStateToProps, 
  { addMasterCategory }
)(BudgetToolbarContainer);
