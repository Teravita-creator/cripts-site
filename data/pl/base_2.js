// data/pl/base_1.js
registerScript("pl", "base_2", {
  title: "Nano Flex Base – Type 2",

  // ОЦЕ і є “інші швидкі кнопки” (менше і з іншими назвами)
  navStages: [
    { key: "greeting", label: "Приветствие" },
    { key: "needs", label: "Выявление потребностей" },
    { key: "presentation", label: "Презентация" },
    { key: "courses", label: "Цены" },
     { key: "closing", label: "Завершение" },
    { key: "objections", label: "Отработка возражений" },
    { key: "products", label: "Препарат" },
  ],

  // Контент кладеш у stages, як і раніше
  stages: {
    greeting: `
    <p>Dzień dobry, czy rozmawiam z Panem/Panią _________ <span class="txt-blue">(imię klienta)</span>?</p>
    <p>Nazywam się _________  <span class="txt-blue">[Twoje imię]</span>, dzwonię z Centrum Przywracania Zdrowia.</p>
    <p>Postanowiłem do Pana/Pani zadzwonić, ponieważ zauważyłem zamówienie na Nano Flex i widzę, że zakup nie został dokończony. Możliwe, że poprzedni konsultant nie zdążył przekazać wszystkich potrzebnych informacji — dlatego chciałbym osobiście zapytać, w jaki sposób możemy Panu/Pani pomóc.</p>
    <p>Skoro nie wszystkie szczegóły zostały wcześniej omówione, mogę zaproponować Panu/Pani bardziej korzystne warunki. Sprawdźmy razem wszystko jeszcze raz i znajdźmy dla Pana/Pani najlepsze rozwiązanie!</p>
    `,
    needs:`<p>Na początek chciałbym zadać Panu/Pani kilka krótkich pytań, żeby lepiej zrozumieć, w jakim stanie są stawy i dobrać odpowiednie rozwiązanie.</p>`,

    presentation: `<p>Właśnie chciałem/chciałam zaproponować Panu/Pani wariant, który najczęściej wybierają klienci z bólem i stanem zapalnym stawów.</p>
     <p>Obecnie mamy promocję: do pełnej kuracji Nano Flex w kapsułkach dodajemy <b>krem — całkowicie gratis.</b></p>
    <p>Jak działa zestaw:</p>
    <ul>
    <li> <b>Kapsułki działają od środka</b> — wspierają regenerację chrząstki, zmniejszają stan zapalny i pomagają poprawić ruchomość stawów.</li>
    <li><b>Krem działa miejscowo</b> — pomaga zmniejszyć ból, obrzęk oraz napięcie w okolicach stawów.</li>
    </ul>
    <p>Dzięki temu zestaw działa kompleksowo: kapsułki wspierają stawy od środka, a krem przynosi szybką ulgę z zewnątrz.</p>
    <p>Taki zestaw w promocji oferujemy właśnie naszym stałym klientom.</p>
    <p>Dzięki temu wychodzi to znacznie korzystniej niż przy zakupie osobno: <b>pełna kuracja na 1,5 miesiąca kosztuje tylko 400 zł</b>. W zestawie znajdują się 3 opakowania kapsułek oraz 3 opakowania kremu.</p>
        <p class="presentationTitle"><span class="txt-red">Jeżeli nie:</span></p>

    <p>Nie mogę zostawić Pana/Pani bez rozwiązania. Przy takich objawach ważne jest dobranie kuracji, która naprawdę przyniesie efekt, a nie tylko na chwilę złagodzi ból.</p>
    <p>Dlatego mogę zaproponować krótszy kurs na miesiąc — w zestawie będą 2 opakowania kapsułek oraz 2 opakowania kremu. <b>Koszt takiego zestawu to 350 zł.</b></p>
    
    `,
 
    courses: `<table class="priceTable">
     
      <tr>
        <td>Kuracji:</td>
        <td>Pełna</td>
        <td>Standardowa</td>
        <td>Próbna</td>
      </tr>


       <tr>
        <td>Liczba opakowań:</td>
        <td>6 (3 kapsułki + 3 krem)</td>
        <td>4 (2 kapsułki + 2 krem)</td>
        <td>3 (2 kapsułki + 1 krem</td>
      </tr>
<tr>
    
      <tr>
        <td>Dostawa:</td>
        <td>free</td>
        <td>free</td>
        <td>free</td>
      </tr>
      <tr>
        <td>Cena:</td>
        <td>400 </td>
        <td>350 </td>
        <td>297</td>
      </tr>
     
    </table>
`,
    
    closing: `<p>Dobrze, sprawdzimy jeszcze raz wszystkie dane, czy wszystko jest poprawnie wpisane:</p>
    <ol>
    <li>Nazwisko, Imię -Gdzie wysyłamy</li>
    <li>A więc zamówił/a Pan/Pani ___ (wymień co dokładnie i w jakiej ilości klient będzie miał w paczce). Kwota zamówienia wynosi ___ zł, podobnie jak dostawa _____ zł, razem ______ zł.</li>
   
    </ol>
   
     <p>Gdyby pojawiły się jakiekolwiek pytania, może Pan/Pani zadzwonić pod numer, który teraz podam <b>+48 579 775 191</b></p>
    
    <p class="presentationTitle">Dostawa nastąpi w ciągu około 2-3 dni (data dostawy).<span class="txt-red"> Czy potwierdza Pan/Pani, że będzie w stanie odebrać zamówienie?</span></p>
    <p>Czy ma Pan/Pani jeszcze jakieś pytania?</p>
    <p>Dziękuję za zamówienie. Proszę oczekiwać na przesyłkę. Jestem pewny(a), że będzie Pan zadowolony z zakupu. Życzę doskonałych efektów i dużo zdrowia! Do widzenia!</p>`,
    
    products: `<div id="productsList"></div>`,
  },

products: [
  {
    name: "NanoFlex",
    image: "assets/products/pl/product5.png", // або https://...
    origin: "Ryga, Łotwa",
    format: "30 szt./opak",
    usage: "2 razy./dzień",
    
    ingredients: [
      { name: "Siarczan glukozaminy 2KCl ", effect: " Jest to związek pochodzący ze skorupiaków, który dostarcza kluczowych składników strukturalnych chrząstki amortyzującej, która amortyzuje stawy i zapewnia wygodę ruchu. Pomaga odbudować chrząstkę, zmniejszyć ból stawów i poprawić mobilność, szczególnie w chorobie zwyrodnieniowej stawów. Pomaga zmniejszyć bóle stawów i kręgosłupa w spoczynku i podczas chodzenia; ogólnie wzmacnia tkankę łączną (naczynia, skórę itp.)" },
      { name: "Metylosulfonylometan (MSM)", effect: "MSM to organiczny związek siarki, który ma silne właściwości przeciwzapalne i przeciwutleniające. Utrzymuje elastyczność stawów, zmniejsza ból i obrzęk, wspomaga tworzenie kolagenu." },
      { name: "Siarczan chondroityny ", effect: "Istotny składnik chrząstki, który pomaga zatrzymać wodę, zapewniając lepszą elastyczność i amortyzację. Odgrywa kluczową rolę w zmniejszaniu bólu, sztywności i stanów zapalnych stawów, szczególnie w chorobach takich jak choroba zwyrodnieniowa stawów.  Chondroityna stymuluje odbudowę tkanki chrzęstnej. " },
      { name: "Witamina C (kwas L-askorbinowy) ", effect: "Silny przeciwutleniacz, który wspomaga produkcję kolagenu, niezbędnego do utrzymania zdrowych kości i chrząstek. Pomaga także chronić tkankę stawową przed stresem oksydacyjnym." },
      { name: "Ekstrakt z Boswellia serrata ", effect: "Naturalny środek przeciwzapalny, który pomaga zmniejszyć obrzęk i sztywność stawów. pomaga chronić chrząstkę przed zniszczeniem oraz ogranicza procesy zwyrodnieniowe, co pomaga w utrzymaniu zdrowych stawów nawet podczas długotrwałego wysiłku fizycznego." },
      { name: "Ekstrakt suchy z imbiru (Zingiber Officinale) ", effect: "zawiera związki bioaktywne o silnym działaniu przeciwzapalnym i przeciwbólowym. Utrzymuje komfort stawów i pomaga zmniejszyć sztywność mięśni." },
      { name: "Kurkumina ", effect: "Aktywny składnik kurkumy ma silne właściwości przeciwzapalne i przeciwutleniające. Pomaga zmniejszyć ból, sztywność i obrzęk stawów poprzez blokowanie szlaków zapalnych." },
      { name: "Siarczan manganu ", effect: "niezbędny pierwiastek śladowy, który wspomaga tworzenie tkanki łącznej, chrząstki i kości. Odgrywa również rolę w zmniejszaniu stresu oksydacyjnego i stanów zapalnych stawów." },
      
      ],
  }, 
{
    name: "Ozem Lite Slim",
    image: "assets/products/ro/product5.jpg", // або https://...
    origin: "Ryga, Łotwa",
    format: "20 szt./opak",
    usage: "2 razy./dzień",

    ingredients: [
      { name: "Tauryna – 200 mg:", effect: " Aminokwas wspierający prawidłowe funkcjonowanie serca i układu nerwowego. Wspomaga metabolizm i poziom energii." },
 { name: "Ekstrakt z zielonej herbaty (Camellia sinensis) – 125 mg:", effect: "Silne właściwości antyoksydacyjne. Wspiera metabolizm i proces spalania tłuszczu. " },
 { name: "L-karnityna – 100 mg:", effect: "Aminokwas wspierający transport kwasów tłuszczowych do mitochondriów, gdzie są wykorzystywane do produkcji energii. Wspomaga proces spalania tłuszczu i wydolność fizyczną. " },
 { name: "L-karnityna L-tartrat – 100 mg:", effect: " Forma karnityny o wysokiej przyswajalności. Wspiera pracę mięśni i proces redukcji masy ciała." },
 { name: "Kofeina bezwodna – 100 mg:", effect: " Substancja pobudzająca zwiększająca poziom energii i koncentrację. Wspiera metabolizm i wydolność fizyczną." },
 { name: "Ekstrakt suchy z imbiru (Zingiber Officinale) ", effect: " zawiera związki bioaktywne o silnym działaniu przeciwzapalnym i przeciwbólowym. Utrzymuje komfort stawów i pomaga zmniejszyć sztywność mięśni." },
 { name: "Ekstrakt z nasion guarany (Paullinia cupana) [22% kofeiny] – 87,6 mg:", effect: " Naturalne źródło kofeiny o stopniowym uwalnianiu. Wspiera kontrolę apetytu i metabolizm." },
 { name: "Ekstrakt z zielonej kawy – 12,5 mg:", effect: "Zawiera kwas chlorogenowy wspierający metabolizm węglowodanów i tłuszczów. Wspomaga proces redukcji masy ciała. " },
 { name: "Inozytol – 12,5 mg:", effect: " Wspiera prawidłowy metabolizm tłuszczów i poziom cukru we krwi. Wspomaga funkcjonowanie układu nerwowego i samopoczucie." },
 { name: "Cholina (bitartrat choliny) – 12,5 mg:", effect: "Wspiera metabolizm tłuszczów i funkcjonowanie wątroby. Wspomaga koncentrację i poziom energii. " },
 { name: "L-tyrozyna – 12,5 mg:", effect: " Aminokwas wspierający syntezę neuroprzekaźników. Pomaga w utrzymaniu koncentracji i dobrego nastroju." },
 { name: "Chrom – 40 µg (100% RWS):", effect: "Wspiera prawidłowy poziom cukru we krwi i pomaga ograniczyć ochotę na słodycze. Wspomaga metabolizm węglowodanów i tłuszczów. " },

      
      ],
      
  },
   {
    name: "NEWAGRA Gold",
    image: "assets/products/pl/product1.png", // або https://...
    origin: "Ryga, Łotwa",
    format: "30 szt./opak",
    usage: "2 razy./dzień",
    
    ingredients: [
      { name: "proszek z korzenia czerwonej maki (Lepidium meyenii)", effect: "Promuj syntezę testosteronu i normalizuj funkcje erekcji, poprawiaj jakość nasienia. Zwiększa libido i przyspiesza regenerację po aktywności seksualnej. Stosowany w leczeniu niepłodności męskiej. Ma działanie przeciwzapalne i immunomodulujące." },
      { name: "ekstrakt z eleuterokoka kolczastego (Eleutherococcus senticosus Maxim.)", effect: "Zwiększa potencję i aktywność seksualną, ekstrakt działa stymulująco na centralny układ nerwowy. Stymuluje funkcję naprawczą wątroby i przerost kompensacyjny nerek, normalizuje poziom cukru we krwi, korzystnie wpływa na układ sercowo-naczyniowy" },
      { name: "ekstrakt z korzenia ashwagandhy (Withania somnifera L. Dunal.)", effect: " Poprawia funkcje rozrodcze u mężczyzn (zwiększa liczbę i ruchliwość plemników), stymuluje produkcję testosteronu. Zwiększa także popęd seksualny, a dzięki zawartemu żelaza pomaga przy anemii. Ashwagandha stymuluje pracę tarczycy. " },
      { name: "ekstrakt z owoców palmy sabalowej (Serenoa repens)", effect: "Pomaga poprawić czynność układu moczowego u mężczyzn, pomaga złagodzić objawy ze strony dolnych dróg moczowych u mężczyzn z zapaleniem prostaty, ułatwia oddawanie moczu i zmniejsza częstotliwość nocnych wizyt w toalecie." },
      { name: "ekstrakt z nasion kozieradki pospolitej (Trigonella foenum-graecum L.)", effect: "Pobudza funkcje seksualne, zwiększa libido, poprawia doznania, poprawia potencję. Korzystnie wpływa na stan prostaty i zmniejsza ryzyko zmian związanych z wiekiem." },
      { name: "Ekstrakt z łodyg i liści kozy rogatej (Epimedium brevicornum), kozieradka, beta-sitosterol, substancja przeciwzbrylająca: stearynian magnezu, ekstrakt pieprzu czarnego (Piper Nigrum) [piperyna 95%], koenzym Q10" },
       ],
  }, 

], 

  // якщо треба акордеони — можна (не обов’язково)
  accordions: {
  // ✅ ВИЯВЛЕННЯ ПОТРЕБ — питання + 2 кнопки + 2 приховані відповіді
  needs: [
    {
      q: "1. Czy zdarzają się u Pana/Pani bóle albo chrupanie w stawach — na przykład w kolanach, łokciach lub plecach?",
      a: `
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin:10px 0;">
          <button type="button" class="ynBtn" data-show="a">TAK</button>
          <button type="button" class="ynBtn" data-show="b">NIE</button>
        </div>

        <div class="ynPanel" data-panel="a">
          <p>Rozumiem. To bardzo częsty sygnał, że chrząstka zaczyna się zużywać i pojawia się stan zapalny.</p>
        </div>

        <div class="ynPanel" data-panel="b">
          <p>To dobrze. W takim razie można zadbać o stawy profilaktycznie, żeby uniknąć takich problemów w przyszłości.</p>
        </div>
      `,
    },
    {
      q: "2. Czy odczuwa Pan/Pani rano sztywność w stawach albo trudniej się rozprostować po wstaniu z łóżka?",
      a: `
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin:10px 0;">
          <button type="button" class="ynBtn" data-show="a">TAK</button>
          <button type="button" class="ynBtn" data-show="b">NIE</button>
        </div>

        <div class="ynPanel" data-panel="a">
          <p>To jeden z pierwszych objawów przeciążenia stawów. W takiej sytuacji ważne jest ich odpowiednie odżywienie i regeneracja.</p>
        </div>

        <div class="ynPanel" data-panel="b">
          <p>Świetnie. To oznacza, że możemy skupić się głównie na profilaktyce i utrzymaniu dobrej ruchomości.</p>
        </div>
      `,
    },
    {
      q: "3. Czy zauważył/a Pan/Pani czasem obrzęk stawów albo uczucie ciepła czy pieczenia w ich okolicy?",
      a: `
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin:10px 0;">
          <button type="button" class="ynBtn" data-show="a">TAK</button>
          <button type="button" class="ynBtn" data-show="b">NIE</button>
        </div>

        <div class="ynPanel" data-panel="a">
          <p>To najczęściej oznaka stanu zapalnego. Jeśli się go nie wyciszy, z czasem może się nasilać.</p>
        </div>

        <div class="ynPanel" data-panel="b">
          <p>To bardzo dobrze. W takim razie możemy działać wcześniej i zapobiec pojawieniu się stanu zapalnego.</p>
        </div>
      `,
    },
    {
      q: "4. Czy w pracy albo na co dzień musi Pan/Pani długo stać, siedzieć albo obciążać stawy?",
      a: `
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin:10px 0;">
          <button type="button" class="ynBtn" data-show="a">TAK</button>
          <button type="button" class="ynBtn" data-show="b">NIE</button>
        </div>

        <div class="ynPanel" data-panel="a">
          <p>W takim przypadku stawy zużywają się szybciej, dlatego warto je wzmocnić i zabezpieczyć.</p>
        </div>

        <div class="ynPanel" data-panel="b">
          <p>To oczywiście pomaga, ale chrząstka stawowa i tak z czasem się zużywa, dlatego potrzebuje wsparcia.</p>
        </div>
      `,
    },
    {
      q: "5. Czy stosuje Pan/Pani już jakieś preparaty na stawy?",
      a: `
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin:10px 0;">
          <button type="button" class="ynBtn" data-show="a">TAK</button>
          <button type="button" class="ynBtn" data-show="b">NIE</button>
        </div>

        <div class="ynPanel" data-panel="a">
          <p>Rozumiem. To znaczy, że jest Pan/Pani świadomy/świadoma, jak ważna jest regeneracja stawów. Nano Flex można stosować razem z innymi preparatami, żeby wzmocnić efekt.</p>
        </div>

        <div class="ynPanel" data-panel="b">
          <p>W takim razie zaczniemy od bezpiecznego i kompleksowego rozwiązania, które wspiera stawy od środka.</p>
        </div>
      `,
    },
    {
  q: "Podsumowanie",
  a: `
    <p>Podsumowując Pana/Pani odpowiedzi — stawy potrzebują teraz wsparcia: zmniejszenia stanu zapalnego, odbudowy chrząstki i poprawy ruchomości. Dlatego właśnie polecam Nano Flex— działa kompleksowo, wspiera stawy od środka i pomaga stopniowo przywrócić ich prawidłową pracę.</p>
  `
}


    // ✅ Можеш додавати ще питання так само:
    // { q: "...", a: `...ynBtn/ynPanel...` },
  ],

  // ✅ ЗАПЕРЕЧЕННЯ — (старі акордеони “швидкі варіанти” можеш залишити)
  
},
  objectionsButtons: [
  { label: "Drogo", html: "<p>Rozumiem. Właśnie dlatego przygotowaliśmy zestaw promocyjny — żeby pełna kuracja była tańsza i jednocześnie skuteczna. W tym przypadku płaci Pan/Pani za rozwiązanie problemu, a nie tylko za chwilowe złagodzenie bólu. Jeśli podzielimy koszt kuracji na 45 dni, wychodzi mniej więcej kilka złotych dziennie — często mniej niż środki przeciwbólowe czy wizyta u specjalisty. Najważniejsze jest jednak to, że stawy mają szansę się zregenerować, a ból nie wraca. Czy w takim razie wybieramy pełny kurs, czy woli Pan/Pani zacząć od krótszego, profilaktycznego?”</p>" },
  { label: "Klient się waha", html: "<p>„Rozumiem Pana/Pani wątpliwości. Wiele osób z podobnymi objawami zauważa pierwszą poprawę już po 1–2 tygodniach stosowania. Na przykład jedna z naszych klientek mówiła, że nie mogła normalnie kucnąć — po około 10 dniach ból się zmniejszył, a staw stał się bardziej ruchomy. Pod koniec kuracji zniknęły także obrzęki i chrupanie w stawach. Jeśli tylko znosi się ból i nic z nim nie robi, problem zwykle się pogłębia. Ten zestaw działa kompleksowo — wspiera odbudowę tkanek i poprawia odżywienie stawów od środka, dlatego efekty są bardziej trwałe. Dlatego proponuję rozpocząć kurację, żeby już pod koniec miesiąca mógł/mogła Pan/Pani odczuć wyraźną ulgę.”</p>" },
],
},
)
