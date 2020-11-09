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
  Image,
  TextInput as Tinp,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import {Checkbox} from 'react-native-paper';

const modalBackgroundColor = '#fff';

const NewBillModal = (props) => {
  const shapeData = [
    {
      label: 'Rectangular',
      value: 'Rectangular',
    },
    {
      label: 'Circular',
      value: 'Circular',
    },
    // {
    //   label: 'Square',
    //   value: 'Square',
    // },
  ];
  const [checked, setChecked] = useState(true);
  const [addressTextInputHeight, setAddressTextInputHeight] = useState(50);
  const [productName, setproductName] = useState('');
  const [productShape, setProductShape] = useState('Select Shape');
  const [RectangularDimension, setRectangularDimensions] = useState({
    length: '',
    breadth: '',
    height: '',
  });
  const [circularDia, setCircularDia] = useState('');
  const [purposeOfWork, setPurposeOfWork] = useState('');
  const [productRent, setProductRent] = useState('');
  const [productNote, setProductNote] = useState('');

  const onHandleProductNameTextChange = (cusName) => {
    setproductName(cusName);
  };

  const onHandleShapeSelect = (shape) => {
    setProductShape(shape ? shape : 'Select Shape');
  };

  const onHandleRectangularDimension = (dir, dim) => {
    if (dir === 'length')
      setRectangularDimensions((dimensions) => ({...dimensions, length: dim}));
    else if (dir === 'breadth')
      setRectangularDimensions((dimensions) => ({...dimensions, breadth: dim}));
    else if (dir === 'height')
      setRectangularDimensions((dimensions) => ({...dimensions, height: dim}));
  };

  const onHandleCircularDiameter = (dia) => {
    setCircularDia(dia);
  };

  const onHandlePurposeOfWorkChange = (val) => {
    setPurposeOfWork(val);
  };

  const onHandleproductRentChange = (rent) => {
    setProductRent(rent);
  };

  const onPressResetButton = () => {
    setproductName('');
    setProductShape('Select Shape');
    setRectangularDimensions({
      length: '',
      breadth: '',
      height: '',
    });
    setCircularDia('');
    setPurposeOfWork('');
    setProductRent('');
    setProductNote('');
  };

  const onPressAddButton = () => {
    const product = {
      productName: productName,
      shape: productShape,
      rectangulardimension: RectangularDimension,
      circularDimension: circularDia,
      purposeOfWork: purposeOfWork,
      rent: productRent,
      note: productNote,
    };
    console.log(product);
    onPressResetButton();
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
          <Text style={styles.title}> New Bill</Text>
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
                  {/* <TextInput
                    style={styles.textInput}
                    type="flat"
                    value={productName}
                    label="Customer Name"
                    placeholder="Product name"
                    underlineColor="lightgrey"
                    onChangeText={(val) => {
                      onHandleProductNameTextChange(val);
                    }}
                  /> */}
                  <TextInput
                    style={styles.textInput}
                    type="flat"
                    value={productName}
                    label="Product Name"
                    placeholder="Product name"
                    underlineColor="lightgrey"
                    onChangeText={(val) => {
                      onHandleProductNameTextChange(val);
                    }}
                  />
                  <View
                    style={{
                      width: '75%',
                      borderBottomColor: 'lightgrey',
                      borderBottomWidth: 1,
                    }}>
                    {productShape !== 'Select Shape' ? (
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 12,
                          marginTop: 5,
                          color: '#717572',
                        }}>
                        Select Shape
                      </Text>
                    ) : null}
                    <RNPickerSelect
                      placeholder={{
                        label: 'Select Shape',
                        value: null,
                      }}
                      value={productShape}
                      style={{
                        placeholder: {
                          color: 'grey',
                        },
                      }}
                      onValueChange={(val) => onHandleShapeSelect(val)}
                      items={shapeData}>
                      <Tinp
                        style={{
                          fontSize: 16,
                          marginLeft: 8,
                          color: '#717572',
                        }}
                        value={productShape}></Tinp>
                    </RNPickerSelect>
                  </View>
                  <View>
                    {productShape === 'Rectangular' ? (
                      <View style={{width: '30%', flexDirection: 'row'}}>
                        <TextInput
                          style={{...styles.textInput, marginHorizontal: 5}}
                          type="flat"
                          // keyboardType="numeric"
                          label="Length"
                          placeholder="Length"
                          underlineColor="lightgrey"
                          value={RectangularDimension.length}
                          onChangeText={(val) => {
                            onHandleRectangularDimension('length', val);
                          }}
                        />
                        <TextInput
                          style={{...styles.textInput, marginHorizontal: 5}}
                          type="flat"
                          // keyboardType="numeric"
                          label="Breadth"
                          placeholder="Breadth"
                          underlineColor="lightgrey"
                          value={RectangularDimension.breadth}
                          onChangeText={(val) => {
                            onHandleRectangularDimension('breadth', val);
                          }}
                        />
                        <TextInput
                          style={styles.textInput}
                          type="flat"
                          // keyboardType="numeric"
                          label="Height"
                          placeholder="Height"
                          underlineColor="lightgrey"
                          value={RectangularDimension.height}
                          onChangeText={(val) => {
                            onHandleRectangularDimension('height', val);
                          }}
                        />
                      </View>
                    ) : null}
                    {productShape === 'Circular' ? (
                      <View style={{width: '70%', flexDirection: 'row'}}>
                        <TextInput
                          style={{...styles.textInput, marginHorizontal: 5}}
                          type="flat"
                          // keyboardType="numeric"
                          label="Diameter"
                          placeholder="Diameter"
                          underlineColor="lightgrey"
                          value={circularDia}
                          onChangeText={(val) => {
                            onHandleCircularDiameter(val);
                          }}
                        />
                      </View>
                    ) : null}
                  </View>
                  <TextInput
                    style={styles.textInput}
                    type="flat"
                    label="Purpose of work"
                    // keyboardType="numeric"
                    placeholder="Enter purpose here"
                    underlineColor="lightgrey"
                    value={purposeOfWork}
                    onChangeText={(val) => {
                      onHandlePurposeOfWorkChange(val);
                    }}
                  />
                  <TextInput
                    style={styles.textInput}
                    type="flat"
                    label="Rent"
                    keyboardType="numeric"
                    placeholder="Enter rent here"
                    underlineColor="lightgrey"
                    value={productRent}
                    onChangeText={(val) => {
                      onHandleproductRentChange(val);
                    }}
                  />
                  <TextInput
                    style={{
                      ...styles.textInput,
                      height: addressTextInputHeight,
                    }}
                    type="flat"
                    label="Note"
                    placeholder="Please add note here"
                    underlineColor="lightgrey"
                    value={productNote}
                    multiline
                    onContentSizeChange={(e) => {
                      setAddressTextInputHeight(
                        e.nativeEvent.contentSize.height + 1,
                      );
                    }}
                    onChangeText={(val) => {
                      setProductNote(val);
                    }}
                  />
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

export default NewBillModal;
