import * as types from '../actions/actionTypes';


// Action Creators
export function showModal(modalType, modalProps) {
  return {
    type: types.SHOW_MODAL,
    modalType: modalType,
    modalProps: modalProps
  };
}

// Thunk
export function hideModal() {
  return { type: types.HIDE_MODAL };
}