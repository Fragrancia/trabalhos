import { useContext } from "react";
import { AppContext } from "../../../scripts/AppContext";
import { FlatList, View, StyleSheet, Text, Image } from "react-native";

export default Cart = () => {
  const { carrinho, setCarrinho } = useContext(AppContext);
  console.log(carrinho); 
  //criar uma varialvel chamada valor total


  const calcularTotal = () => {
    //fazer um laço for para cada item do carrinho add no valor total 
    return 
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.caixa}>
            <View style={styles.infoContainer}> 
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
              <Image source={item.Image} style={styles.imagem} />
            </View>
          </View>
        )}
      />
      
      <View style={styles.totalContainer}>
        <Text style={styles.totalTexto}>Total: R$ </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 20,
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
    paddingBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',  
    alignItems: 'center',  
  },
  imagem: {
    width: 150,  
    height: 150, 
    borderRadius: 12,
    marginRight: 10,  
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    padding: 20,
  },
  preco: {
    fontSize: 15,
    color: '#333',
    padding: 20
  },
  // Estilo para o contêiner do total
  totalContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
  },
  totalTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
