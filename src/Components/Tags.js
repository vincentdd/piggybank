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
            tags = this.props.tags;

        childNode = tags.map((current) => {
            return <Tag key={current.id} {...current}/>
        });
        return (
            <ul>
                {childNode}
            </ul>
        )
    }
}
Tags.propTypes = {
    tags: PropTypes.array
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
