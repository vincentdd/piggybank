import React from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
const { Component } = React;

class Portal extends Component {
    constructor(props) {
        super(props);
        // this.toggleVisible = this.toggleVisible.bind(this);
        // const doc = window.document;
        // this.node = doc.createElement('div');
        // doc.body.appendChild(this.node);
    }

    render(){
        const isOpen = this.props.isOpen;

        return !isOpen ? null
            :createPortal(
            <div className="dialog">
                {this.props.children}
            </div>,
            this.node
        );
    }

    componentWillUnmount() {
        window.document.body.removeChild(this.node);
    }

}

Portal.propTypes = {
    //toggleVisible: PropTypes.func
};

export default Portal;