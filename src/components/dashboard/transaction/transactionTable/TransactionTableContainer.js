import React, { useState, useEffect } from 'react';
import { EditableFormTable } from './EditableTransactionTable';
import { connect } from 'react-redux';
import { createUpdateTransaction, removeTransaction } from '../../../../redux/actions/transactionActions';
import { getAllTransactions } from '../../../../redux/selectors/transactionSelectors';
import { getPayeeList, getAccounts } from '../../../../redux/selectors/commonSelectors';
import moment from 'moment';

moment.suppressDeprecationWarnings = true;

const TransactionTableContainer = ({currentBudget, transactions, newTransaction, categories, payees, createUpdateTransaction, removeTransaction, accounts}) => {

  const [newEntity, setNewEntity] = useState(newTransaction);
  const [data, setData] = useState(transactions);
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    setData([newEntity, ...transactions]
      .filter(item => item !== null));
  }, [transactions, newEntity])

  useEffect(() => {
    setNewEntity(newTransaction);
    if (newTransaction) {
      edit(newTransaction.key)
    }
   }, [newTransaction])


  function isEditing(record) {
    return record.key === editingKey;
  }

  function cancel() {
    if (newTransaction && editingKey === newTransaction.key) {
      setNewEntity(null);
    }

   setEditingKey('');
  }

  function save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }

      const amount = (row.inflow > 0 ? row.inflow : Math.abs(row.outflow) * -1) * 100;
      const transaction = {
        id: key,
        date: moment(row.date).format('MM/DD/YYYY'),
        accountId: row.account.key,
        categoryId: row.category.key,
        payeeId: row.payee && row.payee.key,
        payee: row.payee && row.payee.label,
        amount
      };

      if (newEntity && key === newEntity.key) {
        transaction.id = null;
      }

      createUpdateTransaction(currentBudget._id, transaction);
      cancel();
    });
  }

  function edit(key) {
    setEditingKey(key);
  }

  function remove(record) {
    const {account, payee, category, key, id, ...transaction} = record;
    removeTransaction(currentBudget._id, transaction);
  }

  return (
    // <TransactionTableView 
    //   columns={columns}
    //   data={data}
    // />
    <EditableFormTable 
      data={data}
      payees={payees}
      accounts={accounts}
      categories={categories}
      editingKey={editingKey}
      isEditing={isEditing}
      cancel={cancel}
      save={save}
      edit={edit}
      remove={remove}
    />
  );
}

// TransactionTableContainer.propTypes = {

// };

function mapStateToProps(state) {
  return {
    currentBudget: state.currentBudget,
    transactions: getAllTransactions(state),
    categories: state.categories,
    accounts: getAccounts(state),
    payees: getPayeeList(state),
  };
}

export default connect(
  mapStateToProps,
  {createUpdateTransaction, removeTransaction},
)(TransactionTableContainer);
