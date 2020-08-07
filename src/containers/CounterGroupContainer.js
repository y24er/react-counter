import {connect} from "react-redux";
import CounterGroup from "../components/CounterGroup";

const mapStateToProps = state => {
    return {total: state};
};

const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch({type: "INCREMENT"})
    },
    decrease: () => {
        dispatch({type: "DECREMENT"})
    },
    init: () => {
        dispatch({type: "INIT"})
    }
});

const CounterGroupContainer = connect(mapStateToProps, mapDispatchToProps)(CounterGroup);
export default CounterGroupContainer