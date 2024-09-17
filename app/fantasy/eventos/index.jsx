import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#abb9b2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  }
});

// Dados da lista

const viagens = [
  { 
    id: '1', 
    Evento: 'Casa Do Autista', 
    data: '2024-07-10', 
    Local: '7 dias', 
    imagem: require('../img/casaautista.png') 
  },
  { 
    id: '2', 
    Evento: 'Caça aos Ovos', 
    data: '2024-04-01', 
    Local: 'Shopping Oka Floripa', 
    imagem: require('../img/pascoaOka.png')
  },
  { 
    id: '3', 
    Evento: 'Natal', 
    data: '2023-09-07', 
    Local: 'Shopping Oka Floripa', 
    imagem: require ('../img/natal.png')
  },
];


//Aqui seria como um "HTML" do app, a estrutura dele
const HistoricoViagens = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Viagens</Text>
      <FlatList
        data={viagens}
        keyExtractor={item => item.id}
        renderItem={Caixa}
      />
    </View>
  );
};

//Cada caixa da lista

const Caixa = ({ item }) => (
  <View style={styles.item}>
    <Image source={item.imagem} style={styles.imagem} />
    <Text style={styles.destino}>Evento: {item.Evento}</Text>
    <Text style={styles.duracao}>Local: {item.Local}</Text>
    <Text style={styles.data}>Data: {item.data}</Text>
    
  </View>
);




export default HistoricoViagens;