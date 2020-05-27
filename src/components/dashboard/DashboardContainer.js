import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadBudgets } from '../../redux/actions/budgetsActions';
import ModalRoot from '../modals';
import DashboardView from './DashboardView';

const DashboardContainer = ({ currentBudget, loadBudgets }) => {
  useEffect(() => {
    loadBudgets();
  }, [loadBudgets]);

  return currentBudget ? (
    <Fragment>
      <DashboardView />
      <ModalRoot />
    </Fragment>
  ) : null;
};

DashboardContainer.propTypes = {
  currentBudget: PropTypes.object,
  loadBudgets: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentBudget: state.currentBudget,
  };
}

export default connect(mapStateToProps, { loadBudgets })(DashboardContainer);
