import { Icon } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FormPopover from '../../../../commons/FormPopover';
import {
  addCategory,
  updateCategory,
  deleteCategory,
} from '../../../../redux/actions/categoryActions';
import { saveCategoryBudget } from '../../../../redux/actions/categoryBudgetActions';
import {
  updateMasterCategory,
  deleteMasterCategory,
} from '../../../../redux/actions/masterCategoryActions';
import { getCategoriesByMasterCategory } from '../../../../redux/selectors/categorySelectors';
import BudgetTableView from './BudgetTableView';

const BudgetTableContainer = ({
  currentBudget,
  masterCategories,
  addCategory,
  updateMasterCategory,
  updateCategory,
  saveCategoryBudget,
  deleteMasterCategory,
  deleteCategory,
  currentTimespan,
}) => {
  /** render: (text, record) => {}
   * text = display text of cell
   * record = row data ({id, column: row value})
   *
   */

  const renderAddCategoryPopover = (onSubmitAddCat) => {
    return (
      <FormPopover asyncFunc={onSubmitAddCat} placeholder="Enter Category Name">
        <Icon
          type="plus-circle"
          size="small"
          title="Add a category"
          className="addCategoryIconButton"
        />
      </FormPopover>
    );
  };

  const renderEditNamePopover = (text, record, onEditSave, onDelete) => {
    return (
      <FormPopover
        asyncFunc={onEditSave}
        deleteFunc={onDelete}
        initialValue={text}
        showDelete={true}
        placeholder="Edit Name"
      >
        {text}
      </FormPopover>
    );
  };

  const renderCategoryCell = (text, record, onEditSave, onSubmitAddCat, onDelete) => {
    return (
      <span className="masterCategoryNameCell">
        <div className="masterCategoryName">
          {renderEditNamePopover(text, record, onEditSave, onDelete)} &nbsp;
          {record.type === 'master' && renderAddCategoryPopover(onSubmitAddCat)}
        </div>
      </span>
    );
  };

  const columns = [
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      key: 'category',
      render: (text, record) => {
        function onEditSave(inputValue) {
          const action = record.type === 'master' ? updateMasterCategory : updateCategory;
          return action(currentBudget._id, record.key, inputValue);
        }

        function onSubmitAddCat(inputValue) {
          const masterCategoryId = record.key;
          return addCategory(currentBudget._id, masterCategoryId, inputValue);
        }

        function onDelete() {
          const action = record.type === 'master' ? deleteMasterCategory : deleteCategory;
          return action(currentBudget._id, record.key);
        }

        return renderCategoryCell(text, record, onEditSave, onSubmitAddCat, onDelete);
      },
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
      className: 'columnMoney',
    },
    {
      title: 'AVAILABLE',
      dataIndex: 'available',
      key: 'available',
      className: 'columnMoney',
    },
  ];

  function handleSave(row) {
    // TODO: use <InputNumber /> in EditableBudgetTable instead
    const str = row.budgeted.replace(',', '');
    const num = parseFloat(str);
    const budgeted = num * 100;
    saveCategoryBudget(currentBudget._id, currentTimespan, row.key, budgeted);
  }

  const newColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable && record.type === 'category',
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    };
  });

  return <BudgetTableView columns={newColumns} data={masterCategories} />;
};

BudgetTableContainer.propTypes = {
  currentBudget: PropTypes.object.isRequired,
  masterCategories: PropTypes.array.isRequired,
  addCategory: PropTypes.func.isRequired,
  updateMasterCategory: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentBudget: state.currentBudget,
    masterCategories: getCategoriesByMasterCategory(state),
    currentTimespan: state.currentTimespan,
  };
}

export default connect(mapStateToProps, {
  addCategory,
  updateMasterCategory,
  saveCategoryBudget,
  updateCategory,
  deleteCategory,
  deleteMasterCategory,
})(BudgetTableContainer);
