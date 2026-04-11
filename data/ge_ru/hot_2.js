registerScript("ge_ru", "hot_2", {
  title: "-",
   stages: {
    greeting: `
    <p></p>

    `,
    needs: `
<div id="presentationFlow"></div>

    `,
    presentation: `

    <p></p>
   `,
    courses: `
<p></p>

<table class="priceTable">
      
      <tr>
        <td>Курс:</td>
        <td>Кол-во уп</td>
        <td>Период лечения</td>
        <td>Доставка</td>
        <td>Стоимость</td>
        <td>Цена с доставкой</td>
      </tr>

       <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td></td>
        <td>/td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
     
    </table>

    `,


    cross: `
<p></p>
        `,
    survey: `
  <p></p>

`,
    closing: `
    <p></p>

    `,
    objections: `
    <p class="presentationTitle"></p>
  <div id="objectionsButtons"></div>
   `,
    products:  `
  <div id="productsList"></div>
`,
  },

presentationFlow: [
  {
    textHtml: `
<p>1. питання</p>`,
 buttons: [
      { label: "відповідь 1:", html: `<p></p>` },
      { label: "відповідь 2: ", html: `<p></p>` },
    ],
  },

        
    {
    textHtml: `<p>питання 2</p>
    <p>відповідь, якщо не потрібно відривання</p> `,
 },
 ],

objectionsButtons: [
    {
      label: "текст",
      html: `
        <p> </p>      `,
    },
{
      label: "",
      html: `
        <p> </p>      `,
    },

 ],
products: [
  
    {
  name: "Artrolux Pro (Артролюкс Про)",
  image: "assets/products/ge_ru/product2.png",
  origin: "Произведено в ЕС по заказу ECOMTRADESTAR LLP, Лондон",
  format: "Капсулы",
  usage: "2–3 капсулы в день",

  description: "Препарат содержит эффективный комплекс активных веществ, направленных на улучшение состояния суставов, восстановление хрящевой ткани и снижение воспаления.",

  characteristics: [
    "Поддерживает подвижность суставов, уменьшает боль и дискомфорт", 
    "Подходит для длительного применения и профилактики заболеваний опорно-двигательного аппарата",
    "Рекомендуется принимать курсами по 1–2 месяца, повторяя 2 раза в год"
  ],

  

  ingredients: [
    { name: "", effect: "" },
{ name: "", effect: "" },
{ name: "", effect: "" },
{ name: "", effect: "" },
     ],


  contraindications: [
    "Не превышать рекомендуемую дозировку",
    
    "Не использовать как замену полноценного питания",
    "Не принимать при индивидуальной непереносимости",
    "Не использовать при беременности и кормлении",
    "Не подходит для детей"
  ],

  storage: "Хранить в сухом и тёмном месте при температуре до 25°C",

 },


{
  name: "MOVENZA",
  image: "assets/products/ge_ru/product1.png",
  origin: "Латвия",
  format: "гель, 50 мл",
  usage: "наносить гель на проблемные участки 2–3 раза в день. Зоны нанесения: локти, колени, спина, плечи",

  characteristics: [
    "Гель легко впитывается", 
    "Обладает охлаждающим и успокаивающим эффектом",
    "Подходит для ежедневного использования"
  ],

  

  ingredients: [
    { name: "", effect: "" },
{ name: "", effect: "" },
{ name: "", effect: "" },
{ name: "", effect: "" },
      ],


  contraindications: [
    "Индивидуальная непереносимость компонентов",
    "Контакт с глазами и слизистыми: в случае попадания промыть большим количеством воды",
  ],

  storage: "Хранить в сухом и тёмном месте при комнатной температуре",

 }

],





})

