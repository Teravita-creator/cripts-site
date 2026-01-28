registerScript("ro", "hot_1", {
  title: "RO Hot #1",
  stages: {
    greeting: ``,
    needs: ``,
    presentation: ``,
    courses: `
      <p><b>Курсы / Цены</b></p>
      <div id="pricingBlock"></div>
    `,
    cross: ``,
    survey: ``,
    closing: ``,
    objections: ``,
    products: ``,
  },

  // ✅ ОЦЕ НОВЕ:
  pricing: [
    {
      label: "Бесплатно 16",
      html: `
        <p><b>Вариант: Бесплатно 16</b></p>
        <p>Курс: ...</p>
        <ul>
          <li>Капсул: ...</li>
          <li>Цена: ...</li>
          <li>Доставка: ...</li>
        </ul>
      `
    },
    {
      label: "Лоу 99",
      html: `
        <p><b>Вариант: Лоу 99</b></p>
        <p>Курс: ...</p>
        <ul>
          <li>Капсул: ...</li>
          <li>Цена: 99</li>
          <li>Доставка: ...</li>
        </ul>
      `
    },
    {
      label: "Мидл 119",
      html: `
        <p><b>Вариант: Мидл 119</b></p>
        <ul>
          <li>Капсул: ...</li>
          <li>Цена: 119</li>
          <li>Доставка: ...</li>
        </ul>
      `
    },
    {
      label: "Фулл 149/159",
      html: `
        <p><b>Вариант: Фулл 149/159</b></p>
        <ul>
          <li>Курс: ...</li>
          <li>Капсул: ...</li>
          <li>Цена: 149/159</li>
          <li>Доставка: бесплатно / ...</li>
        </ul>
      `
    },
  ],

  accordions: { needs: [], objections: [] },
});
