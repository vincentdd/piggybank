import React from 'react';
import PropTypes from 'prop-types';
const { Component } = React;

class Tag extends Component {
    constructor(){
        super();
        this.state = {edit: false, value: ""};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleToggle(){
        const edit = this.state.edit;
        this.setState({edit: !edit});
    }
    handleChange(e) {
        this.setState({value: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.handleEdit({id: this.props.id, text: this.state.value});
        this.handleToggle();
    }
    render(){
        const props = this.props,
                editFlag = this.state.edit;
        if (!editFlag)
            return (<li>{props.text}<a href="javascript:void(0);" onClick={this.handleToggle} >edit</a></li>);
        else
            return (<div onSubmit={this.handleSubmit}>
                        <form>
                            <input type="text" defaultValue={props.text} onChange={this.handleChange} />
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