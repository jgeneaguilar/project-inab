import { Card, Icon, List } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import FormDialog from '../../commons/FormDialog';
import { loadBudget } from '../../redux/actions/currentBudgetActions';
import { hideModal } from '../../redux/actions/modalActions';
import { timeFromNow } from '../../utils/timeUtils';
import { deleteBudget } from '../../redux/actions/budgetsActions';

const OpenBudgetForm = ({ budgets, loadBudget, hideModal, deleteBudget }) => {
  const formDialogProps = {
    visible: true,
    title: 'Open Budget',
    width: 700,
    okText: null,
    okButtonProps: { style: { display: 'none' } },
    onCancel: hideModal,
  };

  const handleBudgetSelect = (budgetId) => {
    loadBudget(budgetId);
    hideModal();
  };

  const handleBudgetDelete = (budgetId) => (event) => {
    event.stopPropagation();
    deleteBudget(budgetId);
  };

  return (
    <FormDialog {...formDialogProps}>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={budgets}
        renderItem={(item) => (
          <List.Item className="">
            <Card
              hoverable
              className="card"
              cover={<Icon className="icon" type="dollar-circle" theme="filled" />}
              actions={[
                <Icon
                  type="delete"
                  key="delete"
                  onClick={handleBudgetDelete(item._id)}
                />,
              ]}
              onClick={() => handleBudgetSelect(item._id)}
            >
              <div className="title">{item.name}</div>
              <div className="subtitle">{timeFromNow(item.updated_at)}</div>
            </Card>
          </List.Item>
        )}
      ></List>
    </FormDialog>
  );
};

function mapStateToProps(state) {
  return {
    budgets: state.budgets,
  };
}

export default connect(mapStateToProps, {
  hideModal,
  loadBudget,
  deleteBudget,
})(OpenBudgetForm);
