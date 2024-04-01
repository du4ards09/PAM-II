import * as React from 'react';
import { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { View, Text, Animated, Easing, StyleSheet, Image, TouchableOpacity} from 'react-native';

//imagens
import Logo from './assets/LogoSemFundo.png';

//páginas
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Devs from './src/pages/Devs';

function SplashScreen({ navigation }) {
  const moveAnim = useRef(new Animated.Value(-100)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const moveAnimation = Animated.timing(moveAnim, {toValue: 100, duration: 6000, useNativeDriver: true});
    const rotateAnimation = Animated.timing(rotateAnim, {toValue: 1, duration: 4000, easing: Easing.linear, useNativeDriver: true});

    Animated.parallel([moveAnimation, rotateAnimation]).start();

    const navigateTimeout = setTimeout(() => {navigation.navigate('Saudacao');}, 8000);

    return () => {
      moveAnimation.stop();
      rotateAnimation.stop();
      clearTimeout(navigateTimeout);
    };
  }, [moveAnim, navigation, rotateAnim]);

  const rotation = rotateAnim.interpolate({inputRange: [0, 1], outputRange: ['0deg', '360deg']});

  return (
    <LinearGradient colors={['#7D008D', '#000000']} style={styles.container}>
      <View style={styles.container}>
        <Animated.Text style={[styles.text, { transform: [{ translateY: moveAnim }] }]}> Stellar Cine </Animated.Text>
        <Animated.Text style={[styles.star, { transform: [{ rotate: rotation }] }]}> ★★★★★ </Animated.Text>
      </View>
    </LinearGradient>
  );
}

function Saudacao ({ navigation }) {
  return (
    <LinearGradient colors={['#7D008D', '#000000']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={Logo} style={styles.logoImage}/>
        </View> 
        {/*TouchableOpacitys*/}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}> Entrar sem Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Saudacao" component={Saudacao}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Devs" component={Devs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  LogoImage: {

    width: '16rem',
    height: '20rem',
    alignItems: 'center',
    justifyContent: 'center',

  },

  text: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginBottom: 20,
  },

  star: {
    fontSize: 55,
    color: '#fff',
    marginTop: -30,
    fontWeight: 'bold',
  },

  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#7D008D',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
