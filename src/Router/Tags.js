import React, { Component } from 'react';
import Tags from '../Components/Tags';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';

export default class TagsList extends Component{
    constructor(){
        super();
    }
    //
    // toggleVisible = () => {
    //     const visiableNow = this.state.visiable || false;
    //     this.setState({visiableFlag: !visiableNow});
    // }

    render(){
        return (
            <div>
                <NavLink to={`/`}>Back</NavLink>
                <Tags />
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     tags: state.tags,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//     handleEdit: (payload) => {
//         dispatch({
//             type: 'EDIT_TAG',
//             ...payload
//         })
//     }
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(TagsList);
