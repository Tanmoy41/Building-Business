import { FETCH_PRODUCTS_REMOVE, FETCH_PRODUCTS_SELECT, FETCH_PRODUCTS_SET } from "./productTypes"

export const fetchProductsSet = (products) => {
    return {
        type: FETCH_PRODUCTS_SET,
        payload: products
    }
}

export const fetchProductsSelect = (product) => {
    return {
        type: FETCH_PRODUCTS_SELECT,
        payload: product
    }
}

export const fetchProductsRemove = () => {
    return {
        type: FETCH_PRODUCTS_REMOVE
    }
}