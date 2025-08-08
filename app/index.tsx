import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  function isNull() {
    return name === "" || phone === "" || date === "";
  }

  function showToast() {
    ToastAndroid.showWithGravity(
      `Nome: ${name} Tel: ${phone} Data: ${date}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  }

  return (
    <View style={[styles.container, styles.center]}>
      <View style={styles.forms}>
        <Text style={styles.title}>Formulário</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu Nome"
          value={name}
          onChangeText={(e) => setName(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Insira seu Telefone"
          keyboardType="numeric"
          value={phone}
          onChangeText={(e) => setPhone(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Insira sua Data de Nascimento"
          value={date}
          onChangeText={(e) => setDate(e)}
        />
        <Button title="Enviar" disabled={isNull()} onPress={showToast} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: "50%",
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
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
