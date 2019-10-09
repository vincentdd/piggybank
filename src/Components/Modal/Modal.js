import React, {Component} from 'react';
import {createPortal} from 'react-dom';
import Portal from '../portal';
import PropTypes from 'prop-types';
import {Button, Modal, Form, Input, Radio} from 'antd';
import {connect} from 'react-redux'
import * as actions from '../../action/action';

class CollectionsPage extends Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({visible: true});
    };

    handleCancel = () => {
        this.setState({visible: false});
    };

    handleCreate = () => {
        const {form} = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            this.props.handleEdit({...values, modifier: values.modifier.format()});
            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({visible: false});
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        const CollectionForm = this.props.collectionform;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    {this.props.name}
                </Button>
                <CollectionForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    bill={this.props.bill}
                />
            </div>
        );
    }
}

CollectionsPage.propTypes = {
    //toggleVisible: PropTypes.func
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    handleEdit: (payload) => {
        console.log(actions.editItem(payload));
        dispatch(actions.editItem(payload))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionsPage);

// export default CollectionsPage;
