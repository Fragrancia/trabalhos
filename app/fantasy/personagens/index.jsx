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
    nome: 'Natalino', 
    imagem:  require('../img/natalino.png')
  },
  { 
    id: '2', 
    nome: 'Pascoa', 
    imagem:  require('../img/pascoa.png')
  },
  { 
    id: '3', 
    nome: 'Clow', 
    imagem: require('../img/clow.png')
  },
];


//Aqui seria como um "HTML" do app, a estrutura dele
const HistoricoViagens = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Viagens</Text>
      <FlatList
        data={viagens}
        renderItem={Caixa}
      />
    </View>
  );
};

//Cada caixa da lista

const Caixa = ({ item }) => (
  <View style={styles.item}>
    <Image source={item.imagem} style={styles.imagem} />
    <Text style={styles.Nome}>Nome: {item.nome}</Text>
  </View>
);




export default HistoricoViagens;