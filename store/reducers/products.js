import PRODUCTS from '../../data/dummy-data';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.id === 'u1'),
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
