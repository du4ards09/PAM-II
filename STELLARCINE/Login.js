import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';

//imagens
import Logo from './../../assets/LogoSemFundo.png';


const Login = ({ navigation }) => {
  return (
    <LinearGradient colors={['#7D008D', '#000000']} style={styles.container}>
        <View style={styles.container}>
            <Image source={Logo} style={styles.LogoImage}/>
            <TextInput placeholder="Email"style={styles.input}/>
            <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}> Entrar </Text>
            </TouchableOpacity>
        </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({

  container: {

    flex: 1,
    width: '100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',

  },

  LogoImage: {

    width: '16rem',
    height: '20rem',
    alignItems: 'center',
    justifyContent: 'center',

  },

  input: {

    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: '#7D008D',
    borderRadius: 5,
    color: '#Ffffff',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  button: {

    width: '80%',
    height: 40,
    backgroundColor: '#7D008D',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },

  buttonText: {

    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },

});

export default Login;
