import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import {Link} from 'expo-router'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imgperfil: {
    width: 175,
    height: 200,
    borderRadius: 75,
    marginBottom: 20,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#2196f3',
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Fantasy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Portfólio de Ator</Text>

      <Image
        source={require('./img/perfil.png')}
        style={styles.imgperfil}
      />


      <Text style={styles.descricao}>
        Sou um ator versátil e apaixonado pela arte de interpretar. Com uma sólida formação em teatro, desenvolvi habilidades excepcionais para me conectar com o público e dar vida a personagens complexos e memoráveis.

        Minha experiência em recepção e entretenimento me permite criar um ambiente acolhedor e divertido, tornando qualquer evento mais especial.

        Sou conhecido por minhas performances dinâmicas e envolventes. Seja em peças teatrais, eventos corporativos ou ações promocionais, minha presença garante o sucesso do projeto.

        Com um perfil físico marcante e uma grande capacidade de adaptação, sou perfeito para interpretar uma variedade de papéis, desde personagens heroicos até vilões inesquecíveis.
      </Text>

      <View style={styles.botao}>

        <Link href='/fantasy/personagens'> 
          <Button title="Meus Personagens"/>
        </Link>

        <Link href='/fantasy/eventos' > 
          <Button title="Eventos"/>
        </Link>

      </View>
    </View>
  );
}
