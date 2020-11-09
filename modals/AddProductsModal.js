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
  TextInput,
} from 'react-native';
// import {TextInput} from 'react-native-paper';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import Tooltip from 'react-native-walkthrough-tooltip';
import {addProduct} from '../services/ProductService';
import getRandomAllColor from '../shared/GetRandomColor';

const modalBackgroundColor = '#fff';

const AddProductsModal = (props) => {
  const shapeData = [
    {
      label: 'Rectangular',
      value: 'Rectangular',
    },
    {
      label: 'Circular',
      value: 'Circular',
    },
  ];

  // for color when focus the input elements
  const [productNameColor, setProductNameColor] = useState('grey');
  const [categoryNameColor, setCategoryNameColor] = useState('grey');
  const [shapeColor, setShapeColor] = useState('grey');
  const [purposeColor, setPurposeNameColor] = useState('grey');
  const [rentColor, setRentColor] = useState('grey');
  const [noteColor, setNoteColor] = useState('grey');
  const [lengthColor, setLengthColor] = useState('grey');
  const [breadthColor, setBreadthColor] = useState('grey');
  const [heightColor, setHeightColor] = useState('grey');
  const [rectUnitColor, setRecUnitColor] = useState('grey');
  const [cirUnitColor, setCirUnitColor] = useState('grey');
  const [diameterColor, setDiameterColor] = useState('grey');

  const [categoryNameToolTipVisible, setCategoryNameToolTipVisible] = useState(
    false,
  );
  const [categoryInformationToolTip, setCategoryInformationToolTip] = useState(
    false,
  );
  const [checked, setChecked] = React.useState(false);

  // Variables down are for error messages
  const [productNameError, setproductNameError] = useState('');
  const [categoryNameError, setCategoryNameError] = useState('');
  const [productShapeError, setProductShapeError] = useState('');
  const [dimensionError, setDimensionError] = useState({
    length: '',
    breadth: '',
    height: '',
    rectangularUnit: '',
    dia: '',
    circularUnit: '',
  });
  const [purposeOfWorkError, setPurposeOfWorkError] = useState('');
  const [productRentError, setProductRentError] = useState('');

  const [productName, setproductName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [productShape, setProductShape] = useState('Select Shape');
  const [RectangularDimension, setRectangularDimensions] = useState({
    length: '',
    breadth: '',
    height: '',
    units: '',
  });
  const [circularDimensions, setCircularDimensions] = useState({
    dia: '',
    units: '',
  });
  const [purposeOfWork, setPurposeOfWork] = useState('');
  const [productRent, setProductRent] = useState('');
  const [productNote, setProductNote] = useState('');

  const onHandleProductNameTextChange = (cusName) => {
    setproductName(cusName);
    setproductNameError('');
    setProductNameColor('blue');
  };
  ``;
  const onHandleCategoryNameTextChange = (cusName) => {
    setCategoryName(cusName);
    setCategoryNameError('');
  };

  const onHandleShapeSelect = (shape) => {
    setProductShape(shape ? shape : 'Select Shape');
    setProductShapeError('');
  };

  const onHandleRectangularDimension = (dir, dim) => {
    if (dir === 'length') {
      setRectangularDimensions((dimensions) => ({...dimensions, length: dim}));
      setDimensionError((dimensions) => ({...dimensions, length: ''}));
      setLengthColor('grey');
    } else if (dir === 'breadth') {
      setRectangularDimensions((dimensions) => ({...dimensions, breadth: dim}));
      setDimensionError((dimensions) => ({...dimensions, breadth: ''}));
      setBreadthColor('grey');
    } else if (dir === 'height') {
      setRectangularDimensions((dimensions) => ({...dimensions, height: dim}));
      setDimensionError((dimensions) => ({...dimensions, height: ''}));
      setHeightColor('grey');
    } else if (dir === 'units') {
      setRectangularDimensions((dimensions) => ({...dimensions, units: dim}));
      setDimensionError((dimensions) => ({...dimensions, rectangularUnit: ''}));
      setRecUnitColor('grey');
    }
  };

  const onHandleCircularDimensions = (dir, dim) => {
    if (dir === 'dia') {
      setCircularDimensions((dimension) => ({...dimension, dia: dim}));
      setDimensionError((dimensions) => ({...dimensions, dia: ''}));
      setDiameterColor('grey');
    } else if (dir === 'units') {
      setCircularDimensions((dimension) => ({...dimension, units: dim}));
      setDimensionError((dimensions) => ({...dimensions, circularUnit: ''}));
      setCirUnitColor('grey');
    }
  };

  const onHandlePurposeOfWorkChange = (val) => {
    setPurposeOfWork(val);
    setPurposeNameColor('grey');
    setPurposeOfWorkError('');
  };

  const onHandleproductRentChange = (rent) => {
    setProductRent(rent);
    setRentColor('grey');
    setProductRentError('');
  };
  const onHandleproductNoteChange = (note) => {
    setProductNote(note);
  };

  const onPressResetButton = () => {
    setproductName('');
    setProductShape('Select Shape');
    setCategoryName('');
    setRectangularDimensions({
      length: '',
      breadth: '',
      height: '',
    });
    setCircularDimensions({
      dia: '',
      units: '',
    });
    setPurposeOfWork('');
    setProductRent('');
    setProductNote('');
  };
  const validateFields = () => {
    if (!productName) {
      setproductNameError('Please enter the product name !!');
      setProductNameColor('red');
    }
    if (!categoryName) {
      setCategoryNameError('Please enter the Category name !!');
      setCategoryNameColor('red');
    }
    if (productShape === 'Select Shape') {
      setProductShapeError('Please select the shape !!');
      setShapeColor('red');
    }
    if (productShape === 'Rectangular') {
      if (!RectangularDimension.length) {
        setLengthColor('red');
        setDimensionError((dimensionError) => ({
          ...dimensionError,
          length: 'req.',
        }));
      }
      if (!RectangularDimension.breadth) {
        setBreadthColor('red');
        setDimensionError((dimensionError) => ({
          ...dimensionError,
          breadth: 'req.',
        }));
      }
      if (!RectangularDimension.height) {
        setHeightColor('red');
        setDimensionError((dimensionError) => ({
          ...dimensionError,
          height: 'req.',
        }));
      }
      if (!RectangularDimension.units) {
        setRecUnitColor('red');
        setDimensionError((dimensionError) => ({
          ...dimensionError,
          rectangularUnit: 'req.',
        }));
      }
    } else if (productShape === 'Circular') {
      if (!circularDimensions.dia) {
        setDiameterColor('red');
        setDimensionError((dimensionError) => ({
          ...dimensionError,
          dia: 'req.',
        }));
      }
      if (!circularDimensions.circularUnit) {
        setCirUnitColor('red');
        setDimensionError((dimensionError) => ({
          ...dimensionError,
          dia: 'req.',
        }));
      }
    }
    if (!purposeOfWork) {
      setPurposeOfWorkError('Please enter the Purpose of rent !!');
      setPurposeNameColor('red');
    }
    if (!productRent) {
      setProductRentError('Please enter the Rent amount / day !!');
      setRentColor('red');
    }
  };

  const validateForm = () => {
    if (productName && categoryName && purposeOfWork && productRent) {
      if (
        productShape === 'Rectangular' &&
        RectangularDimension.length &&
        RectangularDimension.breadth &&
        RectangularDimension.height &&
        RectangularDimension.units
      ) {
        return true;
      } else if (
        productShape === 'Circular' &&
        circularDimensions.dia &&
        circularDimensions.units
      ) {
        return true;
      }
    }
    return false;
  };
  const onPressAddButton = () => {
    validateFields();
    if (validateForm()) {
      const product = {
        productName: productName,
        shape: productShape,
        rectangulardimension: RectangularDimension,
        circularDimension: circularDimensions,
        purposeOfWork: purposeOfWork,
        rent: productRent,
        note: productNote,
        productInitialColor: getRandomAllColor(),
        quantityHistory: {
          dateOfCreate: new Date(),
        },
      };
      addProduct(
        product,
        props.userId,
        props.cbForSuccesfulAddproductSnackBar,
        props.cbForCloseModal,
        onPressResetButton,
      );
    }
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
          <Text style={styles.title}> Add Product</Text>
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
                <View style={{marginTop: 20}}>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          marginLeft: 5,
                          fontSize: 10,
                          color: productNameColor,
                        }}>
                        Product name
                      </Text>
                      <Text
                        style={{
                          marginLeft: 5,
                          fontSize: 10,
                          color: 'red',
                        }}>
                        *
                      </Text>
                      {productNameError ? (
                        <Text
                          style={{marginLeft: 15, color: 'red', fontSize: 10}}>
                          {productNameError}
                        </Text>
                      ) : null}
                    </View>
                    <TextInput
                      style={{
                        ...styles.textInput,
                        height: 40,
                        borderBottomColor: productNameColor,
                        color: 'green',
                      }}
                      placeholderTextColor="grey"
                      type="flat"
                      value={productName}
                      label="Product Name"
                      placeholder="Product name"
                      underlineColor="lightgrey"
                      onChangeText={(val) => {
                        onHandleProductNameTextChange(val);
                      }}
                      onFocus={() => {
                        setProductNameColor('blue');
                      }}
                      onBlur={() => {
                        setProductNameColor('grey');
                      }}
                    />
                  </View>
                  <Tooltip
                    isVisible={categoryNameToolTipVisible}
                    content={
                      <Text>
                        {
                          'Category name or code is like a common name for a set of products. \n\nFor example, "Shuttering sheet" will be of many types like "Angle Shuttering sheet", "Folded Shuttering sheet" etc.,\n\nAmong these "Angle" or "Folded" shuttering sheet is "Produt Name" and "Shuttering sheet" will be the Category name / code.'
                        }
                      </Text>
                    }
                    placement="center"
                    arrowSize={{width: 16, height: 8}}
                    backgroundColor="rgba(0,0,0,0.5)"
                    onClose={() =>
                      setCategoryNameToolTipVisible(false)
                    }></Tooltip>
                  <Tooltip
                    isVisible={categoryInformationToolTip}
                    content={
                      <Text>
                        {
                          'If category text spelling is different for same products, this product might not shown under the category in the Create Bill section\n\nIt is advisable to create once a product category and for later products, check the "Search from Existance Category" check box and select from that.'
                        }
                      </Text>
                    }
                    placement="center"
                    arrowSize={{width: 16, height: 8}}
                    backgroundColor="rgba(0,0,0,0.5)"
                    onClose={() =>
                      setCategoryInformationToolTip(false)
                    }></Tooltip>
                  <View sytle={{marginTop: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'baseline',
                        height: 32,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 5,
                        }}>
                        <Text
                          style={{
                            marginLeft: 5,
                            fontSize: 10,
                            color: categoryNameColor,
                            justifyContent: 'center',
                          }}>
                          Category name / code
                        </Text>
                        <Text
                          style={{
                            marginLeft: 5,
                            fontSize: 10,
                            color: 'red',
                            justifyContent: 'center',
                          }}>
                          *
                        </Text>
                        <Icon
                          style={{marginLeft: 10}}
                          onPress={() => setCategoryNameToolTipVisible(true)}
                          name="help-circle-outline"
                          color="grey"
                          size={20}
                        />
                        <Icon
                          style={{marginLeft: 10}}
                          onPress={() => setCategoryInformationToolTip(true)}
                          name="information-circle-outline"
                          color="grey"
                          size={20}
                        />
                        <View style={{marginLeft: 10}}>
                          <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                              setChecked(!checked);
                            }}
                          />
                        </View>
                        <Text style={{fontSize: 10}}>
                          {checked
                            ? 'uncheck to create new Category'
                            : 'Search from Existance Category'}
                        </Text>
                      </View>
                    </View>
                    {checked ? (
                      <View>
                        <TextInput
                          editable={false}
                          style={{
                            ...styles.textInput,
                            height: 40,
                            borderBottomColor: categoryNameColor,
                            color: 'green',
                          }}
                          placeholderTextColor="grey"
                          placeholder="Select Category name / code - !!! this feature in v2. "></TextInput>
                        {categoryNameError ? (
                          <Text
                            style={{marginTop: 5, color: 'red', fontSize: 10}}>
                            {categoryNameError}
                          </Text>
                        ) : null}
                      </View>
                    ) : (
                      <View>
                        <TextInput
                          style={{
                            ...styles.textInput,
                            height: 40,
                            borderBottomColor: categoryNameColor,
                            color: 'green',
                          }}
                          placeholderTextColor="grey"
                          type="flat"
                          value={categoryName}
                          placeholder="Category name / code"
                          underlineColor="lightgrey"
                          onChangeText={(val) => {
                            onHandleCategoryNameTextChange(val);
                          }}
                          onFocus={() => {
                            setCategoryNameColor('blue');
                          }}
                          onBlur={() => {
                            setCategoryNameColor('grey');
                          }}
                        />
                        {categoryNameError ? (
                          <Text
                            style={{marginTop: 5, color: 'red', fontSize: 10}}>
                            {categoryNameError}
                          </Text>
                        ) : null}
                      </View>
                    )}
                  </View>
                  <View
                    style={{
                      borderBottomColor: 'grey',
                      borderBottomWidth: 1,
                      width: '100%',
                      marginTop: 10,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          // backgroundColor: 'red',
                          marginLeft: 5,
                          fontSize: 10,
                          marginTop: 5,
                          color: shapeColor,
                        }}>
                        Product shape
                      </Text>
                      <Text
                        style={{
                          marginTop: 5,
                          marginLeft: 5,
                          fontSize: 10,
                          color: 'red',
                        }}>
                        *
                      </Text>
                      {productShapeError ? (
                        <Text
                          style={{marginLeft: 15, color: 'red', fontSize: 10}}>
                          {productShapeError}
                        </Text>
                      ) : null}
                    </View>
                    <View>
                      <RNPickerSelect
                        placeholder={{
                          label: 'Select Shape',
                          value: null,
                        }}
                        value={productShape}
                        // useNativeAndroidPickerStyle={true}
                        style={{
                          inputAndroidContainer: {
                            height: 42,
                            // ...styles.textInput,
                            // borderBottomColor: 'yellow',
                            // color: 'green',
                          },
                          placeholder: {
                            color: 'red',
                          },
                        }}
                        placeholderTextColor="red"
                        onValueChange={(val) => onHandleShapeSelect(val)}
                        items={shapeData}>
                        <TextInput
                          style={{
                            fontSize: 14,
                            paddingTop: 15,
                            // marginLeft: 8,
                            color:
                              productShape === 'Select Shape'
                                ? 'grey'
                                : 'green',
                          }}
                          value={productShape}></TextInput>
                      </RNPickerSelect>
                    </View>
                  </View>
                  <View>
                    {productShape === 'Rectangular' ? (
                      <View
                        style={{
                          // width: '30%',
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                        }}>
                        <View style={{width: '20%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                            }}>
                            <Text
                              style={{
                                marginLeft: 8,
                                fontSize: 10,
                                color: lengthColor,
                              }}>
                              Length
                            </Text>
                            <Text
                              style={{
                                marginLeft: 5,
                                fontSize: 10,
                                color: 'red',
                              }}>
                              *
                            </Text>
                            {dimensionError.length ? (
                              <Text
                                style={{
                                  marginLeft: 5,
                                  color: 'red',
                                  fontSize: 10,
                                }}>
                                {dimensionError.length}
                              </Text>
                            ) : null}
                          </View>
                          <TextInput
                            style={{
                              ...styles.textInput,
                              marginHorizontal: 5,
                              height: 40,
                              borderBottomColor: lengthColor,
                              color: 'green',
                            }}
                            placeholderTextColor="grey"
                            placeholder="Length"
                            keyboardType="decimal-pad"
                            value={RectangularDimension.length}
                            onChangeText={(val) => {
                              onHandleRectangularDimension('length', val);
                            }}
                          />
                        </View>
                        <View style={{width: '20%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                            }}>
                            <Text
                              style={{
                                marginLeft: 8,
                                fontSize: 10,
                                color: breadthColor,
                              }}>
                              Breadth
                            </Text>
                            <Text
                              style={{
                                marginLeft: 5,
                                fontSize: 10,
                                color: 'red',
                              }}>
                              *
                            </Text>
                            {dimensionError.breadth ? (
                              <Text
                                style={{
                                  marginLeft: 5,
                                  color: 'red',
                                  fontSize: 10,
                                }}>
                                {dimensionError.breadth}
                              </Text>
                            ) : null}
                          </View>
                          <TextInput
                            style={{
                              ...styles.textInput,
                              marginHorizontal: 5,
                              height: 40,
                              borderBottomColor: breadthColor,
                              color: 'green',
                            }}
                            placeholderTextColor="grey"
                            placeholder="Breadth"
                            keyboardType="decimal-pad"
                            value={RectangularDimension.breadth}
                            onChangeText={(val) => {
                              onHandleRectangularDimension('breadth', val);
                            }}
                          />
                        </View>
                        <View style={{width: '20%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                            }}>
                            <Text
                              style={{
                                marginLeft: 8,
                                fontSize: 10,
                                color: heightColor,
                              }}>
                              Height
                            </Text>
                            <Text
                              style={{
                                marginLeft: 5,
                                fontSize: 10,
                                color: 'red',
                              }}>
                              *
                            </Text>
                            {dimensionError.height ? (
                              <Text
                                style={{
                                  marginLeft: 5,
                                  color: 'red',
                                  fontSize: 10,
                                }}>
                                {dimensionError.height}
                              </Text>
                            ) : null}
                          </View>
                          <TextInput
                            style={{
                              ...styles.textInput,
                              marginHorizontal: 5,
                              height: 40,
                              borderBottomColor: heightColor,
                              color: 'green',
                            }}
                            keyboardType="decimal-pad"
                            placeholderTextColor="grey"
                            placeholder="Height"
                            value={RectangularDimension.height}
                            onChangeText={(val) => {
                              onHandleRectangularDimension('height', val);
                            }}
                          />
                        </View>
                        <View style={{width: '20%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                            }}>
                            <Text
                              style={{
                                marginLeft: 8,
                                fontSize: 10,
                                color: rectUnitColor,
                              }}>
                              Units
                            </Text>
                            <Text
                              style={{
                                marginLeft: 5,
                                fontSize: 10,
                                color: 'red',
                              }}>
                              *
                            </Text>
                            {dimensionError.rectangularUnit ? (
                              <Text
                                style={{
                                  marginLeft: 5,
                                  color: 'red',
                                  fontSize: 10,
                                }}>
                                {dimensionError.rectangularUnit}
                              </Text>
                            ) : null}
                          </View>
                          <TextInput
                            style={{
                              ...styles.textInput,
                              marginHorizontal: 5,
                              height: 40,
                              borderBottomColor: rectUnitColor,
                              color: 'green',
                            }}
                            placeholderTextColor="grey"
                            placeholder="Units"
                            value={RectangularDimension.units}
                            onChangeText={(val) => {
                              onHandleRectangularDimension('units', val);
                            }}
                          />
                        </View>
                      </View>
                    ) : null}
                    {productShape === 'Circular' ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                        }}>
                        <View style={{width: '30%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                            }}>
                            <Text
                              style={{
                                marginLeft: 8,
                                fontSize: 10,
                                color: diameterColor,
                              }}>
                              Dia
                            </Text>
                            <Text
                              style={{
                                marginLeft: 5,
                                fontSize: 10,
                                color: 'red',
                              }}>
                              *
                            </Text>
                            {dimensionError.dia ? (
                              <Text
                                style={{
                                  marginLeft: 5,
                                  color: 'red',
                                  fontSize: 10,
                                }}>
                                {dimensionError.dia}
                              </Text>
                            ) : null}
                          </View>
                          <TextInput
                            style={{
                              ...styles.textInput,
                              marginHorizontal: 5,
                              height: 40,
                              borderBottomColor: diameterColor,
                              color: 'green',
                            }}
                            placeholderTextColor="grey"
                            placeholder="Diameter"
                            value={circularDimensions.dia}
                            keyboardType="decimal-pad"
                            onChangeText={(val) => {
                              onHandleCircularDimensions('dia', val);
                            }}
                          />
                        </View>
                        <View style={{width: '30%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                            }}>
                            <Text
                              style={{
                                marginLeft: 8,
                                fontSize: 10,
                                color: cirUnitColor,
                              }}>
                              Units
                            </Text>
                            <Text
                              style={{
                                marginLeft: 5,
                                fontSize: 10,
                                color: 'red',
                              }}>
                              *
                            </Text>
                            {dimensionError.circularUnit ? (
                              <Text
                                style={{
                                  marginLeft: 5,
                                  color: 'red',
                                  fontSize: 10,
                                }}>
                                {dimensionError.circularUnit}
                              </Text>
                            ) : null}
                          </View>
                          <TextInput
                            style={{
                              ...styles.textInput,
                              marginHorizontal: 5,
                              height: 40,
                              borderBottomColor: cirUnitColor,
                              color: 'green',
                            }}
                            placeholderTextColor="grey"
                            placeholder="Units"
                            value={circularDimensions.units}
                            onChangeText={(val) => {
                              onHandleCircularDimensions('units', val);
                            }}
                          />
                        </View>
                      </View>
                    ) : null}
                  </View>
                  <View style={{marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          marginLeft: 5,
                          fontSize: 10,
                          color: purposeColor,
                        }}>
                        Purpose of rent
                      </Text>
                      <Text
                        style={{
                          marginLeft: 5,
                          fontSize: 10,
                          color: 'red',
                        }}>
                        *
                      </Text>
                      {purposeOfWorkError ? (
                        <Text
                          style={{marginLeft: 15, color: 'red', fontSize: 10}}>
                          {purposeOfWorkError}
                        </Text>
                      ) : null}
                    </View>
                    <TextInput
                      style={{
                        ...styles.textInput,
                        height: 40,
                        borderBottomColor: purposeColor,
                        color: 'green',
                      }}
                      placeholderTextColor="grey"
                      type="flat"
                      value={purposeOfWork}
                      label="Product Name"
                      placeholder="Product name"
                      underlineColor="lightgrey"
                      onChangeText={(val) => {
                        onHandlePurposeOfWorkChange(val);
                      }}
                      onFocus={() => {
                        setPurposeNameColor('blue');
                      }}
                      onBlur={() => {
                        setPurposeNameColor('grey');
                      }}
                    />
                  </View>
                  <View style={{marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          marginLeft: 5,
                          fontSize: 10,
                          color: rentColor,
                        }}>
                        Rent / day in ₹
                      </Text>
                      <Text
                        style={{
                          marginLeft: 5,
                          fontSize: 10,
                          color: 'red',
                        }}>
                        *
                      </Text>
                      {productRentError ? (
                        <Text
                          style={{marginLeft: 15, color: 'red', fontSize: 10}}>
                          {productRentError}
                        </Text>
                      ) : null}
                    </View>

                    <TextInput
                      style={{
                        ...styles.textInput,
                        height: 40,
                        borderBottomColor: rentColor,
                        color: 'green',
                      }}
                      placeholderTextColor="grey"
                      value={productRent}
                      placeholder="Rent of product / day in  ₹"
                      keyboardType="decimal-pad"
                      onChangeText={(val) => {
                        onHandleproductRentChange(val);
                      }}
                      onFocus={() => {
                        setRentColor('blue');
                      }}
                      onBlur={() => {
                        setRentColor('grey');
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        marginLeft: 5,
                        fontSize: 10,
                        marginTop: 15,
                        color: noteColor,
                      }}>
                      Description of product (optional)
                    </Text>
                    <TextInput
                      style={{
                        ...styles.textInput,
                        height: 40,
                        borderBottomColor: noteColor,
                        color: 'green',
                      }}
                      placeholderTextColor="grey"
                      value={productNote}
                      placeholder="Please add note about product here"
                      onChangeText={(val) => {
                        onHandleproductNoteChange(val);
                      }}
                      onFocus={() => {
                        setNoteColor('blue');
                      }}
                      onBlur={() => {
                        setNoteColor('grey');
                      }}
                    />
                  </View>
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  scrollView: {
    height: '100%',
    width: '100%',
  },
  submitButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topArea: {flex: 5},
  bottomArea: {marginTop: 100},
  textInput: {
    borderBottomWidth: 1,

    // backgroundColor: 'lightgreen',
  },
});

export default AddProductsModal;
