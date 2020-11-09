import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {Chip} from 'react-native-paper';

const CustomBillCard = (props) => {
  const [expand, setExpand] = useState(false);

  const initials = props.name.split(' ');
  let initial = '';
  for (let i = 0; i < initials.length; i++) {
    initial += initials[i][0].toUpperCase();
  }
  const handleOpenContent = () => {
    setExpand(!expand);
  };

  return (
    <View
      style={{
        marginLeft: '2.5%',
        alignItems: 'stretch',
        width: '95%',
        paddingBottom: 5,
      }}>
      <View style={{elevation: 4, borderRadius: 5, marginTop: 5}}>
        <TouchableNativeFeedback onPress={handleOpenContent}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              // width: '100%',
              backgroundColor: 'white',
              alignItems: 'center',
            }}>
            <View style={{flex: 1, marginRight: 15}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'darkorange',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                  {initial}
                </Text>
              </View>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontSize: 16, color: '#333331'}}>{props.name}</Text>
            </View>
            <View style={{flex: 2}}>
              <View
                style={{
                  maxWidth: 90,
                  height: 30,
                  borderRadius: 35,
                  marginLeft: 30,
                  borderWidth: 1,
                  borderColor: 'lightgreen',
                  backgroundColor: 'lightseagreen',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white'}}>CB - 4ft</Text>
              </View>
            </View>
            <View style={{flex: 2}}>
              {props.open ? (
                <View
                  style={{
                    maxWidth: 70,
                    height: 30,
                    borderRadius: 12,
                    marginLeft: 30,
                    borderWidth: 1,
                    borderColor: 'limegreen',
                    backgroundColor: 'darkgreen',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Open</Text>
                </View>
              ) : (
                <View
                  style={{
                    maxWidth: 70,
                    height: 30,
                    borderRadius: 12,
                    marginLeft: 30,
                    borderWidth: 1,
                    borderColor: 'red',
                    backgroundColor: 'tomato',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Closed</Text>
                </View>
              )}
            </View>
            <View style={{flex: 1, left: 10}}>
              {expand ? (
                <Icon
                  name="chevron-up-outline"
                  size={20}
                  color="black"
                  backgroundColor="powderblue"></Icon>
              ) : (
                <Icon
                  name="chevron-down-outline"
                  size={20}
                  color="black"
                  backgroundColor="powderblue"></Icon>
              )}
            </View>
          </View>
        </TouchableNativeFeedback>
        <View>
          {expand ? (
            <View
              style={{
                height: 200,
                width: '100%',
                backgroundColor: 'white',
              }}>
              <View style={styles.container}>
                <View style={styles.leftContainer}>
                  <ScrollView style={{marginVertical: 5}}>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Product name - </Text>
                      <Text style={styles.fieldValue}>Column Box</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Count & type - </Text>
                      <Text style={styles.fieldValue}>79 ATN</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Delivery date - </Text>
                      <Text style={styles.fieldValue}>12/09/2020</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Advance - </Text>
                      <Text style={styles.fieldValue}>1600</Text>
                    </View>
                  </ScrollView>
                </View>
                <View style={styles.rightContainer}>
                  <ScrollView style={{marginVertical: 5}}>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldValue}>Column Box</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldValue}>79 ATN</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Delivery date - </Text>
                      <Text style={styles.fieldValue}>12/09/2020</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Advance - </Text>
                      <Text style={styles.fieldValue}>1600</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Rent upto today - </Text>
                      <Text style={styles.fieldValue}>2300</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Rent amount - </Text>
                      <Text style={styles.fieldValue}>700</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Advance - </Text>
                      <Text style={styles.fieldValue}>1600</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Rent upto today - </Text>
                      <Text style={styles.fieldValue}>2300</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                      <Text style={styles.fieldName}>Rent amount - </Text>
                      <Text style={styles.fieldValue}>32423</Text>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  leftContainer: {
    width: '50%',
    // paddingHorizontal: 15,
    // backgroundColor: 'yellowgreen',
  },
  rightContainer: {
    width: '50%',
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor: 'powderblue',
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
    // backgroundColor: 'powderblue',
  },
  fieldName: {
    marginVertical: 3,
    fontWeight: 'bold',
  },
  fieldValue: {
    marginVertical: 3,
  },
});

export default CustomBillCard;
