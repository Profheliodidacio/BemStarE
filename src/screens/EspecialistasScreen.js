import React from "react";
import { View, Text, StyleSheet, FlatList, Linking } from "react-native";

const especialistas = [
  {
    id: "1",
    nome: "Dr. João Silva",
    especialidade: "Psicólogo",
    dica: "Pratique a meditação diariamente para reduzir o estresse.",
    link: "https://example.com/dr-joao-silva",
  },
  {
    id: "2",
    nome: "Dra. Maria Souza",
    especialidade: "Nutricionista",
    dica: "Mantenha uma dieta equilibrada rica em frutas e vegetais.",
    link: "https://example.com/dra-maria-souza",
  },
  {
    id: "3",
    nome: "Dr. Carlos Pereira",
    especialidade: "Fisioterapeuta",
    dica: "Faça alongamentos regularmente para melhorar a flexibilidade.",
    link: "https://example.com/dr-carlos-pereira",
  },
];

const EspecialistasScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Especialistas</Text>
      <FlatList
        data={especialistas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.especialidade}>{item.especialidade}</Text>
            <Text style={styles.dica}>{item.dica}</Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL(item.link)}
            >
              Saiba mais
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  especialidade: {
    fontSize: 16,
    color: "#555",
  },
  dica: {
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 5,
  },
  link: {
    fontSize: 14,
    color: "blue",
    marginTop: 5,
  },
});

export default EspecialistasScreen;
