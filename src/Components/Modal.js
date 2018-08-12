import React from 'react';
import PropTypes from 'prop-types';
const { Component } = React;

export default class Modal extends Component {
    constructor() {
        super();
        this.setState({visiable: false});
        this.toggleVisible = this.toggleVisible.bind(this);
    }
    toggleVisible(){
        const visiableNow = this.state.visiable;
        this.setState({visiable: !visiableNow});
    }
    render(){
        return (
            <div>
                <a href="javascript:void(0);" onClick={this.toggleVisible()}>X</a>
            </div>
        )
    }
}
//https://github.com/sunyongjian/blog/issues/25
//https://github.com/ckinmind/ReactCollect/issues/20
Modal.propTypes = {
    toggleVisible: PropTypes.func
};