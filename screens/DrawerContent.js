import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect, useDispatch} from 'react-redux';

import {toggleTheme} from '../actions/authAction';
import {logoutUser} from '../services/authService';

const DrawerContent = (props) => {
  const paperTheme = useTheme();
  const {isDarkTheme, user} = props;
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>
                  {user.email ? user.email : ''}
                </Title>
                <Caption style={styles.caption}>
                  {user.email ? user.email.split('@')[0] : ''}
                </Caption>
              </View>
            </View>

            {/* <View style={styles.row}> */}
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                Comp. name -
              </Paragraph>
              <Caption style={styles.caption}>SRK Rentals</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                Branch -
              </Paragraph>
              <Caption style={styles.caption}>Kovilpatti</Caption>
            </View>
            {/* <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View> */}
            {/* </View> */}
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="view-dashboard-outline" color={color} size={size} />
              )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate('Dashboard');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="card-bulleted-settings-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Bill"
              onPress={() => {
                props.navigation.navigate('BillScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cube-outline" color={color} size={size} />
              )}
              label="Products"
              onPress={() => {
                props.navigation.navigate('ProductScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="chart-bar" color={color} size={size} />
              )}
              label="Stock"
              onPress={() => {
                props.navigation.navigate('StockScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="face" color={color} size={size} />
              )}
              label="Customers"
              onPress={() => {
                props.navigation.navigate('CustomerScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                dispatch(toggleTheme(!isDarkTheme));
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                {/* <Icon name="white-balance-sunny" /> */}
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            dispatch(logoutUser());
          }}
        />
      </Drawer.Section>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    isDarkTheme: state.authReducer.isDarkTheme,
    user: state.authReducer.user,
  };
}

export default connect(mapStateToProps)(DrawerContent);
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: 15,
    marginTop: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
