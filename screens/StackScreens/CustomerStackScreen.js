import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomerScreen from '../CustomerScreen';

const CustomerStack = createStackNavigator();
const themeColour = '#15d69c';

const CustomerStackScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <CustomerStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColour,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <CustomerStack.Screen
        name="Customers"
        component={CustomerScreen}
        options={{
          header: ({navigation}) => {
            return (
              <View style={styles.headerContainer}>
                <View style={{width: 50}}>
                  <Icon.Button
                    style={{width: 50}}
                    name="ios-menu"
                    size={25}
                    backgroundColor={themeColour}
                    onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <Text style={styles.headerText}>Customers</Text>
                <View style={styles.searchBarContainer}>
                  <Searchbar
                    style={{height: 40}}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                  />
                </View>
              </View>
            );
          },
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={themeColour}
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </CustomerStack.Navigator>
  );
};

export default CustomerStackScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: themeColour,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    // flex: 1.2,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchBarContainer: {
    // flex: 3,
    width: '55%',
    marginLeft: 30,
    height: 30,
    justifyContent: 'center',
  },
});
