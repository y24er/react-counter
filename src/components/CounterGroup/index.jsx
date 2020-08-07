import React from "react"
import Counter from '../Counter';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '2'
        }
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        this.props.init()
    }

    render() {
        return (
            <div>
                Number of counters:<input onChange={this.handleChange} defaultValue={this.state.inputValue}/><br/>
                total:{this.props.total}
                {new Array(Number(this.state.inputValue)).fill(0).map((value, index) =>
                    <Counter key={index} increase={this.props.increase} decrease={this.props.decrease}
                             size={this.state.inputValue}/>)
                }
            </div>
        )
    }
}

export default CounterGroup