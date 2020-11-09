import React from 'react';
import {
  View,
  Text,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTimeline from '../shared/customTimeline';

const data = {
  productName: 'Column box',
  categoryName: 'COLUMN BOX',
  startedDate: '23/02/2020',
  history: [
    {
      action: 'Added',
      prevQuantity: '3',
      actionQuantity: '2',
      currentQuantity: '5',
      dateOfAction: '12/03/2020',
    },
    {
      action: 'Added',
      prevQuantity: '3',
      actionQuantity: '2',
      currentQuantity: '5',
      dateOfAction: '12/03/2020',
    },
    {
      action: 'Destroyed',
      prevQuantity: '3',
      actionQuantity: '2',
      currentQuantity: '5',
      dateOfAction: '12/03/2020',
    },
    {
      action: 'Added',
      prevQuantity: '3',
      actionQuantity: '2',
      currentQuantity: '5',
      dateOfAction: '12/03/2020',
    },
    {
      action: 'Added',
      prevQuantity: '3',
      actionQuantity: '2',
      currentQuantity: '5',
      dateOfAction: '12/03/2020',
    },
    {
      action: 'Destroyed',
      prevQuantity: '3',
      actionQuantity: '2',
      currentQuantity: '5',
      dateOfAction: '12/03/2020',
    },
    {
      action: 'Added',
      prevQuantity: '3',
      actionQuantity: '2',
      currentQuantity: '5',
      dateOfAction: '12/03/2020',
    },
  ],
};

const CustomTimelineModal = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={props.hideDialog}>
      {/* <TouchableWithoutFeedback onPress={props.hideDialog}> */}
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
        }}>
        {/* <TouchableWithoutFeedback onPress={() => {}}> */}
        <View
          style={{
            backgroundColor: 'white',
            width: (90 / 100) * Math.round(Dimensions.get('window').width),
            height: (90 / 100) * Math.round(Dimensions.get('window').height),
            borderRadius: 15,
          }}>
          {/* Content goes here */}
          <View
            style={{
              height: '25%',
              backgroundColor: 'purple',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <View style={styles.modalHeader}>
              <Text style={styles.title}>Column box - Count Timenline</Text>
              <View style={styles.closeButtonContainer}>
                <TouchableOpacity onPress={props.hideDialog}>
                  <Icon name={'close-outline'} size={35} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.modalBody}>
              <View style={{width: '70%'}}>
                <View style={{marginVertical: 5}}>
                  <Text style={{color: 'white'}}>
                    Category Name - {data.categoryName}
                  </Text>
                </View>
                <View style={{marginVertical: 5}}>
                  <Text style={{color: 'white'}}>
                    Size - {'1 x 0.75 x 4'} ft
                  </Text>
                </View>
                <View style={{marginVertical: 5}}>
                  <Text style={{color: 'white'}}>Total count - {23} </Text>
                </View>
              </View>
              <View
                style={{
                  width: '30%',
                  // backgroundColor: 'red',
                  height: '100%',
                  borderWidth: 3,
                  borderColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 250,
                }}>
                <Text
                  style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>
                  23
                </Text>
              </View>
            </View>
          </View>

          {/* Body content goes here */}
          <View style={{height: '75%'}}>
            <CustomTimeline data={data.history} />
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </View>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  );
};

export default CustomTimelineModal;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    // marginTop: 20,
  },
  modalHeader: {
    flexDirection: 'row',
  },
  modalBody: {
    padding: 10,
    flexDirection: 'row',
  },
  title: {
    flex: 6,
    marginHorizontal: 10,
    marginVertical: 10,
    fontStyle: 'normal',
    fontSize: 22,
    color: 'white',
  },
  closeButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
    paddingTop: 5,
  },
});
