import React from 'react';
import {StatusBar} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import DashboardScreen from './DashboardScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './BillScreen';
import CustomerStackScreen from './StackScreens/CustomerStackScreen';
import ProductStackScreen from './StackScreens/ProductStackScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Dashboard" activeColor="#fff">
    <Tab.Screen
      name="Dashboard"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon name="grid-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="receipt-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Products"
      component={ProductStackScreen}
      options={{
        tabBarLabel: 'Product',
        tabBarColor: 'purple',
        tabBarIcon: ({color}) => (
          <Icon name="cube-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Customer"
      component={CustomerStackScreen}
      options={{
        tabBarLabel: 'Customers',
        tabBarColor: '#15d69c',
        tabBarIcon: ({color}) => (
          <Icon name="people-outline" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        title: 'Dashboard',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
