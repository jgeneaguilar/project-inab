import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Popover } from 'antd';
import useFormPopover from './useFormPopover';
import './styles.scss';


// A Popover with an input field and a cancel and submit button

const FormPopover = ({ children, placeholder, asyncFunc, initialValue }) => {

  const { 
    inputValue, clicked, handleChange, handleClickChange, handleSubmit, onCancel 
  } = useFormPopover(asyncFunc, initialValue);

  const title = (
    <Input 
      ref={(input) => input && input.focus()}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      onPressEnter={handleSubmit}
    />
  );

  const content = (
    <div className='formPopoverActions'>
      <Button
        onClick={onCancel}
        className='formPopoverCancel'
      >
        Cancel
      </Button>
      <Button 
        type='primary' 
        onClick={handleSubmit}
        className='formPopoverOK'
      >
        OK
      </Button>
    </div>
  );

  return (
    <Popover
      title={title}
      content={content}
      placement='bottom'
      trigger='click'
      visible={clicked}
      onVisibleChange={handleClickChange}
      overlayClassName='formPopover'
    >
      {children}
    </Popover>
  );
}

FormPopover.propTypes = {
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string.isRequired,
  asyncFunc: PropTypes.func.isRequired,
  initialValue: PropTypes.string
};

export default FormPopover;
