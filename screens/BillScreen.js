import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomBillCard from '../shared/CustomBillCard';
import {ScrollView} from 'react-native-gesture-handler';
import NewBillModal from '../modals/NewBillModal';
import {Searchbar} from 'react-native-paper';
import {FAB} from 'react-native-paper';

const BillStack = createStackNavigator();
const StackHeaderColor = '#ff69b4';
const themeColour = '#ff69b4';

const BillScreen = () => {
  const [showModalForAddNewProduct, setShowModalForAddNewProduct] = useState(
    false,
  );

  const cbForCloseModal = () => {
    setShowModalForAddNewProduct(false);
  };
  return (
    <View style={styles.container}>
      {showModalForAddNewProduct ? (
        <NewBillModal cbForCloseModal={cbForCloseModal} />
      ) : null}
      <View
        style={{
          flex: 1,
          width: '100%',
        }}>
        <ScrollView>
          <View>
            <CustomBillCard name={'Shei kaideen'} open />
            <CustomBillCard name={'Raja'} />
            <CustomBillCard name={'Rathina'} />
            <CustomBillCard name={'Reegan'} open />
            <CustomBillCard name={'Shei kaideen'} />
            {/* <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} />
            <CustomBillCard name={'Shei kaideen'} /> */}
          </View>
        </ScrollView>
      </View>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          setShowModalForAddNewProduct(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    height: 60,
    backgroundColor: themeColour,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchBarContainer: {
    flex: 4,
    width: '60%',
    marginLeft: 30,
    height: 30,
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: themeColour,
  },
});

const BillStackScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <BillStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: StackHeaderColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <BillStack.Screen
        name="Bill"
        component={BillScreen}
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
                <Text style={styles.headerText}>Bill</Text>
                <View style={styles.searchBarContainer}>
                  <Searchbar
                    style={{searmarginLeft: 15, height: 40, right: 10}}
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
    </BillStack.Navigator>
  );
};

export default BillStackScreen;
