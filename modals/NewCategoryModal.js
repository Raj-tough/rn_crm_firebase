import React from 'react';
import {
  View,
  Text,
  Modal,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropdownInput from '../shared/DropdownInput';

const NewCategorymodal = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={props.cbForCloseCategoryModal}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: (90 / 100) * Math.round(Dimensions.get('window').width),
            height: (90 / 100) * Math.round(Dimensions.get('window').height),
            borderRadius: 15,
          }}>
          <View
            style={{
              height: '25%',
              backgroundColor: 'purple',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <View style={styles.modalHeader}>
              <Text style={styles.title}>Create New Category</Text>
              <View style={styles.closeButtonContainer}>
                <TouchableOpacity onPress={props.cbForCloseCategoryModal}>
                  <Icon name={'close-outline'} size={35} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.modalBody}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="trail-sign-outline" size={80} color={'white'} />
                <Icon name="add-outline" size={30} color={'white'} />
              </View>
            </View>
          </View>
          <View style={{height: '67%'}}>
            <Text>asdasd</Text>
            <DropdownInput />
          </View>
          <View
            style={{
              height: '8%',
              backgroundColor: 'darkorchid',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <View
              style={{
                marginLeft: 10,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'flex-start',
                width: '90%',
              }}>
              <Icon name="information-circle-outline" color="white" size={25} />
              <View style={{marginLeft: 5}}>
                <Text style={{color: 'white'}}>
                  After creating Category, Please add the products in the add
                  products .
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewCategorymodal;

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: 'row',
  },
  modalBody: {
    padding: 10,
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
