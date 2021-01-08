/* eslint-disable global-require */
import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
// eslint-disable-next-line no-unused-vars
import { composeWithDevTools } from 'redux-devtools-extension';

import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const fetchFonts = () => (
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
);

const store = createStore(rootReducer);

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={console.error}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
