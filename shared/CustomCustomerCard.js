import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Linking,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomCustomerCard = (props) => {
  const [expand, setExpand] = useState(false);

  const {data} = props;

  const initials = data.name.trim().split(' ');
  let initial = '';
  for (let i = 0; i < initials.length; i++) {
    initial += initials[i][0].toUpperCase();
  }
  const handleOpenContent = () => {
    setExpand(!expand);
  };

  const dial = (contact) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${contact}`;
    } else {
      phoneNumber = `telprompt:${contact}`;
    }
    Linking.openURL(phoneNumber);
  };
  // console.log(data);
  return (
    <View
      style={{
        marginLeft: '2.5%',
        alignItems: 'stretch',
        width: '95%',
        paddingBottom: 5,
      }}>
      <View style={{elevation: 3, borderRadius: 5, marginTop: 5}}>
        <TouchableNativeFeedback onPress={handleOpenContent}>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
              // width: '100%',
              backgroundColor: 'white',
              alignItems: 'center',
            }}>
            <View style={{flex: 8, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginRight: 15}}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: data.profileColor
                      ? data.profileColor
                      : 'orange',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    {initial}
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#333331',
                    fontWeight: 'bold',
                    // maxWidth: 120,
                  }}>
                  {data.name}
                </Text>
              </View>
              <View
                style={{
                  marginLeft: '3%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {data.phno ? (
                  <View
                    style={{
                      marginLeft: '2%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="call-outline"
                      size={25}
                      color="royalblue"
                      onPress={() => dial(data.phno)}></Icon>
                  </View>
                ) : null}
                {data.billOpen ? (
                  <View
                    style={{
                      marginLeft: '2%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 25,
                        marginLeft: 10,
                        borderWidth: 1,
                        borderColor: 'red',
                        backgroundColor: 'tomato',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'white'}}>{data.billOpen}</Text>
                    </View>
                  </View>
                ) : null}
                {data.billPending ? (
                  <View
                    style={{
                      marginLeft: '2%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 25,
                        marginLeft: 10,
                        borderWidth: 1,
                        borderColor: 'salmon',
                        backgroundColor: 'sandybrown',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'white'}}>{data.billPending}</Text>
                    </View>
                  </View>
                ) : null}
              </View>
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
                height: 225,
                width: '100%',
                backgroundColor: 'white',
              }}>
              <View style={styles.container}>
                <View style={styles.actions}>
                  <View style={{flex: 8, flexDirection: 'row'}}>
                    <View style={styles.openChip}>
                      <Text>Open - {data.billOpen ? data.billOpen : 0}</Text>
                    </View>
                    <View style={styles.pendingChip}>
                      <Text>
                        Pend - {data.billPending ? data.billPending : 0}
                      </Text>
                    </View>
                    <View style={styles.closedChip}>
                      <Text style={{color: 'white'}}>
                        Done - {data.done ? data.done : 0}
                      </Text>
                    </View>
                  </View>
                  <View style={{...styles.icons, flex: 1}}>
                    <Icon
                      name="create-outline"
                      size={25}
                      color="blue"
                      onPress={() => {}}></Icon>
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
                    <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="cash-outline"
                          size={20}
                          color="red"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text>200 ₹ </Text>
                        <Text style={{color: 'red'}}> - Pending Payment </Text>
                      </View>
                    </View>
                    <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="calendar-outline"
                          size={20}
                          color="slateblue"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text>12/09/2020</Text>
                        <Text style={{color: 'slateblue'}}>
                          {' '}
                          - Last Bill Date{' '}
                        </Text>
                      </View>
                    </View>
                    {data.address ? (
                      <View style={styles.field}>
                        <View style={{flex: 1, marginLeft: 10}}>
                          <Icon
                            name="location-outline"
                            size={20}
                            color="orangered"
                            onPress={() => {}}></Icon>
                        </View>
                        <View style={{flex: 8}}>
                          <Text>{data.address}</Text>
                        </View>
                      </View>
                    ) : null}

                    <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="cash-outline"
                          size={20}
                          color="green"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text>1700 ₹ </Text>
                        <Text style={{color: 'green'}}> - Total Paid </Text>
                      </View>
                    </View>
                    <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="document-attach-outline"
                          size={20}
                          color="darkmagenta"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8}}>
                        <Text>Aadhar card</Text>
                      </View>
                    </View>
                    <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="document-text-outline"
                          size={20}
                          color="dodgerblue"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text>2018 5403 5769 3234</Text>
                        <Text style={{color: 'dodgerblue'}}>
                          {' '}
                          - Proof Id no.{' '}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.field}>
                      <View style={{flex: 1, marginLeft: 10}}>
                        <Icon
                          name="calendar-outline"
                          size={20}
                          color="peru"
                          onPress={() => {}}></Icon>
                      </View>
                      <View style={{flex: 8, flexDirection: 'row'}}>
                        <Text>12/09/2020</Text>
                        <Text style={{color: 'peru'}}> - D.O.J </Text>
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
    flex: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'tomato',
    padding: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingChip: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: 'sandybrown',
    borderColor: 'goldenrod',
    padding: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closedChip: {
    flex: 1.5,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: 'darkgreen',
    borderColor: 'limegreen',
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

export default CustomCustomerCard;
