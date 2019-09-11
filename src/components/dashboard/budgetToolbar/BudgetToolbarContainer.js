import React from 'react';
import PropTypes from 'prop-types';
import BudgetToolbarView from './BudgetToolbarView';
import { connect } from 'react-redux';
import { 
  addMasterCategory 
} from '../../../redux/actions/masterCategoryActions';


const BudgetToolbarContainer = ({ currentBudget, addMasterCategory }) => {

  function onSubmit(inputValue) {
    return addMasterCategory(currentBudget._id, inputValue);
  }

  return (
    <BudgetToolbarView 
      asyncFunc={onSubmit}
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
