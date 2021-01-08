import React from 'react';
import { FlatList, Button, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import { deleteProduct } from '../../store/actions/products';
import Colors from '../../constants/colors';

const UserProductsScreen = () => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={userProducts}
      renderItem={(itemData) => (
        <ProductItem
          onAddToCart={() => {}}
          image={itemData.item.imageUrl}
          price={itemData.item.price}
          title={itemData.item.title}
          onSelect={() => {}}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {}}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => dispatch(deleteProduct(itemData.item.id))}
          />
        </ProductItem>
      )}
    />
  );
};

UserProductsScreen.navigationOptions = (navData) => (
  {
    headerTitle: 'Your Products',
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

export default UserProductsScreen;
