import React, {Component} from 'react';
import moment from 'moment';
import {Button, Modal, Form, Input, DatePicker} from 'antd';

const CollectionCreateForm = Form.create({name: 'bill_form'})(
    // eslint-disable-next-line
    class extends React.Component {
        // componentDidMount(){
        //     const { form } = this.props;
        //     const { setFieldsValue } = form;
        //     const bill = this.props.bill;
        //     if(bill != undefined){
        //         setFieldsValue({"context": bill.context});
        //         setFieldsValue({"price": bill.price});
        //     }
        // }
        render() {
            const {visible, onCancel, onCreate, form, bill} = this.props;
            const {getFieldDecorator} = form;
            return (
                <Modal
                    visible={visible}
                    title="编辑"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Context">
                            {getFieldDecorator('context', {
                                rules: [{required: true, message: 'Please input the context of collection!'}],
                                initialValue: bill.context
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Price">
                            {getFieldDecorator('price', {
                                rules: [{required: true, message: 'Please input the price of collection!'},{type:'string', pattern: /^[0-9]+(.[0-9]{2})?$/ , message: 'Price must be number.'}],
                                initialValue: bill.price
                            })(<Input type="textarea"/>)}
                        </Form.Item>
                        <Form.Item className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                rules: [{required: true, message: 'Please input the date of collection!'}],
                                initialValue: moment(bill.createDate, "YYYY-MM-DD"),
                            })(<DatePicker format="YYYY-MM-DD"/>)}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);

export default CollectionCreateForm