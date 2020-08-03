import React from "react"
import Counter from '../Counter';
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // number:this.props.number
            inputValue: '2',
            total:0
        }
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleIncreate=()=>{
        this.setState((prevState)=>({
            total:prevState.total+1
        }))
    }

    handleDecrease=()=>{
        this.setState((prevState)=>({
            total:prevState.total-1
        }))
    }



    render() {
        return (
            <div>
                Number of counters:<input onChange={this.handleChange.bind(this)} defaultValue={this.state.inputValue} /><br />
                total:{this.state.total}
                {new Array(Number(this.state.inputValue)).fill().map((value, index) => <Counter key={index} increase={this.handleIncreate} decrease={this.handleDecrease}/>)}
            </div>
        )
    }
}

export default CounterGroup