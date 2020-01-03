import React, { useState, useEffect } from 'react';
import { EditableFormTable } from './EditableTransactionTable';
import { connect } from 'react-redux';
import { createTransaction } from '../../../../redux/actions/transactionActions';
import { getAllTransactions } from '../../../../redux/selectors/transactionSelectors';
import { getPayeeList, getAccounts } from '../../../../redux/selectors/commonSelectors';
import moment from 'moment';

moment.suppressDeprecationWarnings = true;

const TransactionTableContainer = ({currentBudget, transactions, newTransaction, categories, payees, createTransaction, accounts}) => {

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

      if (newEntity && key === newEntity.key) {

        const amount = row.inflow > 0 ? row.inflow : Math.abs(row.outflow) * -1;
        
        const newTransaction = {
          date: moment(row.date).format('MM/DD/YYYY'),
          accountId: row.account.key,
          categoryId: row.category.key,
          payeeId: row.payee && row.payee.key,
          payee: row.payee && row.payee.label,
          amount
        };
  
        createTransaction(currentBudget._id, newTransaction);
        cancel();
      } else {
        // TODO: Update Transaction
      }
    });
  }

  function edit(key) {
    setEditingKey(key);
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
  {createTransaction},
)(TransactionTableContainer);
