# VH Achados Mobile V7

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
