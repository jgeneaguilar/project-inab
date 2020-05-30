import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const TransferBtn = ({ onClick }) => {
  return (
    <Button
      type="primary"
      size="small"
      ghost
      icon="swap"
      className="transactionToolbarTransferBtn"
      onClick={onClick}
    >
      Transfer
    </Button>
  );
};

TransferBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TransferBtn;
