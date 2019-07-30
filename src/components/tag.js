import React from 'react';
import PropTypes from 'prop-types';
const { Component } = React;

class Tag extends Component {
    constructor(props){
        super(props);
        this.state = {text: props.text};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({text: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        const id = this.props.id,
            text = this.state.text;
        this.props.handleEdit({id: id, text: text});
        this.props.toggleVisiable();
    }
    render(){
        const props = this.props,
            editFlag = props.editFlag,
            state = this.state;
        if (!editFlag)
            return (<li >{props.text}<a href="javascript:void(0);" onClick={ () => props.toggleVisiable(props.id)} >edit</a></li>);
        else
            return (<div onSubmit={this.handleSubmit}>
                        <form>
                            <input type="text" value={state.text} onChange={e => this.handleChange(e)} />
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