import React from 'react';
import {
  ScrollView, View, Text, Image, Button, StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/colors';
import { addToCart } from '../../store/actions/cart';

const styles = StyleSheet.create({
  actions: {
    alignItems: 'center',
    marginVertical: 10,
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  image: {
    height: 300,
    width: '100%',
  },
  price: {
    color: Colors.gray,
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
});

const ProductDetailScreen = ({ navigation }) => {
  const productId = navigation.getParam('productId');
  const selectedProduct = useSelector(
    (state) => state.product.availableProducts.find((prod) => prod.id === productId),
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => dispatch(addToCart(selectedProduct))}
        />
      </View>
      <Text style={styles.price}>
        $
        {selectedProduct.price.toFixed(2)}
      </Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => (
  {
    headerTitle: navData.navigation.getParam('productTitle'),
  }
);

export default ProductDetailScreen;
