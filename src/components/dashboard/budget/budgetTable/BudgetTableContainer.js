import React from 'react';
import PropTypes from 'prop-types';
import BudgetTableView from './BudgetTableView';
import FormPopover from '../../../../commons/FormPopover';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { addCategory } from '../../../../redux/actions/categoryActions';
import { updateMasterCategory } from '../../../../redux/actions/masterCategoryActions';
import { saveCategoryBudget } from '../../../../redux/actions/categoryBudgetActions';
import { toDecimal } from '../../../../utils/currencyUtils';


const BudgetTableContainer = ({ 
  currentBudget, masterCategories, categories, addCategory, updateMasterCategory, categoryBudgets, saveCategoryBudget, currentTimespan
}) => {

  const columns = [
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      key: 'category',
      render: (text, record) => {

        function getCatNameById(array) {
          return array.find(cat => cat._id === record.key);
        }

        const mCat = getCatNameById(masterCategories);
        // const cat = getCatNameById(categories);

        if (record.type === 'master') {

          function onEditSave(inputValue) {
            const masterCategoryId = record.key;
            return updateMasterCategory(
              currentBudget._id, masterCategoryId, inputValue
            );
          }

          function onSubmitAddCat(inputValue) {
            const masterCategoryId = record.key;
            return addCategory(currentBudget._id, masterCategoryId, inputValue);
          }
          
          return (
            <span className='masterCategoryNameCell'>
              <div className='masterCategoryName'>
                <FormPopover 
                  asyncFunc={onEditSave} 
                  initialValue={mCat.name}
                  placeholder='Enter Master Category'
                >
                 {text}
                </FormPopover>
              </div>
              <FormPopover 
                asyncFunc={onSubmitAddCat} 
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

  const data = masterCategories
    .map(item => mapCategories(item, categories, categoryBudgets));


  function mapCategories(masterCategory, categories, categoryBudgets) {
    return {
      key: masterCategory._id,
      type: 'master',
      category: masterCategory.name,
      budgeted: toDecimal(getTotalBudgeted(masterCategory, categories, categoryBudgets)),
      activity: 'Php0.00',
      available: 'Php0.00',
      children: categories
        .filter(category => category.master_category_id === masterCategory._id)
        .map(category => ({
          key: category._id,
          type: 'category',
          category: category.name,
          budgeted: toDecimal(getBudgeted(categoryBudgets, category._id)),
          activity: 'Php0.00',
          available: 'Php0.00',
        }))
    };
  }

  // TODO: Refactor
  function getTotalBudgeted(masterCategory, categories, categoryBudgets) {
    return categories
      // filter by master category id
      .filter(c => c.master_category_id === masterCategory._id)
      // new array of budgeted amount
      .map(c => categoryBudgets[c._id] ? 
          categoryBudgets[c._id]['budgeted'] : 0
      // sum of budgeted amount
      ).reduce((a, b) => a + b, 0);
  }
  
  function getBudgeted(obj, id) {
    return obj[id] ? obj[id]['budgeted'] : '0';
  }


  function handleSave(row) {
    // TODO: use <InputNumber /> in EditableBudgetTable instead
    const str = row.budgeted.replace(',', '');
    const num = parseInt(str);
    const budgeted = num * 100;
    saveCategoryBudget(currentBudget._id, currentTimespan, row.key, budgeted);
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
  addCategory: PropTypes.func.isRequired,
  updateMasterCategory: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { 
    currentBudget: state.currentBudget,
    masterCategories: state.masterCategories,
    categories: state.categories,
    categoryBudgets: state.categoryBudgets,
    currentTimespan: state.currentTimespan,
  };
}


export default connect(
  mapStateToProps, 
  { addCategory, updateMasterCategory, saveCategoryBudget }
)(BudgetTableContainer);