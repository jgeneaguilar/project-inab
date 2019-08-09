import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftDrawerView from './LeftDrawerView';
import { showModal } from '../../../redux/actions/modalActions';
import { MODAL_TYPES } from '../../modals';

const LeftDrawerContainer = ({ currentBudget, accounts, showModal }) => {

  function handleClick() {
    showModal(MODAL_TYPES.ADD_ACCOUNT, {})
  }
  console.log(currentBudget);
  console.log(accounts);
  return (
    <LeftDrawerView 
      handleClick={handleClick}
      accounts={accounts}
    />
  );
}

LeftDrawerContainer.propTypes = {
  showModal: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { 
    accounts: state.accounts,
    currentBudget: state.currentBudget
  };
}

export default connect(mapStateToProps, { showModal })(LeftDrawerContainer);

