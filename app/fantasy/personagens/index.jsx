import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import {Link} from 'expo-router';

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
    padding: 30,
    borderRadius: 5,
    marginBottom: 20,
    
  },
  imagem: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,

  },
  Nome: {
    fontSize: 15,
    fontWeight: 'bold'
  }

});

// Dados da lista

const personagens = [
  { 
    id: '1', 
    nome: 'Docinho', 
    imagem:  require('../img/natalino.png'),
    descricao: 'O Elfo Mais Brincalhão da Fábrica Docinho é um elfo natalino peculiar, cheio de energia e uma dose extra de travessura. Com um sorriso largo e olhos brilhantes, ele é a personificação da alegria e do caos na oficina de brinquedos. Docinho é conhecido por sua natureza infantil e excêntrica, sempre pronto para uma nova aventura ou uma boa brincadeira.Sua euforia é contagiante, mas às vezes pode ser um pouco exagerada, levando-o a irritar os outros elfos com suas piadas e travessuras. No entanto, seu coração é puro e suas intenções sempre são boas. Docinho adora fazer as crianças rirem e, por isso, dedica-se a criar brinquedos que estimulem a atividade física e a diversão. Sua função na Fábrica: Sendo um especialista em brinquedos esportivos, Docinho é o responsável por criar os mais incríveis equipamentos para as crianças brincarem ao ar livre. Desde bolas mágicas que nunca param de quicar até skates voadores, sua imaginação não tem limites. Ele adora experimentar novos materiais e designs, sempre buscando criar brinquedos que surpreendam e encantem as crianças.'
  },
  { 
    id: '2', 
    nome: 'Coelinho Blue', 
    imagem:  require('../img/pascoa.png'),
    descricao: 'Blue é um coelhinho da Páscoa como nenhum outro! Com sua pelagem azul vibrante, ele se destaca entre os outros coelhinhos da fábrica de ovos. Apesar de sua aparência chamativa, Blue é um coelho bastante tímido. Ele adora observar tudo ao seu redor, espreitando por entre as caixas de chocolate e os cestos de ovos coloridos. A curiosidade de Blue o leva a explorar cada canto da fábrica. Ele se encanta com as máquinas que embalam os ovos, com as tintas brilhantes usadas para decorar os chocolates e com a magia que transforma cada ovo em uma surpresa especial. No entanto, toda vez que alguém se aproxima, ele se esconde rapidamente em algum lugar seguro, esperando a oportunidade perfeita para continuar suas aventuras.'
  },
  { 
    id: '3', 
    nome: 'O Palhaço Fafa', 
    imagem: require ('../img/clow.png'),
    descricao: 'Fafa, o palhaço mais divertido do circo, contagia a todos com seu sorriso radiante e suas roupas extravagantes. Seus trajes, uma explosão de cores vibrantes, refletem sua personalidade alegre e espontânea. Embora não seja um mestre dos malabarismos, Fafa compensa com sua habilidade de fazer as crianças rirem e se divertirem, criando um mundo mágico com sua imaginação fértil.'
  },
  { 
    id: '4', 
    nome: 'Frankstein', 
    imagem: require ('../img/frankstein.png'),
    descricao: 'Frankenstein, um personagem de pouca fala, porem muito forte. Personagem que marca presença onde chega, pelo seu tamanho, força e sua cor nada comum.'
  },
];


//Aqui seria como um "HTML" do app, a estrutura dele
const Personagem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Personagens</Text>
      <FlatList
        data={personagens}
        renderItem={Caixa}
      />
    </View>
  );
};

//Cada caixa da lista

const Caixa = ({ item }) => (
  <View style={styles.item}>
    <Link href ={{pathname:`/fantasy/detalhe/${item.id}`, params: {'personagem':JSON.stringify(item)}}}>
    <Image source ={item.imagem} style={styles.imagem} /></Link>
    <Text style={styles.Nome}>Nome: {item.nome }</Text>
  </View>
);




export default Personagem;
