import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../styles/single.less';

class Single extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleClick(e){
        e.preventDefault();
        let props = this.props,
            date = this.state.date;
        this.state.date = date instanceof Date
            ? date
            : new Date();
        props.handleSubmit({
            ...this.state
        });
    }
    render(){
        return(
            <form>
                <label htmlFor="text">名称:<input onChange={this.handleChange} className={classNames()} name="text" type="text"/></label>
                <label htmlFor="price">价格:<input onChange={this.handleChange} name="price" type="text"/></label>
                <label htmlFor="tagId">时间:
                    <select onChange={this.handleChange} name="tagId">
                        <option value="value1">Value 1</option>
                        <option value="value2" selected>Value 2</option>
                        <option value="value3">Value 3</option>
                    </select>
                </label>
                <label htmlFor="date">时间:<input onChange={this.handleChange} name="date" type="date"/></label>
                <input type="submit" value="提交" onClick={this.handleClick} />
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (payload) => {
        console.log('submit text')
        dispatch({
            type: 'ADD_ITEM',
            ...payload
        })
    }
});
const mapStateToProps = (state) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Single);