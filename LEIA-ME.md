# VH Achados Mobile V14

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
- link de afiliado da Shopee: https://s.shopee.com.br/7KwZVssivQ
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


## V12 — QCY T13 com link real da Shopee

O modelo **QCY T13** agora usa o link de afiliado enviado:
- Shopee: https://s.shopee.com.br/30nabYQh4v
- preço exibido na consulta: **R$ 171,39 no Pix** (consultado em 29/08/2026)
- imagem do próprio anúncio da Shopee
- descrição com Bluetooth 5.1, ENC, IPX5 e até 8 horas de reprodução
- Amazon e Mercado Livre continuam como buscas comuns até receberem links de afiliado próprios.

O preço pode mudar no marketplace, por isso o site mantém o aviso de data da consulta.


## V14 — Lenovo LP40 Pro / LP40 Plus com link real da Shopee

O modelo **Lenovo LP40 Pro / LP40 Plus** agora usa o link de afiliado enviado:
- Shopee: https://s.shopee.com.br/2BETeaedk0
- preço exibido no anúncio consultado: **a partir de R$ 59,90** (consultado em 29/08/2026)
- imagem do próprio anúncio da Shopee
- descrição baseada no anúncio: fone Bluetooth in-ear com som HD e redução de ruído
- recursos mostrados nas imagens do anúncio: pareamento automático e chamadas binaurais em HD
- 11 variações disponíveis no anúncio
- Amazon e Mercado Livre continuam como buscas comuns até receberem links de afiliado próprios.

O preço pode variar conforme a opção escolhida, cupons e alterações do marketplace; por isso o site mostra **A partir de R$ 59,90** e mantém a data da consulta.


## Atualização V14 — Edifier W600BT

O modelo Edifier W600BT agora possui imagem, descrição, especificações, preço da Shopee e o link de afiliado informado. O preço exibido foi consultado em 29/08/2026 e pode mudar no marketplace.


## Atualização V15

Na seção **Smartwatch inteligente** foram adicionados dados reais de dois anúncios da Shopee:

- **Xiaomi Redmi Watch 5 Active** — link de afiliado `https://s.shopee.com.br/AAGlCp2fzy`, imagem, descrição, recursos e preço consultado.
- **Amazfit Bip Max** — link de afiliado `https://s.shopee.com.br/9zxL0W3JKx`, imagem, descrição, recursos e preço consultado.

Os preços foram consultados em 29/08/2026 e podem mudar na Shopee.
