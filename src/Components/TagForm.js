import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from "react-redux";
import Modal from 'Modal';
const { Component } = React;

class TagForm extends Component{
    render() {
        return (
            <form>
                <div>
                    <label id="tagName">
                        标签名：
                    </label>
                    <input name="tagName" {...this.props.getField('tagName')}/>
                </div>
                <div onClick={this.props.handleSubmit}>提交</div>
            </form>
        )
    }
}

TagForm.propTypes = {
    getField: PropTypes.func,
    handleSubmit: PropTypes.func
};

export default Modal(TagForm);