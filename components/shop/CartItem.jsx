import React from 'react';
import { string, number, func } from 'prop-types';
import {
  View, Text, StyleSheet, TouchableOpacity, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  cartItem: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 10,
  },
  deleteButton: {
    marginLeft: 20,
  },
  itemData: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  quantity: {
    color: Colors.gray,
    fontFamily: 'open-sans',
    fontSize: 16,
  },
});

const CartItem = ({
  quantity, productTitle, sum, onRemove,
}) => (
  <View style={styles.cartItem}>
    <Text style={styles.itemData}>
      <Text style={styles.quantity}>
        {quantity}
        &nbsp;
      </Text>
      <Text style={styles.mainText}>{productTitle}</Text>
    </Text>
    <View style={styles.itemData}>
      <Text style={styles.mainText}>
        $&nbsp;
        {sum.toFixed(2)}
      </Text>
      <TouchableOpacity
        onPress={onRemove}
        style={styles.deleteButton}
      >
        <Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} size={23} color={Colors.red} />
      </TouchableOpacity>
    </View>
  </View>
);

CartItem.propTypes = {
  quantity: number.isRequired,
  productTitle: string.isRequired,
  sum: number.isRequired,
  onRemove: func.isRequired,
};

export default CartItem;
