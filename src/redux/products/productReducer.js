import { FETCH_PRODUCTS_REMOVE, FETCH_PRODUCTS_SELECT, FETCH_PRODUCTS_SET } from "./productTypes";

const initialState = {
    products: []
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SET: return {
            ...state,
            products: action.payload
        }
        default: return state
    }
};

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SELECT: return {
            ...state,
            ...action.payload
        }
        case FETCH_PRODUCTS_REMOVE: return {

        }
        default: return state;
    }
}