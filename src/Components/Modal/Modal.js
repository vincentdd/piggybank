import React,{ Component } from 'react';
import {createPortal} from 'react-dom';
import Portal from '../portal';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, Radio } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="编辑"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Title">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Please input the title of collection!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Description">
                            {getFieldDecorator('description')(<Input type="textarea" />)}
                        </Form.Item>
                        <Form.Item className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })(
                                <Radio.Group>
                                    <Radio value="public">Public</Radio>
                                    <Radio value="private">Private</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);

class CollectionsPage extends Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    {this.props.name}
                </Button>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}



//const Modal = WrappedComponent => class extends Component {
// class Modal extends Component {
//         constructor(props) {
//         super(props);
//         // this.toggleVisible = this.toggleVisible.bind(this);
//     }
//     static defaultProps = {
//         isOpen: false,
//         parentSelector: () => document.body
//     };
//     componentDidMount(){
//         // debugger;
//         // console.log(this.props.parentSelector());
//         const parent = getParentElement(this.props.parentSelector);
//         parent.appendChild(this.node);
//     };
//     // componentWillUnmount() {
//     //     window.document.body.removeChild(this.node);
//     // }
//     render(){
//         // const props = {
//         //     ...this.props,
//         //     handleSubmit: this.handleSubmit,
//         //     getField: this.getField,
//         // };
//         // this.setState({visiable: false, fields: {}});
//         const props = this.props,
//             { isOpen } = props;
//         // debugger;
//         if(!this.node)
//             this.node = document.createElement("div");
//         if(!isOpen)
//             return null;
//         else
//             return createPortal(
//                 <Portal isOpen={isOpen}>
//                     {this.props.children}
//                 </Portal>,
//                 this.node
//             );
//     }
// }

CollectionsPage.propTypes = {
    //toggleVisible: PropTypes.func
};

export default CollectionsPage;