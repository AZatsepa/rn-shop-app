import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import CartItem from '../../models/CartItem';
import { ADD_ORDER } from '../actions/orders';

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
    case REMOVE_FROM_CART: {
      const currentQuantity = state.items[action.productId].quantity;
      const updatedCartItems = { ...state.items };
      const product = updatedCartItems[action.productId];
      if (currentQuantity > 1) {
        product.quantity -= 1;
        product.sum -= product.productPrice;
      } else {
        delete updatedCartItems[action.productId];
      }
      return {
        items: updatedCartItems,
        totalAmount: state.totalAmount - product.productPrice,
      };
    }
    case ADD_ORDER:
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
