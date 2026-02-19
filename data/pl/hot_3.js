registerScript("pl", "hot_3", {
  title: "Ozem Lite",
  stages: {
    greeting: `
    <p>Dzień dobry, czy rozmawiam z Panem/Panią _________ <span class="txt-blue">(imię klienta)</span>? </p>
      <p>Nazywam się ________ <span class="txt-blue">(imię i nazwisko)</span>, jestem starszym specjalistą w Centrum Zdrowia. Zainteresował(a) się Pan/Pani preparatem Ozem Lite. </p>
      <p>Na początku tylko krótka kwestia techniczna — w jakim mieście Pan/Pani mieszka, żebym mogła sprawdzić dostępność i termin dostawy?</p>
      <p>Dobrze, <b>Ozem Lite</b>  jest bardzo potężny produkt, który wymaga odpowiedniej dawki. Dlatego zadam Panu/Pani teraz kilka pytań, aby móc doradzić Panu/Pani jak najdokładniej. Dobrze?</p>`,
    
      needs:  `
  <p>1.Panie/Pani [imię klienta], czy produkt zamawia Pan/Pani dla siebie, czy może dla kogoś bliskiego?</p>
<p>2.Panie/Pani (imię klienta), proszę powiedzieć jaki ma Pan(i) wzrost, wiek i wagę <span class="txt-green"> (bez pauzy)</span>?</p>
<p>3. Ile kilogramów chce Pan(i) schudnąć?</p>
<p>4. Czy było takie, że już udawało się obniżyć wagę, a potem nabierała się ponownie? <span class="txt-green">(odpowiedź “tak” na to pytanie pomoże wam zaoferować kurs, nawet jeśli osoba chce stracić tylko kilka kilogramów)</span></p>
<p>5. Czy zauważa Pani/Pan zatrzymanie wody w organizmie, opuchlizny, problemy z trawieniem lub wypróżnianiem?</p>
<p>6. Czy ma Pani/Pan problem z podjadaniem między posiłkami albo silnym apetytem na słodycze?</p>
<p>7. Czy Pani/Pan ma jakiekolwiek choroby towarzyszące — np. tarczycę, insulinooporność, cukrzycę, nadciśnienie?</p>
<p>8. Jaki tryb życia Pani/Pan prowadzi? Bardziej siedzący, aktywny, nieregularny?</p>
<p><b>Podsumowanie:</b> Świetnie, jeśli dobrze rozumiem, chcałby(łaby) Pan/Pani …? Prawda?
 <span class="txt-red">(krótko powtórz pożądany rezultat i problemy, których klient chce się pozbyć)</span></p>`,

    presentation: `
    <p>Panie/Pani ______ <span class="txt-blue">(imię klienta)</span>, Ozem Lite jest idealnym rozwiązaniem, ponieważ jest całkowicie naturalny ta bezpieczny, co jest ważne w przypadku Pana/Pani  <span class="txt-red">(Choroby przewlekłe Klienta)</span>. Produkowany w UE, z certyfikatami jakości i z już udokumentowanymi pozytywnymi wynikami.</p>

<p>Powinien/Powinna Pan/Pani wiedzieć, że problemy związane z nadmierną masą ciała mogą wpływać na Pana/Panią na wiele sposobów. Jednym z najpoważniejszych powikłań jest zwiększone ryzyko chorób serca. Nadmierna waga może nadmiernie obciążać serce, zwiększając ryzyko chorób sercowo-naczyniowych oraz zawału serca.</p>
<p>Ponadto nadwaga może zaburzać regulację poziomu glukozy we krwi, zwiększając ryzyko cukrzycy. Schorzenie to może prowadzić do poważnych powikłań w organizmie oraz negatywnie wpływać na Pana/Pani oczy, nerki i nerwy.</p>
<p>Ozem Lite to bioaktywna formuła opracowana w celu stymulowania spalania tłuszczu oraz przyspieszenia redukcji masy ciała. Produkt został stworzony przez producenta z wykorzystaniem aktywnych składników, aby pomóc osobom, które chcą pozbyć się nadmiernych kilogramów.</p>
<p>Ozem Lite uruchamia proces ketozy, co prowadzi do spalania znacznej ilości tłuszczu w krótkim czasie.</p>
<p class="presentationTitle">Korzystne efekty:</p>
<p>Sprzyja to przyspieszeniu utraty wagi bez zmniejszania masy mięśniowej. Nasilone zostaje spalanie tłuszczu, poprawiają się zapasy glikogenu oraz wspierane jest budowanie mięśni. Zmniejsza się uczucie głodu oraz ograniczana jest ochota na szybkie przekąski i słodycze.</p>
<p class="presentationTitle">Produkt działa w 3 etapach:</p>
<ul>
<li>1 etap — oczyszczanie z toksyn, detoksykacja wątroby, usunięcie zatrzymywania wody w organizmie.</li>
<li>2 etap — aktywacja metabolizmu, rozpoczyna się redukcja masy ciała.</li>
<li>3 etap — efekt kumulacyjny, utrzymanie osiągniętego rezultatu (co najmniej 5 lat)</li>
</ul>
<p class="presentationTitle">Jak go używać?</p>
<p>Proszę stosować 2 razy dziennie i popić go szklanką wody. Rekomenduję wypijać 1,5 litra wody w ciągu dnia – ułatwi to lepsze wchłanianie przez organizm. przy jedzeniu</p>`,

     courses: `

      
      <div id="pricingBlock"></div>

    `,


    cross: `<p>Dziękujemy za zaufanie i wybór naszej kuracji.</p> 

<p>Chciałabym jeszcze zwrócić uwagę na jedną bardzo ważną kwestię. W trakcie redukcji masy ciała organizm się zmienia – zwiększa się aktywność fizyczna, zmniejsza się obciążenie, ale jednocześnie stawy zaczynają intensywniej pracować. Jeśli odczuwa Pan/Pani dyskomfort, sztywność lub ból w obrębie stawów, warto zadbać o ich dodatkowe wsparcie.</p>
<p>Dlatego mogę zaproponować Panu/Pani preparat <b>NanoFlex z indywidualną zniżką</b>. Jest to preparat do stosowania zewnętrznego, aplikowany 2 razy dziennie, który:</p>
<ol>
<li>wspiera regenerację stawów,</li>
<li>zmniejsza dyskomfort,</li>
<li>poprawia ruchomość,</li>
<li>wzmacnia efekty całej kuracji odchudzającej.</li>
</ol>
<p>Połączenie kuracji redukcyjnej z odpowiednim wsparciem stawów pozwala nie tylko szybciej osiągnąć efekt, ale także utrzymać go bez przeciążeń i bólu.</p>
<p>Dzisiaj mogę zaoferować Panu/Pani opakowanie promocyjne: <b>1 opakowanie w cenie 59 zł zamiast 274 zł.</b></p>
<p>Jeśli chce Pan/Pani, mogę od razu dodać je do zamówienia, aby kompleksowo zadbać o efekty kuracji.</p>
`,
    survey: `<p>Organizuję dla Pana/Pani dostawę przez InPost – może Pan/Pani wybrać: </p>
<ul>
<li><b>paczkomat </b>(Klient sam odbiera z komórki) (Przy odbiorze przesyłki z paczkomatu proszę pamiętać, aby zapłacić BLIKIEM. Numer telefonu musi być polski i powiązany z BLIKIEM w przypadku wyboru płatności przy odbiorze)</li>
<li><b>kurier </b>(Prosimy o przygotowanie gotówki do zapłaty, gdyż... Kurier nie zawsze posiada terminal do płatności kartą)</li>
</ul>

<p>Która opcja jest dla Pana/Pani wygodniejsza?</p>


<p>Odbiorcą będzie Pan/Pani, tak? </p>
<p>Czy numer telefonu, na który dzwonię, jest numerem kontaktowym?</p>
<p><b>Proszę podać Pana/Pani nazwisko, kod pocztowy, numer paczkomatu/adres ( miasto/miejscowość, ulice, numer domu i mieszkania.)</b></p>`,
    closing: `
    <p>Dobrze, sprawdzimy jeszcze raz wszystkie dane, czy wszystko jest poprawnie wpisane:</p>
    <ol>
    <li>Nazwisko, Imię -Gdzie wysyłamy</li>
    <li>A więc zamówił/a Pan/Pani ___ (wymień co dokładnie i w jakiej ilości klient będzie miał w paczce). Kwota zamówienia wynosi ___ zł, podobnie jak dostawa _____ zł, razem ______ zł.</li>
     </ol>
    <p class="presentationTitle">Dostawa nastąpi w ciągu około 2-3 dni (data dostawy).<span class="txt-red"> Czy potwierdza Pan/Pani, że będzie w stanie odebrać zamówienie?</span></p>
    <p>Czy ma Pan/Pani jeszcze jakieś pytania?</p>
    <p>Dziękuję za zamówienie. Proszę oczekiwać na przesyłkę. Jestem pewny(a), że będzie Pan/Pani zadowolony(a) z zakupu. Życzę doskonałych efektów i dużo zdrowia! Do widzenia!</p>`,
    objections: `
    <p class="presentationTitle"></p>
  <div id="objectionsButtons"></div>`,
    products: `<div id="productsList"></div>`,
  },
  pricing: [
 {

      label: "low 0 zł",
      html: `
      <div style="margin-bottom:30px;">
<p>Jak Pan/Pani widzi, nasz produkt ma szeroki zakres działania. Dla mnie, jako specjalisty, bardzo ważne jest, aby Panu/Pani pomóc i wspólnie rozwiązać problem z nadmiernymi kilogramami.</p>
<p>Na początek chcę Panu/Pani powiedzieć, że dzisiaj mamy bardzo dobrą promocję.</p>
      <p>W związku z tym, dla Pana/Pani grupy wiekowej  <span class="txt-red">(podajemy wiek klienta)</span> oraz Pana/Pani sytuacji  <span class="txt-red">(wymieniamy, jakie efekty klient chce osiągnąć i jakie problemy chce rozwiązać)</span>, możemy dziś zaoferować:</p>
      <p>1. <b>Kuracja Pełna</b> to najlepszy wybór dla Pana/Pani, jeżeli Pan/Pani chce przejść cały cykl i nie wrócić do dawnych problemów z wagą.  Po pełnej kuracji efekty utrzymają się przez 5 lat. W ramach tej kuracji otrzyma Pan/Pani 6 opakowań, 2 opakowania będą gratis, a <b>koszt kuracji to 562 zł.</b></p>
<p>2. <b>Kuracja Standardowa</b> bejmuje wszystkie etapy leczenia, z różnicą w czasie utrwalenia efektu – będzie to 3 lata. Obejmuje 4 opakowań, 1 opakowanie będą gratis, a <b>cena wynosi 431 zł.</b></p>
<p>Dostawa będzie bezpłatna. Płatność przy odbiorze.</p>
    <p>Którą kurację chciałby(łaby) Pan/Pani wybrać: Pełną, która zapewnia długotrwałe efekty przez 5 lat, czy Standardową, z efektem utrwalonym na 3 lata?</p>

<p> <span class="txt-red">Jeśli nie:</span></p>
<p>Proszę mi powiedzieć, Panie/Pani _______<span class="txt-blue">(imię klienta)</span>  , czy kwota wydaje się Panu/Pani wysoka, czy też jest coś innego, co powstrzymuje Pana/Panią przed zakupem kompleksu?</p>
</div>

    <table class="priceTable">
      
      <tr>
        <td>Kuracji:</td>
        <td>Pełna</td>
        <td>Standardowa</td>
        <td>Próbna</td>
      </tr>

       <tr>
        <td>Liczba opakowań:</td>
        <td>4 (137) + 2 (bezpłatny)</td>
        <td>3 (137) + 1 (gratis)</td>
        <td>2</td>
      </tr>
<tr>
        <td>Okres leczenia:</td>
        <td>2 miesiące</td>
        <td>1 miesiąc i 10 dni</td>
        <td>20 dni</td>
      </tr>

      <tr>
        <td>Dostawa:</td>
        <td>free</td>
        <td>20 zł</td>
        <td>20 zł</td>
      </tr>
      <tr>
        <td>Cena:</td>
        <td>562 zł (bez promocji 1 644 zł)</td>
        <td>431 zł (bez promocji 1 096 zł)</td>
        <td>294 zł (bez promocji 548 zł)</td>
      </tr>
     
    </table>
    <div style="margin-bottom:30px;">
<p span class="txt-red"? class="presentationTitle"> Przynajmniej 2 razy rozpatrzymy sprzeciw i dopiero wtedy zaproponujemy niższą kuracją  </p>
<p>Panie/Pani ________ <span class="txt-blue">(Imię Klienta)</span>, rozumiem Pana/Pani sytuację, ale po prostu potrzebuje Pan/Pani powrotu do zdrowia, ponieważ sytuacja jest zaawansowana. W takim przypadku spójrzmy na inne opcje. </p>
<p>Może Pan/Pani przejść <b>Kurację Próbną </b>. Ten program jest przeznaczony na 20 dni stosowania składają się z 2 opakowań, <b>cena wynosi 294 zł, razem z przesyłką 20 zł. Zabezpieczy Pan/Pani wynik na kolejne 2 lata</b>. Szczerze chcę Panu/Pani pomóc, ponieważ rozumiem, że pilnie potrzebuje Pan/Pani rozwiązać problem.</p>
<p>Zapewniam Pana/Pani, że po zobaczeniu wyników będzie Pan/Pani chciał(a) zamówić więcej. Specjalnie przydzielę Panu/Pani zniżkę, dzięki której, jeśli zajdzie taka potrzeba, będzie Pan/Pani mógł(a) dokupić dodatkowe opakowania w promocji. Może więc zostaniemy przy minimalnej opcji?</p>
    </div>`,
},


    ],
    objectionsButtons: [
    {
      label: "Chcę 1 opakowanie",
      html: `
        <p> - - Rozumiem – każdy chce się najpierw przekonać. Tylko że jedna sztuka niestety nie wystarczy, by uruchomić wszystkie procesy w organizmie.  Produkt działa etapami – dlatego kuracja minimum 1  miesiąc to podstawa. Po jednym opakowaniu nie zobaczymy efektu, który będzie Pana/Pani motywował. Lepiej od razu zrobić to porządnie i zobaczyć pełny efekt – wtedy jest sens i satysfakcja. Który kurs wybieramy?</p>
<p> - - Panie/Pani, nasz producent wyraźnie zaznacza, że pojedyncze opakowanie to za mało, by zobaczyć działanie. Minimalna ilość to 2 sztuki – tak jest bezpiecznie i skutecznie. Po prostu nie możemy sprzedawać mniejszych ilości, żeby nie wprowadzać klientów w błąd, że 1 opakowanie wystarczy.</p>
      `,
    },
    {
      label: "Pomyślę o tym jeszcze trochę",
      html: `
        <p>Panie/Pani (imię klienta) , nad czym dokładnie chciałby/chciałaby się Pan/Pani jeszcze zastanowić?
Moją rolą jest nie tylko przekazać wszystkie informacje, ale także pomóc Panu/Pani spokojnie przemyśleć sprawę i podjąć najlepszą decyzję.</p>
  <p>Na podstawie badań klinicznych, opinii lekarzy oraz doświadczeń naszych klientów mogę z pełnym przekonaniem powiedzieć, że obecnie nie ma skuteczniejszego preparatu.
Im szybciej zacznie Pan/Pani stosować rewolucyjny preparat Ozem Lite , tym szybciej odczuje Pan/Pani poprawę.</p>
  <p>Dlatego z pełnym przekonaniem rekomenduję Panu/Pani Ozem Lite i udział w kuracji.
Oczywiście rozumiem, że decyzja musi być dobrze przemyślana.
Proszę jednak szczerze powiedzieć — czy chodzi o cenę, czy może obawia się Pan/Pani, że efekty nie będą wystarczające?</p>
      `,
    },
    {
      label: "Drogi",
      html: `
        <p>Rozumiem, cena może się wydawać wysoka, ale to pełna kuracja na cały proces – oczyszczenie, spalanie i utrwalenie efektu. Dzięki temu nie trzeba kupować nic więcej ani wracać do problemu.  Warto pomyśleć, ile miesięcznie wydajemy na jedzenie, przekąski czy leki – a tu inwestuje Pan/Pani w konkretny efekt i zdrowie. </p>
<p>Czy mogę złożyć dla Pana/Pani zamówienie?</p>
      `,
    },
{
      label: "Brak pieniędzy, drogie",
      html: `
      <p>Tak, rozumiem, że obecnie wiele decyzji sprowadza się do kwestii finansowych — nie tylko w Pana/Pani przypadku. Większość moich klientów ma podobne wątpliwości i to całkowicie naturalne.
Z jednej strony chcemy oszczędzać, ale z drugiej — zdrowie i sylwetka mają ogromny wpływ na nasze samopoczucie, pewność siebie i codzienną energię.</p>
      <p>Proszę jednak spojrzeć na to z innej perspektywy — nadwaga to nie tylko kwestia wyglądu. To obciążenie dla serca, stawów, poziomu cukru i ogólnego komfortu życia. Im dłużej problem trwa, tym trudniej i drożej jest go później rozwiązać..</p>
<p>Decydując się na kurację teraz, inwestuje Pan/Pani w swoje zdrowie i zapobiega większym problemom w przyszłości. W praktyce to często oznacza realną oszczędność — zarówno pieniędzy, jak i stresu.</p>
<p>Proszę powiedzieć, którą kurację wybieramy?</p>
        `,
    },
{
      label: "Skonsultuję się z lekarzem",
      html: `
        <p>Oczywiście, ma Pan/Pani pełne prawo skonsultować się z lekarzem i uzyskać dodatkową opinię oraz pomoc.
Proszę tylko pamiętać, że nie każdy lekarz naprawdę skupia się na zdrowiu pacjenta — ważne, aby była to osoba, której Pan/Pani w pełni ufa i która szczerze doradzi, nie kierując się zyskiem.
Z doświadczenia wiemy, że wielu odpowiedzialnych lekarzy poleca właśnie nasz preparat — to nowoczesne, innowacyjne rozwiązanie, które wyróżnia się na tle innych produktów.</p>
        <p>Dodam tylko, że aktualna cena promocyjna obowiązuje jeszcze dziś — warto to rozważyć, zanim oferta się zakończy.
Wielu naszych klientów potwierdziło skuteczność Ozem Lite.
Polecam skorzystać z tej okazji i rozpocząć kurację, aby jak najszybciej poczuć ulgę.</p>
        <p>Proszę powiedzieć, którą kurację wybieramy?</p>
      `,
    },
{
      label: "Wątpliwości co do jakości",
      html: `
        <p>Panie/Pani (imię klienta), doskonale rozumiem Pana/Pani obawy.
Wielu naszych klientów wcześniej stosowało różne preparaty, które nie przyniosły oczekiwanych efektów. To naprawdę częsty problem.
 Nasz preparat został opracowany jako wsparcie procesu redukcji masy ciała — pomaga kontrolować apetyt, wspiera metabolizm i ułatwia utrzymanie deficytu kalorycznego. Dlatego tak wiele osób zauważa widoczne efekty przy regularnym stosowaniu. Kluczowe jest to, że kuracja działa stopniowo i wspiera organizm w naturalny sposób, a nie tylko daje krótkotrwały efekt. Wielu klientów po pełnym cyklu zauważa poprawę sylwetki, większą lekkość i lepsze samopoczucie.</p>
<p>Proszę powiedzieć, na którą kurację chciałby/chciałaby się Pan/Pani zapisać?</p>
      `,
    },
{
      label: "Czy to naprawdę mi pomoże?",
      html: `
        <p> Rozumiem, dziś trudno zaufać czemukolwiek. Ale nie sprzedajemy „magii” – tylko naturalny produkt, który działa krok po kroku zgodnie z tym, jak funkcjonuje organizm. Mamy bardzo dużo klientów z podobnym podejściem, którzy po czasie pisali, że żałowali, że nie zaczęli wcześniej.  Nie ryzykuje Pan/Pani zdrowia – tylko daje sobie szansę spróbować czegoś, co naprawdę działa, jeśli stosuje się regularnie.</p>
        <p>Proszę powiedzieć — którą kurację wybieramy? </p>
      `,
    },
{
      label: "Dlaczego nie ma go w aptekach?",
      html: `
        <p>Aby uniknąć wysokich marż i ryzyka zakupu podróbek, producent zdecydował się na bezpośrednią sprzedaż preparatu klientom. Dzięki temu każdy, kto potrzebuje pomocy, może zakupić skuteczny preparat w przystępnej cenie. Podobne rozwiązanie było już z powodzeniem stosowane w Niemczech — wielu klientów skorzystało z tej możliwości.</p>
        <p>Nie wykluczamy, że w przyszłości Ozem Lite pojawi się także w aptekach, jednak trzeba się wtedy liczyć z dużo wyższą ceną. Obecnie ma Pan/Pani naprawdę dobrą okazję, aby skorzystać z kuracji w korzystnych warunkach.</p>
        <p>Proszę powiedzieć, którą kurację wybieramy?</p>
       
      `,
    },
   ],
  products: [
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

  

], 


  accordions: { needs: [], objections: [] },
});
