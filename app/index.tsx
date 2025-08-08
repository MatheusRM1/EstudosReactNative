import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.forms}>
        <Text style={styles.title}>Formulário</Text>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} keyboardType="numeric" />
        <TextInput style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    minHeight: "100%",
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  forms: {
    width: "80%",
    height: "40%",
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    gap: 30,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
  },
});
