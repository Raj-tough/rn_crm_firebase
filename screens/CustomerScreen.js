import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {FAB, Snackbar, Portal, Provider} from 'react-native-paper';
import AddCustomerModal from '../modals/AddCustomerModal';
import {
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import CustomCustomerCard from '../shared/CustomCustomerCard';
import {connect, useDispatch} from 'react-redux';
import {getCustomers} from '../services/CustomerService';
import Icon from 'react-native-vector-icons/Ionicons';

const themeColour = '#15d69c';

const CustomerScreen = (props) => {
  const [showModalForAddNewCustomer, setShowModalForAddNewCustomer] = useState(
    false,
  );
  const [orientation, setOrientation] = useState('portrait');
  const [visible, setVisible] = React.useState(false);
  // const [state, setState] = React.useState({open: false});

  // const onStateChange = ({open}) => setState({open});

  // const {open} = state;
  // const dispatch = useDispatch();
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const cbForCloseModal = () => {
    setShowModalForAddNewCustomer(false);
  };
  const {user, customerData} = props;

  useEffect(() => {
    // dispatch(getCustomers(user.uid));
    // console.log('customer screen working');
  });
  const cbForSuccesfulAddCustomerSnackBar = () => {
    onToggleSnackBar();
  };
  const isPortrait = () => {
    return Dimensions.get('window').height >= Dimensions.get('window').width;
  };
  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      const orient = isPortrait() ? 'portrait' : 'landscape';
      setOrientation(orient);
    });
    return () => {
      Dimensions.removeEventListener('change', () => {
        const orient = isPortrait() ? 'portrait' : 'landscape';
        setOrientation(orient);
      });
      console.log('destroyed');
    };
  });
  return (
    <View style={styles.container}>
      {showModalForAddNewCustomer ? (
        <AddCustomerModal
          cbForSuccesfulAddCustomerSnackBar={cbForSuccesfulAddCustomerSnackBar}
          cbForCloseModal={cbForCloseModal}
        />
      ) : null}
      <View
        style={{
          // flex: 1,
          width: '100%',
          height: '100%',
        }}>
        <View style={{height: orientation === 'portrait' ? '7%' : '15%'}}>
          <View style={styles.chipsRow}>
            <View style={{flex: 4}}>
              <View style={styles.noOfCustomer}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Total - {customerData ? customerData.length : 0}
                </Text>
              </View>
            </View>
            {/* <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <View style={{...styles.addProduct}}>
                <TouchableNativeFeedback>
                  <Icon
                    name="add-outline"
                    size={30}
                    color="white"
                    onPress={() => {
                      setShowModalForAddNewCustomer(true);
                    }}></Icon>
                </TouchableNativeFeedback>
              </View>
            </View> */}
            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
              </View>
            </ScrollView> */}
          </View>
        </View>
        <View style={{height: orientation === 'portrait' ? '93%' : '85%'}}>
          <ScrollView>
            <View>
              {customerData
                ? customerData.map((customer, index) => (
                    <View key={`${index}`}>
                      <CustomCustomerCard data={customer} />
                    </View>
                  ))
                : null}
              {/* <CustomCustomerCard name={'Sheik Maideen'} /> */}
            </View>
          </ScrollView>
        </View>
      </View>
      <FAB
        style={styles.fab}
        large
        icon="plus"
        color={'white'}
        onPress={() => setShowModalForAddNewCustomer(true)}
      />
      {/* <Provider>
        <Portal>
          <FAB.Group
            style={styles.fabGroup}
            open={open}
            icon={open ? 'filter-menu' : 'filter-plus'}
            actions={[
              {
                icon: 'plus',
                onPress: () => setShowModalForAddNewCustomer(true),
              },
              {
                icon: 'star',
                label: 'Star',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'email',
                label: 'Email',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => console.log('Pressed notifications'),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider> */}
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        onToggleSnackBar={{width: 300}}
        wrapperStyle={{
          position: 'absolute',
          top: 0,
          width: '60%',
          alignItems: 'center',
          // justifyContent: 'center',
        }}
        style={{
          backgroundColor: 'yellowgreen',
          color: 'black',
          zIndex: 1,
          opacity: 0.8,
        }}>
        <Text style={{color: 'black'}}>Customer succesfully added.</Text>
      </Snackbar>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    user: state.authReducer.user,
    customerData: state.CustomerReducer.customerData,
  };
}
export default connect(mapStateToProps)(CustomerScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: themeColour,
  },
  fabGroup: {
    zIndex: 1,
    position: 'absolute',
    margin: 1,
    right: 0,
    bottom: 0,
  },
  chipsRow: {
    height: 50,
    // backgroundColor: 'lightgreen',
    flexDirection: 'row',
    alignItems: 'center',
  },
  noOfCustomer: {
    marginLeft: '2%',
    height: '80%',
    // backgroundColor: 'red',
    borderColor: 'teal',
    borderWidth: 1,
    width: '30%',
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCustomer: {
    // marginTop: 5,
    marginRight: 15,
    height: 45,
    width: 45,
    borderRadius: 10,
    borderColor: 'red',
    // borderWidth: 1,
    backgroundColor: 'teal',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
