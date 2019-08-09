import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const FormDialog = ({ visible, title, children, okText, onCancel, onOk, confirmLoading }) => {
  return (
    <Modal
      visible={visible}
      title={title}
      okText={okText}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={confirmLoading}
    >
      {/* mostly input types */}
      {children}
    </Modal>
  );
}

// TODO: update the isRequired
FormDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  okText: PropTypes.string,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  confirmLoading: PropTypes.bool,
};

export default FormDialog;


