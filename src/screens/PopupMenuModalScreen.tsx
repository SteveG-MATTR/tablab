import React from 'react';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {FlipInEasyX} from 'react-native-reanimated';

const PopupMenuModalScreen = (): React.JSX.Element => {
  const navigation = useNavigation();
  const tabBarHeight = useRoute().params?.tabBarHeight;
  const styles = getStylesWithInsets({bottom: tabBarHeight});
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Pressable style={styles.container} onPress={goBack}>
      <Animated.View entering={FlipInEasyX} style={styles.content}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => {}}>
          <MaterialCommunityIcon name="qrcode" size={30} color="white" />
          <Text style={styles.labelText}>Share Credential</Text>
        </TouchableOpacity>
        <View style={styles.verticalSeparator} />
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => {}}>
          <MaterialCommunityIcon
            name="focus-field-horizontal"
            size={30}
            color="white"
          />
          <Text style={styles.labelText}>Respond or collect</Text>
        </TouchableOpacity>
      </Animated.View>
    </Pressable>
  );
};

const getStylesWithInsets = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'stretch',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      // To Do: add margin to the bottom of the screen
      // based on the tab bar height
      marginBottom: insets.bottom,
    },
    content: {
      backgroundColor: 'blue',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonWrapper: {
      flex: 1,
      paddingVertical: 40,
      alignItems: 'center',
    },
    verticalSeparator: {
      width: 1,
      height: '50%',
      backgroundColor: '#ffffff88',
    },
    labelText: {
      paddingTop: 10,
      color: 'white',
    },
  });

export default PopupMenuModalScreen;
