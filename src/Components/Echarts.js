import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

Number.isNaN = Number.isNaN || function(value) {
    return typeof value === "number" && isNaN(value);
}

class Chart extends Component {
    constructor(props) {
        super(props);
        this.node = React.createRef();
        this.init = this.init.bind(this);
        this.mapBillsToObj = this.mapBillsToObj.bind(this);
        this.add = this.add.bind(this);
        this.isNumber = this.isNumber.bind(this);
        this.mapObjToChart = this.mapObjToChart.bind(this);
    }
    mapBillsToObj(){
        let reducer;

        reducer = this.props.bills.reduce((accumulator,currentValue) => {
            const key = currentValue.tagName;
            accumulator[key] = this.add(accumulator[key], currentValue.value);
            return accumulator;
        }, {});

        return this.mapObjToChart(reducer);
    }
    mapObjToChart(obj){
        const result = Object.keys(obj).reduce((accumulator,currentValue) => {
            accumulator.push({name: currentValue, value: obj[currentValue]});
            return accumulator;
        },[]);

        return result;
    }
    add(arg1, arg2){
        arg1 = this.isNumber(arg1);
        arg2 = this.isNumber(arg2);
        const num1Digits = (arg1.toString().split('.')[1] || '').length;
        const num2Digits = (arg2.toString().split('.')[1] || '').length;
        const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));

        return (arg1 * baseNum + arg2 * baseNum) / baseNum;
    }
    isNumber(num){
        let temp = parseInt(num, 10),
            result;
        result = Number.isNaN(temp)
            ? 0
            : temp;

        return result
    }
    init(){
        let doughuntChart = echarts.init(this.node.current),
            classes;

        classes = this.mapBillsToObj();
        doughuntChart.setOption({
            title: {
                text: 'test'
            },
            tooltip: {},
            series: [{
                name: '详情',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    }
                },
                data: [...classes]
            }]
        });
    }
    componentDidMount() {
        this.init()
    }
    render() {
        return(
            <div ref={this.node} style={{width: "100%", height: "200px"}} />
        )
    }
}

function filterBills(bills, tags) {
    let result;

    result = bills.map( current => {
        const index = current.tagId;
        const temp = filterTags(tags, index);
        return Object.assign({},{name: current.text, value: current.price, tagName: temp.text})
    });

    return result;
}

function filterTags(tags, id) {
    return tags.find( current => {
        if(current.id === id)
            return current;
    });
}
const mapStateToProps = (state) => ({
    bills: filterBills(state.bills, state.tags)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
