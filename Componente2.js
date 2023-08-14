import React from 'react';
import { View, StyleSheet } from 'react-native';

function Componente2() {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.container}>
        <View style={[styles.quadrado, styles.cor1]}></View>
        <View style={[styles.quadrado, styles.cor1]}></View>
        <View style={[styles.quadrado, styles.cor1]}></View>
      </View>

      <View style={styles.container}>
        <View style={[styles.quadrado, styles.cor2]}></View>
        <View style={[styles.quadrado, styles.cor2]}></View>
        <View style={[styles.quadrado, styles.cor2]}></View>
      </View>

      <View style={styles.container}>
        <View style={[styles.quadrado, styles.cor3]}></View>
        <View style={[styles.quadrado, styles.cor3]}></View>
        <View style={[styles.quadrado, styles.cor3]}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 110,
  },
  quadrado: {
    width: 100,
    height: 100,
    marginRight: 30,
  },
  cor1: {
    backgroundColor: '#50E3C2',
  },
  cor2: {
    backgroundColor: '#4A90E2',
  },
  cor3: {
    backgroundColor: '#9013FE',
  },
  cor4: {
    backgroundColor: '#F5A623',
  },
});

export default Componente2;