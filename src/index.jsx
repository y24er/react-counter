import createStore from 'redux';
import handleCounter from './reducers/handle-counter'

let store = createStore(handleCounter);
