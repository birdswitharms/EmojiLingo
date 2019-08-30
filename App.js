import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {theme} from './theme';

const App = () => {
  return (
    <Fragment>
      <View style={theme.main}>
        <Text style={theme.logoText}>Emoji Lingo</Text>
        <Text style={theme.subHeaderText}>
          A modern heiroglypics guessing game
        </Text>
      </View>
    </Fragment>
  );
};

export default App;
