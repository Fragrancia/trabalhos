import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import {Link} from 'expo-router'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
      backgroundColor: '#fff',
    },
    titulo: {
      padding: 20,
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#4a4a4a', 
      textShadowColor: 'rgba(0, 0, 0, 0.2)', // sombra
      textShadowOffset: { width: 3, height: 2 }, //deslocamento da sombra
    },
    imgperfil: {
      width: 175,
      height: 210,
      borderRadius: 50,
      marginBottom: 20,
      alignSelf: 'center', //pra centraliar a img
    },
    Legenda: {
      fontSize: 16, // tamanho da fonte
      color: '#666',
      textAlign: 'justify',
      lineHeight: 24, //espaçamento entre as linhas
      marginHorizontal: 20, // margem nas laterais
    },
    botao: { //exemplo de botao bonito
      backgroundColor: '#2196f3',
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
  });