import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const FormDialog = ({ 
  visible, title, width, children, okText, okButtonProps, onCancel, onOk, confirmLoading 
}) => {
  return (
    <Modal
      visible={visible}
      width={width}
      title={title}
      okText={okText}
      okButtonProps={okButtonProps}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={confirmLoading}
    >
      {/* mostly input types */}
      {children}
    </Modal>
  );
}

FormDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  okText: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  confirmLoading: PropTypes.bool,
};

export default FormDialog;


