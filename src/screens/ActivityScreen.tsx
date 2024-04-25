import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ActivityScreen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Icon name="pulse" size={300} color="lightgrey" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActivityScreen;
