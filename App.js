import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <View style={styles.engine}>
        <Text style={styles.logo}>Emoji Lingo</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  engine: {
    backgroundColor: '#00906c',
    height: '100%',
  },
  logo: {
    fontSize: 24,
    position: 'absolute',
    right: '50%',
    top: '50%',
    textAlign: 'center',
  },
});

export default App;
