registerScript("pl", "hot_2", {
  title: "NanoFlex",
  stages: {
    greeting: `
    <p>Dzień dobry, czy rozmawiam z Panem/Panią _________ <span class="txt-blue">(imię klienta)</span>? </p>
      <p>Nazywam się ________ <span class="txt-blue">(imię i nazwisko)</span>, jestem starszym specjalistą w Centrum Zdrowia. Zainteresował(a) się Pan/Pani preparatem na stawy  NanoFlex. </p>
    
      <p>Dobrze, NanoFlex jest bardzo potężny produkt, który wymaga odpowiedniej dawki. Dlatego zadam Panu/Pani teraz kilka pytań, aby móc doradzić Panu/Pani jak najdokładniej. Dobrze?</p>`,

    needs: `

  <div id="presentationFlow"></div>

  <div id="needsBranches"></div>
  <p>Czy odczuwa Pan/Pani sztywność stawów albo uczucie „chrupania” w stawach?</p>
<p>Staw nie otrzymuje niezbędnych składników odżywczych. W efekcie zaczynają odkładać się sole, pojawiają się narośla kostne i osteofity, co prowadzi do uszkodzenia i deformacji stawu.</p>
<p>Muszę powiedzieć, że świetnie Pan/Pani robi, szukając rozwiązania tego problemu. Niestety, nieleczony zawsze postępuje i może przejść w ciężką postać, w której dochodzi do poważnego zniszczenia i deformacji stawu. W końcowym etapie często konieczna jest endoprotezoplastyka, czyli wymiana stawu na sztuczny.</p>
<p>Dlatego proponujemy skuteczną regenerację, która pozwoli Panu/Pani zapomnieć o problemie już po około 2 miesiącach.</p>
<p>Panie/Pani _____(imię klienta), Pana/Pani sytuacja jest dla mnie jasna. Naszym zadaniem jest usuwanie objawów (Objawy klienta) i powód, który wpłynął na stawy - przywrócenie procesów metabolicznych, produkcja mazi stawowej i poprawa krążenia krwi, a najważniejsze jest utrwalenie wyniku przez długi okres. </p>
    `,
    presentation: `
    <p>Panie/Pani ______ <span class="txt-blue">(imię klienta)</span>, Nanoflex jest idealnym rozwiązaniem, ponieważ jest całkowicie naturalny ta bezpieczny, co jest ważne w przypadku Pana/Pani (Choroby przewlekłe Klienta). Produkowany w UE, z certyfikatami jakości i z już udokumentowanymi pozytywnymi wynikami.</p>
    
    <p class="presentationTitle">Jak będzie przebiegać proces odzyskiwania:</p>
<p><b>W pierwszym etapie</b> preparat pomaga złagodzić stany zapalne, odżywia chrząstki i stawy. Kwas L-askorbinowy uruchamia produkcję kolagenu, co blokuje ból, a objawy bólowe i obrzęk zaczynają ustępować. Efekt będzie widoczny już po trzech tygodniach stosowania — ból zacznie zanikać, dzięki czemu będzie można normalnie funkcjonować (spać, poruszać się, chodzić, pracować itp.).</p>
<p><b>Najważniejsze jest, aby nie przerywać kuracji, gdy poczuje Pan/Pani ulgę, ponieważ wtedy rozpocznie się pełna regeneracja stawu.</b></p>
<p><b>Na drugim etapie</b>, po około 2 miesięcy stosowania, organizm nasyca się niezbędnymi składnikami, takimi jak glukozamina i chondroityna, które pomogą odbudować tkankę chrzęstną i zwiększą produkcję mazi stawowej. Dzięki temu poczuje Pan/Pani się lepiej — staw stanie się bardziej mobilny, zniknie uczucie sztywności (inny Objawy klienta).</p>
<p><b>To bardzo ważne, ponieważ w ten sposób uchronimy staw i zapobiegniemy jego dalszemu uszkodzeniu.</b></p>
<p><b>W trzecim etapie</b> efekty terapii kumulują się i stabilizują. Preparat będzie gromadził się w organizmie, a sole, które przez lata odkładały się w stawach, zostaną usunięte. Poprawi się krążenie krwi w stawach, krew zostanie nasycona tlenem, co rozpocznie proces regeneracji — odbudowy komórek chrząstki i tkanki łącznej. Dzięki temu wróci Pan/Pani do pełni życia bez bólu i dyskomfortu, a stawy będą sprawne. Efekt będzie trwały przez kilka lat, co pozwoli zachować stawy w dobrej kondycji.</p>


 <p class="presentationTitle">Jak go używać?</p>
  <p>Proszę stosować <b>2 razy dziennie</b> i popić go szklanką wody. Rekomenduję wypijać 1,5 litra wody w ciągu dnia – ułatwi to lepsze wchłanianie przez organizm.</p>`,

    courses: `

      
      <div id="pricingBlock"></div>

    `,

    cross: `
    <p>Dziękujemy za zaufanie i wybór naszej kuracji. Mam dla Pana propozycję, która pomoże wzmocnić efekty kuracji – mogę zaoferować Panu <b>Stimulan gel</b> z indywidualną zniżką. Preparat ten, stosowany w połączeniu z kuracjej, intensyfikuje efekty i działa specyficznie. Jest przeznaczony do użytku zewnętrznego – stosujemy 2 razy dziennie. Dzięki temu utrwalenie efektów w 2 razy lepiej. Mogę zaoferować Panu promocyjne opakowanie: <b>1 opakowanie w cenie  - tylko 59 złotych, zamiast 274 zł.</b></p>

    
    `,
    survey: `
    <p>Organizuję dla Pana/Pani dostawę przez InPost – może Pan/Pani wybrać: </p>
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
    <p>Dziękuję za zamówienie. Proszę oczekiwać na przesyłkę. Jestem pewny(a), że będzie Pan zadowolony z zakupu. Życzę doskonałych efektów i dużo zdrowia! Do widzenia!</p>`,
    objections: `
    <p class="presentationTitle"></p>
  <div id="objectionsButtons"></div>`,
    products:  `
  <div id="productsList"></div>
`,
  },


pricing: [
       
    {

      label: "full 137",
      html: `
      <div style="margin-bottom:30px;">
      <p>Panie _______(imię klienta), w zależności od Pana sytuacji (Objawy klienta) i biorąc pod uwagę, że ma Pan problem ______ (okres choroby), polecam dwie programy naprawcze:</p>
      <p>1. <b>Kuracja Pełna</b> to najlepszy wybór, jeśli zależy Panu na trwałej poprawie zdrowia. Dzięki systematycznemu stosowaniu rozwiąże Pan problem u źródła. Po pełnej kuracji efekty utrzymają się przez 5 lat. W ramach tej kuracji otrzyma Pan 8 opakowań, 3 opakowania będą gratis, a koszt kuracji to 685 zł.</p>
<p>2. <b>Kuracja Standardowa</b> obejmuje wszystkie etapy leczenia, z różnicą w czasie utrwalenia efektu – będzie to 3 lata. Obejmuje 6 opakowań, 2 opakowania będą gratis, a cena wynosi 548 zł.
</p>
<p>Dostawa będzie bezpłatna. Płatność przy odbiorze.</p>
    <p>Którą kurację chciałby Pan wybrać: Pełną, która zapewnia długotrwałe efekty przez 5 lat, czy Standardową, z efektem utrwalonym na 3 lata?</p>

<p>Jeśli nie:</p>
<p>Proszę mi powiedzieć, Panie/Pani _______(imię klienta)  , czy kwota wydaje się Panu/Pani wysoka, czy też jest coś innego, co powstrzymuje Pana/Panią przed zakupem kompleksu?</p>
</div>

    <table class="priceTable">
      
      <tr>
        <td>Kuracji:</td>
        <td>Pełna</td>
        <td>Standardowa</td>
        <td>Podstawowa</td>
        <td>Próbna</td>
      </tr>

       <tr>
        <td>Liczba opakowań:</td>
        <td>5+3</td>
        <td>4+2</td>
        <td>3+1</td>
        <td>2</td>
      </tr>
<tr>
        <td>Okres leczenia:</td>
        <td>4 miesiące</td>
        <td>3 miesiące</td>
        <td>2 miesiące</td>
        <td>1 miesiąc</td>
      </tr>

      <tr>
        <td>Dostawa:</td>
        <td>free</td>
        <td>free</td>
        <td>20 zł</td>
        <td>20 zł</td>
      </tr>
      <tr>
        <td>Cena:</td>
        <td>685</td>
        <td>548</td>
        <td>431</td>
        <td>294</td>
      </tr>
     
    </table>
    <div style="margin-bottom:30px;">
<p span class="txt-red"? class="presentationTitle"> Przynajmniej 2 razy rozpatrzymy sprzeciw i dopiero wtedy zaproponujemy niższą kuracją  </p>
<p>Panie ________ (Imię Klienta), rozumiem Pana sytuację, ale po prostu potrzebuje Pan powrotu do zdrowia, ponieważ sytuacja jest zaawansowana. W takim przypadku spójrzmy na inne opcje. </p>
<p>Może Pan przejść <b>Kurację Podstawową</b>. Ten program jest przeznaczony na 2 miesiąca stosowania składają się 4 opakowań, tutaj otrzyma Pan 1 opakowanie za darmo , <b>cena wynosi 431 zł, razem z przesyłką 20 zł. Zabezpieczy Pan wynik na kolejne 2 lata</b>. Szczerze chcę Panu pomóc, ponieważ rozumiem, że pilnie potrzebuje Pan rozwiązać problem.</p>
<p>Zapewniam Pana, że po zobaczeniu wyników będzie Pan chciał zamówić więcej. Specjalnie przydzielę Panu zniżkę, dzięki której, jeśli zajdzie taka potrzeba, będzie Pan mógł dokupić dodatkowe opakowania w promocji. Może więc zostaniemy przy minimalnej opcji? </p>
    </div>
  `,
    },
{


      label: "midl 99",
      html: `
      <div style="margin-bottom:30px;">
      <p>Panie _______(imię klienta), w zależności od Pana sytuacji (Objawy klienta) i biorąc pod uwagę, że ma Pan problem ______ (okres choroby), polecam dwie programy naprawcze:</p>
      <p>1. <b>Kuracja Pełna</b> to najlepszy wybór, jeśli zależy Panu na trwałej poprawie zdrowia. Dzięki systematycznemu stosowaniu rozwiąże Pan problem u źródła. Po pełnej kuracji efekty utrzymają się przez 6 lat. W ramach tej kuracji otrzyma Pan 6 opakowań, + 1 opakowanie będzie gratis, a <b>koszt kuracji to 594 zł.</b></p>
<p>2. <b>Kuracja Standardowa</b> obejmuje wszystkie etapy leczenia, z różnicą w czasie utrwalenia efektu – będzie to 4 lat. Obejmuje 5 opakowań, 1 opakowanie będzie gratis, a <b>cena wynosi 515 zł</b>.
</p>
<p>Dostawa będzie bezpłatna. Płatność przy odbiorze.</p>
    <p>Którą kurację chciałby Pan wybrać: Pełną, która zapewnia długotrwałe efekty przez 6 lat, czy Standardową, z efektem utrwalonym na 4 lat?</p>


<p>Jeśli nie:</p>
<p>Proszę mi powiedzieć, Panie/Pani _______(imię klienta)  , czy kwota wydaje się Panu/Pani wysoka, czy też jest coś innego, co powstrzymuje Pana/Panią przed zakupem kompleksu?</p>
</div>


    <table class="priceTable">
     
      <tr>
        <td>Kuracji:</td>
        <td>Pełna</td>
        <td>Standardowa</td>
        <td>Podstawowa</td>
        <td>Próbna</td>
      </tr>


       <tr>
        <td>Liczba opakowań:</td>
        <td>6 (+1)</td>
        <td>5(+1)</td>
        <td>4</td>
        <td>3</td>
      </tr>
<tr>
        <td>Okres leczenia:</td>
        <td>3,5 miesiące</td>
        <td>3 miesiące</td>
        <td>2 miesiące</td>
        <td>1,5 miesiące</td>
      </tr>


      <tr>
        <td>Dostawa:</td>
        <td>free</td>
        <td>free</td>
        <td>20 zł</td>
        <td>20 zł</td>
      </tr>
      <tr>
        <td>Cena:</td>
        <td>594 </td>
        <td>515 </td>
        <td>416 </td>
        <td>317 </td>
      </tr>
     
    </table>
    <div style="margin-bottom:30px;">
<p span class="txt-red"? class="presentationTitle"> Przynajmniej 2 razy rozpatrzymy sprzeciw i dopiero wtedy zaproponujemy niższą kuracją  </p>
<p>Panie ________ (Imię Klienta), rozumiem Pana sytuację, ale po prostu potrzebuje Pan powrotu do zdrowia, ponieważ sytuacja jest zaawansowana. W takim przypadku spójrzmy na inne opcje. </p>
<p>Może Pan przejść <b>Kurację Podstawową</b>. Ten program jest przeznaczony na 2 miesiąca stosowania składają się 4 opakowań, <b>cena wynosi 416  zł, razem z przesyłką 20 zł. Zabezpieczy Pan wynik na kolejne 2 lata</b>. Szczerze chcę Panu pomóc, ponieważ rozumiem, że pilnie potrzebuje Pan rozwiązać problem.</p>
<p>Zapewniam Pana, że po zobaczeniu wyników będzie Pan chciał zamówić więcej. Specjalnie przydzielę Panu zniżkę, dzięki której, jeśli zajdzie taka potrzeba, będzie Pan mógł dokupić dodatkowe opakowania w promocji. Może więc zostaniemy przy minimalnej opcji? </p>
    </div>
  `,
    },
{


      label: "low 59",
      html: `
      <div style="margin-bottom:30px;">
      <p>Panie _______(imię klienta), w zależności od Pana sytuacji (Objawy klienta) i biorąc pod uwagę, że ma Pan problem ______ (okres choroby), polecam dwie programy naprawcze:</p>
      <p>1. <b>Kuracja Pełna</b> to najlepszy wybór, jeśli zależy Panu na trwałej poprawie zdrowia. Dzięki systematycznemu stosowaniu rozwiąże Pan problem u źródła. W ramach tej kuracji otrzymuje Pan/Pani  2 opakowania w cenie 59 zł i 3 kolejne z rabatem (50% - po 137 zł) od naszej firmy. Dzięki tej kuracji wyeliminuje Pan/Pani to, co dolega, i będzie w stanie utrwalić wynik nawet przez 5 lat.<b> Cena wynosi 529 zł.</b></p>
<p>2. <b>Kuracja Standardowa</b>  obejmuje wszystkie etapy leczenia, z różnicą w czasie utrwalenia efektu – będzie to 3 lata. Tutaj otrzymuje Pan/Pani  1 opakowanie za 59 zł i 3 kolejne z rabatem (50% - po 137 zł), a <b>cena wynosi 470 zł</b>.
</p>
<p>Dostawa będzie bezpłatna. Płatność przy odbiorze.</p>
    <p>Którą kurację chciałby Pan wybrać: Pełną, która zapewnia długotrwałe efekty przez 5 lat, czy Standardową, z efektem utrwalonym na 3 lata?</p>


<p>Jeśli nie:</p>
<p>Proszę mi powiedzieć, Panie/Pani _______(imię klienta)  , czy kwota wydaje się Panu/Pani wysoka, czy też jest coś innego, co powstrzymuje Pana/Panią przed zakupem kompleksu?</p>
</div>


    <table class="priceTable">
     
      <tr>
        <td>Kuracji:</td>
        <td>Pełna</td>
        <td>Standardowa</td>
        <td>Podstawowa</td>
        <td>Próbna</td>
      </tr>


       <tr>
        <td>Liczba opakowań:</td>
        <td>2+3</td>
        <td>1+3</td>
        <td>1+2</td>
        <td>2</td>
      </tr>
<tr>
        <td>Okres leczenia:</td>
        <td>2,5 miesiące</td>
        <td>2 miesiące</td>
        <td>1,5 miesiące</td>
        <td>1 miesiąc</td>
      </tr>


      <tr>
        <td>Dostawa:</td>
        <td>free</td>
        <td>free</td>
        <td>20 zł</td>
        <td>20 zł</td>
      </tr>
      <tr>
        <td>Cena:</td>
        <td>529  </td>
        <td>470  </td>
        <td>416 </td>
        <td>294   </td>
      </tr>
     
    </table>
    <div style="margin-bottom:30px;">
<p span class="txt-red"? class="presentationTitle"> Przynajmniej 2 razy rozpatrzymy sprzeciw i dopiero wtedy zaproponujemy niższą kuracją  </p>


<p>Panie ________ (Imię Klienta), rozumiem Pana sytuację, ale po prostu potrzebuje Pan powrotu do zdrowia, ponieważ sytuacja jest zaawansowana. W takim przypadku spójrzmy na inne opcje. </p>
<p>Może Pan przejść <b>Kurację Podstawową</b>. Ten program jest przeznaczony na 1,5 miesiąca stosowania składają się z 3 opakowań, tutaj otrzyma Pan 1 opakowanie za 59 zł i 2 kolejnych z rabatem, <b>cena wynosi 353  zł</b>, razem z przesyłką 20 zł. Zabezpieczy Pan wynik na kolejne 2 lata</b>. Szczerze chcę Panu pomóc, ponieważ rozumiem, że pilnie potrzebuje Pan rozwiązać problem.</p>
<p>Zapewniam Pana, że po zobaczeniu wyników będzie Pan chciał zamówić więcej. Specjalnie przydzielę Panu zniżkę, dzięki której, jeśli zajdzie taka potrzeba, będzie Pan mógł dokupić dodatkowe opakowania w promocji. Może więc zostaniemy przy minimalnej opcji? </p>
    </div>
  `,
    },


    ],

presentationFlow: [
  {
    textHtml: `<p>1. Panie/Pani [imię klienta], czy produkt zamawia Pan/Pani dla siebie, czy może dla kogoś bliskiego?</p>
<p>2. Ile ma Pan/Pani lat?</p>
<p>3. Jakie dokładnie dolegliwości związane ze stawami Pan/Pani odczuwa? (ból, sztywność, trzeszczenie, obrzęk?)</p>
<p>4. Od jak dawna występuje ten problem?</p>
<p>5.Czy był Pan / była Pani u lekarza? Ma Pan / Pani diagnozę? </p>
`,
    buttons: [
      { label: "Artretyzm", html: `<p>(reumatyzm, dna moczanowa, zapalenie korzonków nerwowych) jest to proces zapalny i dość niebezpieczny, ponieważ powoduje nie tylko silny ból, ale także prowadzi do zniszczenia stawów i artrozy. Proszę się nie martwić — pracuję w tej branży od 8 lat i dobiorę dla Pana/Pani odpowiednią dawkę, aby mógł(a) Pan/Pani jak najszybciej wrócić do zdrowia.</p>` },
      { label: "Artroza ", html: `<p>(osteochondroza, przepuklina) to już zmiana i zniszczenie stawów, nie można z tym żartować, bo może to doprowadzić do całkowitego zniszczenia. Proszę się nie martwić — pracuję w tej branży od 8 lat i dobiorę dla Pana/Pani odpowiednią dawkę, aby mógł(a) Pan/Pani jak najszybciej wrócić do zdrowia.</p>` },
    ],
    },
    {
     buttons: [
{ label: "Uraz", html: `<p>zaburza odżywianie i metabolizm stawów, co w konsekwencji prowadzi do ich zniszczenia; organizm syntetyzuje znacznie mniej glukozaminy i chondroityny, są to składniki odpowiedzialne za zdrowie i integralność tkanki chrzęstnej</p>` },
{ label: "Wiek ", html: `<p>po 35 latach nasz organizm syntetyzuje znacznie mniej glukozaminy i chondroityny, są to składniki odpowiedzialne za zdrowie i integralność tkanki chrzęstnej, zaburzone jest odżywianie stawów. Konieczne jest przywrócenie tych procesów oraz zapobieganie degeneracji stawów. Proszę się nie martwić, zrobimy wszystko, by pomóc Panu/Pani odzyskać pełnię zdrowia.</p>` },
    ],
  },
  {
    textHtml: `<p>6. Proszę powiedzieć, jakiego rodzaju ból odczuwa Pan/Pani – ostry czy tępy? </p>
<p>7. A kiedy pojawia się ten ból – podczas chodzenia, w spoczynku, a może nawet w nocy?</p>
<p>8.Czy stosował(a) Pan/Pani już jakieś leki lub maści na stawy? Jakie były efekty?</p>`,
    buttons: [
      { label: "odpowiedź", html: `<p>W takim przypadku zwykłe znieczulenie nie pomoże, a wręcz przeciwnie — może zaszkodzić. Wiele leków ma wąskie spektrum działania. W Pana/Pani stawach brakuje mazi stawowej (czyli naturalnego „nawilżenia” stawów), przez co stawy ocierają się o siebie i ulegają uszkodzeniu. Przyczyną jest niedostateczne krążenie krwi, a także niedobór chondroityny, glukozaminy oraz kolagenu w organizmie.
W takim przypadku niezbędna jest kompleksowa terapia, która uzupełni wszystkie te braki. Tylko wtedy można skutecznie pozbyć się problemów ze stawami i utrzymać je w dobrej kondycji.</p>` },
    
    ],
  },
 ],

needsBranches: [
  {
    key: "stawy",
    label: "stawy",
    questions: [
      { q: `9. Czy zauważa Pan/Pani obrzęk lub zaczerwienienie tego stawu? ` },
      { q: `10. Złącze zmieniło kształt, czy deformacja już się zaczęła?.`, a: `<p class="p-accent-blue">TAK - Jest to oznaka ostrej postaci zapalenia zarówno stawów, jak i tkanki okołostawowej. Może to prowadzić do patologii zwyrodnieniowych, dobrze, że zwrócił(a) się Pan/Pani do preparatu - proces ten należy nie tylko zatrzymać, ale także pomóc organizmowi w regeneracji.</p>` },
          { q: `11. Rama kostno-chrzęstna jest pojedynczą strukturą, a jeśli w jednym dziale nastąpi naruszenie, wówczas obciążenie innych stawów zostaje zakłócone - czy występuje ból pleców?`, a: `<p class="p-accent-blue">TAK - pytania z tyłu</p>
<p class="p-accent-blue">NIE - dobrze, że dba Pan/Pani o swoje zdrowie i nie pozwalasz na powikłania, w każdym razie lek działa na wszystkie tkanki stawowe, dlatego podejmiemy działania profilaktyczne także dla stawów kręgosłupa..</p>` },
           
    ],
  },
  {
    key: "Kręgosłup",
    label: "Kręgosłup",
    questions: [
      { q: `Czy odczuwa Pan/Pani lumbago promieniujące do innych części ciała, np. rąk lub nóg?`  },
      { q: `Czy zauważył(a) Pan/Pani drętwienie palców u rąk lub nóg, zaburzenia czucia albo skurcze?`},
    
      { q: `8. Czy często miewa Pan/Pani bóle głowy?`, a: `<p class="p-accent-blue">TAK - działa destrukcyjnie na tkankę kostną, w wyniku czego korzenie nerwowe są ściskane. To właśnie prowadzi do silnych skurczów mięśni i ostrego bólu, przyczyną jest słabe krążenie, co może skutkować powstaniem przepuklin lub procesów zapalnych – to wszystko trzeba usunąć i przywrócić.</p>` },

      { q: `9. Rama kostno-chrzęstna jest pojedynczą konstrukcją, a jeśli w jednym dziale nastąpi naruszenie, wpływa to również na obciążenie innych stawów - czy odczuwa Pan/Pani ból w kolanach?`, a: `<p class="p-accent-blue">TAK - pytania dotyczące stawów.</p>
<p class="p-accent-blue">NIE - dobrze, że dba Pan/Pani o swoje zdrowie i nie pozwala na powikłania, w każdym razie preparat działa na wszystkie tkanki stawowe, więc o stawy też zadbamy. </p>` },
        ],
  },
],




objectionsButtons: [
    {
      label: "Chcę 1 opakowanie",
      html: `
        <p> - Doskonale Pana rozumiem, wielu nowych klientów miało podobne wątpliwości. Jednak musi Pan przyznać, że pełne leczenie wymaga czasu – z pewnością tydzień czy dwa to za mało, zwłaszcza przy obecnych objawach, które Pan odczuwa. To trochę jak z ćwiczeniami na siłowni – nikt nie oczekuje świetnej formy po dwóch czy trzech treningach, prawda? Aby uzyskać trwały efekt, trzeba przejść cały kurs. Mówię to na podstawie doświadczenia – wiem, jak działa ten preparat i mam wielu zadowolonych klientów w Niemczech, którzy mi za to dziękują. Preparat jest nowością na polskim rynku, ale już pomaga. Proszę zaufać i pozwolić sobie pomóc. Który kurs wybieramy?</p>
<p> - Panie/Pani, nasz producent wyraźnie zaznacza, że pojedyncze opakowanie to za mało, by zobaczyć działanie. Minimalna ilość to 2 sztuki – tak jest bezpiecznie i skutecznie. Po prostu nie możemy sprzedawać mniejszych ilości, żeby nie wprowadzać klientów w błąd, że 1 opakowanie wystarczy.</p>
      `,
    },
    {
      label: "Pomyślę o tym jeszcze trochę",
      html: `
        <p>Panie/Pani ______ (Imię klienta), o czym dokładnie chciałby Pan się jeszcze zastanowić? Moją rolą jest nie tylko przedstawienie wszystkich informacji, ale również pomoc w spokojnym przemyśleniu sprawy i podjęciu najlepszej decyzji.</p>
  <p>Na podstawie badań klinicznych, opinii lekarzy oraz doświadczeń naszych klientów mogę z pełnym przekonaniem powiedzieć, że obecnie nie ma lepszego preparatu na wzmocnienie męskości. Im szybciej zacznie Pan stosować rewolucyjny preparat ________ (nazwa preparatu), tym szybciej odczuje Pan poprawę samopoczucia, złagodzenie stanów zapalnych i wzmocnienie potencji. Zdecydowanie poprawi się też jakość życia seksualnego, a dodatkowo zmniejszy Pan ryzyko poważniejszych problemów zdrowotnych. (Proszę pamiętać, że co roku u 400 000 mężczyzn na świecie diagnozuje się raka prostaty – to druga najczęstsza przyczyna zgonów z powodu nowotworu. To naprawdę niepokojące statystyki.)</p>
  <p>Dlatego z pełnym przekonaniem rekomenduję Panu ten preparat i udział w kuracji. Oczywiście rozumiem, że decyzja musi być dobrze przemyślana. Proszę jednak szczerze powiedzieć – czy chodzi o cenę, czy może obawia się Pan, że efekty nie będą wystarczające?</p>
      `,
    },
    {
      label: "Drogi",
      html: `
        <p>Rozumiem, że na pierwszy rzut oka cena może wydawać się wysoka. Proszę jednak pomyśleć, ile kosztują naprawdę skuteczne leki czy długotrwałe leczenie. Warto też zauważyć, że większość preparatów działa tylko na objawy i nie usuwa przyczyny problemu.
</p>
<p>W naszym przypadku celem jest właśnie trwały efekt. Dbamy o to, aby wynik był nie tylko szybki, ale też długofalowy, dlatego zapewnię Panu również bezpłatne wsparcie specjalisty. To naprawdę niewielki koszt w porównaniu z tym, co trzeba później płacić w klinikach za leczenie powikłań. Proszę szczerze powiedzieć – chce się Pan raz na zawsze pozbyć tego problemu i zapomnieć o chorobie? Zależy Panu na efekcie, który utrzyma się przez lata, a nie tylko kilka miesięcy? Nie zmarnujmy tej okazji – czy mogę potwierdzić zamówienie?</p>
      `,
    },
{
      label: "Brak pieniędzy, drogie",
      html: `
      <p>Tak, doskonale rozumiem, że teraz wszystko sprowadza się do kwestii finansowej. To zupełnie naturalne – aż 90% moich klientów jest w podobnej sytuacji. Niestety, często jesteśmy przyzwyczajeni do oszczędzania na zdrowiu, a przecież to właśnie na nim nie powinniśmy oszczędzać.</p>
      <p>Jest Pan mężczyzną w pełni sił, który zasługuje na komfort życia i satysfakcjonujące życie seksualne. Proszę pomyśleć, że to nie jest wydatek – to inwestycja w zdrowie, która pozwala uniknąć o wiele większych kosztów leczenia powikłań w przyszłości.</p>
<p>W rzeczywistości teraz to właśnie Pan oszczędza – eliminując problem w odpowiednim momencie i zyskując spokój na lata.</p>
<p>Proszę powiedzieć, którą kurację wybieramy?</p>
        `,
    },
{
      label: "Skonsultuję się z lekarzem",
      html: `
        <p>Oczywiście, ma Pan pełne prawo skonsultować się z lekarzem i zasięgnąć dodatkowej opinii. Proszę mi powiedzieć – czy wśród Pana bliskich jest lekarz, któremu naprawdę Pan ufa i który na pewno nie kieruje się zyskiem? Wiem z doświadczenia, że każdy profesjonalny lekarz, który troszczy się o zdrowie pacjenta, z pewnością pozytywnie oceni nasz preparat. To obecnie jedna z najnowszych i najbardziej innowacyjnych propozycji na rynku.
</p>
        <p>Proszę tylko pamiętać, że promocyjna cena kończy się już dziś, a czas szybko ucieka. Wielu naszych klientów potwierdziło, że opinia lekarza była dla nich dodatkowym potwierdzeniem, ale nie chcieli stracić okazji do zakupu w niższej cenie. Dlatego szczerze polecam, by skorzystał Pan z promocji i rozpoczął kurację. Jestem przekonany, że będzie Pan zadowolony z efektów.</p>
        <p>Który pakiet mamy dla Pana przygotować?</p>
      `,
    },
{
      label: "Wątpliwości co do jakości",
      html: `
        <p>Panie ______ (Imię klienta), doskonale rozumiem Pana obawy. Wielu naszych klientów miało już wcześniej doświadczenia z różnymi preparatami o wątpliwej skuteczności, które nie przyniosły oczekiwanych efektów. Niestety, wielu lekarzy wciąż pracuje według przestarzałych schematów leczenia i przepisuje leki, które często działają tylko doraźnie, a co gorsza – mogą negatywnie wpływać na potencję, jak choćby blokery receptorów alfa-1. Newagra wyróżnia się na tle innych – jego skuteczność i wysoką jakość potwierdzają nie tylko badania, ale również liczne opinie mężczyzn, którzy ukończyli pełną kurację i odzyskali zdrowie oraz satysfakcję z życia intymnego. Co najważniejsze, preparat ten działa na samą przyczynę problemu, dlatego efekty są trwałe i pełne.Proszę powiedzieć – na którą kurację się Pan decyduje?</p>
      `,
    },
{
      label: "Czy to naprawdę mi pomoże?",
      html: `
        <p>Oczywiście, mamy wielu zadowolonych klientów z podobnym problemem jak Pana – nie jest Pan wyjątkiem, to dość częsta sytuacja. Jeśli zastosuje Pan preparat zgodnie z instrukcją i naszymi zaleceniami, mamy pewność, że uzyska Pan oczekiwany efekt.</p>
        <p>Takie objawy wymagają po prostu większej uwagi. Dlatego polecam jedną z tych dwóch kuracji – obie są skuteczne, ale kluczowa jest regularność i prawidłowe stosowanie, bez przerw. Efekty zobaczy Pan już po kilku dniach.</p>
        <p>Dodatkowo wypełnię dla Pana wniosek o bezpłatną konsultację i opiekę podczas kuracji – dbamy o naszych klientów. Proszę powiedzieć, którą kurację wybieramy?</p>
      `,
    },
{
      label: "Dlaczego nie ma go w aptekach?",
      html: `
        <p>Aby uniknąć wysokich marż i ryzyka podróbek, producent zdecydował się sprzedawać preparat bezpośrednio klientom. Dzięki temu każdy, kto potrzebuje pomocy, może kupić skuteczny środek w rozsądnej cenie. Podobnie działało to już w Niemczech – z bardzo dobrym efektem.</p>
        <p>Nie wykluczamy, że preparat trafi kiedyś do aptek, ale wtedy cena będzie znacznie wyższa. Teraz ma Pan naprawdę dobrą okazję.</p>
        <p>Proszę powiedzieć, którą kurację wybieramy?</p>
       
      `,
    },
   ],
   
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
], 



  accordions: { needs: [

  ], 
  objections: [

  ] },
});

