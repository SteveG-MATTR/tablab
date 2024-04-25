import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './navigation/AppNavigation';
import {setCustomText} from 'react-native-global-props';

// Setting default styles for all Text components.
const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: 'QuickSand-Medium',
  },
};

setCustomText(customTextProps);

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
