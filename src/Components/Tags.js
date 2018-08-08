import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import {connect} from "react-redux";
const { Component } = React;

class Tags extends Component {
    constructor() {
        super();
    }
    render(){
        let childNode,
            tags = this.props.tags;

        childNode = tags.map((current) => {
            return <Tag {...current} />
        });
        return (
            <ul>
                {childNode}
            </ul>
        )
    }
}
Tags.propTypes = {
    tags: PropTypes.object
};
const mapStateToProps = (state) => ({
    tags: state.tags
});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tags);
