import React, { Component } from 'react';
import { Input, InputNumber, Form, Table, Popconfirm } from 'antd';


export const EditableContext = React.createContext();

class EditableCell extends Component {
  
  getInput =() => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
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
    // this.state = { 
    //   // data, 
    //   editingKey: '' 
    // };
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
        title: 'OUTFLOW',
        dataIndex: 'outflow',
        key: 'outflow',
        editable: true,
      },
      {
        title: '',
        dataIndex: 'operation',
        render: (text, record) => {
          const editable = this.props.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <button
                    onClick={() => this.props.save(form, record.key)}
                    style={{ marginRight: 8 }}
                  >
                    Save
                  </button>
                )}
              </EditableContext.Consumer>
              <Popconfirm title="Sure to cancel?" onConfirm={() => this.props.cancel(record.key)}>
                <button>Cancel</button>
              </Popconfirm>
            </span>
          ) : (
            <button 
              disabled={this.props.editingKey !== ''} 
              onClick={() => this.props.edit(record.key)}
            >
              Edit
            </button>
          );
        },
      },
    ];
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
          bordered
          dataSource={this.props.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={false}
        />
      </EditableContext.Provider>
    );
  }
}

export const EditableFormTable = Form.create()(EditableTable);
