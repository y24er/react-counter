function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state.value + 1;
        case 'DECREMENT':
            return state.value - 1;
        default:
            return state.value;
    }
}
export default handleCounter
// let store = createStore(counter);
// store.subscribe(() =>
//     console.log(store.getState())
// );

// store.dispatch({ type: 'INCREMENT' });

// store.dispatch({ type: 'INCREMENT' });

// store.dispatch({ type: 'DECREMENT' });

import createStore from 'redux';
import handleCounter from './reducers/handle-counter'

let store = createStore(handleCounter);
