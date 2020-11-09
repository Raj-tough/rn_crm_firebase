import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {FAB, Snackbar, Portal, Provider} from 'react-native-paper';
import AddProductsModal from '../modals/AddProductsModal';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import CustomProductCard from '../shared/CustomProductCard';
import NewCategoryModal from '../modals/NewCategoryModal';

const themeColour = '#800080';

const ProductScreen = (props) => {
  const [showModalForAddNewProduct, setShowModalForAddNewProduct] = useState(
    false,
  );
  const [showModalForAddNewCategory, setShowModalForAddNewCategory] = useState(
    false,
  );
  const [orientation, setOrientation] = useState('portrait');
  const [productData, setproductData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({open: false});

  const {open} = state;
  const {user, productList} = props;

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const cbForSuccesfulAddproductSnackBar = () => {
    onToggleSnackBar();
  };

  const onStateChange = ({open}) => setState({open});
  const isPortrait = () => {
    return Dimensions.get('window').height >= Dimensions.get('window').width;
  };

  const cbForCloseModal = () => {
    setShowModalForAddNewProduct(false);
  };

  const cbForCloseCategoryModal = () => {
    setShowModalForAddNewCategory(false);
  };

  useEffect(() => {
    const tempArray = [];
    Object.keys(productList).map((productKey) => {
      tempArray.push({...productList[productKey], id: productKey});
      // console.log(productData);
      setproductData(tempArray);
    });
  }, [productList]);

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
      // console.log('destroyed');
    };
  });

  return (
    <View style={styles.container}>
      {showModalForAddNewProduct ? (
        <AddProductsModal
          userId={user.uid}
          cbForSuccesfulAddproductSnackBar={cbForSuccesfulAddproductSnackBar}
          cbForCloseModal={cbForCloseModal}
        />
      ) : null}
      {showModalForAddNewCategory ? (
        <NewCategoryModal
          userId={user.uid}
          // cbForSuccesfulAddproductSnackBar={cbForSuccesfulAddproductSnackBar}
          cbForCloseCategoryModal={cbForCloseCategoryModal}
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
              <View style={styles.noOfProducts}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Total - {productData ? productData.length : 0}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{height: orientation === 'portrait' ? '93%' : '85%'}}>
          <ScrollView>
            <View>
              {productData
                ? productData.map((product, index) => (
                    <View key={`${index}`}>
                      <CustomProductCard name={'column box'} data={product} />
                    </View>
                  ))
                : null}
            </View>
          </ScrollView>
        </View>
      </View>
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'close' : 'plus'}
            style={{backgroundColor: ''}}
            actions={[
              {
                icon: 'plus',
                label: 'Add Category',
                color: 'purple',
                onPress: () => setShowModalForAddNewCategory(true),
                style: {backgroundColor: 'white'},
              },
              {
                color: 'purple',
                icon: 'plus',
                label: 'Add product',
                onPress: () => setShowModalForAddNewProduct(true),
                style: {backgroundColor: 'white'},
              },
            ]}
            fabStyle={{backgroundColor: 'purple'}}
            onStateChange={onStateChange}
          />
        </Portal>
      </Provider>
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
        <Text style={{color: 'black'}}>Product succesfully added.</Text>
      </Snackbar>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    productList: state.ProductReducer.productList,
    user: state.authReducer.user,
  };
}
export default connect(mapStateToProps)(ProductScreen);
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

  chipsRow: {
    height: 50,
    // backgroundColor: 'lightgreen',
    flexDirection: 'row',
    alignItems: 'center',
  },
  noOfProducts: {
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
  addProduct: {
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
