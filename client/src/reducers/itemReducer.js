// where the actual state goes and check our actions like get item and add item
import uuid from 'uuid';
// bring types in 
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types'

// moving static data from component to reducer
const initialState = {
    items: [
        { id: uuid(), name: 'Eggs'},
        { id: uuid(), name: 'Milk'},
        { id: uuid(), name: 'Steak'},
        { id: uuid(), name: 'Orginize fridge'}
    ]
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
        return {
            ...state
        };
        case DELETE_ITEM: 
        return{
            ...state,
            items: state.items.filter(item => item.id !== action.payload)
        }
        default:
        return state;
    }
}







