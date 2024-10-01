import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button, Alert} from 'react-native';
import { Link } from 'expo-router';
import { AppContext } from '../../scripts/AppContext';

const Comidas = () => {
    const comida = [
        { id: 1, titulo: 'Pastel', preco: '5,50', Image: require('./img/pasteis.png') },
        { id: 2, titulo: 'Pão de Queijo', preco: '2,50', Image: require('./img/paodequeijo.png') },
        { id: 3, titulo: 'Quibe', preco: '3,00', Image: require('./img/quibe.png') },
    ];
    const {carrinho, setCarrinho} = useContext(AppContext)

    return (
        <View style={styles.container}>
            <Link href="iFode/carrinho" style={styles.link}>carrinho</Link>
            <FlatList
                data={comida}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.caixa}>
                        
                        <Text style={styles.titulo}>{item.titulo}</Text>
                        <Text style={styles.preco}>{item.preco}</Text>
                        <Image source={item.Image} style={styles.imagem} />
                        <Button 
                        title='Adicionar ao Carrinho'
                        color={'#53b4e1'}
                        onPress={() => setCarrinho([...carrinho, item])}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c2d9e5',
        padding: 10,
    },
    caixa: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        overflow: 'hidden',
        paddingBottom: 20,
    },
    imagem: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 12,
        color: '#333',
        textAlign: 'center',
    },
    preco: {
        fontSize: 14,
        color: '#666',
        paddingHorizontal: 12,
        paddingBottom: 12,
        textAlign: 'center',
    },
    botao: {
        backgroundColor: '0000ff',
        borderRadius: 8,
        paddingVertical: 10,
        marginHorizontal: 12,
        marginBottom: 12,
        alignItems: 'center',
    }, 
    
    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Comidas;