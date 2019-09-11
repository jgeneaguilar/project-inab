import React from 'react';
import PropTypes from 'prop-types';
import BudgetTableView from './BudgetTableView';
import FormPopover from '../../../commons/FormPopover';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { addCategory } from '../../../redux/actions/categoryActions';


const BudgetTableContainer = ({ 
  currentBudget, masterCategories, categories, addCategory
}) => {
  
  const columns = [
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      key: 'category',
      render: (text, record) => {
        if (record.type === 'master') {

        function onSubmitFunc(inputValue) {
          const masterCategoryId = record.key;
          return addCategory(currentBudget._id, masterCategoryId, inputValue);
        }

          return (
            <span className='masterCategoryNameCell'>
              <div className='masterCategoryName'>
                {text}
              </div>
              <FormPopover 
                asyncFunc={onSubmitFunc} 
                placeholder='Enter Category Name'
              >
                <Icon 
                  type='plus-circle' 
                  size='small'
                  title='Add a category'
                  className='addCategoryIconButton'
                />
              </FormPopover>
            </span>
          );
        } else {
          return text;
        }
      }
    },
    {
      title: 'BUDGETED',
      dataIndex: 'budgeted',
      key: 'budgeted',
      className: 'columnMoney',
      editable: true,
    },
    {
      title: 'ACTIVITY',
      dataIndex: 'activity',
      key: 'activity',
      className: 'columnMoney'
    },
    {
      title: 'AVAILABLE',
      dataIndex: 'available',
      key: 'available',
      className: 'columnMoney'
    }
  ];

  const data = masterCategories.map(masterCategory => (
    {
      key: masterCategory._id,
      type: 'master',
      category: masterCategory.name,
      budgeted: 'Php0.00',
      activity: 'Php0.00',
      available: 'Php0.00',
      children: categories
        .filter(category => category.master_category_id === masterCategory._id)
        .map(category => ({
          key: category._id,
          type: 'category',
          category: category.name,
          budgeted: 'Php0.00',
          activity: 'Php0.00',
          available: 'Php0.00',
        }))
    }
  ));

  function handleSave(row) {
    console.log(row);
  }

  const newColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable && record.type === 'category',
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave
      }),
    };
  });
  
  return (
    <BudgetTableView 
      columns={newColumns}
      data={data}
    />
  );
}

BudgetTableContainer.propTypes = {
  currentBudget: PropTypes.object.isRequired,
  masterCategories: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  addCategory: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { 
    currentBudget: state.currentBudget,
    masterCategories: state.masterCategories,
    categories: state.categories
  };
}


export default connect(mapStateToProps, { addCategory })(BudgetTableContainer);
