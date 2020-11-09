import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const StockStack = createStackNavigator();
const StackHeaderColor = '#cd853f';

const StockScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Stocks Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StockStackScreen = ({navigation}) => (
  <StockStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: StackHeaderColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <StockStack.Screen
      name="Stocks"
      component={StockScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={StackHeaderColor}
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </StockStack.Navigator>
);

export default StockStackScreen;
