import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/colors';

const ProductsNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen,
  ProductDetail: ProductDetailScreen,
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: 'white',
  },
});

export default createAppContainer(ProductsNavigator);
