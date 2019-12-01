import React, { useState } from 'react';
// import TransactionTableView from './TransactionTableView';
// import PropTypes from 'prop-types';
import { EditableFormTable } from './EditableTransactionTable';


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

const TransactionTableContainer = () => {

  const [data, setData] = useState(initialData);
  const [editingKey, setEditingKey] = useState('');

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

export default TransactionTableContainer;
