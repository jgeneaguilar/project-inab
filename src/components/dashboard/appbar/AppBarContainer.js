import React from 'react';
import PropTypes from 'prop-types' ;
import AppBarView from './AppBarView';

const AppBarContainer = ({ userDetails, budgets }) => {
  return (
    <div>
      <AppBarView 
        userDetails={userDetails}
        budgets={budgets}
      />
    </div>
  );
}

AppBarContainer.propTypes = {
  userDetails: PropTypes.object.isRequired,
  budgets: PropTypes.array.isRequired
};

export default AppBarContainer;
