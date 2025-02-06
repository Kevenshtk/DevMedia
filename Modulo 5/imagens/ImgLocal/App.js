import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Congo from './assets/floresta-congo.png';
import Norte from './assets/floresta-taiga.png';
import Amazonia from './assets/floresta-amazonica.png';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Florestas pelo mundo</Text>

      <Image source={Congo} style={estilos.img}/>
      <Text style={estilos.margem}>Floresta do congo (África)</Text>

      <Image source={Norte} style={estilos.img}/>
      <Text style={estilos.margem}>Floresta taiga (Hemisfério Norte)</Text>

      <Image source={Amazonia} style={estilos.img}/>
      <Text style={estilos.margem}>Floresta Amazônica (América do Sul)</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 22,
    marginBottom: 30,
  },

  img: {
    width: 300,
    height: 100,
  },

  margem: {
    marginBottom: 20,
  },
});