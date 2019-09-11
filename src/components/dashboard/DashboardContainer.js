import React, { useEffect, Fragment } from 'react';
import DashboardView from './DashboardView';
import ModalRoot from '../modals';
import { connect } from 'react-redux';
import { loadBudgets } from '../../redux/actions/budgetsActions';


const DashboardContainer = ({ currentBudget, loadBudgets }) => {
  
  useEffect(() => {
    loadBudgets();
  }, [loadBudgets]);


  return (
    currentBudget ? (
    <Fragment>
      <DashboardView />
      <ModalRoot />
    </Fragment> ) : null
  )
}

function mapStateToProps(state) {
  return {
    currentBudget: state.currentBudget
  };
}


export default connect(mapStateToProps, { loadBudgets })(DashboardContainer);
