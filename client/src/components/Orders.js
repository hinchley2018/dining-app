import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import { Line, } from 'rc-progress';


const renderCancelButton = (completed) => {
    if (completed === 100){
        return <p>done!</p>
    }
    if (completed > 50){
        return null
    }
    else {
        return <button >Cancel</button>
    }
}
class Order extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: 0,
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(5), 1000);
    }

    progress(completed) {
        if (completed > 100) {
            this.setState({completed: 100});
        } else {
            this.setState({completed});
            const diff = Math.random() * 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
    }

    render(){
        let {order} = this.props;
        return (
            <div style={{width: 500, borderStyle: 'solid', borderColor: 'black', padding: '20'}}>
                Order # {order.id}
                <br/>
                <Line percent={this.state.completed} strokeWidth="2" strokeColor={this.state.completed > 50 ? 'red' : 'green'} />
                Items: {order.items.map(item => <p>{item.title}</p>)}
                {renderCancelButton(this.state.completed)}
            </div>
        )
    }

}

const Orders =({orders}) => {
    return (
        <div style={{marginLeft:'500', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding:'20'}}>
            {orders.map(order => <Order order={order}/>)}
        </div>
    )
};

function mapStateToProps(state) {
    return {
        orders: state.orders.orders
    };
}

export default connect(mapStateToProps,{})(Orders);