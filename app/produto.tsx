import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Produto() {
  const [produto, setProduto] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://zensa-api.nuai.com.br/catalogo/pesquisa-rapida?codigo=6011"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setProduto(result.data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setError(error instanceof Error ? error.message : "Erro desconhecido");
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Carregando produto...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página do Produto</Text>
      <Text style={styles.info}>Nome: {produto.nome || "Sem nome"}</Text>
      <Text style={styles.info}>Linha: {produto.linha}</Text>
      <Text style={styles.info}>Código: {produto.codigoZen}</Text>
      <Text style={styles.info}>Descrição: {produto.descricao}</Text>
      <Image source={{ uri: produto.imgProduto }} style={styles.image} />
      <Text style={styles.url}>Link do Produto: {produto.linkProduto}</Text>
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
