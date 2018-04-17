import { combineReducers } from 'redux';
import ordersReducer from './orders';

const rootReducer = combineReducers({
    orders: ordersReducer
});

export default rootReducer;