import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import {connect} from "react-redux";
const { Component } = React;

class Tags extends Component {
    constructor(props) {
        super(props);
        const length = this.props.tags.length;
        this.state = {editArr: Array(length).fill(false ,0)};
        this.handleShowInput = this.handleShowInput.bind(this);
    }
    handleShowInput(){
        const length = this.props.tags.length,
            editArr = Array(length).fill(false ,0);
        this.setState({editArr: [...editArr]});
    }
    render(){
        let childNode,
            props = this.props,
            tags = props.tags,
            editArr = this.state.editArr;

        childNode = tags.map((current) => {
            return <Tag key={current.id} {...current} handleEdit={props.handleEdit} handleShowInput={this.handleShowInput} editFlag={editArr[current.id]} />
        });
        return (
            <ul>
                {childNode}
            </ul>
        )
    }
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    tags: state.tags,
});

const mapDispatchToProps = (dispatch) => ({
    handleEdit: (payload) => {
        dispatch({
            type: 'EDIT_TAG',
            ...payload
        })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tags);
