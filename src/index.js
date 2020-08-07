import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import {createStore} from 'redux';
import reducer from "./reducers";
import CounterGroupContainer from "./containers/CounterGroupContainer";

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <CounterGroupContainer/>
    </Provider>,
    document.getElementById('root')
)
