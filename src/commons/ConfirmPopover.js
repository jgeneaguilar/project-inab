import React from 'react';
import PropTypes from 'prop-types';
import { Popconfirm } from 'antd';

const ConfirmPopover = ({ children, title, asyncFunc, okType = 'primary' }) => {
  function confirm() {
    asyncFunc();
  }

  return (
    <Popconfirm
      placement="right"
      title={title}
      onConfirm={confirm}
      okText="Yes"
      okType={okType}
      cancelText="No"
    >
      {children}
    </Popconfirm>
  );
};

ConfirmPopover.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  asyncFunc: PropTypes.func.isRequired,
  okType: PropTypes.string,
};

export default ConfirmPopover;
