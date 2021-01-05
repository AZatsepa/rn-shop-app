import React from 'react';
import { string, number, func } from 'prop-types';
import {
  View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform,
} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '25%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '60%',
    overflow: 'hidden',
    width: '100%',
  },
  price: {
    color: Colors.gray,
    fontSize: 14,
  },
  product: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 5,
    height: 300,
    margin: 20,
    shadowColor: Colors.black, // iOS only
    shadowOffset: { // iOS only
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.26, // iOS only
    shadowRadius: 8, // iOS only
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

const ProductItem = ({
  title, price, image, onViewDetail, onAddToCart,
}) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableComponent onPress={onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>
                $
                {price.toFixed(2)}
              </Text>
            </View>
            <View style={styles.actions}>
              <Button color={Colors.primary} title="View Details" onPress={onViewDetail} />
              <Button color={Colors.primary} title="To Cart" onPress={onAddToCart} />
            </View>
          </View>
        </TouchableComponent>
      </View>
    </View>
  );
};

ProductItem.propTypes = {
  title: string.isRequired,
  price: number.isRequired,
  image: string.isRequired,
  onViewDetail: func.isRequired,
  onAddToCart: func.isRequired,
};

export default ProductItem;
