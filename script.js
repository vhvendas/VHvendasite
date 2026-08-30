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
        description: "Escolha entre diferentes modelos sem fio para música, chamadas e rotina.",
        category: "Áudio",
        market: "4 modelos",
        marketClass: "market-amazon",
        icon: "headphones",
        artClass: "art-sage",
        models: [
          {
            name: "JBL Tune 520BT",
            description: "Headphone Bluetooth on-ear com JBL Pure Bass, Bluetooth 5.3, até 57 horas de bateria e carregamento rápido.",
            type: "Headphone",
            icon: "headphones",
            image: "https://www.jbl.com.br/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwc23d813b/01.JBL_Tune_520BT_ProductImage_Hero_Black.png?sh=800&sw=800",
            imageAlt: "Headphone JBL Tune 520BT preto",
            features: [
              "Som JBL Pure Bass",
              "Bluetooth 5.3",
              "Até 57 horas de bateria",
              "Carga rápida: 5 minutos rendem até 3 horas",
              "Conexão multiponto e chamadas viva-voz",
              "Design leve e dobrável",
            ],
            mercadoLivreId: "PY7V4L-KC5F",
            links: {
              Shopee: "https://s.shopee.com.br/7KwZVssivQ",
              "Mercado Livre": "https://meli.la/2q1iGFg",
            },
            prices: {
              Shopee: "R$ 206,37 no Pix",
              "Mercado Livre": "Consultar preço",
            },
            priceChecked: "29/08/2026",
          },
          {
            name: "QCY T13",
            description: "Fone de ouvido sem fio QCY T13 com Bluetooth 5.1, redução de ruído ENC, resistência IPX5 e até 8 horas de reprodução.",
            type: "TWS",
            icon: "ear",
            image: "https://down-br.img.susercontent.com/file/br-11134207-820m9-mn5bkiu4xxj493",
            imageAlt: "Fone de ouvido QCY T13 preto com estojo de carregamento",
            features: [
              "Bluetooth 5.1",
              "Redução de ruído ENC para chamadas",
              "Resistência IPX5",
              "Até 8 horas de reprodução",
              "3 variações disponíveis no anúncio",
              "Estocado e entregue pela Shopee",
            ],
            links: {
              Shopee: "https://s.shopee.com.br/30nabYQh4v",
            },
            prices: {
              Shopee: "R$ 171,39 no Pix",
            },
            priceChecked: "29/08/2026",
          },
          {
            name: "Edifier W600BT",
            description: "Headphone Bluetooth 5.1 Edifier W600BT com até 30 horas de bateria, drivers de 40 mm e design over-ear confortável para música, estudo, trabalho e vídeos.",
            type: "Headphone",
            icon: "headphones",
            image: "https://down-br.img.susercontent.com/file/br-11134201-7r98o-ls00u459hfrv67",
            imageAlt: "Headphone Bluetooth Edifier W600BT preto",
            features: [
              "Bluetooth 5.1",
              "Até 30 horas de bateria",
              "Drivers de 40 mm",
              "Design over-ear com almofadas confortáveis",
              "Carregamento USB-C em cerca de 3 horas",
              "Entrada P2 de 3,5 mm para uso com fio",
              "3 variações disponíveis no anúncio da Shopee",
            ],
            links: {
              Shopee: "https://s.shopee.com.br/5q7m1vgX7g",
            },
            prices: {
              Shopee: "R$ 189,05 no Pix",
            },
            priceChecked: "29/08/2026",
          },
          {
            name: "Lenovo LP40 Pro / LP40 Plus",
            description: "Fone Bluetooth in-ear Lenovo LP40 Pro / LP40 Plus com som HD, redução de ruído para chamadas e estojo compacto para uso diário.",
            type: "In-ear",
            icon: "bluetooth",
            image: "https://down-br.img.susercontent.com/file/cn-11134207-820l4-mhvauos3v6ysec",
            imageAlt: "Fones Bluetooth Lenovo LP40 Pro e LP40 Plus com estojos preto e branco",
            features: [
              "Som HD para música e chamadas",
              "Redução de ruído para voz e vídeo",
              "Pareamento automático após a primeira conexão",
              "Chamadas binaurais em HD",
              "Estojo de carregamento compacto",
              "11 variações disponíveis no anúncio",
            ],
            links: {
              Shopee: "https://s.shopee.com.br/2BETeaedk0",
            },
            prices: {
              Shopee: "A partir de R$ 59,90",
            },
            priceChecked: "29/08/2026",
          },
        ],
      },
      {
        name: "Smartwatch inteligente",
        description: "Escolha um relógio inteligente para notificações, exercícios e recursos do dia a dia.",
        category: "Wearable",
        market: "4 modelos",
        marketClass: "market-shopee",
        icon: "watch",
        artClass: "art-coral",
        models: [
          {
            name: "Redmi Watch 5 Active",
            description: "Smartwatch Xiaomi Redmi Watch 5 Active Global com tela LCD de 2 polegadas, chamadas Bluetooth, Xiaomi HyperOS e bateria de longa duração.",
            type: "Smartwatch",
            icon: "watch",
            image: "https://down-br.img.susercontent.com/file/sg-11134201-824hs-me01r50ubdoh36",
            imageAlt: "Smartwatch Xiaomi Redmi Watch 5 Active preto",
            features: [
              "Tela LCD quadrada de 2 polegadas",
              "Chamadas Bluetooth com microfone e alto-falante",
              "Até 18 dias de bateria em uso típico",
              "Mais de 140 modos de treino",
              "Monitoramento de frequência cardíaca e oxigênio no sangue",
              "Resistência à água 5 ATM",
              "Bluetooth 5.3 e sistema Xiaomi HyperOS",
            ],
            links: {
              Shopee: "https://s.shopee.com.br/AAGlCp2fzy",
            },
            prices: {
              Shopee: "R$ 284,31 no Pix com cupom",
            },
            priceChecked: "29/08/2026",
          },
          {
            name: "Amazfit Bip Max",
            description: "Smartwatch Amazfit Bip Max com tela AMOLED de 2,07 polegadas, GPS integrado, 4 GB de armazenamento, mapas offline e bateria de até 20 dias.",
            type: "Smartwatch",
            icon: "watch",
            image: "https://down-br.img.susercontent.com/file/br-11134207-820m4-mrpa6zvyjsavfc",
            imageAlt: "Smartwatch Amazfit Bip Max com tela AMOLED",
            features: [
              "Tela AMOLED de 2,07 polegadas",
              "Brilho máximo de até 3.000 nits",
              "Até 20 dias de bateria em uso típico",
              "GPS integrado com 5 sistemas de posicionamento",
              "4 GB de armazenamento para mapas e conteúdo",
              "Mais de 150 modos esportivos",
              "Monitoramento de frequência cardíaca, SpO2, estresse e sono",
              "Resistência à água 5 ATM",
            ],
            links: {
              Shopee: "https://s.shopee.com.br/9zxL0W3JKx",
            },
            prices: {
              Shopee: "R$ 572,08 no Pix",
            },
            priceChecked: "29/08/2026",
          },
          {
            name: "Haylou Solar Plus RT3",
            description: "Smartwatch com visual redondo e funções voltadas a notificações, treino e monitoramento cotidiano.",
            type: "Smartwatch",
            icon: "watch",
          },
          {
            name: "Huawei Band 9",
            description: "Pulseira inteligente fina e leve, indicada para acompanhar exercícios, sono e notificações.",
            type: "Smartband",
            icon: "activity",
          },
        ],
      },
      {
        name: "Mini projetor portátil",
        description: "Escolha entre opções compactas para vídeos, jogos e apresentações.",
        category: "Imagem",
        market: "4 modelos",
        marketClass: "market-mercado-livre",
        icon: "monitor",
        artClass: "art-sun",
        models: [
          {
            name: "HY300 Pro",
            description: "Mini projetor compacto com sistema inteligente, indicado para filmes, séries e uso casual em casa.",
            type: "Projetor compacto",
            icon: "projector",
          },
          {
            name: "HY320 Mini",
            description: "Projetor portátil para quem busca uma imagem maior em quartos, salas e pequenos ambientes.",
            type: "Projetor portátil",
            icon: "projector",
          },
          {
            name: "Mini Projetor Android 11",
            description: "Opção compacta com sistema Android para acessar aplicativos e reproduzir conteúdos em uma tela maior.",
            type: "Smart projetor",
            icon: "monitor-play",
          },
          {
            name: "Projetor Portátil Wi‑Fi 6",
            description: "Modelo voltado a conexão sem fio e reprodução de vídeos, apresentações e entretenimento doméstico.",
            type: "Projetor Wi‑Fi",
            icon: "wifi",
          },
        ],
      },
      {
        name: "Carregador portátil",
        description: "Escolha uma bateria externa para ter energia extra fora de casa.",
        category: "Energia",
        market: "4 modelos",
        marketClass: "market-amazon",
        icon: "battery-charging",
        artClass: "art-blue",
        models: [
          {
            name: "Baseus Bipow 10.000mAh 20W",
            description: "Power bank compacto de 10.000mAh para recargas no dia a dia, com potência de até 20W.",
            type: "10.000mAh",
            icon: "battery-charging",
          },
          {
            name: "Geonav Power Bank 10.000mAh",
            description: "Bateria portátil para levar na mochila e manter celular e acessórios carregados durante a rotina.",
            type: "10.000mAh",
            icon: "battery-full",
          },
          {
            name: "Xiaomi Power Bank 10.000mAh",
            description: "Carregador portátil compacto para recargas de emergência e uso em viagens ou deslocamentos.",
            type: "10.000mAh",
            icon: "battery-medium",
          },
          {
            name: "Pineng PN-951 10.000mAh",
            description: "Power bank com capacidade para recargas ao longo do dia e formato pensado para transporte.",
            type: "10.000mAh",
            icon: "battery-charging",
          },
        ],
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
        description: "Escolha o estilo de camiseta que combina melhor com seu visual.",
        category: "Vestuário",
        market: "4 modelos",
        marketClass: "market-shopee",
        icon: "shirt",
        artClass: "art-sage",
        models: [
          {
            name: "Camiseta Algodão Premium",
            description: "Modelo básico em algodão para montar looks casuais, confortáveis e fáceis de combinar.",
            type: "Básica",
            icon: "shirt",
          },
          {
            name: "Camiseta Oversized Premium",
            description: "Modelagem mais ampla e moderna para quem prefere um visual urbano e descontraído.",
            type: "Oversized",
            icon: "shirt",
          },
          {
            name: "Camiseta Slim Fit Premium",
            description: "Modelagem mais ajustada ao corpo para um visual casual com aparência mais alinhada.",
            type: "Slim fit",
            icon: "shirt",
          },
          {
            name: "Camiseta Dry Fit Masculina",
            description: "Opção leve para treinos, caminhadas e atividades em dias quentes.",
            type: "Esportiva",
            icon: "shirt",
          },
        ],
      },
      {
        name: "Tênis casual masculino",
        description: "Escolha entre estilos de tênis para diferentes combinações e ocasiões.",
        category: "Calçados",
        market: "4 modelos",
        marketClass: "market-mercado-livre",
        icon: "footprints",
        artClass: "art-coral",
        models: [
          {
            name: "Tênis Casual Branco Masculino",
            description: "Modelo branco versátil para combinar com jeans, bermudas e looks casuais.",
            type: "Casual",
            icon: "footprints",
          },
          {
            name: "Tênis Knit Leve Masculino",
            description: "Tênis com cabedal em tecido para quem busca leveza e conforto no uso diário.",
            type: "Knit",
            icon: "footprints",
          },
          {
            name: "Sapatênis Masculino Casual",
            description: "Opção intermediária entre tênis e sapato para looks casuais mais arrumados.",
            type: "Sapatênis",
            icon: "footprints",
          },
          {
            name: "Tênis Slip On Masculino",
            description: "Modelo sem cadarço, prático para calçar e usar em compromissos do dia a dia.",
            type: "Slip on",
            icon: "footprints",
          },
        ],
      },
      {
        name: "Relógio masculino",
        description: "Escolha um estilo de relógio para completar o visual.",
        category: "Acessórios",
        market: "4 modelos",
        marketClass: "market-amazon",
        icon: "clock",
        artClass: "art-sun",
        models: [
          {
            name: "Relógio Social Aço Masculino",
            description: "Relógio com pulseira metálica para looks sociais, trabalho e ocasiões mais formais.",
            type: "Social",
            icon: "clock-3",
          },
          {
            name: "Relógio Couro Minimalista",
            description: "Modelo de visual limpo com pulseira de couro para combinações discretas e elegantes.",
            type: "Minimalista",
            icon: "clock",
          },
          {
            name: "Relógio Esportivo Digital",
            description: "Opção digital para uso casual, atividades e uma aparência mais esportiva.",
            type: "Esportivo",
            icon: "timer",
          },
          {
            name: "Relógio Analógico Casual",
            description: "Modelo analógico versátil para usar no cotidiano com diferentes tipos de roupa.",
            type: "Casual",
            icon: "watch",
          },
        ],
      },
      {
        name: "Carteira slim",
        description: "Escolha uma carteira compacta para cartões, documentos e dinheiro.",
        category: "Praticidade",
        market: "4 modelos",
        marketClass: "market-shopee",
        icon: "wallet",
        artClass: "art-blue",
        models: [
          {
            name: "Carteira Slim de Couro",
            description: "Carteira fina para levar cartões, documentos e notas sem criar muito volume no bolso.",
            type: "Couro",
            icon: "wallet-cards",
          },
          {
            name: "Porta-Cartões Slim RFID",
            description: "Modelo compacto voltado principalmente a cartões, com proposta de proteção RFID.",
            type: "Porta-cartões",
            icon: "credit-card",
          },
          {
            name: "Carteira Slim Vertical",
            description: "Formato vertical e compacto para organizar os itens essenciais do dia a dia.",
            type: "Vertical",
            icon: "wallet",
          },
          {
            name: "Carteira Slim de Alumínio",
            description: "Porta-cartões rígido e minimalista para quem quer reduzir o volume no bolso.",
            type: "Rígida",
            icon: "badge-dollar-sign",
          },
        ],
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
        description: "Escolha uma luminária para iluminação de apoio e decoração.",
        category: "Iluminação",
        market: "4 modelos",
        marketClass: "market-mercado-livre",
        icon: "lamp",
        artClass: "art-sage",
        models: [
          {
            name: "Luminária Touch LED",
            description: "Luminária compacta com acionamento por toque, prática para mesa de cabeceira ou escrivaninha.",
            type: "Touch",
            icon: "lamp-desk",
          },
          {
            name: "Luminária Cogumelo Decorativa",
            description: "Modelo de formato arredondado que funciona como iluminação suave e peça de decoração.",
            type: "Decorativa",
            icon: "lamp",
          },
          {
            name: "Luminária Articulada de Mesa",
            description: "Opção com haste ajustável para direcionar a luz em estudos, leitura e trabalho.",
            type: "Articulada",
            icon: "lamp-desk",
          },
          {
            name: "Luminária RGB de Mesa",
            description: "Iluminação colorida para criar clima em quarto, setup, sala ou espaço de entretenimento.",
            type: "RGB",
            icon: "lightbulb",
          },
        ],
      },
      {
        name: "Mesa lateral decorativa",
        description: "Escolha uma mesa compacta para sala, quarto ou cantinho de leitura.",
        category: "Mobiliário",
        market: "4 modelos",
        marketClass: "market-amazon",
        icon: "layers",
        artClass: "art-coral",
        models: [
          {
            name: "Mesa Lateral Redonda",
            description: "Mesa compacta com tampo redondo para apoio ao lado do sofá, poltrona ou cama.",
            type: "Redonda",
            icon: "circle",
          },
          {
            name: "Mesa Lateral em C",
            description: "Formato em C que pode aproximar o tampo do sofá e facilitar o uso com notebook, copos e objetos.",
            type: "Formato C",
            icon: "panel-left",
          },
          {
            name: "Mesa Lateral Industrial",
            description: "Modelo com combinação de madeira e estrutura metálica para ambientes de estilo industrial.",
            type: "Industrial",
            icon: "table-2",
          },
          {
            name: "Mesa Lateral de Madeira",
            description: "Opção de visual mais natural para compor salas, quartos e espaços aconchegantes.",
            type: "Madeira",
            icon: "table-2",
          },
        ],
      },
      {
        name: "Espelho decorativo",
        description: "Escolha um formato de espelho para valorizar a parede e o ambiente.",
        category: "Parede",
        market: "4 modelos",
        marketClass: "market-shopee",
        icon: "frame",
        artClass: "art-sun",
        models: [
          {
            name: "Espelho Orgânico Decorativo",
            description: "Espelho de formato irregular para composições modernas em quartos, salas e halls.",
            type: "Orgânico",
            icon: "frame",
          },
          {
            name: "Espelho Redondo Decorativo",
            description: "Formato clássico e fácil de combinar com diferentes estilos de decoração.",
            type: "Redondo",
            icon: "circle",
          },
          {
            name: "Espelho Adnet com Alça",
            description: "Modelo redondo com alça decorativa para banheiros, quartos e halls de entrada.",
            type: "Adnet",
            icon: "circle-dot",
          },
          {
            name: "Espelho Corpo Inteiro",
            description: "Espelho maior para visualizar o look completo e ampliar visualmente o ambiente.",
            type: "Grande",
            icon: "rectangle-vertical",
          },
        ],
      },
      {
        name: "Prateleira flutuante",
        description: "Escolha uma opção para organizar e expor objetos sem ocupar o piso.",
        category: "Organização",
        market: "4 modelos",
        marketClass: "market-mercado-livre",
        icon: "house",
        artClass: "art-blue",
        models: [
          {
            name: "Prateleira Flutuante 40 cm",
            description: "Prateleira compacta para livros, quadros, plantas e pequenos objetos decorativos.",
            type: "40 cm",
            icon: "minus",
          },
          {
            name: "Kit 3 Prateleiras Flutuantes",
            description: "Conjunto para criar uma composição de parede e organizar diferentes objetos em níveis.",
            type: "Kit",
            icon: "layers-3",
          },
          {
            name: "Prateleira Industrial com Suporte",
            description: "Modelo com suporte aparente para uma proposta de decoração industrial e funcional.",
            type: "Industrial",
            icon: "shelves",
          },
          {
            name: "Prateleira de Canto",
            description: "Opção feita para aproveitar cantos e criar espaço extra para objetos e decoração.",
            type: "Canto",
            icon: "corner-up-right",
          },
        ],
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
const productModalKicker = document.querySelector("#product-modal-kicker");
const productModalBack = document.querySelector("#product-modal-back");
const modelList = document.querySelector("#model-list");
const offerList = document.querySelector("#offer-list");
const productModalMedia = document.querySelector("#product-modal-media");
const productModalImage = document.querySelector("#product-modal-image");
const productModalFeatures = document.querySelector("#product-modal-features");
const offerUpdate = document.querySelector("#offer-update");
let lastModalTrigger = null;
let currentModelParent = null;

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
  const defaultLinks = {
    Amazon: `https://www.amazon.com.br/s?k=${encoded}`,
    Shopee: `https://shopee.com.br/search?keyword=${encoded}`,
    "Mercado Livre": `https://lista.mercadolivre.com.br/${slugifyForMercadoLivre(product.name)}`,
  };
  const links = { ...defaultLinks, ...(product.links || {}) };

  const prices = product.prices || {};

  return ["Amazon", "Shopee", "Mercado Livre"].map((store) => ({
    store,
    url: links[store],
    price: prices[store] || "Consultar preço",
    ...marketplaceInfo[store],
  }));
}

function renderOffers(product) {
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
}

function renderProductMedia(product) {
  const hasImage = Boolean(product.image);
  const hasFeatures = Array.isArray(product.features) && product.features.length > 0;

  if (!productModalMedia || (!hasImage && !hasFeatures)) {
    if (productModalMedia) productModalMedia.hidden = true;
    return;
  }

  productModalMedia.hidden = false;

  if (productModalImage) {
    if (hasImage) {
      productModalImage.src = product.image;
      productModalImage.alt = product.imageAlt || product.name;
      productModalImage.hidden = false;
    } else {
      productModalImage.hidden = true;
      productModalImage.removeAttribute("src");
    }
  }

  if (productModalFeatures) {
    productModalFeatures.innerHTML = hasFeatures
      ? product.features.map((feature) => `<li><i data-lucide="check" aria-hidden="true"></i><span>${feature}</span></li>`).join("")
      : "";
    productModalFeatures.hidden = !hasFeatures;
  }
}

function renderPriceUpdate(product) {
  if (!offerUpdate) return;
  if (product.priceChecked) {
    offerUpdate.hidden = false;
    offerUpdate.textContent = `Preço da Shopee consultado em ${product.priceChecked}. O marketplace pode alterar o valor a qualquer momento.`;
  } else {
    offerUpdate.hidden = true;
    offerUpdate.textContent = "";
  }
}

function showModelSelector(product) {
  currentModelParent = product;
  productModalKicker.textContent = "Escolha uma opção";
  productModalTitle.textContent = product.name;
  productModalDescription.textContent =
    "Toque em uma opção para ver a descrição e comparar o produto na Amazon, Shopee e Mercado Livre.";

  productModalBack.hidden = true;
  offerList.hidden = true;
  modelList.hidden = false;
  if (productModalMedia) productModalMedia.hidden = true;
  if (offerUpdate) offerUpdate.hidden = true;

  modelList.innerHTML = product.models
    .map(
      (model, index) => `
        <button class="model-card" type="button" data-model-index="${index}">
          ${model.image
            ? `<span class="model-thumb"><img src="${model.image}" alt="" loading="lazy" /></span>`
            : `<span class="model-icon" aria-hidden="true"><i data-lucide="${model.icon || "headphones"}"></i></span>`}
          <span class="model-copy">
            <span class="model-type">${model.type || "Modelo"}</span>
            <strong>${model.name}</strong>
            <small>${model.description}</small>
          </span>
          <span class="model-action">
            3 lojas
            <i data-lucide="chevron-right" aria-hidden="true"></i>
          </span>
        </button>
      `,
    )
    .join("");

  modelList.querySelectorAll("[data-model-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const model = product.models[Number(button.dataset.modelIndex)];
      showModelOffers(product, model);
    });
  });

  refreshIcons();
}

function showModelOffers(parentProduct, model) {
  currentModelParent = parentProduct;
  productModalKicker.textContent = "Comparar em 3 lojas";
  productModalTitle.textContent = model.name;
  productModalDescription.textContent = model.description;

  modelList.hidden = true;
  offerList.hidden = false;
  productModalBack.hidden = false;
  renderProductMedia(model);
  renderOffers(model);
  renderPriceUpdate(model);
  refreshIcons();
}

function showSingleProductOffers(product) {
  currentModelParent = null;
  productModalKicker.textContent = "Comparar lojas";
  productModalTitle.textContent = product.name;
  productModalDescription.textContent = product.description;
  productModalBack.hidden = true;
  modelList.hidden = true;
  offerList.hidden = false;
  renderProductMedia(product);
  renderOffers(product);
  renderPriceUpdate(product);
}

function openProductModal(product) {
  if (!productModal) return;

  lastModalTrigger = document.activeElement;

  if (Array.isArray(product.models) && product.models.length) {
    showModelSelector(product);
  } else {
    showSingleProductOffers(product);
  }

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

productModalBack?.addEventListener("click", () => {
  if (currentModelParent) showModelSelector(currentModelParent);
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
              ${Array.isArray(product.models) && product.models.length ? "Ver modelos e 3 lojas" : "Ver detalhes e 3 lojas"}
              <i data-lucide="${Array.isArray(product.models) && product.models.length ? "chevron-right" : "chevrons-up"}" aria-hidden="true"></i>
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
