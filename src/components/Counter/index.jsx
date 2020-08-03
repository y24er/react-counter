import React from 'react'; 
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={value:0}
    }
    increse=()=>{
        this.props.increase()
        this.setState((prevState)=>({
            value:prevState.value+1
        }))
    }

    decrese=()=>{
        this.setState(prevState=>({
            value:prevState.value-1
        }))
        this.props.decrease()
    }

    render(){
        return <div>
            <button onClick={this.increse}>+</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.decrese}>-</button>
        </div>
    }
}

export default Counter;