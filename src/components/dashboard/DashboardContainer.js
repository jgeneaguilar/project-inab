import React, { useEffect, Fragment } from 'react';
import DashboardView from './DashboardView';
import ModalRoot from '../modals';
import { connect } from 'react-redux';
import { loadBudgets } from '../../redux/actions/budgetsActions';
import { Switch, Route, Redirect } from 'react-router-dom';
import SessionExpired from '../SessionExpired';
import BudgetView from './budget/BudgetView';


const DashboardContainer = ({ currentBudget, currentTimespan, loadBudgets, ...props }) => {

  useEffect(() => {
    loadBudgets();
  }, [loadBudgets]);

  return (
    currentTimespan && currentBudget ? (
      <Fragment>
        <DashboardView {...props} />

        <ModalRoot />
      </Fragment >) : null
  )
}

function mapStateToProps(state) {
  return {
    currentBudget: state.currentBudget,
    currentTimespan: state.currentTimespan,
  };
}


export default connect(mapStateToProps, { loadBudgets })(DashboardContainer);
