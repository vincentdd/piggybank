import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Single extends Component{
    constructor(){
        super();
    }
    handleClick(e){
        // let props = this.props,
        //     input  = this.input;
        e.preventDefault();
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
                <label htmlFor="name">名称:</label>
                <input name="name" type="text"/>
                <label htmlFor="price">价格:</label>
                <input name="name" type="text"/>
                <label htmlFor="date">时间:</label>
                <input name="date" type="date"/>
                <input type="submit" value="提交" />
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