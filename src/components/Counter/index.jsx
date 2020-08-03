import React from 'react'; 
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={value:0}
    }
    increse=()=>{
        this.setState((prevState)=>({
            value:prevState.value+1
        }))
    }

    decrese=()=>{
        this.setState(prevState=>({
            value:prevState.value-1
        }))
    }

    haha=()=>{
        this.setState(()=>({
            value:this.state.value+8
        }))
    }
    render(){
        return <div>
            <button onClick={this.increse}>+</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.decrese}>-</button>
            <button onClick={this.haha}>haha</button>
        </div>
    }
}

export default Counter;