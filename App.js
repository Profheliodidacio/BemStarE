// Importações necessárias
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/MainScreen";
import RelaxamentoScreen from "./src/screens/RelaxamentoScreen";
import EspecialistasScreen from "./src/screens/EspecialistasScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Relaxamento" component={RelaxamentoScreen} />
        <Stack.Screen name="Especialistas" component={EspecialistasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

