import React, {Component} from 'react';
// import BillItem from "../bill_item";
import {connect} from 'react-redux';
import * as actions from '../../action/action';
// import Modal from "../Modal/Modal";
import ItemForm from '../item_form';
import style from "./List.module.css";
import {List, Modal, Button, Skeleton} from 'antd';
// import BillForm from '../ModalForm/BillForm'
import CollectionsPage from '../Modal/Modal';
import CollectionCreateForm from '../ModalForm/BillForm';

class LoadMoreList extends Component {
    state = {
        loading: false,
        data: [],
        list: [],
    };

    componentDidMount() {
        console.log(this.props.initBillList);
        this.props.initBillList();
    }
    
    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.payload);
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
        const { loading } = this.state;
        const { isLoading, bills } = this.props;
        const loadMore =
            !isLoading && !loading ? (
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
        console.log(`begin to fetch, isLoading: ${isLoading}`);

        return (
            <List
                className="demo-loadmore-list"
                loading={isLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={bills}
                renderItem={item => (
                    <List.Item actions={[<CollectionsPage name={'编辑'} bill={item} collectionform={CollectionCreateForm} />]} >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <span className={'bill-item-context'}>{item.context}</span>
                            <span className={'bill-item-price'}>{item.price}</span>
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

// function showDay(bills) {
//     let result = [],
//         ITEM_ID = 0,
//         temp = {};
//     if (!Date.prototype.__filterTime)
//         return bills;
//     bills.map((current, index, array) => {
//         const dayOfBefore = new Date(current.date).__filterTime(),
//             dayOfAfter = new Date(array[index + 1].date).__filterTime();
//         if (dayOfBefore === dayOfAfter) {
//             temp.price += current.price;
//             temp.text = current.date;
//             temp.date = current.date;
//         } else {
//             result = [...result, temp];
//             temp = {
//                 id: ITEM_ID++,
//                 price: 0,
//                 tagId: 'NONE'
//             };
//         }
//     });
//     return result;
// }
//
// function filterSelect(bills, filter) {
//     switch (filter) {
//         case 'DAY':
//             Date.prototype.__filterTime = new Date().getDate;
//             break;
//         case 'WEEK':
//             Date.prototype.__filterTime = new Date().getDay;
//             break;
//         case 'MONTH':
//             Date.prototype.__filterTime = new Date().getMonth;
//             break;
//         case 'YEAR':
//             Date.prototype.__filterTime = new Date().getFullYear;
//             break;
//         default:
//             Date.prototype.__filterTime = undefined;
//             break;
//     }
//     return showDay(bills);
// }

const mapStateToProps = (state) => ({
    bills: state.bills,
    isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    initBillList: () => dispatch(actions.getAllBills()),
    receiveBillList: (payload) => dispatch(actions.receiveBillList(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreList);
