import types from './types';

export const addProduct = product =>({ type : types.ADD_PRODUCT, payload:product});

export const removeProduct = productName => ({ type : types.REMOVE_PRODUCT, payload:productName});

export const toggleStatusProduct = productName =>({type : types.TOGGLE_STATUS_PRODUCT, payload:productName})
