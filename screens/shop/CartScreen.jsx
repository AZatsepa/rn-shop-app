import React from 'react';
import {
  View, Text, FlatList, Button, StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/colors';
import CartItem from '../../components/shop/CartItem';
import { removeFromCart } from '../../store/actions/cart';
import { addOrder } from '../../store/actions/orders';

const styles = StyleSheet.create({
  amount: {
    color: Colors.primary,
  },
  screen: {
    margin: 20,
  },
  summary: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
    shadowColor: Colors.black, // iOS only
    shadowOffset: { // iOS only
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.26, // iOS only
    shadowRadius: 8, // iOS only
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});

const CartScreen = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    Object.keys(state.cart.items).forEach((key) => {
      const item = state.cart.items[key];
      transformedCartItems.push({
        productId: key,
        productTitle: item.productTitle,
        productPrice: item.productPrice,
        quantity: item.quantity,
        sum: item.sum,
      });
    });
    return transformedCartItems.sort((a, b) => (a.quantity > b.quantity ? -1 : 1));
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:&nbsp;
          <Text style={styles.amount}>
            $
            {cartTotalAmount.toFixed(2)}
          </Text>
        </Text>
        <Button
          title="Order Now"
          onPress={() => dispatch(addOrder(cartItems, cartTotalAmount))}
          color={Colors.accent}
          disabled={cartItems.length === 0}
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            productTitle={itemData.item.productTitle}
            sum={itemData.item.sum}
            onRemove={() => dispatch(removeFromCart(itemData.item.productId))}
            deletable
          />
        )}
      />
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'Your Cart',
};

export default CartScreen;
