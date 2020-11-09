import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput as Tinp,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import {connect, useDispatch} from 'react-redux';
import {addCustomer} from '../services/CustomerService';
import getRandomAllColor from '../shared/GetRandomColor';

const modalBackgroundColor = '#fff';

const AddCustomerModal = (props) => {
  const proofData = [
    {
      label: 'Aadhar',
      value: 'Aadhar',
      key: 'aadhar',
      inputLabel: 'aadhar',
    },
    {
      label: 'Driving Liscence',
      value: 'Driving Liscence',
      key: 'drivingLiscence',
      inputLabel: 'drivingLiscence',
    },
    {
      label: 'Family Card',
      value: 'Family Card',
      key: 'familyCard',
      inputLabel: 'familyCard',
    },
    {
      label: 'Voter Id',
      value: 'Voter Id',
      key: 'voterID',
      inputLabel: 'voterID',
    },
  ];
  const [addressTextInputHeight, setAddressTextInputHeight] = useState(50);
  const [customerName, setCustomerName] = useState('');
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
  const [customerAge, setCustomerAge] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerProof, setCustomerProof] = useState('Select proof type');
  const [customerProofIdNumber, setCustomerProofIdNumber] = useState('');

  const {user, customerData} = props;

  const onHandleNameTextChange = (cusName) => {
    setCustomerName(cusName);
  };

  const onHandlePhoneNumberTextChange = (phno) => {
    setCustomerPhoneNumber(phno);
  };

  const onHandleAgeChange = (age) => {
    setCustomerAge(age);
  };

  const onHandleAddressChange = (address) => {
    setCustomerAddress(address);
  };

  const onHandleProofselect = (proof) => {
    setCustomerProof(proof ? proof : 'Select proof type');
    console.log(proof);
  };

  const onHandleProofIdNumberChange = (idNumber) => {
    setCustomerProofIdNumber(idNumber);
  };

  const onPressResetButton = () => {
    setCustomerName('');
    setCustomerPhoneNumber('');
    setCustomerAge('');
    setCustomerAddress('');
    setCustomerProof('Select proof type');
    setCustomerProofIdNumber('');
  };

  const onPressAddButton = () => {
    const customer = {
      name: customerName,
      age: customerAge,
      phno: customerPhoneNumber,
      address: customerAddress.replace(/(\r\n|\n|\r)/gm, ' '),
      proofType: customerProof,
      proofIdNumber: customerProofIdNumber,
      dateOfJoin: new Date(),
      profileColor: getRandomAllColor(),
    };
    if (!customerData) {
      console.log('1st customer');
      addCustomer(user.uid, customer);
    } else {
      console.log('next customer');
      console.log(customerData);
      customerData.push(customer);
      addCustomer(user.uid, customerData);
    }
    // onToggleSnackBar();
    onPressResetButton();
    props.cbForSuccesfulAddCustomerSnackBar();
    props.cbForCloseModal();
  };
  return (
    <Modal
      visible={true}
      animationType="slide"
      onRequestClose={() => {
        props.cbForCloseModal();
      }}>
      <View style={{backgroundColor: modalBackgroundColor, flex: 1}}>
        <View style={styles.modalHeader}>
          <Text style={styles.title}> Add customers </Text>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                props.cbForCloseModal();
              }}>
              <Icon name={'ios-close'} size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.topArea}>
              <TouchableWithoutFeedback
                style={{flex: 1}}
                onPress={Keyboard.dismiss}
                accessible={false}>
                <View style={styles.inputContent}>
                  <TextInput
                    style={styles.textInput}
                    type="flat"
                    value={customerName}
                    label="Customer Name"
                    placeholder="Enter the Name here"
                    underlineColor="lightgrey"
                    onChangeText={(customerName) => {
                      onHandleNameTextChange(customerName);
                    }}
                  />
                  <TextInput
                    style={styles.textInput}
                    type="flat"
                    label="Phone Number"
                    placeholder=" Enter phone number here"
                    value={customerPhoneNumber}
                    maxLength={10}
                    keyboardType="phone-pad"
                    underlineColor="lightgrey"
                    onChangeText={(phno) => {
                      onHandlePhoneNumberTextChange(phno);
                    }}
                  />
                  <TextInput
                    style={styles.textInput}
                    type="flat"
                    label="Age"
                    placeholder=" Enter age here"
                    value={customerAge}
                    maxLength={2}
                    keyboardType="numeric"
                    underlineColor="lightgrey"
                    onChangeText={(age) => {
                      onHandleAgeChange(age);
                    }}
                  />
                  <TextInput
                    style={{
                      ...styles.textInput,
                      height: addressTextInputHeight,
                      paddingBottom: 5,
                    }}
                    type="flat"
                    label="Address"
                    placeholder=" Enter address here"
                    value={customerAddress}
                    multiline
                    underlineColor="lightgrey"
                    onContentSizeChange={(e) => {
                      setAddressTextInputHeight(
                        e.nativeEvent.contentSize.height + 1,
                      );
                    }}
                    onChangeText={(address) => {
                      onHandleAddressChange(address);
                    }}
                  />
                  <View
                    style={{
                      width: '75%',
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    {customerProof !== 'Select proof type' ? (
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 12,
                          marginTop: 5,
                          color: '#717572',
                        }}>
                        Select proof type
                      </Text>
                    ) : null}
                    <RNPickerSelect
                      placeholder={{
                        label: 'Select proof type',
                        value: null,
                      }}
                      value={customerProof}
                      style={{
                        placeholder: {
                          color: 'grey',
                        },
                      }}
                      onValueChange={(val) => onHandleProofselect(val)}
                      items={proofData}>
                      <Tinp
                        style={{
                          fontSize: 16,
                          marginLeft: 8,
                          color: '#717572',
                        }}
                        value={customerProof}></Tinp>
                    </RNPickerSelect>
                  </View>
                  <TextInput
                    style={styles.textInput}
                    type="flat"
                    value={customerProofIdNumber}
                    label="Proof Id"
                    placeholder="Enter the Id no. here"
                    underlineColor="lightgrey"
                    onChangeText={(idNumber) => {
                      onHandleProofIdNumberChange(idNumber);
                    }}
                  />
                  {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{marginRight: 20}}>{'*Test image.jpg'}</Text>
                    <Button disabled={true} title="upload image" />
                  </View> */}
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.bottomArea}>
              <View style={styles.submitButtons}>
                <View style={{width: '30%', marginHorizontal: 20}}>
                  <Button title="Add" onPress={onPressAddButton} />
                </View>
                <View style={{width: '30%', marginHorizontal: 20}}>
                  <Button title="reset" onPress={onPressResetButton} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: 'row',
  },
  title: {
    flex: 6,
    marginHorizontal: 10,
    marginVertical: 10,
    fontStyle: 'normal',
    fontSize: 18,
  },
  closeButtonContainer: {
    flex: 1,
  },
  closeButton: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  inputContent: {
    alignItems: 'center',
  },
  scrollView: {
    height: '100%',
    width: '100%',
  },
  submitButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    height: 60,
    width: '75%',
    marginVertical: 5,
    backgroundColor: modalBackgroundColor,
  },
  topArea: {flex: 5},
  bottomArea: {marginTop: 100},
});

function mapStateToProps(state) {
  return {
    isDarkTheme: state.authReducer.isDarkTheme,
    user: state.authReducer.user,
    customerData: state.CustomerReducer.customerData,
  };
}

export default connect(mapStateToProps)(AddCustomerModal);
