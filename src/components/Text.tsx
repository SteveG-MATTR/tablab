import React from 'react';
import {Text as RNText, TextProps, StyleSheet} from 'react-native';

const Text = (props: TextProps): React.JSX.Element => {
  return <RNText {...props} style={[styles.text, props.style]} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'QuickSand-Medium',
  },
});

export default Text;
