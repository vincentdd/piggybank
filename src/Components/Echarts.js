import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import PropTypes from 'prop-types';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.node = React.createRef();
    }
    componentDidMount() {
        debugger;
        let doughuntChart = echarts.init(this.node);
        doughuntChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
    render() {
        return(
            <div ref={this.node} style={{width: "100%", height: "200px"}} />
        )
    }
}