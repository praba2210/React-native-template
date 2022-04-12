import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { 
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon, 
  } from "native-base";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import CreateAccount from './screens/CreateAccount';
import Home from './screens/Home';
import Search from './screens/Search';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const AuthStack = ({ navigation }) => (
  <Stack.Navigator initialRouteName="CreateAccount">
    <Stack.Screen name="CreateAccount" component={CreateAccount} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

const LoggedInStack = ({ navigation }) => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
);

export default function App() {
  return (
   <NavigationContainer>
    <NativeBaseProvider>
      {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> 
          </View>*/}
      <Drawer.Navigator initialRouteName="AuthStack">
        <Drawer.Screen name="AuthStack" component={AuthStack} />
        <Drawer.Screen name="LoggedInStack" component={LoggedInStack} />
      </Drawer.Navigator>

    </NativeBaseProvider>
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
});

registerRootComponent(App);