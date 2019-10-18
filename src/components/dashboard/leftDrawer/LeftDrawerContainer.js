import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftDrawerView from './LeftDrawerView';
import { showModal } from '../../../redux/actions/modalActions';
import { MODAL_TYPES } from '../../modals';

const LeftDrawerContainer = ({ accounts, showModal }) => {

  // Create a single handleClick function??
  function handleClick() {
    showModal(MODAL_TYPES.UPDATE_ACCOUNT, {})
  }

  function handleEditClick(id) {
    const acctData = accounts.find(acct => acct._id === id);
    const { name, type: accountType, balance } = acctData;
    showModal(MODAL_TYPES.UPDATE_ACCOUNT, {
      currentValue: { name, accountType, balance }
    });
  }

  function handleDeleteClick(id) {
    console.log(`Deleting ${id}`)
  }

  return (
    <LeftDrawerView 
      handleClick={handleClick}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}
      accounts={accounts}
    />
  );
}

LeftDrawerContainer.propTypes = {
  showModal: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { accounts: state.accounts };
}

export default connect(mapStateToProps, { showModal })(LeftDrawerContainer);

