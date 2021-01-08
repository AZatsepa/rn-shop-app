import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import { addToCart } from '../../store/actions/cart';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          price={itemData.item.price}
          title={itemData.item.title}
          onViewDetail={() => navigation.navigate('ProductDetail', {
            productId: itemData.item.id,
            productTitle: itemData.item.title,
          })}
          onAddToCart={() => dispatch(addToCart(itemData.item))}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = (navData) => (
  {
    headerTitle: 'All Products',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => navData.navigation.navigate('Cart')}
        />
      </HeaderButtons>
    ),
  }
);

ProductsOverviewScreen.propTypes = {};

export default ProductsOverviewScreen;
