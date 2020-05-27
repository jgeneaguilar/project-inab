import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const AddTransactionBtn = ({ onClick }) => {
  return (
    <Button
      type="primary"
      size="small"
      ghost
      icon="plus-circle"
      className="transactionToolbarAddBtn"
      onClick={onClick}
    >
      Add Transaction
    </Button>
  );
};

AddTransactionBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddTransactionBtn;
