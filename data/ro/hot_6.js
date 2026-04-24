registerScript("ro", "hot_6", {
  title: "Urivelle",
  stages: {
    greeting: `
    <p>Bună ziua, _______. Mă numesc _______. Sunt specialist principal pentru produsul Urivelle (Юривел) – destinat susținerii sistemului urinar și tratării/prevenirii proceselor inflamatorii (cistitei).</p>
    <p> Ați lăsat o solicitare pentru acest produs. Este corect?</p>
    <p> - [Numele clientului], comenzile le livrăm prin curier. Haideți să verificăm dacă livrarea este disponibilă pentru dvs. În ce oraș locuiți? (Verificăm posibilitatea livrării)</p>
    <p>Trecem fără pauză la blocul de identificare a nevoilor.</p>

    <p span class="txt-red"? class="presentationTitle">Dacă clientul întreabă despre preț:</p>
    <p> - [Numele clientului], mă bucur că ați întrebat despre preț — văd că în acest moment aveți o ofertă activă. Totuși, este important să înțeleg dacă produsul vi se potrivește, de aceea spuneți-mi, vă rog, ce vârstă aveți? (așteptăm răspunsul clientului și notăm)</p>
    

    `,
    needs: `
    <p>Pentru a vă putea recomanda terapia cea mai potrivită, este important să înțeleg mai bine situația dumneavoastră. Vă voi adresa câteva întrebări — acest lucru mă va ajuta să aleg cursul optim exact pentru dvs.</p>


    `,
    presentation: `
    <p>[Numele clientului], primele semne de cistită nu trebuie ignorate. Nu este doar un disconfort — este o inflamație care poate trece foarte rapid în formă cronică și poate da complicații la nivelul rinichilor.</p>
    <p>Cistita reprezintă o inflamație a vezicii urinare, care, de cele mai multe ori, este cauzată de o infecție bacteriană. Tratamentul antibacterian corect este esențial pentru prevenirea complicațiilor și pentru eliminarea problemei existente.</p>
    <p>Urivelle este un produs unic și inovator, care și-a demonstrat eficiența în SUA și Europa. Recent, produsul a fost introdus pe piața din Romania, iar compania noastră este reprezentantul său exclusiv.Urivelle este o soluție care nu doar elimină simptomele, ci acționează asupra cauzei cistitei.</p>
    <p>Cum acționează Urivelle:</p>
    <ul>
    <li>Prima etapă (chiar din primele zile) - Se reduce inflamația mucoasei vezicii urinare. Scad senzația de arsură, usturimea și nevoia frecventă de a merge la toaletă. Devine mai ușor să urinați.</li>
    <li>A doua etapă - Componentele active ajută la eliminarea bacteriilor. Se reface stratul protector al vezicii urinare. Mucoasa devine mai puțin vulnerabilă la infecții.</li>
    <li>A treia etapă - Vezica urinară se întărește. Scade riscul de reapariție a episoadelor. Cistita nu mai revine la fiecare răcire sau episod de stres.</li>
    </ul>
<details class="custom-details">
 <summary class="details-title">Urivelle:</summary>
 <div class="details-content"> 
 <ul>
 <li>distruge bacteriile care provoacă boala</li>
 <li>reduce inflamația vezicii urinare</li>
 <li>oprește răspândirea infecției</li>
 </ul>

<p>Produsul ajunge în vezica urinară odată cu urina și se concentrează direct în focarul infecției. Afectează celulele bacteriene și oprește multiplicarea acestora.</p>
<p>Ca rezultat, bacteriile sunt eliminate, iar inflamația scade treptat.</p>
 </div> 
</details>

<details class="custom-details">
 <summary class="details-title">Cum ameliorează produsul simptomele?</summary>
 <div class="details-content"> 
<p>La scurt timp după începerea tratamentului:</p>
<ul>
<li>se va reduce durerea și usturimea la urinare</li>
<li>frecvența urinării va scădea</li>
<li>disconfortul din zona abdomenului inferior va dispărea</li>
<li>starea generală se va îmbunătăți</li>
</ul>
<p>Gândiți-vă la costurile pe termen lung: tratamentul cistitei necesită adesea terapie medicamentoasă constantă și vizite regulate la medic. Produsul nostru vă poate economisi semnificativ aceste cheltuieli, deoarece oferă un rezultat stabil și previne apariția unor probleme mai serioase în viitor.</p>

 </div> 
</details>
<p class="presentationTitle">Complex de vitamine: Swiss Vitamins</p>
    <p>Acest produs este destinat susținerii sistemului urogenital în caz de cistită — acționează țintit asupra disconfortului, iritației și senzațiilor neplăcute la urinare și este utilizat în cadrul unui curs de tratament. În practică, am observat că rezultatele sunt mai bune atunci când sunt susținute în paralel și procesele imune și de refacere, deoarece organismul resimte un stres suplimentar în timpul cistitei. Din acest motiv, adesea includem și un complex de vitamine.</p>
    <p>Vitaminele și mineralele din complex ajută la activarea sistemului imunitar, la procesele de refacere ale mucoaselor și la menținerea energiei. Ca rezultat, produsul principal acționează direct asupra sistemului urogenital, iar vitaminele ajută organismul din interior — astfel refacerea este mai rapidă și mai stabilă.</p>
    <p>Altfel spus, unul acționează asupra problemei locale, iar celălalt sprijină protecția și refacerea organismului — împreună oferă o susținere mai completă.</p>


    `,
    courses: `
  <p class="presentationTitle">Vânzarea cursurilor: 4+2, sau 3+3</p>
    <p>[Numele clientului], pentru a obține acest rezultat, cea mai eficientă opțiune pentru dvs. este cursul complet, conceput pentru administrare pe o perioadă de 2 luni și care constă din 5 cutii de Urivelle.</p>
    <p>În cadrul programului „Sănătate”, primiți 2 sau 3 cutii complet gratuit, iar pentru celelalte 3 beneficiați de reducere. Prețul inițial al cursului era de 1500 roni, însă acum plătiți doar <b> 544 roni</b></p>
    
    <details class="custom-details">
 <summary class="details-title">Prima obiecție („nu”) – trebuie gestionată:</summary>
 <div class="details-content"> 
<p>[Numele clientului], înțeleg că prețul poate părea mai mare decât vă așteptați. Totuși, este important să luați o decizie informată.</p>
    <p>Ce se poate întâmpla fără tratament?</p>
    <ul>
    <li>Infecția se poate extinde la rinichi</li>
    <li>Boala poate deveni cronică</li>
    <li>Durerea și simptomele generale se pot agrava</li>
    </ul>
    <p>Produsul nu doar ameliorează simptomele, ci și protejează organismul împotriva complicațiilor.</p>
    <p><b>Gândiți-vă la rezultate:</b> tratamentul cistitei este un proces de durată și foarte important. Mulți pacienți vin la noi și ne spun că au încercat numeroase produse și au cheltuit sume mari. Rezultatele au fost diferite: unii nu au obținut niciun efect terapeutic, iar alții au avut doar o ameliorare temporară, după care disconfortul și durerea au revenit chiar mai puternic.</p>
    <p>De aceea, acest curs nu doar vă va ameliora temporar starea, ci va contribui la refacerea completă a sănătății vezicii urinare și va preveni recidivele viitoare.</p>
    <p><b>Confirmăm comanda?</b></p>
 </div> 
</details>

    
    

    <p class="presentationTitle">Cursul 3+1</p>
    <p>[Numele clientului], înțeleg situația dvs. și doresc sincer să vă ajut să obțineți rezultatul dorit fără a plăti mai mult decât este necesar. Prețul cursului este de 1000 roni, însă în cadrul apelului de astăzi îl puteți achiziționa cu reducere, doar <b>396 roni</b>.</p>
    <p> Aceasta este o ofertă cu adevărat avantajoasă. Confirmăm cursul?</p>

    <details class="custom-details">
 <summary class="details-title">Gestionarea refuzului:</summary>
 <div class="details-content"> 
<p></p>
    <p>Sănătatea noastră necesită întotdeauna anumite cheltuieli. Alegând Urivelle, veți simți din nou că sunteți o persoană sănătoasă și, cel mai important, vă veți proteja de complicații serioase. Nu va mai trebui să vă gândiți la alte metode de tratament sau să cheltuiți bani pe produse dubioase și ineficiente.</p>
   <ul>
   <li>Veți observa primele rezultate chiar în primele zile de utilizare, vă veți convinge de eficiența produsului și veți putea comanda și restul cutiilor.</li>
   <li>Ajutați-vă să reveniți la un stil de viață sănătos!</li>
   </ul>
    <p><b>Confirmăm acest curs?</b></p>
    
 </div> 
</details>


    <p class="presentationTitle">Cursul 2+1 – vânzare de bază</p>
    <p>Vă pot oferi un curs de bază, care constă din 3 cutii, dintre care 1 cutie o primiți complet gratuit. Acest curs este, de asemenea, foarte eficient, dar mai accesibil – prețul inițial era de 620 roni, însă doar astăzi îl puteți achiziționa cu <b>327 roni</b>.</p>
    <p>[Numele clientului], înțeleg că ezitați. Totuși, permiteți-mi să vă explic de ce merită produsul acest preț. Noi oferim nu doar un produs, ci o soluție reală pentru problema dvs.</p>
    <p>La scurt timp după începerea tratamentului:</p>
    <ul>
    <li>se va reduce durerea și usturimea la urinare</li>
    <li>frecvența urinării va scădea</li>
    <li>disconfortul din zona abdomenului inferior va dispărea</li>
    <li>starea generală se va îmbunătăți</li>
    </ul>
    <p>Gândiți-vă la costurile pe termen lung: tratamentul cistitei necesită adesea terapie medicamentoasă constantă și vizite regulate la medic. Produsul nostru vă poate economisi semnificativ aceste cheltuieli, deoarece oferă un rezultat stabil și previne apariția unor probleme mai serioase în viitor.</p>
    <p>Trebuie doar să urmați instrucțiunile de utilizare. Sunt sigur că, atunci când veți vedea rezultatele, veți fi mulțumit de alegerea dvs.</p>
    <p><b>Confirmăm comanda?</b></p>

`,

    cross: `
<p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>


    `,
    survey: `
    <p>Domnule/doamnă , să completăm imediat livrarea, pentru a face acest lucru:</p>
    <p>1. Vă rog să-mi spuneți numele și prenumele complet, pentru a putea înregistra corect comanda <span class="txt-blue">(notăm numele complet după cum îl pronunță clientul)</span>.</p>
    <p>Vă rog să-mi spuneți, veți fi dvs. destinatarul coletului? Sau altcineva va putea primi coletul, dacă dvs. nu veți putea? Sunt gata să notez numele și numărul de telefon. <span class="txt-blue">(Notăm în CRM în câmpul „Comentariu”.)</span></p>
    <p>2. Acum, vă rog să-mi dictați adresa de livrare (regiune, oraș, stradă, număr de casă/clădire, număr de bloc/intrare, etaj, număr de apartament, cod poștal)<span class="txt-blue"> (notăm datele după cum le dictează clientul)</span>.</p>
    <p>3. În plus, vă rugăm să indicați un punct de reper pentru curier (intersecția străzilor, cel mai apropiat magazin, școală, farmacie sau cafenea, numele cartierului sau al complexului rezidențial, stația, caracteristicile casei, poarta) <span class="txt-blue">(notăm datele în câmpul „Comentariu” pentru curier)</span>.
(Dacă este locul de muncă al clientului, adăugați neapărat și numele companiei și funcția clientului) <span class="txt-blue">(notăm datele în câmpul de comentarii pentru curier)</span></p>

    `,
    closing: `
    <p>Domnule/doamnă , vă rugăm să verificați încă o dată toate datele dvs. pentru a evita erorile la livrare:</p>
    <ol>
    <li>numele și prenumele complet: [repetați numele complet, literă cu literă];</li>
    <li>dacă există un destinatar suplimentar: [repetați numărul de telefon] - totul este corect? <span class="txt-green">(așteptăm confirmarea)</span></li>
    <li>adresa de livrare: [regiune, oraș, stradă, număr de casă/clădire, număr de bloc/intrare, etaj, număr de apartament, cod poștal];</li>
    <li>numele pe interfon [spunem numele pe interfon].</li>
    </ol>
    <p>Vă rugăm să confirmați că datele sunt corecte, pentru a putea garanta livrarea la timp a comenzii dvs. Domnule/doamnă , am notat totul corect? <span class="txt-green">(Așteptăm confirmarea)</span></p>
    <p>Comanda se livreaza in decurs dedoua sau trei zile lucratoare Luni-Vineri de la orele <b>08.00-18.00</b>. Veți primi un SMS de la serviciul de livrare în dimineața livrării. Va exista un link pentru a vă urmări comanda. Plata catre curier numai cash la primire.</p>

    <p class="presentationTitle"><span class="txt-red">CONDIȚIILE OFERTEI:</span></p>
    <p>Conform regulamentului nostru, încheiem un acord verbal, în baza căruia compania se obligă să vă furnizeze un produs original, de cea mai înaltă calitate. Eu, nume / prenume, îmi asum responsabilitatea ca tratamentul dumneavoastră să fie eficient. Din partea dumneavoastră, vă asumați responsabilitatea de a primi produsul și de a începe tratamentul. Vă rog să-mi spuneți dacă aceste condiții vă sunt acceptabile în acest moment.</p>
    <p>Vă voi monitoriza rezultatele, așa că vă rugăm să răspundeți la următorul apel.</p>
    <p>Aveti întrebări?</p>
    <p>O zi plăcută!</p>

    <p class="presentationTitle">Obligatoriu!!!</p>
<p>Cand confirmati comanda spuneti clientului ca curierul nu stie ce este in comanda si clientul nu poate deschide comanda fara sa achite, ca sa verifice ce este acolo. Mai inai achita , dupa care deschide. Spuneti asta clientilor!!!!!</p>

    `,
    objections: `
    <p class="presentationTitle"></p>
  <div id="objectionsButtons"></div>
    `,
    products: `
    <div id="productsList"></div>
    `,
  },
  pricing: [
    {
      label: "free 16",
      html: `
    <p><b>Вариант: free 16</b></p>

    <table class="priceTable">
      <tr>
        <th>Parametru</th>
        <th>Valoare</th>
        <th>Valoare</th>
        <th>Valoare</th>
        <th>Valoare</th>
      </tr>
      <tr>
        <td>Curs</td>
        <td>eficient</td>
        <td>bază</td>
        <td>inițial</td>
        <td>probă</td>
      </tr>
       <tr>
        <td>numărul de pachete</td>
        <td>6</td>
        <td>5</td>
        <td>4</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Livrare</td>
        <td>free</td>
        <td>free</td>
        <td>free</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Preț</td>
        <td>544</td>
        <td>495</td>
        <td>396</td>
        <td>327</td>
      </tr>
     
    </table>
  `,
    },
    {
      label: "low 99",
      html: `
    <p><b>Вариант: low 99</b></p>

    <table class="priceTable">
      <tr>
        <th>Parametru</th>
        <th>Valoare</th>
        <th>Valoare</th>
        <th>Valoare</th>
        <th>Valoare</th>
      </tr>
      <tr>
        <td>Curs</td>
        <td>eficient</td>
        <td>bază</td>
        <td>inițial</td>
        <td>probă</td>
      </tr>
       <tr>
        <td>numărul de pachete</td>
        <td>6</td>
        <td>5</td>
        <td>4</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Livrare</td>
        <td>free</td>
        <td>free</td>
        <td>30</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Preț</td>
        <td>594</td>
        <td>495</td>
        <td>426</td>
        <td>327</td>
      </tr>
     
    </table>
  `,
    },
    {
      label: "midl 119",
      html: `
    <p><b>Вариант: midl 119</b></p>

    <table class="priceTable">
      <tr>
        <th>Parametru</th>
        <th>Valoare</th>
        <th>Valoare</th>
        <th>Valoare</th>
        <th>Valoare</th>
      </tr>
      <tr>
        <td>Curs</td>
        <td>eficient</td>
        <td>bază</td>
        <td>inițial</td>
        <td>probă</td>
      </tr>
       <tr>
        <td>numărul de pachete</td>
        <td>6</td>
        <td>5</td>
        <td>4</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Livrare</td>
        <td>free</td>
        <td>free</td>
        <td>free</td>
        <td>23</td>
      </tr>
      <tr>
        <td>Preț</td>
        <td>595</td>
        <td>525</td>
        <td>476</td>
        <td>380</td>
      </tr>
     
    </table>
  `,
    },
    {
      label: "full 149",
      html: `
    <p><b>Вариант: full 149</b></p>

    <table class="priceTable">
      <tr>
        <th>Parametru</th>
        <th>Valoare</th>
        <th>Valoare</th>
        <th>Valoare</th>
        <th>Valoare</th>
      </tr>
      <tr>
        <td>Curs</td>
        <td>eficient</td>
        <td>bază</td>
        <td>inițial</td>
        <td>probă</td>
      </tr>
       <tr>
        <td>numărul de pachete</td>
        <td>7</td>
        <td>6</td>
        <td>4</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Livrare</td>
        <td>free</td>
        <td>free</td>
        <td>free</td>
        <td>free</td>
      </tr>
      <tr>
        <td>Preț</td>
        <td>745</td>
        <td>596</td>
        <td>447</td>
        <td>328</td>
      </tr>
     
    </table>
  `,
    },
    {
      label: "full 159",
      html: `
    <p><b>Вариант: full 159</b></p>

    <table class="priceTable">
      <tr>
        <th>Parametru</th>
        <th>Valoare</th>
        <th>Valoare</th>
        <th>Valoare</th>
        
      </tr>
      <tr>
        <td>Curs</td>
        <td>eficient</td>
        <td>bază</td>
        <td>inițial</td>
        
      </tr>
       <tr>
        <td>numărul de pachete</td>
        <td>6</td>
        <td>4</td>
        <td>2</td>
       
      </tr>
      <tr>
        <td>Livrare</td>
        <td>free</td>
        <td>free</td>
        <td>30</td>
        
      </tr>
      <tr>
        <td>Preț</td>
        <td>695</td>
        <td>477</td>
        <td>348</td>
        
      </tr>
     
    </table>
  `,
    },
  ],
  products: [
    {
      name: "Urivelle",
      image: "assets/products/ro/product7.png", // або https://...
      origin: "----",
      format: "20 capsule",
      usage: "---",
      

      ingredients: [
        { name: " Vitamina D3", effect: " " },
        { name: " magneziu ", effect: " " },
        { name: "curcuma ", effect: " " },
        { name: " ginseng", effect: " " },
        { name: "buchu ", effect: " " },
      ],
      tabs: [
{
          label: "Contraindicații (nu se vinde în aceste cazuri):",
          text: `
    
- oncologie<br>
- sarcină<br>
- alăptare<br>
- minori
    `,
        },
],
    },
    {
      name: "Swiss Vitamins",
      image: "assets/products/ro/product8.png", // або https://...
      origin: "-----",
      format: "10 tablete",
      usage: "-----",
      ingredients: [
        { name: " ", effect: " " },
        { name: " ", effect: " " },
        { name: " ", effect: " " },
        { name: " ", effect: " " },
      ],
    },
  ],

  objectionsButtons: [
    {
      label: "",
      html: `
      <p></p>  
      `,
    },
    {
      label: "",
      html: `
      <p></p>  
      `,
    },
    {
      label: "",
      html: `
      <p></p>  
      `,
    },
    {
      label: "",
      html: `
      <p></p>  
      `,
    },
    {
      label: "",
      html: `
      <p></p>  
      `,
    },
    {
      label: "",
      html: `
      <p></p>  
      `,
    },
    {
      label: "",
      html: `
      <p></p>  
      `,
    },
    {
      label: "",
      html: `
      <p></p>  
      `,
    },
    {
      label: "",
      html: `
      <p></p>  
      `,
    },
  ],

  accordions: {
    needs: [
      {
        q: `1. Spuneți-mi, vă rog, câți ani aveți?`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Până la 30 de ani</button>
            <button class="ynBtn" type="button" data-show="no">Peste 30 de ani</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>Excelent, la această vârstă organismul se reface bine. Important este să nu lăsați inflamația netratată, altfel cistita poate deveni rapid cronică.</p>
          </div>

          <div class="ynPanel" data-panel="no">
            <p>Înțeleg. După 30 de ani, mucoasa vezicii urinare devine mai vulnerabilă, imunitatea este mai scăzută, de aceea cistita revine mai des și este mai dificil de tratat.</p>
          </div>
        `,
      },
      {
        q: `2. Ce vă deranjează? Aveți senzație de arsură sau usturime la urinare? <span class="txt-green">(Clientul se jenează sau răspunde scurt — punem întrebări suplimentare)</span>
De obicei, în cistită apar: urinări frecvente, arsură, senzația de golire incompletă, dureri în partea inferioară a abdomenului. Care dintre acestea le aveți?`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Există simptome</button>
            <button class="ynBtn" type="button" data-show="no">Nu există simptome (profilaxie)</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>Ați procedat corect că ați apelat. Este o inflamație a mucoasei. Dacă nu este tratată, infecția poate urca spre rinichi, iar tratamentul devine mai complicat și mai costisitor.</p>
          </div>

          <div class="ynPanel" data-panel="no">
            <p>Foarte bine! Prevenția este mult mai eficientă decât tratarea episoadelor acute. Multe forme cronice încep de la episoade inițiale cărora nu li s-a acordat importanță.</p>
          </div>
        `,
      },

      {
        q: `3. De cât timp au apărut simptomele?`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Mai puțin de 6 luni</button>
            <button class="ynBtn" type="button" data-show="no">Mai mult de 6 luni</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>Este un stadiu incipient — inflamația poate fi ținută complet sub control și se poate preveni cronicizarea.</p>
          </div>

          <div class="ynPanel" data-panel="no">
            <p>Cel mai probabil este o inflamație cronică. Orice răcire sau stres poate declanșa un nou episod.</p>
          </div>
        `,
      },

      {
        q: `4. Ați mai luat anterior medicamente sau antibiotice?`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Orice răspuns</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>Majoritatea produselor din farmacie elimină doar simptomele — arsura și durerea. Însă nu refac mucoasa și nu întăresc protecția, de aceea cistita revine frecvent.</p>
            <p>Pentru că, din experiența noastră, problema nu e doar disconfortul de moment…</p>
            <p>Ci faptul că revine exact când vă așteptați mai puțin.</p>
          </div>

          `,
      },
      {
        q: `Mulți clienți ne spun că:`,
        a: `
        <ul>
        <li>nu pot dormi noaptea din cauza mersului frecvent la baie</li>
        <li>le este teamă să plece de acasă fără să știe unde e cea mai apropiată toaletă</li>
        <li>evită anumite activități sau chiar relațiile intime din cauza durerii</li>
        </ul>
          <p>Și cel mai frustrant e că tratamentele clasice ajută pe moment… dar nu rezolvă cauza, iar cistita reapare.</p>
       
          <p class="p-accent-green">Faceti o concluzie, repetati problemele clientului si ce aveti ca scop sa rezolvati si trecem la prezenatre</p>
          `,
      },
    ],
    objections: [],
  },
});
