import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titulo}>Atividades 2024</Text>
            <Link href="/calculadora1" style={styles.link}>• Calculadora modelo 1</Link>
            <Link href="/calculadora2" style={styles.link}>• Calculadora modelo 2</Link>
            <Link href="/carta" style={styles.link}>• Jogo de Carta</Link>
            <Link href="/fantasy" style={styles.link}>• Meu Portifólio de Ator</Link>
            <Link href="/lista" style={styles.link}>• Atv de Lista</Link>
            <Link href="/login" style={styles.link}>• Atv Login</Link>
            <Link href="/poke" style={styles.link}>• Pokemon</Link>
            <Link href="/viagem" style={styles.link}>• Minhas Viagens</Link>
            <Link href="/iFode" style={styles.link}>• Ifome</Link>
            <Link href="/galeria" style={styles.link}>• Galeria</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        
    },
    link: {
        fontSize: 18,
        margin: 8,
        color: 'black',
       
    },
    box:{
        shadowOpacity: 0.25,  
        shadowRadius: 8.84, 
       padding: 50,
       borderRadius:15   
    },
    titulo:{
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
        fontFamily: 'Open Sans',
        fontWeight: '800',
    }
});