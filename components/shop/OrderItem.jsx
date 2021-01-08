import React, { useState } from 'react';
import {
  string, number, arrayOf, shape,
} from 'prop-types';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';

import CartItem from './CartItem';
import Colors from '../../constants/colors';
import { removeFromCart } from '../../store/actions/cart';

const styles = StyleSheet.create({
  date: {
    color: Colors.gray,
    fontFamily: 'open-sans',
    fontSize: 16,
  },
  detailItems: {
    width: '100%',
  },
  orderItem: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 5,
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
  summary: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalAmount: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
});

const OrderItem = ({ amount, date, items }) => {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>
          $&nbsp;
          {amount.toFixed(2)}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={`${showDetails ? 'Hide' : 'Show'} Details`}
        onPress={() => setShowDetails((prevState) => !prevState)}
      />
      {showDetails
      && (
      <View style={styles.detailItems}>
        {items.map((cartItem) => (
          <CartItem
            key={cartItem.productTitle}
            quantity={cartItem.quantity}
            productTitle={cartItem.productTitle}
            sum={cartItem.sum}
            onRemove={() => dispatch(removeFromCart(cartItem.productId))}
          />
        ))}
      </View>
      )}
    </View>
  );
};

OrderItem.propTypes = {
  amount: number.isRequired,
  date: string.isRequired,
  items: arrayOf(
    shape({
      sum: number.isRequired,
      quantity: number.isRequired,
      productTitle: string.isRequired,
    }),
  ).isRequired,
};

export default OrderItem;
