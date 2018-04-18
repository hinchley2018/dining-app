import axios from 'axios';
import {API_URL} from '../config';

// Types
const GET_MENU_ITEMS = 'get_menu_items',
    ADD_ITEM = 'add_item',
    REMOVE_ITEM = 'remove_item',
    CLEAR_CART = 'clear_cart',
    CONFIRM_ORDER = 'confirm_order',
    CANCEL_ORDER = 'cancel_order',
    UPDATE_ORDER = 'update_order'
;

//Initial State
const INITIAL_STATE = {menuItems: [], cart: [], orders: []};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case GET_MENU_ITEMS:
            return {...state, menuItems: action.items};
        case ADD_ITEM:
            return {...state, cart: [...state.cart, action.item]};
        case REMOVE_ITEM:
            return {...state,
                cart: [
                    ...state.cart.slice(0, action.item),
                    ...state.cart.slice(action.item + 1)
                ]
            ,};
        case CLEAR_CART:
            return {...state, cart: []};
        case CONFIRM_ORDER:
            return {...state,
                orders: [...state.orders, {id: action.orderID, items: state.cart}],
                cart: []
            };
        case CANCEL_ORDER:
            return {...state, orders: action.orders};
        case UPDATE_ORDER:
            return {...state, orders: action.order};
        default: return state;
    }
}

// Action Creators
export function getItems() {
    return function(dispatch){
        //TODO: remove this once I get api
        const items = [
            {
                title: 'Chicken Sandwich',
                price: 6.75
            },
            {
                title: 'Spicy Deluxe',
                price: 3.00
            },
            {
                title: '8 Ct. Chicken Nuggets',
                price: 2.75
            }
        ]
        dispatch({ type: GET_MENU_ITEMS, items: items});
        axios.get(`${API_URL}/items`)
            .then(response => {

            })

    };
}

export function addItem(item) {
    return function(dispatch){
        dispatch({ type: ADD_ITEM, item: item});
    };
}

export function removeItem(itemId) {
    return function(dispatch){
        dispatch({ type: REMOVE_ITEM, item: itemId});
    };
}
export function clearCart(){
    return function(dispatch){
        dispatch({type: CLEAR_CART})
    }
}
export function confirmOrder(cartItems) {
    return function(dispatch){
        axios.post(`${API_URL}/confirm`,{cartItems})
            .then(response => {
                dispatch({ type: CONFIRM_ORDER, orderID: response.data});
            })

    };
}
export function cancelOrder(orderID) {
    return function(dispatch){
        axios.post(`${API_URL}/cancel`,{orderID})
            .then(response => {
                dispatch({ type: CANCEL_ORDER, orders: response.data});
            })

    };
}

export function updateOrder() {
    return function(dispatch){
        axios.get(`${API_URL}/update`)
            .then(response => {
                dispatch({ type: UPDATE_ORDER, items: response.data});
            })

    };
}