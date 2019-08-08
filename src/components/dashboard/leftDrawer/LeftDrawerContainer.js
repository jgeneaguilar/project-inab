import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftDrawerView from './LeftDrawerView';
import { showModal } from '../../../redux/actions/modalActions';
import { MODAL_TYPES } from '../../modals';

const LeftDrawerContainer = ({ showModal }) => {

  function handleClick() {
    showModal(MODAL_TYPES.ADD_ACCOUNT, {})
  }

  return (
    <LeftDrawerView 
      handleClick={handleClick}
    />
  );
}

LeftDrawerContainer.propTypes = {
  showModal: PropTypes.func.isRequired
};

export default connect(null, { showModal })(LeftDrawerContainer);

