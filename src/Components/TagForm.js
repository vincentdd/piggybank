import React from 'react';
// import PropTypes from 'prop-types';
// import {connect} from "react-redux";
const { Component } = React;

const TagForm = () => {

    return (
        <form>
            <label htmlFor="text"><input type="text" name="text"/></label>
            <input type="submit" value={"提交"}/>
        </form>
    )
}