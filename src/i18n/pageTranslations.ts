import { products } from "../components/products/productData";

const russianProductDescriptions: Record<string, string> = {
  "margarines-and-spreads":
    "Для хлебобулочных изделий, тортов, печенья, начинок и топингов.",
  "milk-fat-substitutes":
    "Альтернатива сливочному маслу для выпечки, кремов, сыров и мороженого.",
  shortenings:
    "Безводный жир для рассыпчатого теста, крекеров, взбитых сливок и декора.",
  "cocoa-butter-equivalents":
    "Жиры для шоколада, глазурей, конфет и вафель. Линейки Adichoc, Adikote, Adifil и Adicon.",
  "filling-and-spread-fats":
    "Для шоколадно-ореховых паст, глазирования и начинок; помогают предотвратить отделение масла и придают блеск.",
  "hardstock-fats":
    "Хлопья или порошок для кристаллизации шоколада и создания эмульгаторов.",
  "frying-fats-and-oils":
    "Для жарки, снеков и кулинарии. Бренды FryBest, Camar, Harumas и Palmolin.",
  "coconut-oil":
    "Рафинированное и дезодорированное масло для мороженого, шоколадных покрытий и косметики.",
  "desiccated-coconut":
    "Кокосовая стружка пониженной, средней и высокой жирности для пищевого производства.",
  "condensed-milk":
    "Продукция Donaida для кондитерских изделий, десертов и пищевого производства.",
  "cocoa-powder":
    "Натуральный и алкализированный какао-порошок для пищевого и кондитерского производства.",
  "non-dairy-creamer":
    "Сухие сливки для пищевых смесей и использования в производственных рецептурах.",
  "canned-fruit-and-dried-fruit":
    "Ананасы, манго, папайя, личи, лонган и фруктовые смеси.",
  "canned-fish": "Тунец, сардины и скумбрия в масле, соусе или рассоле.",
  "feed-additives":
    "Гранулированный жир для дойных коров; применяется для повышения надоев и жирности молока.",
  "soap-noodles": "Сырьё для производства туалетного и хозяйственного мыла.",
  "rubber-and-latex":
    "Технически специфицированный натуральный каучук и полевой или концентрированный латекс.",
  "rubber-products":
    "Изделия для автомобильной, медицинской и других отраслей.",
};

const russianPageTranslations = {
  home: {
    heroTitle: "ВАШ ПУТЕВОДИТЕЛЬ ПО БИЗНЕСУ",
  },
  services: {
    cards: {
      turnkeyDelivery: {
        title: "Доставка «под ключ»",
      },
      multimodalTransport: {
        title: "Мультимодальные перевозки",
      },
      freightForwarding: {
        title: "Экспедирование и морские услуги",
      },
      cargoInsurance: {
        title: "Страхование грузов",
      },
      rublePayments: {
        title: "Расчёты в рублях",
      },
      warehousing: {
        title: "Складирование",
      },
      consulting: {
        title: "Консультации и техподдержка",
      },
      customDevelopment: {
        title: "Разработка продуктов под заказ",
      },
      samplesAndSpecifications: {
        title: "Образцы и спецификации",
      },
      rubberResearch: {
        title: "Производство и наука",
      },
    },
  },
  catalog: {
    title: "Каталог продукции",
    backToCatalog: "Вернуться в каталог",
    specifications: "Характеристики",
    specificationsOnRequest:
      "Характеристики и фасовка уточняются по спецификации партии.",
    productNotes: {
      accuracy:
        "Фактические характеристики и доступность зависят от продукта и конкретной партии.",
      image: "Изображение носит иллюстративный характер.",
    },
    items: Object.fromEntries(
      products.map((product) => [
        product.slug,
        {
          name: product.name,
          description:
            russianProductDescriptions[product.slug] ?? product.description,
          details: product.details,
        },
      ]),
    ),
  },
  aboutPage: {
    heroTitle:
      "ADASI Group — международный поставщик растительных масел, жиров и пищевых ингредиентов",
    heroText:
      "ADASI Group специализируется на поставках растительных масел, жиров и пищевых ингредиентов для предприятий пищевой промышленности. Мы работаем напрямую с производителями в Малайзии и Индонезии, организуя поставки в Казахстан и Россию. Компания представлена в Малайзии, Казахстане и России.",
    label: "О нас",
    teamImageAlt: "Команда ADASI Group на встрече с партнёрами",
    teamCaption: "Команда ADASI Group",
    infoTitle: "Про ADASI Group Sdn. Bhd.",
    infoParagraph1:
      "Основанная в 2008 году, ADASI Group находится на переднем крае инноваций и совершенства. Наша приверженность предоставлению первоклассных услуг и продуктов позиционирует нас как лидера в отрасли. Объединяя опытных профессионалов и молодые таланты, мы привносим уникальный подход в каждый проект, за который берёмся.",
    infoParagraph2:
      "Наши основные ценности — честность, удовлетворённость клиентов и устойчивый рост. Мы строим прочные отношения с клиентами, понимаем их потребности и стремимся превосходить ожидания. Наше портфолио охватывает различные отрасли и отражает нашу универсальность и стремление к совершенству.",
    assortment: "Ассортимент",
    productsTitle: "Продукты для пищевого производства",
    productColumn: "Продукт",
    descriptionColumn: "Описание",
    allProducts: "Вся продукция →",
    statsLabel: "Показатели ADASI Group",
    stats: ["клиентов по всему миру", "контейнеров", "тонн перевезено"],
    logisticsLabel: "Поставка под контролем",
    logisticsTitle: "От производителя до вашего предприятия",
    route: [
      "Производитель",
      "Малайзия / Индонезия",
      "Морская перевозка",
      "Россия / Казахстан",
      "Клиент",
    ],
    logisticsBenefits: [
      "Прямые поставки",
      "Контроль качества",
      "Организация логистики",
    ],
    qualityLabel: "Подтверждённое качество",
    qualityTitle: "Сертификаты и материалы",
    qualityText:
      "Работаем прозрачно и отвечаем за каждый этап поставки, чтобы ваше производство получало стабильное сырьё в нужные сроки.",
    materialsTitle: "Материалы для партнёров",
    materials: [
      "Каталог продукции",
      "Сертификаты",
      "Спецификации",
      "Презентация ADASI Group",
    ],
    managementLabel: "Руководство",
    managerName: "Дмитрий Муратович Мустафин",
    managerRole: "Руководитель группы компаний ADASI Group",
  },
};

const englishItems = {
  "margarines-and-spreads": {
    name: "Margarines and spreads",
    description: "For bakery products, cakes, cookies, fillings and toppings.",
    details: [
      "Most products are free from trans fats",
      "Melting point: 36–49 °C",
      "Moisture: max. 18–22%",
      "Pack sizes: 15–20 kg cartons, 10 kg pails, 200–250 g sachets",
    ],
  },
  "milk-fat-substitutes": {
    name: "Milk fat substitutes",
    description:
      "An alternative to butter for baking, creams, cheese and ice cream.",
    details: [
      "Cholesterol-free and non-GMO",
      "Heat-stable buttery taste",
      "Melting point: 24–35 °C",
    ],
  },
  shortenings: {
    name: "Shortenings",
    description:
      "Anhydrous fat for flaky pastry, crackers, whipped toppings and decoration.",
    details: ["Trans-fat-free", "Melting point: 34–52 °C"],
  },
  "cocoa-butter-equivalents": {
    name: "Cocoa butter equivalents and substitutes",
    description:
      "Fats for moulded chocolate, coatings, confectionery and wafers. Adichoc, Adikote, Adifil and Adicon ranges.",
    details: ["Trans-fat-free", "Melting point: 32–43 °C"],
  },
  "filling-and-spread-fats": {
    name: "Filling and spread fats",
    description:
      "For chocolate-hazelnut spreads, coatings and fillings; help prevent oil separation and add gloss.",
    details: ["Adispread, Adikote and Adicon ranges"],
  },
  "hardstock-fats": {
    name: "Hardstock fats",
    description:
      "Flakes or powder for chocolate crystallisation and emulsifier production.",
    details: ["Melting point: min. 58 °C"],
  },
  "frying-fats-and-oils": {
    name: "Frying fats and oils",
    description:
      "For frying, snacks and cooking. FryBest, Camar, Harumas and Palmolin brands.",
    details: ["High heat stability"],
  },
  "coconut-oil": {
    name: "Coconut oil",
    description:
      "Refined and deodorised oil for ice cream, chocolate coatings and cosmetics.",
    details: ["Melts quickly in the mouth"],
  },
  "desiccated-coconut": {
    name: "Desiccated coconut",
    description:
      "Low-, medium- and high-fat desiccated coconut for food manufacturing.",
    details: ["Fat: 40–50%, 50–60% or 60–70%", "Moisture: up to 3%", "25 kg bags"],
  },
  "condensed-milk": {
    name: "Condensed milk",
    description:
      "Donaida products for confectionery, desserts and food manufacturing.",
    details: [
      "Energy: 330 kcal",
      "Fat: approx. 10 g; protein: 1.3–2.3%; carbohydrates: approx. 58 g",
      "Pack sizes: 380 g–1 kg cans, 2.5–25 kg bags",
    ],
  },
  "cocoa-powder": {
    name: "Cocoa powder",
    description:
      "Natural and alkalised cocoa powder for food and confectionery production.",
    details: ["Fat: 10–12%", "Moisture: approx. 5%", "25 kg bags"],
  },
  "non-dairy-creamer": {
    name: "Non-dairy creamer",
    description:
      "Powdered creamer for food mixes and commercial product formulations.",
    details: [
      "Fat: 30–34%",
      "Carbohydrates: 50–60%; protein: 2–3%",
      "25 kg bags",
    ],
  },
  "canned-fruit-and-dried-fruit": {
    name: "Canned fruit and dried fruit",
    description:
      "Includes pineapple, mango, papaya, lychee, longan and fruit mixes.",
    details: [],
  },
  "canned-fish": {
    name: "Canned fish",
    description: "Tuna, sardines and mackerel in oil, sauce or brine.",
    details: ["Can sizes: 65–1885 g"],
  },
  "feed-additives": {
    name: "Feed additives",
    description:
      "Granulated fat for dairy cows, used to support milk yield and milk-fat content.",
    details: ["Palmitic acid: 85–98%"],
  },
  "soap-noodles": {
    name: "Soap noodles",
    description: "Raw material for toilet and laundry soap production.",
    details: ["Toilet soap: 78% TFM", "Laundry soap: 64% TFM"],
  },
  "rubber-and-latex": {
    name: "Rubber and latex",
    description:
      "Technically specified rubber and field or concentrated latex.",
    details: ["Rubber: TSR 10, TSR 20, SMR, Mixture", "Latex: HA, MA, LA"],
  },
  "rubber-products": {
    name: "Finished rubber products",
    description:
      "Products for the automotive, medical and other industries.",
    details: [
      "Automotive seals and hoses",
      "Medical gloves and catheters",
      "Mats",
    ],
  },
};

const englishPageTranslations = {
  home: { heroTitle: "YOUR GUIDE TO BUSINESS" },
  services: {
    cards: {
      turnkeyDelivery: {
        title: "Turnkey delivery",
      },
      multimodalTransport: {
        title: "Multimodal transport",
      },
      freightForwarding: {
        title: "Freight forwarding and maritime services",
      },
      cargoInsurance: {
        title: "Cargo insurance",
      },
      rublePayments: {
        title: "Ruble payments",
      },
      warehousing: {
        title: "Warehousing",
      },
      consulting: {
        title: "Technical consulting",
      },
      customDevelopment: {
        title: "Custom product development",
      },
      samplesAndSpecifications: {
        title: "Samples and specifications",
      },
      rubberResearch: {
        title: "Manufacturing and research",
      },
    },
  },
  catalog: {
    title: "Product catalogue",
    backToCatalog: "Back to catalogue",
    specifications: "Specifications",
    specificationsOnRequest:
      "Specifications and packaging are confirmed for each batch.",
    productNotes: {
      accuracy:
        "Actual specifications and availability depend on the product and batch.",
      image: "Image is for illustrative purposes.",
    },
    items: englishItems,
  },
  aboutPage: {
    heroTitle:
      "ADASI Group — international supplier of vegetable oils, fats and food ingredients",
    heroText:
      "ADASI Group supplies vegetable oils, fats and food ingredients to food manufacturers. We work directly with producers in Malaysia and Indonesia, arranging deliveries to Kazakhstan and Russia. The company is represented in Malaysia, Kazakhstan and Russia.",
    label: "About us",
    teamImageAlt: "ADASI Group team meeting with partners",
    teamCaption: "ADASI Group team",
    infoTitle: "About ADASI Group Sdn. Bhd.",
    infoParagraph1:
      "Founded in 2008, ADASI Group is committed to innovation and excellence. Our focus on high-quality services and products has established us as a trusted industry partner. We combine experienced professionals and emerging talent to bring a considered approach to every project.",
    infoParagraph2:
      "Our core values are integrity, customer satisfaction and sustainable growth. We build lasting relationships, understand our clients' needs and work to exceed expectations. Our portfolio spans several industries and reflects our versatility and commitment to quality.",
    assortment: "Our range",
    productsTitle: "Products for food manufacturing",
    productColumn: "Product",
    descriptionColumn: "Description",
    allProducts: "All products →",
    statsLabel: "ADASI Group at a glance",
    stats: ["clients worldwide", "containers", "tonnes transported"],
    logisticsLabel: "Supply chain under control",
    logisticsTitle: "From producer to your facility",
    route: [
      "Producer",
      "Malaysia / Indonesia",
      "Ocean freight",
      "Russia / Kazakhstan",
      "Customer",
    ],
    logisticsBenefits: [
      "Direct supply",
      "Quality control",
      "Logistics coordination",
    ],
    qualityLabel: "Quality you can verify",
    qualityTitle: "Certificates and materials",
    qualityText:
      "We work transparently and oversee every stage of delivery so your operation receives consistent raw materials on time.",
    materialsTitle: "Partner resources",
    materials: [
      "Product catalogue",
      "Certificates",
      "Specifications",
      "ADASI Group presentation",
    ],
    managementLabel: "Management",
    managerName: "Dmitry Muratovich Mustafin",
    managerRole: "Head of the ADASI Group of companies",
  },
};

export const pageTranslations = {
  ru: russianPageTranslations,
  en: englishPageTranslations,
};
