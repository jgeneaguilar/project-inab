import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const FormDialog = ({ visible, title, children, okText, onCancel, onOk, loading }) => {
  return (
    <Modal
      visible={visible}
      title={title}
      okText={okText}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={loading}
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
  loading: PropTypes.bool,
};

export default FormDialog;


