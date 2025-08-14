export async function getProduto() {
  const response = await fetch(
    "https://zensa-api.nuai.com.br/catalogo/pesquisa-rapida?codigo=6011"
  );
  const json = await response.json();
  return json.data[0];
}
