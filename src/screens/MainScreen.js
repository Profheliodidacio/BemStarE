import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/images/fundo_main_relaxar.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao BemStarE!</Text>
        <Button
          title="Ir para Relaxamento"
          onPress={() => navigation.navigate("Relaxamento")}
        />
        <Button
          title="Dicas de Especialistas"
          onPress={() => navigation.navigate("Especialistas")}
        />
        <Button title="Jogar" onPress={() => navigation.navigate("Game")} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Fundo semi-transparente para melhor visibilidade do texto
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default MainScreen;
