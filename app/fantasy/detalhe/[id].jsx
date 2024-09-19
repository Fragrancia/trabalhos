import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const styles = StyleSheet.create({
    imagem: {
      width: '100%',
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    card: {
        padding: 10,
        alignItems: 'center', // Centraliza horizontalmente
    },
    nome: {
        fontSize: 24, // Tamanho da fonte
        fontWeight: 'bold', // Negrito
        color: '#333', // Cor do texto
        textAlign: 'center', // Centraliza o texto
        marginVertical: 10, // Espaço em cima e embaixo do título
    },
    descricao:{
        fontSize: 16, // Tamanho da fonte
        color: '#666', // Cor do texto 
        textAlign: 'justify',
        lineHeight: 24, // Define o espaçamento entre as linhas
        marginHorizontal: 20, // Margem nas laterais
    }

  });

export default DetalheTela= () => {
    const { personagem } = useLocalSearchParams();
    const personagemObject = JSON.parse(personagem);

    console.log(personagemObject)

    return(
        <ScrollView>
            <View style={styles.card}>
                <Image source={{ uri: personagemObject.imagem}} style={styles.imagem} />
                <Text style={styles.nome}>{personagemObject.nome}</Text>
                <Text style={styles.descricao}>{personagemObject.descricao}</Text>
            </View>
        </ScrollView>
    );
}