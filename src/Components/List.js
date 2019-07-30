import React, {Component} from 'react';
import BillItem from "./bill_item";
import {connect} from 'react-redux';
import Modal from "./modal";
import ItemForm from './item_form';
import "./List.css";
import List from 'antd';

class LoadMoreList extends Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };

    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                    // In real scene, you can using public method of react-virtualized:
                    // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };

    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;

        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                    <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <div>content</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        );
    }
}


// class List extends Component {
//     constructor() {
//         super();
//         this.state = {
//             modalIsOpen: false,
//             selected: null
//         };
//         this.openModal = this.openModal.bind(this);
//         this.closeModal = this.closeModal.bind(this);
//     }
//     componentWillUnmount() {
//
//     }
//     openModal(obj) {
//         console.log(obj);
//         this.setState({
//             modalIsOpen: true,
//             selected: obj
//         });
//     }
//     closeModal() {
//         this.setState({modalIsOpen: false});
//     }
//     render(){
//         const state = this.state,
//             dom = this.props.bills.map((current) =>
//                 <BillItem key={current.id} bill={current} handleOpenModal={() => (this.openModal(current))} closeModal={this.closeModal} />
//         );
//         return (
//             <React.Fragment>
//                 <ul className="bill-list">
//                     {dom}
//                 </ul>
//                 <Modal isOpen={state.modalIsOpen} >
//                     <ItemForm item={state.selected} />
//                 </Modal>
//             </React.Fragment>
//         )
//     }
// }

function showDay(bills) {
    let result = [],
        ITEM_ID = 0,
        temp = {};
    if (!Date.prototype.__filterTime)
        return bills;
    bills.map((current, index, array) => {
        const dayOfBefore = new Date(current.date).__filterTime(),
            dayOfAfter = new Date(array[index + 1].date).__filterTime();
        if (dayOfBefore === dayOfAfter) {
            temp.price += current.price;
            temp.text = current.date;
            temp.date = current.date;
        } else {
            [...result, temp];
            temp = {
                id: ITEM_ID++,
                price: 0,
                tagId: 'NONE'
            };
        }
    });
    return result;
}

function filterSelect(bills, filter) {
    switch (filter) {
        case 'DAY':
            Date.prototype.__filterTime = new Date().getDate;
            break;
        case 'WEEK':
            Date.prototype.__filterTime = new Date().getDay;
            break;
        case 'MONTH':
            Date.prototype.__filterTime = new Date().getMonth;
            break;
        case 'YEAR':
            Date.prototype.__filterTime = new Date().getFullYear;
            break;
        default:
            Date.prototype.__filterTime = undefined;
            break;
    }
    return showDay(bills);
}

const mapStateToProps = (state) => ({
    bills: filterSelect(state.bills, state.filter)
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreList);
