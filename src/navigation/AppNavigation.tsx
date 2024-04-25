/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import TabBar from '../components/TabBar';
import WalletScreen from '../screens/WalletScreen';
import ActivityScreen from '../screens/ActivityScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PopupMenuModalScreen from '../screens/PopupMenuModalScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName="Wallet"
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'QuickSand-Bold',
        },
      }}>
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcon
              name="wallet-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcon name="pulse" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PopMenu"
        component={View}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcon
              name="arrow-up-down-bold-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainStack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="PopupMenuModal"
        component={PopupMenuModalScreen}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
      />
    </MainStack.Navigator>
  );
};
