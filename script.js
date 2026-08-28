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
        market: "3 lojas",
        marketClass: "market-amazon",
        icon: "headphones",
        artClass: "art-sage",
        prices: {
          Amazon: "Consultar preço",
          Shopee: "Consultar preço",
          "Mercado Livre": "Consultar preço",
        },
        links: {
          Amazon: "https://www.amazon.com.br/s?k=fone+bluetooth",
          Shopee: "https://shopee.com.br/search?keyword=fone%20bluetooth",
          "Mercado Livre": "https://lista.mercadolivre.com.br/fone-bluetooth",
        },
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
const productModal = document.querySelector("#product-modal");
const productModalTitle = document.querySelector("#product-modal-title");
const productModalDescription = document.querySelector("#product-modal-description");
const offerList = document.querySelector("#offer-list");
let lastModalTrigger = null;

const marketplaceInfo = {
  Amazon: { icon: "shopping-cart", note: "Amazon Brasil" },
  Shopee: { icon: "shopping-bag", note: "Shopee Brasil" },
  "Mercado Livre": { icon: "store", note: "Mercado Livre" },
};

function slugifyForMercadoLivre(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getProductOffers(product) {
  const encoded = encodeURIComponent(product.name);
  const links = product.links || {
    Amazon: `https://www.amazon.com.br/s?k=${encoded}`,
    Shopee: `https://shopee.com.br/search?keyword=${encoded}`,
    "Mercado Livre": `https://lista.mercadolivre.com.br/${slugifyForMercadoLivre(product.name)}`,
  };

  const prices = product.prices || {};

  return ["Amazon", "Shopee", "Mercado Livre"].map((store) => ({
    store,
    url: links[store],
    price: prices[store] || "Consultar preço",
    ...marketplaceInfo[store],
  }));
}

function openProductModal(product) {
  if (!productModal) return;

  lastModalTrigger = document.activeElement;
  productModalTitle.textContent = product.name;
  productModalDescription.textContent = product.description;

  offerList.innerHTML = getProductOffers(product)
    .map(
      (offer) => `
        <article class="offer-card">
          <div class="offer-store">
            <span class="offer-store-icon" aria-hidden="true">
              <i data-lucide="${offer.icon}"></i>
            </span>
            <div>
              <strong>${offer.store}</strong>
              <small>${offer.note}</small>
            </div>
          </div>
          <div class="offer-side">
            <div class="offer-price">
              <span>Preço</span>
              <strong>${offer.price}</strong>
            </div>
            <a
              class="offer-button"
              href="${offer.url}"
              target="_blank"
              rel="sponsored noopener noreferrer"
              aria-label="Ver ${product.name} na ${offer.store}"
            >
              Ver oferta
              <i data-lucide="arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>
        </article>
      `,
    )
    .join("");

  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  refreshIcons();

  const closeButton = productModal.querySelector(".product-modal-close");
  closeButton?.focus();
}

function closeProductModal() {
  if (!productModal?.classList.contains("open")) return;
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastModalTrigger instanceof HTMLElement) lastModalTrigger.focus();
}

productModal?.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProductModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProductModal();
});

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
      (product, productIndex) => `
        <article
          class="product-card"
          role="button"
          tabindex="0"
          data-product-index="${productIndex}"
          aria-label="Abrir detalhes e comparar preços de ${product.name}"
        >
          <div class="product-art ${product.artClass}">
            <span>${product.category}</span>
            <i data-lucide="${product.icon}" aria-hidden="true"></i>
          </div>
          <div class="product-info">
            <div class="product-meta">
              <span class="market-badge ${product.marketClass}">${product.market}</span>
              <span>Compare preços</span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <span class="product-card-action" aria-hidden="true">
              Ver detalhes e 3 lojas
              <i data-lucide="chevrons-up" aria-hidden="true"></i>
            </span>
          </div>
        </article>
      `,
    )
    .join("");

  productGrid.querySelectorAll(".product-card").forEach((card) => {
    const product = category.products[Number(card.dataset.productIndex)];
    card.addEventListener("click", () => openProductModal(product));
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openProductModal(product);
    });
  });

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
