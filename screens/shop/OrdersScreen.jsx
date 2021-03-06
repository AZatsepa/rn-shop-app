import React from 'react';
import {
  View, FlatList, Platform,
} from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={(itemData) => (
          <OrderItem
            amount={itemData.item.totalAmount}
            date={itemData.item.readableDate}
            items={itemData.item.items}
          />
        )}
      />
    </View>
  );
};

OrdersScreen.navigationOptions = (navData) => (
  {
    headerTitle: 'Your Orders',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  }
);

export default OrdersScreen;
