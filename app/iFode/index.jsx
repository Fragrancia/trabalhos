import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import {Link} from 'expo-router'
import { FlatList } from 'react-native-web';

const styles = StyleSheet.create({
  
})

const comidas = [
    { 
      id: '1', 
      nome: 'Coxinha', 
      imagem: source={uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJYnk19-jrGFPClIRsq16Ni2KtX-xgqkJkA&s'},
      preco: 'R$ 2,50'
    },
    { 
        id: '2', 
        nome: 'Quibe', 
        imagem: source={uri: 'https://acdn.mitiendanube.com/stores/001/282/481/products/quibe-medio1-ad062cba5da6e96e4d16291378894295-640-0.jpeg'},
        preco: 'R$ 3,50'
      },
      { 
        id: '3', 
        nome: 'Doguinho', 
        imagem: source={uri: 'https://lh3.googleusercontent.com/proxy/qn_dmDSjo_H4Uif536niW18doRJQ5t0IunwiAphzoHXDNf-F7E_6-9kuYNMx0QO0JfDwwqWbnbmJJG1zzWRr0IwnueM67y5QEYA0UuuzuyrLy_NZfWZN2zfjkrMQHgi6VT2kg7jqTwZCy74'},
        preco: 'R$ 4,00'
      },
      { 
        id: '4', 
        nome: 'Salsicha', 
        imagem: source={uri: 'https://nutrimassasesalgados.com/wp-content/uploads/2020/05/MG_6537-copiar.jpg'},
        preco: 'R$ 2,50'
      },
      { 
        id: '5', 
        nome: 'Pão de Queijo', 
        imagem: source={uri: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kuXEyh5D/200/200/original?country=br'},
        preco: 'R$ 1,50'
      },
];

const Comidas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Salgados</Text>
      <FlatList
        data={comidas}
        renderItem={Caixa}
      />
    </View>
  );
};

//Cada caixa da lista

const Caixa = ({ item }) => (
  <View style={styles.item}>
    <Link href ={{pathname:`/iFode/carrinho${item.id}`, params: {'salgados':JSON.stringify(item)}}}>
    <Image source ={item.imagem} style={styles.imagem} /></Link>
    <Text style={styles.nome}>Nome: {item.preco }</Text>
    <Text style={styles.preco}>Preço: {item.preco }</Text>
  </View>
);




export default Comidas;