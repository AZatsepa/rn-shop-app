import React from 'react';
import { FlatList, Button, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import { addToCart } from '../../store/actions/cart';
import Colors from '../../constants/colors';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  const onSelectItem = (id, title) => navigation.navigate('ProductDetail', {
    productId: id,
    productTitle: title,
  });

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductItem
          image={item.imageUrl}
          price={item.price}
          title={item.title}
          onSelect={() => onSelectItem(item.id, item.title)}
        >
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() => onSelectItem(item.id, item.title)}
          />
          <Button
            color={Colors.primary}
            title="To Cart"
            onPress={() => dispatch(addToCart(item))}
          />
        </ProductItem>
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
