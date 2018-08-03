import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../styles/single.less';

export default class Single extends Component{
    constructor(){
        super();
    }
    handleClick(e){
        // let props = this.props,
        //     input  = this.input;
        e.preventDefault();
        console.log(e.target.value)
        // const temp = input.value,
        //     flag = props.toggleFlag;
        // props.getInput(temp, flag);
        // input.value = '';
        // props.history.goBack();
    }
    render(){
        let props = this.props;
        return(
            <form>
                <label htmlFor="name">名称:<input className={classNames()} name="name" type="text"/></label>
                <label htmlFor="price">价格:<input name="name" type="text"/></label>
                <label htmlFor="date">时间:<input name="date" type="date"/></label>
                <input type="submit" value="提交" onClick={e => this.handleClick(e)} />
            </form>
        )

    }
}

// onClick={(e) => this.handleSubmit(e)}
// const mapDispatchToProps = (dispatch) => ({
//     handleSubmit: (e) => {
//         e.preventDefault();
//         console.log('submit text')
//     }
// });
//
// const mapStateToProps = (state) => ({
//
// })
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Single);