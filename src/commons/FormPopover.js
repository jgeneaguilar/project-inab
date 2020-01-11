import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Popover, Row, Col } from 'antd';
import useFormPopover from './useFormPopover';
import './styles.scss';


// A Popover with an input field and a cancel and submit button

const FormPopover = ({ children, placeholder, showDelete, asyncFunc, deleteFunc, initialValue }) => {

  const { 
    inputValue, clicked, handleChange, handleClickChange, handleSubmit, onCancel, onDelete
  } = useFormPopover(asyncFunc, deleteFunc, initialValue);

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
    <div className="formPopoverActions">
      <Row>
        <Col span={6}>
          {showDelete && (
            <Button
              ghost
              type="danger"
              onClick={onDelete}
              className="formPopoverCancel"
              size="small"
            >
              Delete
            </Button>
          )}
        </Col>
        <Col span={18}>
          <Button onClick={onCancel} className="formPopoverCancel" size="small">
            Cancel
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={handleSubmit}
            className="formPopoverOK"
          >
            OK
          </Button>
        </Col>
      </Row>
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
  deleteFunc: PropTypes.func,
  showDelete: PropTypes.bool,
  initialValue: PropTypes.string
};

export default FormPopover;
