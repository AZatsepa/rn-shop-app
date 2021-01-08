import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/colors';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerTintColor: 'white',
};

const navigationOptions = {
  drawerIcon: (drawerConfig) => (
    <Ionicons
      name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
      size={23}
      color={drawerConfig.tintColor}
    />
  ),
};

const ProductsNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen,
  ProductDetail: ProductDetailScreen,
  Cart: CartScreen,
},
{
  navigationOptions,
  defaultNavigationOptions,
});

const OrdersNavigator = createStackNavigator({
  Orders: OrdersScreen,
}, {
  navigationOptions,
  defaultNavigationOptions,
});

const ShopNavigator = createDrawerNavigator({
  Products: ProductsNavigator,
  Orders: OrdersNavigator,
},
{
  contentOptions: {
    activeTintColor: Colors.primary,
  },
});

export default createAppContainer(ShopNavigator);
