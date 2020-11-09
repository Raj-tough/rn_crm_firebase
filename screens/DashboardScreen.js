import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';
import {getCustomers} from '../services/CustomerService';
import {getAndUpdateProductListDataToState} from '../services/ProductService';

const DashboardScreen = (props) => {
  const {colors} = useTheme();

  const theme = useTheme();
  const {user} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers(user.uid));
    dispatch(getAndUpdateProductListDataToState(user.uid));
    // console.log(user.uid);
    // console.log('dashboard working');
  });

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} /> */}
      <StatusBar barStyle="default" />
      <Text style={{color: colors.text}}>Dashboard Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
};
function mapStateToProps(state) {
  return {
    user: state.authReducer.user,
  };
}
export default connect(mapStateToProps)(DashboardScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
