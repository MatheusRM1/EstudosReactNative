type ProdutoType = {
  nome: string;
  codigoZen: string;
  codigo: string;
  descricao: string;
  ordem: number;
  linha: string;
  imgProduto: string;
  plataforma: string;
  linkProduto: string;
  destaque: string;
  lancamento: boolean;
};

export async function getProduto() : Promise<ProdutoType> {
  const response = await fetch(
    "https://zensa-api.nuai.com.br/catalogo/pesquisa-rapida?codigo=6011"
  );
  const json = await response.json();
  return json.data[0];
}
