import React, {useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';

const TabBar = ({state, descriptors, navigation}) => {
  const tabBarHeight = useRef(130);
  const styles = createStylesWithInsets(useSafeAreaInsets());
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const {navigate} = useNavigation();
  const totalTabs = state.routes.length;
  const {width} = useWindowDimensions();
  const tabWidth = width / totalTabs;

  const linePosition = useRef(new Animated.Value(state.index)).current;

  useEffect(() => {
    Animated.spring(linePosition, {
      toValue: state.index,
      useNativeDriver: true,
    }).start();
  }, [state.index, linePosition]);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const translateX = linePosition.interpolate({
    inputRange: [0, totalTabs - 1],
    outputRange: [0, (totalTabs - 1) * tabWidth],
  });
  console.log('!!! state.routes', state.routes);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (route.name === 'PopMenu') {
            navigation.navigate('PopupMenuModal', {
              tabBarHeight: tabBarHeight.current,
            });
            return;
          }
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          const navigationDisabled = route.params?.navigationDisabled;

          if (!isFocused && !event.defaultPrevented && !navigationDisabled) {
            navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = options.tabBarIcon;

        const {tabBarShowLabel = true} = options;

        return (
          <>
            <TouchableOpacity
              hitSlop={{top: 30, bottom: 30}}
              style={styles.tabButton}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.name}>
              <Icon size={32} color={isFocused ? '#007AFF' : '#ccc'} />
              {tabBarShowLabel && (
                <Text
                  style={[
                    styles.labelText,
                    {color: isFocused ? '#007AFF' : '#ccc'},
                  ]}>
                  {label}
                </Text>
              )}
            </TouchableOpacity>
            <View key={index} style={styles.verticalLine} />
          </>
        );
      })}
      <Animated.View
        style={[styles.indicator, {width: tabWidth, transform: [{translateX}]}]}
      />
    </View>
  );
};

const createStylesWithInsets = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingTop: 32,
      paddingBottom: 32 + insets.bottom,
    },
    indicator: {
      position: 'absolute',
      height: 2,
      backgroundColor: '#007AFF', // Color of the line
      top: 0,
    },
    tabButton: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    labelText: {fontSize: 12, marginTop: 6},
    tabButtonContent: {
      alignItems: 'center',
    },
    verticalLine: {
      width: 1,
      height: 32,
      backgroundColor: '#ddd',
    },
  });

export default TabBar;
