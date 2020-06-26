import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Select } from 'antd';
import FormDialog from '../../commons/FormDialog';
import { hideModal } from '../../redux/actions/modalActions';
import { today } from '../../utils/timeUtils';
import {
  getBudgetAccounts,
  getTrackingAccounts,
  getCurrentBudget,
} from '../../redux/selectors/commonSelectors';
import { transferFunds } from '../../redux/actions/transactionActions';
import './modals.styles.scss';

const TransferFundsForm = () => {
  const { Option, OptGroup } = Select;

  const dispatch = useDispatch();

  const budgetAccounts = useSelector(getBudgetAccounts);
  const trackingAccounts = useSelector(getTrackingAccounts);
  const currentBudget = useSelector(getCurrentBudget);

  // console.log(budgetAccounts, trackingAccounts);

  //#region States
  let initialValue = {
    /**
     * https://github.com/ant-design/ant-design/issues/16417
     * both accounts' default value is undefined so pthat the placeholder will show.
     * It won't show if the value is null or ''
     */
    sourceAccountId: undefined,
    destinationAccountId: undefined,
    amount: '',
  };

  const [values, setValues] = useState(initialValue);

  const [confirmLoading, setConfirmLoading] = useState(false);

  //#endregion

  //#region Functions

  function filteredAccounts(accountSelected, accountsArray) {
    return accountsArray.filter((account) => account._id !== accountSelected);
  }

  function handleChange({ target: { name, value } }) {
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSelect(value, _, name) {
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit() {
    const data = {
      ...values,
      amount: values.amount * 100,
      date: today,
    };

    setConfirmLoading(true);
    dispatch(transferFunds(currentBudget._id, data))
      .then(() => {
        setConfirmLoading(false);
        dispatch(hideModal());
      })
      .catch(() => {
        setConfirmLoading(false);
      });
  }

  //#endregion

  const formDialogProps = {
    visible: true,
    title: 'Transfer Funds',
    okText: 'Transfer',
    onCancel: () => dispatch(hideModal()),
    onOk: handleSubmit,
    confirmLoading: confirmLoading,
  };

  return (
    <FormDialog {...formDialogProps}>
      <Select
        className="formModalSelectType"
        placeholder="Which account would like to transfer from?"
        style={{ width: '100%' }}
        onChange={(value, option) => handleSelect(value, option, 'sourceAccountId')}
        value={values.sourceAccountId}
      >
        <OptGroup label="Budget">
          {budgetAccounts.map((account) => (
            <Option key={account._id} value={account._id}>
              {account.name}
            </Option>
          ))}
        </OptGroup>
        <OptGroup label="Tracking">
          {trackingAccounts.map((account) => (
            <Option key={account._id} value={account._id}>
              {account.name}
            </Option>
          ))}
        </OptGroup>
      </Select>
      <Select
        className="formModalSelectType"
        placeholder="Which account would like to transfer to?"
        style={{ width: '100%' }}
        onChange={(value, option) => handleSelect(value, option, 'destinationAccountId')}
        value={values.destinationAccountId}
        disabled={!Boolean(values.sourceAccountId)}
      >
        <OptGroup label="Budget">
          {filteredAccounts(values.sourceAccountId, budgetAccounts).map((account) => (
            <Option key={account._id} value={account._id}>
              {account.name}
            </Option>
          ))}
        </OptGroup>
        <OptGroup label="Tracking">
          {filteredAccounts(values.sourceAccountId, trackingAccounts).map((account) => (
            <Option key={account._id} value={account._id}>
              {account.name}
            </Option>
          ))}
        </OptGroup>
      </Select>
      <Input
        className="formModalInputType"
        placeholder="Amount to transfer"
        name="amount"
        onChange={handleChange}
        value={values.amount}
      />
    </FormDialog>
  );
};

// TransferFundsForm.propTypes = {
//   hideModal: PropTypes.func.isRequired,
// };

export default TransferFundsForm;
