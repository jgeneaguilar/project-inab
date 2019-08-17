import React from 'react';
import PropTypes from 'prop-types';
import BudgetTableView from './BudgetTableView';
import { connect } from 'react-redux'


const BudgetTableContainer = ({ masterCategories }) => {

  const data = masterCategories.map(masterCategory => (
    {
      key: masterCategory._id,
      category: masterCategory.name,
      budgeted: 'Php0.00',
      activity: 'Php0.00',
      available: 'Php0.00',
    }
  ));
  
  return (
    <BudgetTableView 
      data={data}
    />
  );
}

BudgetTableContainer.propTypes = {
  masterCategories: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { masterCategories: state.masterCategories };
}

export default connect(mapStateToProps)(BudgetTableContainer);
