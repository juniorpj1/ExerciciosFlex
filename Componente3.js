import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function Componente3() {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.container}>
        <View style={[styles.card, styles.cor1]}>
          <Image source={require('./img/placa1.jpg')} style={styles.imagem} />
        </View>
        <View style={[styles.card, styles.cor1]}>
          <Image source={require('./img/placa2.jpg')} style={styles.imagem} />
        </View>
      </View>

      <View style={styles.container}>
        <View style={[styles.card, styles.cor2]}>
          <Image source={require('./img/placa3.jpg')} style={styles.imagem} />
        </View>
        <View style={[styles.card, styles.cor2]}>
          <Image source={require('./img/placa4.jpg')} style={styles.imagem} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
  },
  container: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    height: 100,
    marginRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 2,
    marginBottom: 20,
    padding: 10,    
  },
  cor1: {
    
  },
  cor2: {
    
  },
  imagem: {
    width: 90,
    height: 90,
    borderRadius: 8, 
    marginBottom: 10,
    marginTop: 10,
  },
});

export default Componente3;
