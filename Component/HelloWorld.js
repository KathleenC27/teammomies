import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.freepik.com/512/5683/5683688.png' }} // Use uri property for remote URLs
        style={styles.image}
      />
      <Text>Hello World🎉</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default YourApp;
