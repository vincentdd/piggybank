import React from 'react';
import {connect} from "react-redux";
import Modal from "Modal";
import TagForm from "TagForm";
const { Component } = React;

class TagModal extends Component{
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <Modal>
                <form>
                    <label htmlFor="text"><input type="text" name="text"/></label>
                    <input type="submit" value={"提交"}/>
                </form>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    bills:filterSelect(state.bills, state.filter)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);