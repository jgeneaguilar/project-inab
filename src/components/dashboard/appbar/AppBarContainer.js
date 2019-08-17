import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;
import AppBarView from './AppBarView';
import { showModal } from '../../../redux/actions/modalActions';

const AppBarContainer = ({ currentBudget, showModal }) => {
  
  return (
    <div>
      <AppBarView 
        currentBudget={currentBudget}
        showModal={showModal}
      />
    </div>
  );
}

AppBarContainer.propTypes = {
  currentBudget: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { currentBudget: state.currentBudget }
}

export default connect(mapStateToProps, { showModal })(AppBarContainer);
