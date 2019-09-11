import React, { Component } from 'react';
import { Input, Form } from 'antd';

const EditableContext = React.createContext();

export const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

export const EditableFormRow = Form.create()(EditableRow);

export class EditableCell extends Component {
  state = {
    editing: false
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  }

  save = event => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[event.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  }

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          // rules: [
          //   {
          //     required: true,
          //     message: 'Budget amount is required',
          //   },
          // ],
          initialValue: record[dataIndex],
        })(
          <Input 
            ref={node => (this.input = node)}
            className='budgetedInput'
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className='editableCellValueWrap'
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  }

  render() {
    const {
      editable, dataIndex, title, record, index, handleSave, children, ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
};

