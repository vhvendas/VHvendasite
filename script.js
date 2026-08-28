/*
  EDITE OS PRODUTOS AQUI.

  Para usar seus links de afiliado, troque o valor de "url" de cada produto.
  Você também pode mudar nome, descrição, marketplace, categoria e ícone.
*/

const categories = [
  {
    value: "eletronicos",
    kicker: "Tecnologia para a rotina",
    title: "Eletrônicos que entregam praticidade.",
    description:
      "Acessórios úteis para trabalhar, ouvir música, carregar seus aparelhos e aproveitar melhor o dia.",
    image:
      "https://images.unsplash.com/photo-1742753103280-52d5efc0709b?auto=format&fit=crop&q=82&w=1400",
    imageAlt: "Eletrônicos e acessórios organizados sobre uma mesa",
    products: [
      {
        name: "Fone Bluetooth",
        description: "Opção sem fio para música, chamadas e uso durante a rotina.",
        category: "Áudio",
        market: "Amazon",
        marketClass: "market-amazon",
        icon: "headphones",
        artClass: "art-sage",
        url: "https://www.amazon.com.br/s?k=fone+bluetooth",
      },
      {
        name: "Smartwatch inteligente",
        description: "Acompanhe notificações e recursos do dia a dia direto no pulso.",
        category: "Wearable",
        market: "Shopee",
        marketClass: "market-shopee",
        icon: "watch",
        artClass: "art-coral",
        url: "https://shopee.com.br/search?keyword=smartwatch",
      },
      {
        name: "Mini projetor portátil",
        description: "Uma alternativa compacta para vídeos, jogos e apresentações.",
        category: "Imagem",
        market: "Mercado Livre",
        marketClass: "market-mercado-livre",
        icon: "monitor",
        artClass: "art-sun",
        url: "https://lista.mercadolivre.com.br/mini-projetor-portatil",
      },
      {
        name: "Carregador portátil",
        description: "Energia extra para o celular quando você estiver fora de casa.",
        category: "Energia",
        market: "Amazon",
        marketClass: "market-amazon",
        icon: "battery-charging",
        artClass: "art-blue",
        url: "https://www.amazon.com.br/s?k=carregador+portatil",
      },
    ],
  },
  {
    value: "moda-masculina",
    kicker: "Estilo sem complicação",
    title: "Peças e acessórios para completar o visual.",
    description:
      "Uma seleção masculina versátil para combinar conforto, praticidade e presença no dia a dia.",
    image:
      "https://images.unsplash.com/photo-1761896902115-49793a359daf?auto=format&fit=crop&q=82&w=1400",
    imageAlt: "Camisa e acessórios masculinos organizados em composição minimalista",
    products: [
      {
        name: "Camiseta masculina premium",
        description: "Modelo versátil para compor looks casuais com facilidade.",
        category: "Vestuário",
        market: "Shopee",
        marketClass: "market-shopee",
        icon: "shirt",
        artClass: "art-sage",
        url: "https://shopee.com.br/search?keyword=camiseta%20masculina%20premium",
      },
      {
        name: "Tênis casual masculino",
        description: "Uma escolha prática para diferentes combinações e ocasiões.",
        category: "Calçados",
        market: "Mercado Livre",
        marketClass: "market-mercado-livre",
        icon: "footprints",
        artClass: "art-coral",
        url: "https://lista.mercadolivre.com.br/tenis-casual-masculino",
      },
      {
        name: "Relógio masculino",
        description: "Acessório clássico para deixar o visual mais completo.",
        category: "Acessórios",
        market: "Amazon",
        marketClass: "market-amazon",
        icon: "clock",
        artClass: "art-sun",
        url: "https://www.amazon.com.br/s?k=relogio+masculino",
      },
      {
        name: "Carteira slim",
        description: "Formato compacto para carregar documentos e cartões essenciais.",
        category: "Praticidade",
        market: "Shopee",
        marketClass: "market-shopee",
        icon: "wallet",
        artClass: "art-blue",
        url: "https://shopee.com.br/search?keyword=carteira%20slim%20masculina",
      },
    ],
  },
  {
    value: "moveis-decorativos",
    kicker: "Detalhes que transformam",
    title: "Decoração funcional para renovar os ambientes.",
    description:
      "Achados para deixar seus espaços mais organizados, confortáveis e com personalidade.",
    image:
      "https://images.unsplash.com/photo-1771888703723-01d85da1dae1?auto=format&fit=crop&q=82&w=1400",
    imageAlt: "Sala moderna com móveis e objetos decorativos minimalistas",
    products: [
      {
        name: "Luminária de mesa",
        description: "Iluminação de apoio que também funciona como elemento decorativo.",
        category: "Iluminação",
        market: "Mercado Livre",
        marketClass: "market-mercado-livre",
        icon: "lamp",
        artClass: "art-sage",
        url: "https://lista.mercadolivre.com.br/luminaria-de-mesa-decorativa",
      },
      {
        name: "Mesa lateral decorativa",
        description: "Apoio compacto para sala, quarto ou cantinho de leitura.",
        category: "Mobiliário",
        market: "Amazon",
        marketClass: "market-amazon",
        icon: "layers",
        artClass: "art-coral",
        url: "https://www.amazon.com.br/s?k=mesa+lateral+decorativa",
      },
      {
        name: "Espelho decorativo",
        description: "Ajuda a ampliar visualmente o ambiente e completar a parede.",
        category: "Parede",
        market: "Shopee",
        marketClass: "market-shopee",
        icon: "frame",
        artClass: "art-sun",
        url: "https://shopee.com.br/search?keyword=espelho%20decorativo",
      },
      {
        name: "Prateleira flutuante",
        description: "Solução compacta para organizar e expor objetos decorativos.",
        category: "Organização",
        market: "Mercado Livre",
        marketClass: "market-mercado-livre",
        icon: "house",
        artClass: "art-blue",
        url: "https://lista.mercadolivre.com.br/prateleira-flutuante",
      },
    ],
  },
];

const tabButtons = Array.from(document.querySelectorAll("[data-tab]"));
const categoryIntro = document.querySelector("#category-intro");
const productGrid = document.querySelector("#product-grid");
const catalogContent = document.querySelector("#catalog-content");

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderCategory(categoryValue) {
  const category = categories.find((item) => item.value === categoryValue);
  if (!category) return;

  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === categoryValue;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;

    if (isActive) {
      catalogContent.setAttribute("aria-labelledby", button.id);
    }
  });

  categoryIntro.innerHTML = `
    <div class="category-image">
      <img src="${category.image}" alt="${category.imageAlt}" />
    </div>
    <div class="category-copy">
      <span>${category.kicker}</span>
      <h3>${category.title}</h3>
      <p>${category.description}</p>
    </div>
  `;

  productGrid.innerHTML = category.products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-art ${product.artClass}">
            <span>${product.category}</span>
            <i data-lucide="${product.icon}" aria-hidden="true"></i>
          </div>
          <div class="product-info">
            <div class="product-meta">
              <span class="market-badge ${product.marketClass}">${product.market}</span>
              <span>Preço no parceiro</span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <a
              class="button product-button"
              href="${product.url}"
              target="_blank"
              rel="sponsored noopener noreferrer"
              aria-label="Encontrar ${product.name} na ${product.market}"
            >
              Ver no parceiro
              <i data-lucide="arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>
        </article>
      `,
    )
    .join("");

  refreshIcons();
}

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => renderCategory(button.dataset.tab));

  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + tabButtons.length) % tabButtons.length;
    const nextButton = tabButtons[nextIndex];

    renderCategory(nextButton.dataset.tab);
    nextButton.focus();
  });
});

document.querySelectorAll(".hero-tile[data-category]").forEach((tile) => {
  tile.addEventListener("click", () => renderCategory(tile.dataset.category));
});

renderCategory("eletronicos");
refreshIcons();
