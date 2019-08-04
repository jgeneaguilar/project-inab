import React, { useEffect } from 'react';
import DashboardView from './DashboardView';
// import { getUserDetails } from '../../api/usersAPI';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as budgetsActions from '../../redux/actions/budgetsActions';
// import { setToken } from './api/baseAPI';


const DashboardContainer = ({ budgets, actions }) => {

  
  useEffect(() => {
    actions.loadBudgets()
    // Promise.all([getUserDetails(), actions.loadBudgets()])
    //   .then(([user, budgets]) => {
    //     setUserDetails({
    //       ...user.data
    //     });
    //     console.log('USER DETAILS: ', user.data);
    //     console.log('BUDGETS: ', budgets.data);
    //   })
    //   .catch(error => console.error(`API call failed.\n${error}`));
  }, []);

  return (
    <DashboardView 
      // userDetails={userDetails} 
      budgets={budgets}
    />
  );
}

function mapStateToProps(state) {
  return {
    budgets: state.budgets.budgets
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
