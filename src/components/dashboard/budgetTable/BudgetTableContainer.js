import React from 'react';
import PropTypes from 'prop-types';
import BudgetTableView from './BudgetTableView';
import { connect } from 'react-redux'


const BudgetTableContainer = ({ 
  currentBudget, masterCategories, categories 
}) => {

  const data = masterCategories.map(masterCategory => (
    {
      key: masterCategory._id,
      category: masterCategory.name,
      budgeted: 'Php0.00',
      activity: 'Php0.00',
      available: 'Php0.00',
      children: categories
        .filter(category => category.master_category_id === masterCategory._id)
        .map(category => ({
          key: category._id,
          category: category.name,
          budgeted: 'Php0.00',
          activity: 'Php0.00',
          available: 'Php0.00',
        }))
    }
  ));
  
  return (
    <BudgetTableView 
      data={data}
    />
  );
}

BudgetTableContainer.propTypes = {
  currentBudget: PropTypes.object.isRequired,
  masterCategories: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { 
    currentBudget: state.currentBudget,
    masterCategories: state.masterCategories,
    categories: state.categories
  };
}

export default connect(mapStateToProps)(BudgetTableContainer);
