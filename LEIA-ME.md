# VH Achados Mobile V10

Nesta versão, **todos os produtos das três categorias** usam a mesma navegação em duas etapas que começou no Fone Bluetooth.

## Como funciona

1. A pessoa escolhe uma categoria: Eletrônicos, Moda masculina ou Móveis decorativos.
2. Toca em um produto principal, por exemplo `Smartwatch inteligente`.
3. Abre uma lista com 4 modelos/opções daquele produto.
4. Ao tocar em uma opção, aparecem a descrição e três plataformas:
   - Amazon
   - Shopee
   - Mercado Livre
5. O botão `Opções` volta para a lista anterior.

## Produtos que agora possuem opções

### Eletrônicos
- Fone Bluetooth
- Smartwatch inteligente
- Mini projetor portátil
- Carregador portátil

### Moda masculina
- Camiseta masculina premium
- Tênis casual masculino
- Relógio masculino
- Carteira slim

### Móveis decorativos
- Luminária de mesa
- Mesa lateral decorativa
- Espelho decorativo
- Prateleira flutuante

Cada produto possui 4 opções de exemplo. Os links das lojas são gerados como buscas pelo nome da opção até que você substitua por seus links de afiliado reais.

## Como colocar preços e links reais

Abra `script.js`, localize a opção desejada e adicione:

```js
prices: {
  Amazon: "R$ 99,90",
  Shopee: "R$ 89,90",
  "Mercado Livre": "R$ 94,90",
},
links: {
  Amazon: "SEU_LINK_DE_AFILIADO",
  Shopee: "SEU_LINK_DE_AFILIADO",
  "Mercado Livre": "SEU_LINK_DE_AFILIADO",
},
```

Se `prices` não estiver preenchido, o site mostra `Consultar preço`. Se `links` não estiver preenchido, o site abre uma busca do produto no marketplace.


## V8 — primeiro link de afiliado real

O modelo **JBL Tune 520BT** agora possui:
- link de afiliado da Shopee: https://s.shopee.com.br/1LfMHOG2jp
- preço de referência da Shopee: R$ 206,37 no Pix (consultado em 29/08/2026)
- imagem oficial do modelo (JBL)
- especificações resumidas (Pure Bass, Bluetooth 5.3, até 57h, carga rápida e multiponto)

## V10 — Mercado Livre do JBL Tune 520BT

O mesmo **JBL Tune 520BT** agora também possui o link de afiliado real do Mercado Livre:
- Mercado Livre: https://meli.la/2q1iGFg

A imagem e a descrição continuam as mesmas do modelo já cadastrado. Como o link curto `meli.la` não expôs de forma confiável o preço exato do anúncio para consulta automática, o site mostra **Consultar preço** no Mercado Livre para evitar exibir um valor incorreto.

Amazon continua usando busca comum até ser fornecido o link de afiliado.


## Identificação do anúncio no Mercado Livre

O JBL Tune 520BT agora também guarda no código o ID informado do anúncio do Mercado Livre: `PY7V4L-KC5F`. O link de afiliado continua sendo `https://meli.la/2q1iGFg`.
