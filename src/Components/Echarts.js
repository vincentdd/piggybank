import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import PropTypes from 'prop-types';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.chart = React.createRef();
        this.initChart = this.initChart.bind(this);
    }
    componentDidMount() {
        debugger;
        this.initChart();
    }
    initChart(){
        const {data} = this.props;
        let myChart = echarts.init(this.chart.current);
        let options = this.setPieOption(data)
        myChart.setOption(options)
    }
    render() {
        return(
            <div ref={this.chart} style={{width: "100%", height: "200px"}} />
        )
    }
}