import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const PromocaoCard = ({ imagem }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={imagem} style={styles.imagem} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {

    flex:1,
    backgroundColor: '#000000',
    borderRadius: 8,
    marginRight: 10,
    width: 200,
    height: 200,

  },

  imagem: {

    width: 200,
    height: 200,
    borderRadius: 8,
    backgroundColor:'#000000',

  },
});

export default PromocaoCard;
