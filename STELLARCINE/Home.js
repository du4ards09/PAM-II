import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView} from 'react-native';

import PromocaoCard from './PromocaoCard';

//Imagens
import osFarofeirosImage from './../../assets/farofeiros.png';
import pactoComODemonioImage from './../../assets/Pacto.jpg';
import garraDeFerroImage from './../../assets/Garra.png';
import desesperoProfundoImage from './../../assets/Desespero.jpg';
import apaixonadaAos40Image from './../../assets/Apaixonada.png';
import bobMarleyOneLoveImage from './../../assets/Bob.png';
import oReinoGeladoImage from './../../assets/Reino.png';
import ferrariImage from './../../assets/Ferrari.jpg';
import pipocaImage from './../../assets/pipoca.png';
import refriImage from './../../assets/refri.png';

function Home ({ navigation}) {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  // Defina a lista de filmes em cartaz
  const filmesEmCartaz = [
    { id: '1', titulo: 'Os Farofeiros 2', horarios: ['14:00', '16:30'], sinopse: 'Classificação indicativa 12 Anos. Contém conteúdo sexual, drogas lícitas, linguagem imprópria.', imagem: osFarofeirosImage },
    { id: '2', titulo: 'Pacto com o Demônio', horarios: ['17:00', '19:30'], sinopse: 'Uma jovem tenta encontrar suas origens depois de ter sido abandonada quando criança em um cemitério envolta em um pano com símbolos satânicos, mas conforme ela se aproxima das respostas, um espírito malévolo está dizendo para ela ir embora. Classificação indicativa 16 Anos. Contém drogas lícitas, linguagem imprópria, violência.', imagem: pactoComODemonioImage },
    { id: '3', titulo: 'Garra de Ferro', horarios: ['20:00', '22:30'], sinopse: 'O longa, escrito e dirigido por Sean Durkin (Dead Ringers), conta a história real de uma família de lutadores que, além de terem que se enfrentar no ringue, também precisam lidar com uma série de tragédias pessoais, que ficaram conhecidas como “a maldição dos Von Erich”. Classificação indicativa 16 Anos. Contém conteúdo sexual, drogas, violência.', imagem: garraDeFerroImage },
    { id: '4', titulo: 'Desespero Profundo', horarios: ['23:00'], sinopse: 'Classificação indicativa 14 Anos. Contém linguagem imprópria, medo, violência.', imagem: desesperoProfundoImage },
  ];

  // Defina a lista de filmes em cartaz 2
  const filmesEmCartaz2 = [
    { id: '1', titulo: 'Apaixonada Aos 40', horarios: ['14:00', '16:30'], sinopse: 'Quando Bia (Giovanna Antonelli), uma mulher de 40 anos, percebe que seu casamento de 22 anos está falido, que sua vida está sem cor e que ela pode perder tudo se não mudar, ela entra em uma imensa crise. que a leva a um hospital. Sem mais nada para fazer, após o divórcio do marido e o afastamento da filha única, ela decide se reconhecer, se reconectar, se buscar em uma emocionante, leve e divertida jornada pelo amor próprio. Classificação indicativa 14 Anos. Contém conteúdo sexual, drogas lícitas, violência.', imagem: apaixonadaAos40Image },
    { id: '2', titulo: 'Bob Marley - One Love', horarios: ['17:00', '19:30'], sinopse: 'Em Bob Marley: One Love, o diretor Reinaldo Marcus Green nos leva numa jornada vibrante pela vida de Bob Marley, o lendário ícone do reggae. Com Kingsley Ben-Adir brilhando no papel principal, o filme desvenda os altos e baixos da vida pessoal e pública de Marley, desde sua ascensão na música até o atentado impactante de 1976. Entre notas marcantes e momentos de ativismo pela paz, o elenco estelar, com nomes como Lashana Lynch e James Norton, dá vida a uma narrativa que ressoa com a essência única de Marley. Uma celebração da música e do legado de um verdadeiro pioneiro. Classificação indicativa 16 Anos. Contém drogas, temas sensíveis, violência.', imagem: bobMarleyOneLoveImage },
    { id: '3', titulo: 'O Reino Gelado', horarios: ['20:00', '22:30'], sinopse: 'Kai e Gerda moram em uma cidade aconchegante e tranquila, de repente os Espíritos Gelados chegam lá para congelar todos. Porém, Ila, uma pequena feiticeira, surge para ajudar os heróis. Juntos, eles vão para o mundo mágico de Mirrorland para recuperar os Icy Spirits. Classificação indicativa Livre. Contém violência fantasiosa.', imagem: oReinoGeladoImage },
    { id: '4', titulo: 'Ferrari', horarios: ['23:00'], sinopse: 'Ferrari é uma envolvente cinebiografia dirigida por Michael Mann, baseada no livro Enzo: O Homem por Trás da Máquina. Adam Driver dá vida ao magnata italiano Enzo Ferrari, cuja visão revolucionou a indústria automotiva, moldando o cenário das corridas de Fórmula 1. A trama, selecionada para o Festival de Veneza de 2023, mergulha na vida pessoal e nos feitos extraordinários da família Ferrari, revelando os bastidores de uma lenda que deixou sua marca no mundo dos carros esportivos.. Classificação indicativa 16 Anos. Contém conteúdo sexual, drogas lícitas, violência.', imagem: ferrariImage },
  ];

  // Defina a lista de promoções
  const promocoes = [
    { id: '1', imagem: pipocaImage },
    { id: '2', imagem: refriImage },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.filmeItem} onPress={() => setFilmeSelecionado(item)}>
      <Image source={item.imagem} style={styles.imagemFilme} />
      <Text style={styles.filmeTitulo}>{item.titulo}</Text>
      <Text style={styles.filmeHorario}>{item.horarios.join(', ')}</Text>
    </TouchableOpacity>
  );

  const renderPromocao = ({ item }) => (
    <PromocaoCard
      titulo={item.titulo}
      descricao={item.descricao}
      imagem={item.imagem} />
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('./../../assets/LogoStellar.png')} style={styles.logo} />
        <View style={styles.navItems}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navText}> Home </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navText}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Devs')}>
            <Text style={styles.navText}> Devs </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.filmesEmCartazContainer}>
        <Text style={styles.sectionTitle}>Filmes em Cartaz</Text>
          <FlatList data={filmesEmCartaz} renderItem={renderItem} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} />
      </View>
      <View style={styles.promocoesContainer}>
        <Text style={styles.sectionTitle}>Promoções</Text>
        <FlatList data={promocoes} renderItem={renderPromocao} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} />
      </View>
      <View style={styles.filmesEmCartazContainer}>
        <Text style={styles.sectionTitle}>Filmes em Cartaz </Text>
        <FlatList data={filmesEmCartaz2} renderItem={renderItem} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} />
      </View>
      {filmeSelecionado && (
        <View style={styles.filmeDetalhes}>
          <Text style={styles.filmeDetalhesTitulo}>{filmeSelecionado.titulo}</Text>
          <Text style={styles.filmeDetalhesSinopse}>{filmeSelecionado.sinopse}</Text>
          <Text style={styles.filmeDetalhesHorarios}>Horários: {filmeSelecionado.horarios.join(', ')}</Text>
          <TouchableOpacity onPress={() => setFilmeSelecionado(null)}>
            <Text style={styles.botaoFechar}>Fechar</Text>
          </TouchableOpacity>
        </View>
      )}
     </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor:'#000000',

  },

  navbar: {

    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#7D008D',
    
  },

  logo: {

    width: 160,
    height: 60,
    marginRight: 8,

  },

  navItems: {

    flexDirection: 'row',
  },

  navItem: {

    padding: 10,

  },

  navText: {

    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',

  },

  filmesEmCartazContainer: {

    marginTop: 20,
    paddingHorizontal: 26,
    backgroundColor: '#000000',

  },

  promocoesContainer: {

    marginTop: 16,
    paddingHorizontal: 10,
    backgroundColor:'#000000',

  },

  sectionTitle: {

    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
    backgroundColor:'#000000',

  },

  filmeItem: {

    marginRight: 10,
    backgroundColor:'#000000',

  },

  imagemFilme: {

    width: 120,
    height: 180,
    borderRadius: 8,

  },

  filmeTitulo: {

    fontSize: 12,
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold',

  },

  filmeHorario: {

    color: '#fff',
    fontSize: 14,

  },

  filmeDetalhes: {

    padding: 22,
    width:'100%',
    height:'70%',
    marginTop: 8,
    backgroundColor: '#7D008D',

  },

  filmeDetalhesTitulo: {

    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',

  },

  filmeDetalhesSinopse: {

    fontSize: 16,
    color: '#fff',
    marginBottom: 10,

  },

  filmeDetalhesHorarios: {

    color: '#fff',
    fontSize: 14,

  },

  botaoFechar: {

    fontSize: 16,
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',

  },
});

export default Home;
