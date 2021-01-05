import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/colors';

const ProductsNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen,
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
