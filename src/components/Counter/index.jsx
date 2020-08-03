import React from 'react';
import { connect } from 'react-redux'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0 }
    }
    //加1事件
    onIncrement() {
        this.props.Increase();
    }
    //减1事件
    onDecrement() {
        this.props.Decrease();
    }
    increse = () => {
        this.props.increase()
        this.setState((prevState) => ({
            value: prevState.value + 1
        }))
    }

    decrese = () => {
        this.setState(prevState => ({
            value: prevState.value - 1
        }))
        this.props.decrease()
    }

    componentWillReceiveProps = (nextProps) => {
        console.log("receive")
        // this.setState({ value: 0 })
    }

    render() {
        return <div>
            <button onClick={this.onIncrement}>+</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.decrese}>-</button>
        </div>
    }
}
function mapStateToProps(state) {
    return state;
};

function mapDispatchToProps(dispatch) {
    return {
        Increase: function () {
            return dispatch({ type: "COUNTER_INCRE" })
        },
        Decrease: function () {
            return dispatch({ type: "COUNTER_DECRE" })
        }
    }
};

const CounterPackage = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter
