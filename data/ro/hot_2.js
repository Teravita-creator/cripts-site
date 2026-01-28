registerScript("ro", "hot_2", {
  title: "RO Hot #2",
  stages: {
    greeting: `<p>...</p>`,
    needs: `<p>...</p>`,
    presentation: `<p>...</p>`,
    courses: `
  <p><b>Курсы / Цены</b></p>

  <!-- ВАЖЛИВО: цей блок потрібен для кнопок -->
  <div id="pricingBlock"></div>

  <p class="muted">Натисни на варіант — з’явиться опис.</p>
`,

    cross: `<p>...</p>`,
    survey: `<p>...</p>`,
    closing: `<p>...</p>`,
    objections: `<p>...</p>`,
    products: `<p>...</p>`,
  },
  accordions: { needs: [], objections: [] },
});
