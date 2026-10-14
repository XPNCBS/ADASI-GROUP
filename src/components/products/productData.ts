export interface Product {
  slug: string;
  name: string;
  description: string;
  details: string[];
  image: string;
}

const productImage = "/images/header-bg.webp";

export const products: Product[] = [
  {
    slug: "margarines-and-spreads",
    name: "Маргарины и спреды",
    description:
      "Для хлебобулочных изделий, тортов, печенья, начинок и топингов.",
    details: [
      "Большинство продуктов — без трансжиров",
      "Температура плавления: 36–49 °C",
      "Влажность: макс. 18–22%",
      "Фасовка: коробки 15–20 кг, вёдра 10 кг, саше 200–250 г",
    ],
    image: productImage,
  },
  {
    slug: "milk-fat-substitutes",
    name: "Заменители молочного жира",
    description:
      "Альтернатива сливочному маслу для выпечки, кремов, сыров и мороженого.",
    details: [
      "Без холестерина и ГМО",
      "Термостойкий сливочный вкус",
      "Температура плавления: 24–35 °C",
    ],
    image: productImage,
  },
  {
    slug: "shortenings",
    name: "Шортенинги",
    description:
      "Безводный жир для рассыпчатого теста, крекеров, взбитых сливок и декора.",
    details: ["Без трансжиров", "Температура плавления: 34–52 °C"],
    image: productImage,
  },
  {
    slug: "cocoa-butter-equivalents",
    name: "Заменители и аналоги какао-масла",
    description:
      "Жиры для формования шоколада, глазурей, конфет и вафель. Линейки Adichoc, Adikote, Adifil и Adicon.",
    details: ["Без трансжиров", "Температура плавления: 32–43 °C"],
    image: productImage,
  },
  {
    slug: "filling-and-spread-fats",
    name: "Жиры для начинок и спредов",
    description:
      "Для шоколадно-ореховых паст, глазирования и начинок; помогают предотвратить отделение масла и придают блеск.",
    details: ["Линейки Adispread, Adikote и Adicon"],
    image: productImage,
  },
  {
    slug: "hardstock-fats",
    name: "Жиры-отвердители",
    description:
      "Хлопья или порошок для кристаллизации шоколада и создания эмульгаторов.",
    details: ["Температура плавления: от 58 °C"],
    image: productImage,
  },
  {
    slug: "frying-fats-and-oils",
    name: "Фритюрные жиры и масла",
    description:
      "Для жарки, снеков и кулинарии. Бренды FryBest, Camar, Harumas и Palmolin.",
    details: ["Высокая термостойкость"],
    image: productImage,
  },
  {
    slug: "coconut-oil",
    name: "Кокосовое масло",
    description:
      "Рафинированное и дезодорированное масло для мороженого, шоколадных покрытий и косметики.",
    details: ["Быстро тает во рту"],
    image: productImage,
  },
  {
    slug: "desiccated-coconut",
    name: "Кокосовая стружка",
    description:
      "Кокосовая стружка пониженной, средней и высокой жирности для пищевого производства.",
    details: [
      "Жирность: 40–50%, 50–60% или 60–70%",
      "Влажность: до 3%",
      "Фасовка: мешки 25 кг",
    ],
    image: productImage,
  },
  {
    slug: "condensed-milk",
    name: "Сгущенное молоко",
    description:
      "Продукция Donaida для кондитерских изделий, десертов и пищевого производства.",
    details: [
      "Энергетическая ценность: 330 ккал",
      "Жиры: около 10 г; белки: 1,3–2,3%; углеводы: около 58 г",
      "Фасовка: банки 380 г–1 кг, пакеты 2,5–25 кг",
    ],
    image: productImage,
  },
  {
    slug: "cocoa-powder",
    name: "Какао-порошок",
    description:
      "Натуральный и алкализированный какао-порошок для пищевого и кондитерского производства.",
    details: ["Жирность: 10–12%", "Влажность: около 5%", "Фасовка: мешки 25 кг"],
    image: productImage,
  },
  {
    slug: "non-dairy-creamer",
    name: "Сухие растительные сливки",
    description:
      "Сухие сливки для пищевых смесей и использования в производственных рецептурах.",
    details: [
      "Жиры: 30–34%",
      "Углеводы: 50–60%; белки: 2–3%",
      "Фасовка: мешки 25 кг",
    ],
    image: productImage,
  },
  {
    slug: "canned-fruit-and-dried-fruit",
    name: "Консервированные фрукты и сухофрукты",
    description:
      "Ассортимент включает ананасы, манго, папайю, личи, лонган и фруктовые смеси.",
    details: [],
    image: productImage,
  },
  {
    slug: "canned-fish",
    name: "Рыбные консервы",
    description:
      "Тунец, сардины и скумбрия в масле, соусе или рассоле.",
    details: ["Фасовка: банки 65–1885 г"],
    image: productImage,
  },
  {
    slug: "feed-additives",
    name: "Кормовые добавки",
    description:
      "Гранулированный жир для кормления дойных коров; применяется для повышения надоев и жирности молока.",
    details: ["Содержание пальмитиновой кислоты: 85–98%"],
    image: productImage,
  },
  {
    slug: "soap-noodles",
    name: "Мыльные гранулы",
    description: "Сырьё для производства туалетного и хозяйственного мыла.",
    details: ["Туалетное мыло: 78% TFM", "Хозяйственное мыло: 64% TFM"],
    image: productImage,
  },
  {
    slug: "rubber-and-latex",
    name: "Каучук и латекс",
    description:
      "Технически специфицированный натуральный каучук и полевой или концентрированный латекс.",
    details: ["Каучук: TSR 10, TSR 20, SMR, Mixture", "Латекс: HA, MA, LA"],
    image: productImage,
  },
  {
    slug: "rubber-products",
    name: "Готовые резинотехнические изделия",
    description:
      "Изделия для автомобильной, медицинской и других отраслей.",
    details: [
      "Автомобильные уплотнители и шланги",
      "Медицинские перчатки и катетеры",
      "Коврики",
    ],
    image: productImage,
  },
];
