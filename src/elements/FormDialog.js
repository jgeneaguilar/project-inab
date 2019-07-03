import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';


const FormDialog = ({ open, handleFormSubmit, title, content, actions }) => {

  return (
    <Dialog
      open={open}
      // onClose={handleDialogClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleFormSubmit}>
        <DialogContent>
          {content}
        </DialogContent>
        <DialogActions>
          {actions}
        </DialogActions>
      </form>
    </Dialog>
  );
}

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  actions: PropTypes.node.isRequired,
}

export default FormDialog;
