import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.product.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          onAddToCart={() => {}}
          image={itemData.item.imageUrl}
          price={itemData.item.price}
          title={itemData.item.title}
          onViewDetail={() => navigation.navigate('ProductDetail', {
            productId: itemData.item.id,
            productTitle: itemData.item.title,
          })}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
};

ProductsOverviewScreen.propTypes = {};

export default ProductsOverviewScreen;
