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
        alignItems: 'center',
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold', 
        color: '#333', 
        textAlign: 'center', 
        marginVertical: 10, 
    },
    descricao:{
        fontSize: 16, 
        color: '#666',
        textAlign: 'justify',
        lineHeight: 24, 
        marginHorizontal: 20, // margem nas laterais
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