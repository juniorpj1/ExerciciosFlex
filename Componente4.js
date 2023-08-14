import React from 'react';
import { View, StyleSheet } from 'react-native';

function Componente4() {
  return (
    <View style={styles.container}>
      <View style={[styles.quadrado, styles.cor1]}></View>
      <View style={[styles.quadrado, styles.cor2]}></View>
      <View style={[styles.quadrado, styles.cor3]}></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  quadrado: {
    width: 80,
    height: 80,
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
  container: {
    flexDirection: 'column',
    marginTop: 250,
    justifyContent: 'center',          
    alignItems: 'center',
  },
});

export default Componente4;