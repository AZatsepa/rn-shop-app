import { ADD_TO_CART } from '../actions/cart';
import CartItem from '../../models/CartItem';

const initialState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      const existsCartItem = state.items[addedProduct.id];
      let managedItem;
      if (existsCartItem) {
        managedItem = new CartItem(
          existsCartItem.quantity + 1,
          productPrice,
          productTitle,
          existsCartItem.sum + productPrice,
        );
      } else {
        managedItem = new CartItem(1, productPrice, productTitle, productPrice);
      }
      return {
        items: { ...state.items, [addedProduct.id]: managedItem },
        totalAmount: state.totalAmount + productPrice,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
