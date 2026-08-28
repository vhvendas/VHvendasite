# VH Achados — versão para VS Code

Esta versão foi feita com **HTML, CSS e JavaScript puro**. Você não precisa instalar Node.js, React ou outras dependências.

## Como abrir no VS Code

1. Extraia o arquivo `VH-Achados-VSCode.zip`.
2. Abra a pasta extraída.
3. Dê dois cliques em `VH-Achados.code-workspace`.
4. Se o Windows perguntar, escolha abrir com o **Visual Studio Code**.

## Como visualizar o site

### Maneira mais simples

Dê dois cliques no arquivo `index.html`. Ele abrirá no navegador.

### Maneira recomendada no VS Code

1. Instale a extensão **Live Server**, de Ritwick Dey.
2. No VS Code, clique com o botão direito em `index.html`.
3. Clique em **Open with Live Server**.

Ao salvar uma alteração, a página será atualizada automaticamente.

## Onde editar cada coisa

- `index.html`: nome, títulos, textos e estrutura da página.
- `style.css`: cores, tamanhos, espaços e aparência.
- `script.js`: produtos, categorias e links de afiliado.
- `assets/favicon.svg`: ícone da aba do navegador.

## Como colocar seus links de afiliado

Abra `script.js`, procure o produto e substitua o endereço que aparece depois de `url:` pelo seu link de afiliado.

Exemplo:

```js
url: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
```

Repita isso para cada produto da Amazon, Shopee e Mercado Livre.

## Como adicionar outro produto

No `script.js`, copie um bloco de produto completo, cole dentro da lista da categoria desejada e altere os dados:

```js
{
  name: "Nome do produto",
  description: "Descrição curta do produto.",
  category: "Tipo",
  market: "Amazon",
  marketClass: "market-amazon",
  icon: "shopping-bag",
  artClass: "art-blue",
  url: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
},
```

## Atenção

As fotos principais e os ícones são carregados pela internet. Para vê-los, mantenha o computador conectado durante a visualização.

## V4 — correção mobile
- viewport reforçado para usar a largura real do celular;
- proteção contra layout de desktop vazando horizontalmente;
- layout mobile também é ativado por características de dispositivo/touch;
- cards ocupam quase toda a largura da tela;
- somente um produto fica em destaque, com parte do próximo aparecendo para indicar o arraste;
- carrossel continua funcionando com toque e scroll-snap.

Depois de publicar na Vercel, abra o link em uma nova aba/anônima ou atualize sem cache. No Chrome Android, mantenha **Site para computador** desmarcado.
