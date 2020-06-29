import types from '../actions/types';

const INITIAL_STATE = {
    listName: 'Shopping list',
    products:[
        {
            name: 'Mleko',
            quantity: '2',
            units: 'litr',
            bought: false
          },
          {
            name: 'Ziemniaki',
            quantity: '5',
            units: 'kg',
            bought: false
          },
          {
            name: 'Szynka',
            quantity: '30',
            units: 'dag',
            bought: false
          }
       
    ],
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.ADD_PRODUCT: 
            return{
                ...state, products:[...state.products, action.payload]
            }
        case types.REMOVE_PRODUCT:
            const index = state.products.findIndex(product => product.name === action.payload);
            const newArrayOfProduct = [...state.products];
            newArrayOfProduct.splice(index,1)
            return {
                 ...state,products: newArrayOfProduct
            }

        case types.TOGGLE_STATUS_PRODUCT:
            return{
                ...state, products: state.products.map(product=> action.payload === product.name ? {...product, bought: !product.bought} : product )
            }
      
        default:
            return state;
    }
}

export default productsReducer;