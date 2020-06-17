import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Home({ navigation }){
  return(
    <View style={styles.container}>
     <Text>home</Text>
     
     <View  style={{flexDirection:'row' }}>
       <Button
        title="perfil"
        onPress={() =>
        navigation.navigate('Perfil')} 
        />
       <Button
        title="login"
        onPress={() =>
        navigation.navigate('Login', { name: 'Juan' }) }
        />
     </View>
    </View>
  );
} 

function Login({navigation}){
  return(
    <View style={styles.container}>
      <Text style={{fontSize:29,color:'green'}}>Login</Text>
      <TextInput
        style={{ width:400, height: 50,fontSize:22,margin:10}}
        placeholder="Usuario"
        onChangeText={nombre => console.log(nombre)}
      />
       <TextInput
        style={{ width:400, height: 50,fontSize:22,margin:10}}
        placeholder="Password"
        onChangeText={password => console.log(password)}
      />
       <Button
        color="green"
        title="Login"
        onPress={() =>
        navigation.navigate('Perfil', { name: '' }) }
        />

    </View>
  );
}

function Perfil(){
  return(
    <View style={styles.perfilContainer}>
      <Text style={{fontSize:29,color:'green'}}>Perfil</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  perfilContainer: {
    flex: 1,
    backgroundColor: '#C2B3DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
