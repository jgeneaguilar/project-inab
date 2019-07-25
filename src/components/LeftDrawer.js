import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from './SideMenu';
import AddAccountForm from './AddAccountForm';

const LeftDrawer = props => {
  return (
    <div>
      <SideMenu />
      <AddAccountForm />
    </div>
  );
}

LeftDrawer.propTypes = {

};

export default LeftDrawer;
