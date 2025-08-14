import { getProduto } from "@/hooks/useProduto";
import { useQuery } from "@tanstack/react-query";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Produto() {

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ["produto"],
    queryFn: getProduto
  })

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Carregando produto...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página do Produto</Text>
      <Text style={styles.info}>Nome: {data?.nome || "Sem nome"}</Text>
      <Text style={styles.info}>Linha: {data?.linha}</Text>
      <Text style={styles.info}>Código: {data?.codigoZen}</Text>
      <Text style={styles.info}>Descrição: {data?.descricao}</Text>
      <Image source={{ uri: data?.imgProduto }} style={styles.image} />
      <Text style={styles.url}>Link do Produto: {data?.linkProduto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
  url: {
    fontSize: 12,
    color: "#666",
    marginTop: 10,
    textAlign: "center",
  },
});
