import React, { Component } from 'react';
import { Button, Input, InputNumber, Form, Table, Icon } from 'antd';
import './styles.scss';


export const EditableContext = React.createContext();

class EditableCell extends Component {
  
  getInput =() => {
    if (this.props.inputType === 'number') {
      return <InputNumber size='small' />;
    }
    return <Input size='small' />;
  }

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              // rules: [
              //   {
              //     required: true,
              //     message: `An input is needed for ${title}`,
              //   },
              // ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  }

  render() {
    return (
      <EditableContext.Consumer>
        {this.renderCell}
      </EditableContext.Consumer>
    );
  }
}



class EditableTable extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: 'DATE',
        dataIndex: 'date',
        key: 'date',
        editable: true,
      },
      {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
        editable: true,
      },
      {
        title: 'PAYEE/PAYOR',
        dataIndex: 'payee',
        key: 'payee',
        editable: true,
      },
      {
        title: 'CATEGORY',
        dataIndex: 'category',
        key: 'category',
        editable: true,
      },
      {
        title: 'INFLOW',
        dataIndex: 'inflow',
        key: 'inflow',
        editable: true,
      },
      {
        colSpan: 1,
        title: 'OUTFLOW',
        dataIndex: 'outflow',
        key: 'outflow',
        editable: true,
      },
      {
        title: '',
        colSpan: 2,
        dataIndex: 'operation',
        render: (text, record) => {
          const editable = this.props.isEditing(record);
          return editable ? (
            <div className="compact">
              <EditableContext.Consumer>
                {form => (
                  <Button
                    type="primary" 
                    size="small" 
                    icon='check'
                    title='Save'
                    disabled={!this.isFormValid(form)}
                    onClick={() => this.props.save(form, record.key)}
                  />
                )}
              </EditableContext.Consumer>

              <Button
                    type="default" 
                    size="small" 
                    icon='close'
                    title='Cancel'
                    onClick={this.props.cancel}
                  />
            </div>
          ) : (
            <Icon 
              type='edit'
              className='transactionTableEdit'
              title='Edit'
              disabled={this.props.editingKey !== ''} 
              onClick={() => this.props.edit(record.key)}
            />
          );
        },
      },
    ];
  }

  isFormValid = (form) => {
    const data = form.getFieldsValue();
    // TODO: Add required fields validation..
    return !!data.date.trim() && (data.inflow > 0 || data.outflow > 0);
  }


  render() {
    const components = {
      body: {
        cell: EditableCell,
      },
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.props.isEditing(record),
        }),
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <Table
          components={components}
          dataSource={this.props.data}
          columns={columns}
          rowClassName="editableTransactionTable"
          pagination={false}
          size='small'
        />
      </EditableContext.Provider>
    );
  }
}

export const EditableFormTable = Form.create()(EditableTable);
