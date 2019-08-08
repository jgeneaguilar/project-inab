import React, { useEffect, Fragment } from 'react';
import DashboardView from './DashboardView';
import ModalRoot from '../modals';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as budgetsActions from '../../redux/actions/budgetsActions';


const DashboardContainer = ({ budgets, actions }) => {

  
  useEffect(() => {
    actions.loadBudgets()
    // TODO: research about useCallback();
  }, []);

  return (
    <Fragment>
      <DashboardView 
        // userData={userData} 
        budgets={budgets}
      />
      <ModalRoot />
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    budgets: state.budget.budgets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBudgets: bindActionCreators(budgetsActions.loadBudgets, dispatch)
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
