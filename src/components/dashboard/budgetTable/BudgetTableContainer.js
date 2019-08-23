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

        function onSubmitFunc(values) {
          const masterCategoryId = record.key;
          return addCategory(
            currentBudget._id, masterCategoryId, values.name
          );
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
      key: 'budgeted'
    },
    {
      title: 'ACTIVITY',
      dataIndex: 'activity',
      key: 'activity'
    },
    {
      title: 'AVAILABLE',
      dataIndex: 'available',
      key: 'available'
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
  
  return (
    <BudgetTableView 
      columns={columns}
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
