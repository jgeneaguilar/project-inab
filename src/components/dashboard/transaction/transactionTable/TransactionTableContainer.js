import React, { useState, useEffect } from 'react';
// import TransactionTableView from './TransactionTableView';
// import PropTypes from 'prop-types';
import { EditableFormTable } from './EditableTransactionTable';
import { connect } from 'react-redux';


const initialData = [
  {
    key: 1,
    date: '11/27/2019',
    name: 'lunch',
    payee: 'foodpanda',
    category: 'Food',
    inflow: '',
    outflow: 123.45
  },
  {
    key: 2,
    date: '11/28/2019',
    name: 'to Work',
    payee: 'Grab',
    category: 'Transportation',
    inflow: '',
    outflow: 236.00
  },
  {
    key: 3,
    date: '11/28/2019',
    name: 'grocery',
    payee: 'Supermarket',
    category: 'Food',
    inflow: '',
    outflow: 569.24
  },
];

export const NEW_ROW = 'NEW';

const TransactionTableContainer = ({transactions}) => {

  console.log(Object.values(transactions));
  const [data, setData] = useState(Object.values(transactions));
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    if (transactions) {
      setData(Object.values(transactions));

      if (transactions[NEW_ROW]) {
        edit(NEW_ROW);
      }
    }
  }, [transactions])

  function isEditing(record) {
    return record.key === editingKey;
  }

  function cancel() {
   setEditingKey('');
  }

  function save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...data];

      // TODO: Save transaction to API, Update if ID exists

      const isNewRow = form.id === NEW_ROW;
      if (isNewRow) {
        // Delete ID property if it's tagged as NEW_ROW
        delete(form.id);
      }
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        cancel();
      } else {
        newData.push(row);
        setData(newData);
        cancel();
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
    transactions: state.transactions,
  };
}

export default connect(
  mapStateToProps
)(TransactionTableContainer);
