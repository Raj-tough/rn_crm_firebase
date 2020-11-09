import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
// import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import DrawerContent from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import StockStackScreen from './screens/StockScreen';
import BillStackScreen from './screens/BillScreen';
import CustomerStackScreen from './screens/StackScreens/CustomerStackScreen';
import RootStackScreen from './screens/RootStackScreen';
import ProductStackScreen from './screens/StackScreens/ProductStackScreen';
import {CustomDarkTheme, CustomDefaultTheme} from './shared/theme/theme';

const Drawer = createDrawerNavigator();

const App = (props) => {
  const {isDarkTheme} = props;
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const {isAuthenticated, isLoggingIn, isVerifying} = props;

  if (isLoggingIn) {
    console.log('working loader');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginVertical: 30}}>
          Great Things will take time to happen...!!!
        </Text>
        <ActivityIndicator
          animating={true}
          color={Colors.red800}
          size="large"
        />
      </View>
    );
  }

  if (isVerifying) {
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'lightgreen',
        }}>
        <View
          style={{
            height: '40%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, color: 'purple', fontWeight: 'bold'}}>
            SRK RENTALS
          </Text>
          <View style={{width: '80%', marginTop: 40}}>
            <Text style={{fontSize: 20}}>T. Sundara rajan - 9790650531</Text>
            <Text style={{fontSize: 20}}>S. Raja kumaran - 8838017661</Text>
          </View>
        </View>
        <View
          style={{
            height: '60%',
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator animating={true} color="purple" size={150} />
        </View>
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        
        {isAuthenticated ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="BillScreen" component={BillStackScreen} />
            <Drawer.Screen
              name="ProductScreen"
              component={ProductStackScreen}
            />
            <Drawer.Screen name="StockScreen" component={StockStackScreen} />
            <Drawer.Screen
              name="CustomerScreen"
              component={CustomerStackScreen}
            />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};
function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    isVerifying: state.authReducer.isVerifying,
    isLoggingIn: state.authReducer.isLoggingIn,
    isDarkTheme: state.authReducer.isDarkTheme,
  };
}
export default connect(mapStateToProps)(App);
