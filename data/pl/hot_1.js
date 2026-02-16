registerScript("pl", "hot_1", {
  title: "Newagra",
  stages: {
    greeting: `
    <p>Dzień dobry, czy rozmawiam z Panem/Panią _________ <span class="txt-blue">(imię klienta)</span>? </p>
      <p>Nazywam się ________ <span class="txt-blue">(imię i nazwisko)</span>, jestem starszym specjalistą w Centrum Zdrowia. Zainteresował(a) się Pan/Pani preparatem dla zdrowia mężczyzn ________ (nazwa preparatu). </p>
    
      <p>Dobrze, Newagra jest bardzo potężny produkt, który wymaga odpowiedniej dawki. Dlatego zadam Panu/Pani teraz kilka pytań, aby móc doradzić Panu jak najdokładniej. Dobrze?</p>`,
    needs: `

    <p>1. Ile ma Pan lat?</p>
    <p>2. Jaki problem chciałby Pan rozwiązać? Czy chce Pan poprawić potencję, ma Pan problem z prostatą, czy może jedno i drugie?</p>
    <p class="p-accent-green">Jeśli klient twierdzi, że wszystko jest w porządku i chce tylko profilaktyki: Panie ___„Imię cl”,dobrze, że Pan o tym myśli, ponieważ dbanie o zdrowie mężczyzn jest bardzo ważne. Dzięki temu preparatowi nie tylko będzie Pan mógł zadbać o profilaktykę, ale jednocześnie poprawić swoje zdrowie intymne (rozpocznij VP od potencji).</p>
  <div id="needsBranches"></div>

    `,
    presentation: `
    <p>Panie ______ <span class="txt-blue">(imię klienta)</span>, Newagra jest idealnym rozwiązaniem, ponieważ jest całkowicie naturalny ta bezpieczny <span class="txt-red">(dla serca, wątroby i żołądka)</span>, co jest ważne w przypadku Pana <span class="txt-red">(Choroby przewlekłe Klienta)</span>. Produkowany w UE, z certyfikatami jakości i z już udokumentowanymi pozytywnymi wynikami.</p>
    
    <p class="presentationTitle">Jak będzie przebiegać proces odzyskiwania:</p>

<div id="presentationFlow"></div>

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
    textHtml: `<p><b>W pierwszym etapie</b> Newagra eliminuje bakterie i stany zapalne oraz wspomaga procesy metaboliczne, co pozwala prostacie odzyskać prawidłową strukturę i funkcję. Następuje oczyszczenie naczyń krwionośnych, zatory i normalizacja krążenia krwi w narządach miednicy. Nasze kapsułki działają kumulacyjnie — organizm stopniowo wchłania składniki aktywne, dlatego pierwsze wyraźne efekty najczęściej pojawiają się po 3–4 tygodnia regularnego stosowania.</p>`,
    buttons: [
      { label: "potencja", html: `<p>Krążenie krwi w okolicach penisa wyraźnie się poprawi, a erekcja stanie się bardziej stabilna. 
Proszę powiedzieć, czy zauważa Pan u siebie poranną erekcję regularnie, czy zdarza się to już rzadziej? 
Już po 3-4 tygodniu powinien Pan zauważyć stabilną erekcję rano, a podczas zbliżeń nie będzie Pan mieć problemów, które występują teraz. (Objawy klienta)</p>` },
      { label: "prostata", html: `<p>Zmniejszy się częstotliwość parcia na mocz, będzie Pan mógł normalnie korzystać z toalety, nocne wizyty w łazience staną się rzadsze, a sen będzie spokojniejszy (Objawy klienta)</p>` },
    ],
  },
  {
    textHtml: `<p><b>Najważniejsze, aby nie przerywać kuracji po pojawieniu się pierwszych efektów.</b> </p>
<p><b>W drugim etapie</b> przywracana jest produkcja testosteronu, a jak Pan zapewne wie, to właśnie jego niedobór jest główną przyczyną problemów z potencją/zapalenia prostaty.</p>`,
    buttons: [
      { label: "potencja", html: `<p>Dzięki temu stosunek seksualny będzie trwał dłużej do 20-30 minut, co jest całkowicie naturalne w Pana wieku. Poprawi się również pobudliwość seksualna, a doznania staną się bardziej intensywne.</p>` },
      { label: "prostata", html: `<p>Dzięki temu prostata nie będzie się powiększać, ustąpią przewlekłe dolegliwości, a układ moczowo-płciowy zacznie funkcjonować prawidłowo. Całkowicie wyeliminujemy także ryzyko rozwoju gruczolaka.</p>` },
    ],
  },
  {
    textHtml: `<p><b>W trzecim etapie</b> efekt kuracji jest utrwalany i stabilizowany. Pana problem nie pojawił się z dnia na dzień, dlatego tak ważne jest przywrócenie i ustabilizowanie pracy wszystkich funkcji organizmu. Dzięki temu usuwamy pierwotną przyczynę i zapewniamy długotrwały efekt do 3-5 lat.</p>`,
    buttons: [
      { label: "potencja", html: `<p>Pod koniec kuracji odzyska Pan pełną sprawność. Erekcja będzie mocna i pewna, a organizm szybciej wraca do zdrowia. Będzie Pan mógł bez problemu odbyć stosunek więcej niż raz, odczuwać większą przyjemność i sam kontrolować sytuację. (Objawy klienta)</p>` },
      { label: "prostata", html: `<p>Pod koniec kuracji zapomni Pan o częstym chodzeniu do toalety. Znikną stany zapalne, a prostata będzie działać prawidłowo. Dzięki temu uniknie Pan poważniejszych problemów zdrowotnych i drogich zabiegów. (Objawy klienta)</p>` },
    ],
  },
],

needsBranches: [
  {
    key: "potency",
    label: "potency",
    questions: [
      { q: `3. Od jak dawna zauważa Pan, że coś się zmieniło w tej sferze?` },
      { q: `4. Czy ma Pan problem z utrzymaniem erekcji podczas stosunku? (Spadek erekcji podczas stosunku płciowego).`, a: `<p class="p-accent-blue">Faktem jest, że wraz z wiekiem, przez stres lub inne choroby
spada poziom testosteronu, a to wpływa na erekcję. Musimy przywrócić naturalną produkcję testosteronu i utrwalić ten wynik.</p>` },
      { q: `5. Czy w ostatnim czasie zauważył Pan, że podniecenie jest słabsze niż wcześniej?` },
      { q: `6. Czy w ostatnim czasie współżycie było u Pana regularne, czy raczej sporadyczne? (Mniej więcej jak często dochodzi do zbliżeń? Raz w tygodniu, rzadziej?)`, a: `<p class="p-accent-blue">W okolicy miednicy dochodzi do zastoju krwi - krew nie napływa, a odpływ następuje wcześniej, co prowadzi do pogorszenia erekcji i skrócenia czasu trwania stosunku płciowego. To wymaga zintegrowanego podejścia, pomogę Panu w tym.</p>` },
      { q: `7. A co do czasu trwania stosunku — czy chciałby Pan, aby był on dłuższy?`, a: `<p class="p-accent-blue">Rozumiem, jakie to ważne, dlatego dobiorę dla Pan dawkę biorąc pod uwagę Pana życzenia. Preparat nie tylko poprawi erekcję, ale także wydłuży czas trwania i doznania podczas stosunku płciowego.</p>` },
      { q: `8. Czy wcześniej stosował Pan już jakieś preparaty na poprawę potencji? (NP Viagra/Mensil? Jaki był wynik? Czy po użyciu wystąpiły jakieś problemy z sercem?`, a: `<p class="p-accent-blue">Takie leki są niebezpieczne - przede wszystkim mają silny skład chemiczny, uszkadzają wątrobę, nerki, serce i podwyższają ciśnienie krwi, ryzyko zawału/udaru mózgu jest duże, dlatego nie należy zażywać takich leków, zwłaszcza, że ​​nie przywracają potencji, a są jednorazowymi środkami pobudzającymi. </p>` },
      { q: `9. Problemy z potencją mogą być pierwszym objawem zapalenia prostaty. Proszę powiedzieć, czy zauważył Pan inne objawy, takie jak częste oddawanie moczu? Jak często wstaje Pan w nocy do toalety?`, a: `<p class="p-accent-blue"><b>Tak</b> - pytania dotyczące zapalenia gruczołu krokowego / <b>NIE</b> - to dobrze. W każdym razie będziemy stosować profilaktykę zapalenia gruczołu krokowego. Rozumie Pan, że w Pana wieku jest to konieczne?</p>` },
      
    ],
  },
  {
    key: "prostate",
    label: "prostate",
    questions: [
      { q: `3. Od jak dawna ma Pan problem z zapaleniem prostaty?`  },
      { q: `4. Czy konsultował Pan się z lekarzem? (Jaką postawiono diagnozę?)`},
      { q: `5. Czy odczuwa Pan częste parcie na mocz?` },
      { q: `6. Ile razy wstaje Pan w nocy, aby pójść do toalety?` },
      { q: `7. Czy miał Pan uczucie niepełnego opróżnienia pęcherza, jakby po wizycie w toalecie wciąż coś zostało?` },
      { q: `8. Czy zauważył Pan, że mocz wydobywa się w małych porcjach?`, a: `<p class="p-accent-blue">Zapalona prostata zmienia swoją strukturę, a funkcje komórek i gruczołu są zaburzone, prostata powiększa się i wywiera nacisk na kanał moczowy, blokując drogi moczowe. Wpływ na to ma wiek, styl życia, choroby przewlekłe – co prowadzi do zmian w poziomie hormonów (produkcja testosteronu) i zaburzeń krążenia w narządach miednicy. Musimy nie tylko złagodzić objawy, ale też przywrócić prawidłowe procesy metaboliczne, aby wyleczyć zapalenie prostaty i zapobiec powikłaniom. Ma Pan już postać przewlekłą, a objawy utrzymują się przez _____ okres. </p>` },
      { q: `9. Czy zauważył Pan ból lub skurcze w podbrzuszu lub w nerkach?`, a: `<p class="p-accent-blue">Kiedy mocz nie jest całkowicie usuwany z pęcherza, może to prowadzić do rozwoju bakterii, a stan zapalny może rozprzestrzenić się w kierunku nerek. Może to również sprzyjać rozwojowi gruczolaka. Dobrze, że szuka Pan leku — nie zostawiaj tego przypadkowi i wracaj do zdrowia na czas.</p>` },
      { q: `10. Czy strumień moczu stał się słabszy lub zauważył Pan przerwę w jego wydzielaniu?` },
      { q: `11. Czy brał Pan jakieś leki lub był leczony? (Jakie są wyniki?)`, a: `<p class="p-accent-blue">Takie leki (blokery alfa-1) działają objawowo, łagodzą jedynie objawy i w żaden sposób nie wpływają na samą przyczynę,  zapalenie pozostaje w kanałach prostaty i choroba staje się przewlekła. Usuniemy samą przyczynę i przywrócimy wszystkie funkcje procesu metabolicznego. </p>` },
      { q: `12. Czy występuje u Pana mimowolny wyciek moczu?`, a: `<p class="p-accent-blue">TAK – jak często? Proszę się nie martwić, zajmiemy się tym problemem. / NIE – dobrze, że składa Pan wniosek w terminie i nie spodziewa się Pan komplikacji.</p>` },
      { q: `13. Zapalenie gruczołu krokowego wpływa na zdrowie wszystkich mężczyzn, w tym na potencję. Proszę powiedzieć, czy zauważył Pan osłabienie erekcji? Czy chciałby Pan poprawić swoją potencję?`, a: `<p class="p-accent-blue"><b>TAK</b> - Pytania dotyczące erekcji / <b>NIE</b> - To ważne dla każdego mężczyzny, niezależnie od wieku, a moi klienci zawsze dziękują mi za możliwość przedłużenia i wzmocnienia erekcji.</p>` },
    
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
