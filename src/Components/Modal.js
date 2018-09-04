import React from 'react';
import PropTypes from 'prop-types';
const { Component } = React;

const Modal = WrappedComponent => class extends Component {
    constructor() {
        super();
        // this.toggleVisible = this.toggleVisible.bind(this);
    }

    onChange = key => e => {
        this.setState({
            fields: {
                ...this.state.fields,
                [key]: e.target.value,
            }
        })
    }

    getField = fieldName => {
        return {
            onChange: this.onChange(fieldName),
        }
    }

    // toggleVisible = () => {
    //     const visiableNow = this.state.visiable;
    //     this.setState({visiable: !visiableNow});
    // }

    render(){
        const props = {
            ...this.props,
            handleSubmit: this.handleSubmit,
            getField: this.getField,
        };
        // this.setState({visiable: false, fields: {}});

        return (
            <WrappedComponent {...props}>
                <a href="javascript:void(0);">X</a>
            </WrappedComponent>
        )
    }
};

Modal.propTypes = {
    toggleVisible: PropTypes.func
};

export default Modal;