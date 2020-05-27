import React from 'react';
import PropTypes from 'prop-types';
import FormPopover from '../../../../commons/FormPopover';
import { PageHeader, Input, Button } from 'antd';
import './styles.scss';

const BudgetToolbarView = ({ asyncFunc }) => {
  const { Search } = Input;

  return (
    <PageHeader className="budgetToolbarContainer">
      <Search
        placeholder="Filter Categories"
        size="small"
        className="budgetToolbarInputFilter"
      />
      <FormPopover placeholder="Enter Master Category" asyncFunc={asyncFunc}>
        <Button
          type="primary"
          size="small"
          ghost
          icon="plus-circle"
          className="budgetToolbarMasterCategoryBtn"
        >
          Master Category
        </Button>
      </FormPopover>
    </PageHeader>
  );
};

BudgetToolbarView.propTypes = {
  asyncFunc: PropTypes.func.isRequired,
};

export default BudgetToolbarView;
