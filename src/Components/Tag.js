import React from 'react';
import PropTypes from 'prop-types';
const { Component } = React;

class Tag extends Component {
    constructor(props){
        super(props);
        this.state = {value: props.text};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        const id = this.props.id,
            value = this.state.value;
        this.props.handleEdit({id: id, text: value});
        this.props.toggleVisiable();
    }
    render(){
        const props = this.props,
                editFlag = props.editFlag;
        if (!editFlag)
            return (<li >{props.text}<a href="javascript:void(0);" onClick={ () => props.toggleVisiable(props.id)} >edit</a></li>);
        else
            return (<div onSubmit={this.handleSubmit}>
                        <form>
                            <input type="text" value={props.text} onChange={this.handleChange} />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>)
    }
}
Tag.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string
};
export default Tag;