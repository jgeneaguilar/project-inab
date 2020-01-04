import {
  Button,
  DatePicker,
  Form,
  Icon,
  Input,
  InputNumber,
  Select,
  Table
} from "antd";
import React, { PureComponent } from "react";
import "./styles.scss";
import { currentMonth, parseDate } from "../../../../utils/timeUtils";

export const EditableContext = React.createContext();

class EditableCell extends PureComponent {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber size="small" />;
    }
    return <Input size="small" />;
  };

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
              initialValue: record[dataIndex]
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.PureComponent {
  constructor(props) {
    super(props);

    const dateFormat = "MM/DD/YYYY";

    const { Option } = Select;

    // TODO: Refactor!

    this.columns = [
      {
        title: "DATE",
        dataIndex: "date",
        key: "date",
        width: 150,
        render: (text, record) => {
          const editable = this.props.isEditing(record);
          return editable ? (
            <EditableContext.Consumer>
              {form => (
                <Form.Item>
                  {form.getFieldDecorator("date", {
                    initialValue: text
                      ? parseDate(text, dateFormat)
                      : currentMonth
                  })(<DatePicker size={"medium"} format={dateFormat} />)}
                </Form.Item>
              )}
            </EditableContext.Consumer>
          ) : (
            <span>{text}</span>
          );
        }
      },
      {
        title: "ACCOUNT",
        dataIndex: "account",
        key: "account",
        width: 200,
        render: (category, record) => {
          const editable = this.props.isEditing(record);
          // TODO: Make this a reusable component
          return editable ? (
            <EditableContext.Consumer>
              {form => (
                <Form.Item>
                  {form.getFieldDecorator("account", {
                    rules: [
                      { required: true, message: "Please select account!" }
                    ],
                    initialValue: category
                      ? { key: category._id, label: category.name }
                      : undefined
                  })(
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select Account"
                      size="default"
                      labelInValue
                    >
                      {this.props.accounts.map(item => (
                        <Option key={item._id}>{item.name}</Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              )}
            </EditableContext.Consumer>
          ) : (
            <span>{category && category.name}</span>
          );
        }
      },
      {
        title: "PAYEE/PAYOR",
        dataIndex: "payee",
        key: "payee.name",
        render: (payee, record) => {
          const editable = this.props.isEditing(record);
          // TODO: Make this a reusable component
          return editable ? (
            <EditableContext.Consumer>
              {form => (
                <Form.Item>
                  {form.getFieldDecorator("payee", {
                    rules: [
                      { required: true, message: "Please select your payee!" }
                    ],
                    initialValue: payee
                      ? { key: payee._id, label: payee.name }
                      : undefined
                  })(
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select Payee"
                      size="default"
                      showSearch
                      labelInValue
                      onBlur={value => {
                        form.setFieldsValue({
                          payee: value
                        });
                      }}
                      onSearch={value => {
                        if (value) {
                          form.setFieldsValue({
                            payee: { key: "", label: value }
                          });
                        }
                      }}
                      notFoundContent={
                        <span>Payee will be automatically added.</span>
                      }
                      ref={input => (this.payeeSelect = input)}
                    >
                      {this.props.payees.map(item => (
                        <Option key={item._id}>{item.name}</Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              )}
            </EditableContext.Consumer>
          ) : (
            <span>{payee && payee.name}</span>
          );
        }
      },
      {
        title: "CATEGORY",
        dataIndex: "category",
        key: "category",
        render: (category, record) => {
          const editable = this.props.isEditing(record);
          // TODO: Make this a reusable component
          return editable ? (
            <EditableContext.Consumer>
              {form => (
                <Form.Item>
                  {form.getFieldDecorator("category", {
                    rules: [
                      { required: true, message: "Please select category!" }
                    ],
                    initialValue: category
                      ? { key: category._id, label: category.name }
                      : undefined
                  })(
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select Category"
                      size="default"
                      labelInValue
                    >
                      {this.props.categories.map(item => (
                        <Option key={item._id}>{item.name}</Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              )}
            </EditableContext.Consumer>
          ) : (
            <span>{category.name}</span>
          );
        }
      },
      {
        title: "INFLOW",
        dataIndex: "inflow",
        key: "inflow",
        width: 100,
        editable: true
      },
      {
        colSpan: 1,
        title: "OUTFLOW",
        dataIndex: "outflow",
        key: "outflow",
        width: 100,
        editable: true
      },
      {
        title: "",
        colSpan: 2,
        width: 150,
        dataIndex: "operation",
        render: (text, record) => {
          const editable = this.props.isEditing(record);
          return editable ? (
            <div className="compact">
              <EditableContext.Consumer>
                {form => (
                  <Button
                    type="primary"
                    size="small"
                    icon="check"
                    title="Save"
                    disabled={!this.isFormValid(form)}
                    onClick={() => this.props.save(form, record.key)}
                  />
                )}
              </EditableContext.Consumer>

              <Button
                type="default"
                size="small"
                icon="close"
                title="Cancel"
                onClick={this.props.cancel}
              />
            </div>
          ) : (
            <div>
              <Icon
                type="edit"
                className="transactionTableEdit"
                title="Edit"
                disabled={this.props.editingKey !== ""}
                onClick={() => this.props.edit(record.key)}
              />
              <Icon
                type="delete"
                className="transactionTableEdit"
                title="Delete"
                disabled={this.props.editingKey !== ""}
                onClick={() => this.props.remove(record)}
              />
            </div>
          );
        }
      }
    ];
  }

  isFormValid = form => {
    const data = form.getFieldsValue();
    // TODO: Add required fields validation..
    return (
      !!data.date && !!data.account && (data.inflow > 0 || data.outflow > 0)
    );
  };

  render() {
    const components = {
      body: {
        cell: EditableCell
      }
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === "age" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.props.isEditing(record)
        })
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
          size="small"
        />
      </EditableContext.Provider>
    );
  }
}

export const EditableFormTable = Form.create()(EditableTable);
