import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RelaxamentoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Relaxamento</Text>
      <Text style={styles.description}>
        Aqui você pode relaxar e se sentir bem.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default RelaxamentoScreen;
