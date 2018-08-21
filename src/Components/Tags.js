import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import {connect} from "react-redux";
const { Component } = React;

export default class Tags extends Component {
    constructor() {
        super();
    }
    render(){
        let childNode,
            props = this.props,
            tags = props.tags;

        childNode = tags.map((current) => {
            return <Tag key={current.id} {...current} handleEdit={props.handleEdit} />
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
// const mapStateToProps = (state) => ({
//     tags: state.tags
// });
// const mapDispatchToProps = (dispatch) => ({
//
// });
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Tags);
