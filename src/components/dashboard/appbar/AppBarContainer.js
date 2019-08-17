import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;
import AppBarView from './AppBarView';

const AppBarContainer = ({ currentBudget }) => {
  
  return (
    <div>
      <AppBarView 
        currentBudget={currentBudget}
      />
    </div>
  );
}

AppBarContainer.propTypes = {
  currentBudget: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { currentBudget: state.currentBudget }
}

export default connect(mapStateToProps)(AppBarContainer);
