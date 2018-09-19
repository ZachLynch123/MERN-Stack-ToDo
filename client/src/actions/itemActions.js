// where we make the request to the backend
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from './types';

// this return is going to the itemReducer and
// going into the export function's switch statement' action.type
//
export const getItems = () => {
    return {
        type: GET_ITEMS
        // if sending use something like 
        // payload: res.dataFromServer
    };
}

