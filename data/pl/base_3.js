// data/pl/base_1.js
registerScript("pl", "base_3", {
  title: "Potencja/prostata Base – Type 2",

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
     <p>Dzień dobry Panie/Pani <span class="txt-blue">(imię klienta)</span>.</p>
     <p>Nazywam się _________  <span class="txt-blue">[Twoje imię]</span></p>
    <p>Widziałem, że jakiś czas temu zostawił Pan/Pani zgłoszenie w sprawie preparatu na potencję / prostatę, ale zamówienie nie zostało wtedy dokończone.</p>
    <p>Oddzwaniam tylko na chwilę, żeby sprawdzić — czy problem jest nadal aktualny, czy udało się już go rozwiązać?</p>


    `,
    needs:``,

    presentation: `
     <p>Na podstawie Pana odpowiedzi mogę zaproponować trzy warianty kuracji. Różnią się one długością stosowania i siłą efektu.</p>
    <p><b>Najczęściej wybierana – kuracja standardowa.</b> To wariant, który wybiera większość naszych klientów. Kuracja obejmuje 4 opakowania preparatu, co pozwala:</p>
    <ul>
    <li>poprawić krążenie krwi</li>
    <li>wesprzeć pracę prostaty</li>
    <li>zwiększyć poziom energii i libido</li>
    <li>stopniowo przywrócić naturalną sprawność</li>
    </ul>
    <p><b>Cena tej kuracji wynosi 350 zł.</b></p>

    <p class="presentationTitle"><span class="txt-red">lub</span></p>
    <p><b>Najmocniejsza kuracja</b> – dla utrwalenia efektu</p>
    <p>Jeżeli chce Pan nie tylko poprawić sytuację, ale również utrwalić efekt na dłużej, wtedy polecam pełną kurację.</p>
    <p>W zestawie znajduje się 6 opakowań preparatu.</p>
    <p>Taki program:</p>
    <ul>
    <li>intensywnie wspiera krążenie</li>
    <li>pomaga ustabilizować poziom testosteronu</li>
    <li>wzmacnia prostatę</li>
    <li>pozwala utrzymać efekty znacznie dłużej</li>
    </ul>
    <p><b>Koszt takiej kuracji wynosi 400 zł.</b></p>
    <p>Wychodzi to najkorzystniej cenowo, ponieważ każde opakowanie jest wtedy dużo tańsze. Jaką kuracje mam dla Pana wysłać?</p>
    <p class="presentationTitle"><span class="txt-red">SILNY DOMYK</span></p>
    <p>Panie (imię), powiem szczerze — większość mężczyzn odkłada rozwiązanie tego problemu, a z czasem on tylko się pogłębia. Dlatego proponuję zacząć kurację teraz, żeby organizm mógł się zregenerować i wrócić do normalnej sprawności.
    Przygotujemy wysyłkę jeszcze dziś. Dobrze?</p>
    

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
        <td>6</td>
        <td>4</td>
        <td>3</td>
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
  {
    name: "Prostonix",
    image: "assets/products/pl/product2.png", // або https://...
    origin: "Ryga, Łotwa",
    format: "20 szt./opak",
    usage: "2/3 razy./dzień",


    ingredients: [
      { name: ":", effect: "" },
{ name: "Ekstrakt z palmy sabałowej (owoc palmy sabałowej)", effect: "Łagodzi objawy ze strony układu moczowego, zmniejsza stany zapalne prostaty, pomaga zmniejszyć dyskomfort i stany zapalne prostaty. Ma silne działanie antyproliferacyjne i przeciwutleniające, co pomaga ograniczyć rozrost tkanki prostaty i skutecznie zapobiega uszkodzeniom powodowanym przez wolne rodniki." },
{ name: "Liście zielonej herbaty", effect: "Wspomaga równowagę hormonalną poprzez zmniejszenie nadmiernego wzrostu nabłonka prostaty i ma właściwości przeciwzapalne, które mogą pomóc poprawić zdrowie prostaty i ogólne samopoczucie. Pomaga zapobiegać chorobom prostaty i korzystnie wpływa na męski układ hormonalny." },
{ name: "Brokuły w proszku", effect: "Związek organiczny występujący w warzywach krzyżowych, który ma zdolność spowalniania wzrostu komórek raka prostaty poprzez aktywację określonego genu – enzymu hamującego rozwój nowotworów." },
{ name: "Kurkumina (węglan wapnia)", effect: "Mają właściwości przeciwnowotworowe, które mogą zatrzymać rozprzestrzenianie się i wzrost komórek nowotworowych. Przeciwzapalne działanie kurkumy może pomóc zmniejszyć ryzyko rozwoju łagodnego rozrostu prostaty." },
{ name: "Cynk", effect: "Pomaga zmniejszyć powiększenie prostaty, poprawić opróżnianie pęcherza i przepływ moczu oraz zmniejszyć liczbę nocnych wizyt w toalecie. Ten niezbędny minerał śladowy odgrywa wyjątkową rolę w zdrowiu prostaty, ponieważ komórki otaczające prostatę są wysoce wyspecjalizowane w przechowywaniu cynku w stężeniach 10–15 razy wyższych niż w innych tkankach organizmu." },
{ name: "Kwas askorbinowy (witamina C), ekstrakt z zielonej herbaty [40% polifenoli], żelatyna, ekstrakt z palmy sabałowej [5% kwasów tłuszczowych ogółem], celuloza mikrokrystaliczna, ekstrakt z żurawiny, sproszkowane brokuły, ekstrakt z kłącza kurkumy [10% kurkuminy], tlenek cynku, drożdże selenu (2000 ppm), roślinny stearynian magnezu, węglan wapnia, likopen.", },
 ],
     
  },
  {
    name: "Libidomatic",
    image: "assets/products/pl/product3.png", // або https://...
    origin: "Ryga, Łotwa",
    format: "20 szt./opak",
    usage: "1 razy./dzień",


    ingredients: [
      { name: ":", effect: "" },
{ name: "Ekstrakt z owoców palmy sabałowej (Serenoae repens):", effect: "Pomaga zwiększyć poziom testosteronu, co może poprawić libido, Wspomaga zdrowie prostaty i poprawia funkcje moczowo-płciowe, poprawia oddawanie moczu i zmniejsza częstotliwość oddawania moczu w nocy u mężczyzn" },
{ name: "Ekstrakt Tribulus (Tribulus Terrestris):", effect: "Znany ze swoich właściwości zwiększających poziom testosteronu, pomaga poprawić pożądanie seksualne i wytrzymałość fizyczną. Normalizuje i poprawia pracę gruczołu krokowego u mężczyzn. Ekstrakt poprawia krążenie krwi, oczyszcza naczynia krwionośne z płytek i zakrzepów." },
{ name: "Ekstrakt z korzenia pokrzywy (Urtica dioica L.):", effect: "Utrzymuje zdrowie prostaty i poprawia pracę układu moczowo-płciowego, pomaga zwiększyć poziom wolnego testosteronu w organizmie. Pomaga regulować poziom testosteronu w organizmie, zapobiegając jego konwersji do dihydrotestosteronu (DHT), co może negatywnie wpływać na zdrowie prostaty" },
{ name: "Cynk:", effect: "Pomaga zmniejszyć powiększenie prostaty, poprawić opróżnianie pęcherza i przepływ moczu oraz zmniejszyć liczbę nocnych wizyt w toalecie. Ten niezbędny minerał śladowy odgrywa wyjątkową rolę w zdrowiu prostaty, ponieważ komórki otaczające prostatę są wysoce wyspecjalizowane w przechowywaniu cynku w stężeniach 10–15 razy wyższych niż w innych tkankach organizmu." },
{ name: "L-glutamina, L-alanina, L-glicyna:", effect: "Aminokwas sprzyjający regeneracji po wysiłku fizycznym. Wspomaga układ odpornościowy i ogólną energię organizmu. Poprawia jakość snu, co jest ważne dla ogólnego stanu zdrowia i energii. Wspomaga relaks i redukcję stresu, co może mieć pozytywny wpływ na libido." },
{ name: "Witamina E, Witamina B6, Selen, Likopen", },
 ],
     
  },
{
    name: "Żel stymulujący",
    image: "assets/products/pl/product4.png", // або https://...
    origin: "Ryga, Łotwa",
    format: "50 ml",
    usage: "2 razy./dzień",


    ingredients: [
      { name: "alantoina:", effect: " Stymulator podziału komórek (proliferacji), wpływa na wzrost i podział komórek ciał jamistych prącia. Zwiększa elastyczność podczas napełniania krwią." },
{ name: "inulina:", effect: "Pomaga normalizować i poprawiać skład mikroflory, utrzymuje zdrowy mikrobiom skóry. Zdolny do zatrzymywania wilgoci, tworząc nieprzepuszczalny film na powierzchni skóry i ciał jamistych prącia, utrzymując nawilżenie oraz zapewniając elastyczność i pełnię." },
{ name: "oligosacharyd alfa-glukanu:", effect: "Stymuluje rozwój przyjaznej mikroflory żyjącej na powierzchni naskórka, osłabia i neutralizuje szkodliwe bakterie, wspomaga syntezę specjalnych peptydów przeciwdrobnoustrojowych przez keratynocyty. " },
{ name: "kwas hialuronowy:", effect: "Zwiększa elastyczność. Kwas hialuronowy uzupełnia syntezę kolagenu i elastyny, która spowalnia z wiekiem. Substancje te zagęszczają tkankę łączną i wypełniają pory.  Uzupełnia i utrzymuje równowagę nawilżenia" },
{ name: "leczniczy ekstrakt z rumianku:", effect: " Ma działanie przeciwzapalne, antyseptyczne i przeciwskurczowe, usuwa infekcje bakteryjne. " },

 ],
     
  },


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
   

], 

  // якщо треба акордеони — можна (не обов’язково)
  accordions: {
  // ✅ ВИЯВЛЕННЯ ПОТРЕБ — питання + 2 кнопки + 2 приховані відповіді
  needs: [
    {
      q: "1. Czy zauważył Pan ostatnio, że erekcja jest słabsza niż wcześniej?",
      a: `
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin:10px 0;">
          <button type="button" class="ynBtn" data-show="a">TAK</button>
          <button type="button" class="ynBtn" data-show="b">NIE</button>
        </div>

        <div class="ynPanel" data-panel="a">
          <p>To bardzo częsty objaw pogorszonego krążenia krwi i spadku poziomu testosteronu.</p>
        </div>

        <div class="ynPanel" data-panel="b">
          <p>To dobry znak — wtedy skupiamy się bardziej na profilaktyce i wzmocnieniu organizmu.</p>
        </div>
      `,
    },
    {
      q: "2. Czy zdarzają się częstsze wizyty w toalecie w nocy?",
      a: `
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin:10px 0;">
          <button type="button" class="ynBtn" data-show="a">TAK</button>
          <button type="button" class="ynBtn" data-show="b">NIE</button>
        </div>

        <div class="ynPanel" data-panel="a">
          <p>Może to wskazywać na przeciążenie prostaty lub jej powiększenie.</p>
        </div>

        <div class="ynPanel" data-panel="b">
          <p>To bardzo dobrze — oznacza to, że możemy działać profilaktycznie.</p>
        </div>
      `,
    },
    {
      q: "3. Czy stosował Pan wcześniej jakieś środki na potencję??",
      a: `
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin:10px 0;">
          <button type="button" class="ynBtn" data-show="a">TAK</button>
          <button type="button" class="ynBtn" data-show="b">NIE</button>
        </div>

        <div class="ynPanel" data-panel="a">
          <p>Rozumiem. W takim razie ważne jest dobranie preparatu, który działa nie tylko chwilowo, ale wspiera organizm.</p>
        </div>

        <div class="ynPanel" data-panel="b">
          <p>W takim razie warto zacząć od kompleksowego rozwiązania.</p>
        </div>
      `,
    },
    
    {
  q: "Podsumowanie",
  a: `
    <p>Na podstawie Pana odpowiedzi można powiedzieć, że organizm potrzebuje teraz wsparcia:</p>
    <ul>
    <li>poprawy krążenia</li>
 <li>wsparcia prostaty</li>
  <li>zwiększenia energii i testosteronu</li>
  </ul>

    <p>Dlatego polecam preparat <b>(Newagra/Prostonix/Libidomatic)</b> — działa kompleksowo i pomaga stopniowo przywrócić naturalną sprawność.</p>
  `
}


    // ✅ Можеш додавати ще питання так само:
    // { q: "...", a: `...ynBtn/ynPanel...` },
  ],

  // ✅ ЗАПЕРЕЧЕННЯ — (старі акордеони “швидкі варіанти” можеш залишити)
  
},
  objectionsButtons: [
  { label: "Drogo", html: "<p>Rozumiem Pana. Dlatego właśnie oferujemy kurację w promocji dla osób, które wcześniej zostawiły zgłoszenie. Jeśli podzielimy koszt na cały okres stosowania, wychodzi często mniej niż kilka złotych dziennie.A w zamian poprawia się nie tylko potencja, ale również praca prostaty i ogólna kondycja organizmu. Dlatego pytanie — zaczynamy od pełnej kuracji czy od krótszego kursu?</p>" },
  { label: "Muszę się zastanowić", html: "<p>Rozumiem. Proszę tylko pamiętać, że takie problemy zwykle z czasem się pogłębiają. Wielu naszych klientów mówi, że pierwszą poprawę odczuwa już po około 10–14 dniach. Dlatego najlepiej zacząć kurację wcześniej i nie dopuszczać do pogłębiania się problemu.</p>" },
  { label: "Oddzwonię później", html: "<p>Oczywiście. Tylko powiem szczerze — zazwyczaj później po prostu brakuje czasu i temat zostaje odłożony. Dlatego najlepiej zamówić teraz, a odbiór i płatność są dopiero przy dostawie. Czyli nie ryzykuje Pan niczym.</p>" },
  { label: "Nie wierzę w takie preparaty", html: "<p>Rozumiem Pana sceptycyzm. Dlatego właśnie preparat działa kompleksowo — poprawia krążenie krwi i wspiera prostatę. To nie jest środek jednorazowy jak tabletki, tylko kuracja wspierająca organizm. Dlatego efekty są bardziej naturalne i trwałe.</p>" },
  { label: "Jestem za młody / za stary", html: "<p>Tak naprawdę problem z potencją może pojawić się w każdym wieku. Najczęściej wynika to z: stresu, zmęczenia, problemów z krążeniem, zmian hormonalnych. Dlatego ważne jest wsparcie organizmu, zanim problem się pogłębi.</p>" },
  { label: "Mam już inne leki", html: "<p>Rozumiem. Wiele osób stosuje preparat razem z innymi środkami, ponieważ działa on wspierająco na organizm. Warto jednak skonsultować to ze specjalistą, jeśli ma Pan wątpliwości.</p>" },
  { label: "Nie potrzebuję", html: "<p>Rozumiem. Tylko skoro wcześniej zostawił Pan zgłoszenie, to prawdopodobnie coś Pana jednak niepokoiło. Dlatego warto przynajmniej spróbować kuracji i zobaczyć efekt.</p>" },
],
},
)
