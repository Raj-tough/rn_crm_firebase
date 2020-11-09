import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../ProductScreen';

const ProductStack = createStackNavigator();
const themeColour = '#800080';

const ProductStackScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <ProductStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColour,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ProductStack.Screen
        name="Products"
        component={ProductScreen}
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
                <Text style={styles.headerText}>Products</Text>
                <View style={styles.searchBarContainer}>
                  <Searchbar
                    style={{searmarginLeft: 15, height: 40}}
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
    </ProductStack.Navigator>
  );
};

export default ProductStackScreen;
const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: themeColour,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchBarContainer: {
    width: '60%',
    marginLeft: 30,
    height: 30,
    justifyContent: 'center',
  },
});
