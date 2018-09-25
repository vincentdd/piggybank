import React from 'react';
import {createPortal} from 'react-dom';
import Portal from './Portal';
import PropTypes from 'prop-types';
//import ItemForm from 'ItemForm';
const { Component } = React;

function getParentElement(parentSelector) {
    return parentSelector();
}

//const Modal = WrappedComponent => class extends Component {
class Modal extends Component {
        constructor(props) {
        super(props);
    }
    static defaultProps = {
        isOpen: false,
        parentSelector: () => document.body
    };
    componentDidMount(){
        const parent = getParentElement(this.props.parentSelector);
        parent.appendChild(this.node);
    };

    render(){
        // const props = {
        //     ...this.props,
        //     handleSubmit: this.handleSubmit,
        //     getField: this.getField,
        // };
        // this.setState({visiable: false, fields: {}});
        const props = this.props,
            { isOpen } = props;
        this.node = document.createElement("div");

        if(!isOpen)
            return null;
        else
            return createPortal(
                <Portal isOpen={isOpen}>
                    {this.props.ch}
                </Portal>,
                this.node
            );
    }
//{this.props.children}
//    componentWillUnmount() {
//        window.document.body.removeChild(this.node);
//    }
}

class Test extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        isOpen: false,
        parentSelector: () => document.body
    };
    render(){
        this.node = document.createElement("div");
        const parent = document.body;
        parent.appendChild(this.node);
        return createPortal(
            <p>test</p>,
            this.node
        );
    }
}

Modal.propTypes = {
    //toggleVisible: PropTypes.func
};

export {Modal,Test};