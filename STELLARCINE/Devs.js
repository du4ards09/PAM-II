import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import MariaIsabelly from './../../assets/MariaIsabelly.png';
import MariaEduarda from './../../assets/MariaEduarda.png';
import Felipe from './../../assets/Felipe.png';

const Devs = ({ navigation }) => {
  return (
    <LinearGradient colors={['#7D008D', '#000000']} style={styles.container}>
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
      <View style={styles.devsContainer}>
        <View style={styles.dev}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.devContent}>
            <Image source={MariaEduarda} style={styles.image} />
            <Text style={styles.name}> Maria Eduarda Lima </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dev}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.devContent}>
            <Image source={MariaIsabelly} style={styles.image} />
            <Text style={styles.name}> Maria Isabelly Matias </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dev}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.devContent}>
            <Image source={Felipe} style={styles.image} />
            <Text style={styles.name}> Felipe Tavares </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  dev: {
    marginBottom: 20,
  },
  devContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7D008D',
    paddingVertical: 10,
    paddingHorizontal: 20,
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  devsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Devs;
