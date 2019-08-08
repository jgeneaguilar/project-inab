import React  from 'react';
import AddAccountForm from './AddAccountForm';
import { connect } from 'react-redux';

export const MODAL_COMPONENTS = {
  ADD_ACCOUNT: AddAccountForm
};

// to be used by the showModal() action creator
export const MODAL_TYPES = {
  ADD_ACCOUNT: 'ADD_ACCOUNT'
};


const ModalRoot = ({ modalType, modalProps }) => {

  if(!modalType) {
    return null;
  }
  
  const CurrentModal = MODAL_COMPONENTS[modalType];

  return <CurrentModal {...modalProps} />
}


export default connect(state => state.modal)(ModalRoot);
