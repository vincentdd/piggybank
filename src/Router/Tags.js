import React, { Component } from 'react';
import Tags from '../Components/Tags';
import TagModal from '../Components/TagForm';
import { Route, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';

class TagsList extends Component{
    constructor(){
        super();
    }

    toggleVisible = () => {
        const visiableNow = this.state.visiable || false;
        this.setState({visiableFlag: !visiableNow});
    }

    render(){
        let props = this.props,
            visiableFlag = props.visiableFlag,
            tags = props.tags;

        return (
            <div>
                <NavLink to={`/`}>Back</NavLink>
                <Tags tags={tags}/>
                {visiableFlag && <TagModal />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tags: state.tags,
    visiableFlag: state.visiableFlag
});

const mapDispatchToProps = (dispatch) => ({
    handleVisibleChange: (payload) => {
        dispatch({
            type: 'TOGGLE_VISIABLE_FLAG',
            ...payload
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsList);
