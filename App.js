

import { StyleSheet, Text, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import Home from './src/screens/Home';
import { store } from './redux/store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Cart from './src/screens/Cart';
import Welcome from './src/screens/Welcome';
import SingleCategory from './src/components/SingleCategory';
import Details from './src/screens/Details';
import SingleItem from './src/components/SingleItem';
import PlaceOrder from './src/screens/PlaceOrder';
import Homes from './src/screens/LogOut';
import { getAuth } from 'firebase/auth';
import LogOut from './src/screens/LogOut';
import DrawerNav from './src/navigation/DrawerNav';

import { Provider as PaperProvider } from 'react-native-paper';
import HomeTab from './src/navigation/HomeTab';


export default function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  return (

    <StoreProvider store={store} >

      <NavigationContainer>
        <DrawerNav />
        {/* <HomeTab /> */}
      </NavigationContainer>

    </StoreProvider >

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
