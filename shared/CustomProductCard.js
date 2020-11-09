import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CustomTimelineModal from './CustomTimelineModal';

const CustomProductCard = (props) => {
  const [expand, setExpand] = useState(false);

  const [showAddTimelinePopup, setShowAddTimelinePopup] = useState(false);
  const initials = props.name.split(' ');

  let initial = '';
  for (let i = 0; i < initials.length; i++) {
    initial += initials[i][0].toUpperCase();
  }
  const handleOpenContent = () => {
    setExpand(!expand);
  };
  const hideDialog = () => setShowAddTimelinePopup(false);

  return (
    <View
      style={{
        marginLeft: '2.5%',
        alignItems: 'stretch',
        width: '95%',
        paddingBottom: 5,
      }}>
      {showAddTimelinePopup ? (
        <CustomTimelineModal hideDialog={hideDialog}></CustomTimelineModal>
      ) : null}
      <View style={{elevation: 3, borderRadius: 5, marginTop: 5}}>
        <TouchableNativeFeedback onPress={handleOpenContent}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              backgroundColor: 'white',
              alignItems: 'center',
            }}>
            <View style={{flex: 1, marginRight: 15, flexDirection: 'row'}}>
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
            <View
              style={{
                flex: 6,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{fontSize: 16, color: '#333331', fontWeight: 'bold'}}>
                  {props.name}
                </Text>
              </View>
              <View>
                <Text style={{marginLeft: 15, fontSize: 16, color: '#333331'}}>
                  Total - {0}
                </Text>
              </View>
              <View style={{marginLeft: 15}}>
                <TouchableNativeFeedback
                  onPress={() => setShowAddTimelinePopup(true)}>
                  <View
                    style={{
                      // marginRight: 15,
                      // backgroundColor: 'red',
                      // height: 30,
                      // width: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // borderRadius: 10,
                      // borderWidth: 1,
                      // borderColor: 'dodgerblue',
                    }}>
                    <Icon
                      name="analytics-outline"
                      color="dodgerblue"
                      size={25}
                    />
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View
              style={{
                flex: 1.5,
                flexDirection: 'row',
                alignItems: 'center',
                left: 10,
              }}>
              <TouchableNativeFeedback onPress={handleOpenContent}>
                <View
                  style={{
                    // marginRight: 15,
                    // backgroundColor: 'red',
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                  }}>
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
              </TouchableNativeFeedback>
            </View>
          </View>
        </TouchableNativeFeedback>
        <View>
          {expand ? (
            <View
              style={{
                height: 225,
                width: '100%',
                backgroundColor: 'white',
              }}>
              <View style={styles.container}>
                <View style={styles.actions}>
                  <View style={{flex: 8, flexDirection: 'row'}}>
                    <View style={styles.openChip}>
                      <Text>Rent / day - {'40 ₹'}</Text>
                    </View>
                    <View style={styles.openChip}>
                      <Text>shape - {'0.75 x 1.25 x 4 ft'}</Text>
                    </View>
                  </View>
                  <View style={{...styles.icons, borderColor: 'red', flex: 1}}>
                    <Icon
                      name="trash-outline"
                      size={25}
                      color="red"
                      onPress={() => {}}></Icon>
                  </View>
                </View>
                <View style={styles.detailContainer}>
                  <ScrollView>
                    {/* <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="cash-outline"
                          size={20}
                          color="red"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>
                          Rent / day{' '}
                        </Text>
                        <Text> - 40 ₹ </Text>
                      </View>
                    </View> */}
                    <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="git-compare-outline"
                          size={20}
                          color="slateblue"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>
                          Category
                        </Text>
                        <Text> - Column box </Text>
                      </View>
                    </View>

                    <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="shapes-outline"
                          size={20}
                          color="green"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>
                          Product shape
                        </Text>
                        <Text> - Rectangular </Text>
                      </View>
                    </View>
                    <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="leaf-outline"
                          size={20}
                          color="darkmagenta"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>
                          Purpose
                        </Text>
                        <Text> - For column shuttering </Text>
                      </View>
                    </View>
                    {/* <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <MaterialIcon
                          name="straighten"
                          size={20}
                          color="dodgerblue"
                          onPress={() => {}}></MaterialIcon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>
                          L x B x H - Unit
                        </Text>
                        <Text> - 0.75 x 1.5/12 x 4 - ft </Text>
                      </View>
                    </View> */}
                    <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="reader-outline"
                          size={20}
                          color="peru"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text>
                          This product is used for shuttering the Building
                          concrete columns. Oil have to apply before and after
                          use.
                        </Text>
                        <Text style={{color: 'peru'}}> - Description </Text>
                      </View>
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
    width: '100%',
  },
  actions: {
    height: '15%',
    marginTop: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  openChip: {
    // flex: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'springgreen',
    padding: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    height: 35,
    width: 35,
    // borderRadius: 35,
    // borderWidth: 1,
    // borderColor: 'red',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    margin: 10,
    height: '75%',
    backgroundColor: 'white',
  },
  field: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomProductCard;
