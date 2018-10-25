import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Modal from './Modal';
const { Component } = React;

class ItemForm extends Component{
    constructor(props){
        super(props);
        this.state = {fields: {...this.props.item}};
        this.onChange = this.onChange.bind(this);
        this.getField = this.getField.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    onChange = key => e => {
        this.setState({
            fields: {
                ...this.state.fields,
                [key]: e.target.value,
            }
        })
    };
    handleEdit(e){
        const payload = this.state.fields,
            props = this.props;
        props.handleSubmit(payload);
        e.preventDefault();
    }
    getField = fieldName => {
        return {
            onChange: this.onChange(fieldName),
        }
    };
    render() {
        const item = this.state.fields,
            tags = this.props.tags;

        console.log(this.state.fields)
        return (
            <form onSubmit={e => this.handleEdit(e)}>
                <label id="name">名称: <input name="name" value={item.text} {...this.getField('name')}/></label>
                <label id="price">金额: <input name="price" value={item.price} {...this.getField('price')}/></label>
                <label id="tagId">标签名:
                    <select  name="tagId" {...this.getField('tagId')} >
                        {tags.map(current => <option value={current.id} key={current.id}>{current.text}</option>)}
                    </select>
                </label>
                <label htmlFor="date">时间: <input onChange={this.handleChange} name="date" type="date"/></label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

ItemForm.propTypes = {
    getField: PropTypes.func,
    handleSubmit: PropTypes.func
};
//
// class BillEdit extends Component {
//     constructor(){
//         super()
//     }
//     render(){
//         return (
//             <Modal>
//                 <ItemForm />
//                 <p>test</p>
//             </Modal>
//         )
//     }
// }
const mapStateToProps = (state) => ({
    tags: state.tags
});
const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (payload) => {
        console.log('update')
        dispatch({
            type: 'EDIT_ITEM',
            payload: {...payload}
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);