import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {value: 0}
    }

    increase = () => {
        this.props.increase()
        this.setState((prevState) => ({
            value: prevState.value + 1
        }))
    }

    decrease = () => {
        this.props.decrease()
        this.setState(prevState => ({
            value: prevState.value - 1
        }))
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.size !== nextProps.size) {
            this.setState({value: 0})
        }
    }


    render() {
        return <div>
            <button onClick={this.increase}>+</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.decrease}>-</button>
        </div>
    }
}

export default Counter
