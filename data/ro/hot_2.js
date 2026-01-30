registerScript("ro", "hot_2", {
  title: "Hyperon",
  stages: {
    greeting: ` <p>Bună ziua, domnule/doamnă ……….­?</p>
      <p>Numele meu este Numele operatorului, sunt de la clinica Regina Maria”. Ați lăsat o cerere pentru produsul pentru probleme de tensiune si cardiace HYPERON, este corect?</p>
      <p><i>"DA"</i></p>
      <p>Pentru a verifica posibilitatea livrării, vă rugăm să ne spuneți în ce regiune locuiți și în ce oraș?</p>
      <p class="p-accent-green"><i>"Orașul este potrivit"</i></p>
      <p>Excelent, domnule/doamnă , livrarea în orașul dumneavoastră este posibilă.</p>
      <p>Haideți să procedăm astfel: vă voi pune câteva întrebări pentru a înțelege mai bine cum vă simțiți. Apoi vă voi explica cum funcționează Hyperon și în ce fel vă va fi util acest produs. Apoi voi alege doza potrivită și, dacă sunteți de acord, vă voi ajuta cu formalitățile. Bine?</p>
`,
    needs: `<p class="muted">Întrebări + ramificări sunt mai jos (în blocurile care se deschid).</p>`,
    presentation: `

        <p>Domnule/doamnă , haideți să vă spun acum de ce Hyperon este într-adevăr o alegere fiabilă, bine? (Așteptăm acordul)</p>
<p class="presentationTitle">Beneficii și Rezultate</p>
<p>Această etapă este foarte importantă: Tratamentul ajută la curățarea vaselor de sânge și la prevenirea formării de cheaguri. În timp, pereții vaselor devin mai rezistenți, circulația se face mai ușor, iar organele — inclusiv creierul și inima — sunt mai bine oxigenate. Se reduce riscul de complicații cum ar fi accidentul vascular, infarctul sau chiar problemele de mobilitate.</p>
    <p class="presentationTitle"><span class="txt-red">Beneficiile generale pe care le simțiți:</span></p>
    <ul>
  <li>Dispare greutatea din picioare și se reduc varicele</li>
  <li>Respirația devine mai ușoară</li>
  <li>Somnul se reglează, nu mai aveți treziri frecvente</li>
  <li>Scade oboseala și starea de agitație</li>
  <li>Pulsul devine constant, chiar și în situații stresante</li>
  <li>Funcția inimii se stabilizează, mai ales dacă există semne de insuficiență cardiacă</li>
</ul>
<p>Rezultat de durată Efectele tratamentului se simt treptat, dar se mențin pe termen lung. Nu este un produs care doar ameliorează temporar, ci lucrează în profunzime în organism, astfel încât să nu fie nevoie de un tratament permanent. Cu toate acestea, pentru menținere, este posibil ca în timp să reveniți la o nouă cură — dar nu des, și doar pentru susținere, nu pentru a repara din nou ce s-a degradat.</p>

<p class="presentationTitle">Prezentarea calităților produsului ca beneficii pentru client</p>
<p>Stimata doamna/domnule..., Suntem o companie internationala care lucreaza cu toate tarile europene de mai bine de 5 ani. Folosim doar produse naturale, certificate si standarde europene.</p>
<p>Produsul HYPERON este 100% natural, nu are contraindicații sau efecte secundare asupra organismului.</p>
<p>Acestea este un medicament cu o acțiune specifică asupra sistemului cardiovascular.</p>
<p>Capsulele destinate pentru normalizarea tensiunii arteriale HYPERON este un produs creat pentru a ajuta la menținerea valorilor tensionale în limite normale. Acest produs este formulat pe bază de ingrediente naturale, atent selectate pentru a susține sănătatea sistemului cardiovascular.</p>

<p class="presentationTitle"><span class="txt-red">Printre beneficiile principale ale capsulelor HYPERON se numără:</span></p>
<ul>
  <li>Ajută la reglarea tensiunii arteriale ridicate sau joase</li>
  <li>Contribuie la reducerea stresului asupra inimii și vaselor de sânge</li>
  <li>Sprijină fluxul sanguin sănătos</li>
  <li>Îmbunătățește starea generală a sistemului cardiovascular</li>
  <li>Are un efect calmant asupra sistemului nervos, reducând riscul de hipertensiune cauzată de stres</li>
</ul>
<p>Produsul este destinat persoanelor care se confruntă cu probleme legate de tensiunea arterială, precum și celor care doresc să mențină o tensiune arterială în limite normale.</p>
 <p class="presentationTitle"><span class="txt-red">Indicațiile de utilizare includ, dar nu se limitează la:</span></p>
<ul>
  <li>Tensiune arterială crescută (hipertensiune)</li>
  <li>Tensiunea arteriala scazuta (hipotensiune)</li>
  <li>Stări de nervozitate și stres care pot influența valorile tensiunii</li>
  <li>Prevenirea complicațiilor cardiovasculare legate de hipertensiune</li>
  <li>Susținerea sănătății sistemului cardiovascular în general</li>
</ul>
<p>Capsulele HYPERON acționează printr-un mecanism delicat și natural, conceput pentru a ajuta organismul să își regleze tensiunea arterială în mod eficient și sigur. Formula sa complexă, bazată pe ingrediente naturale, lucrează în armonie cu sistemul cardiovascular, având un efect calmant și fortalecitor.</p>
<p>Principiul de funcționare al produsului se bazează pe susținerea proceselor de relaxare a vaselor de sânge, ceea ce contribuie la scăderea tensiunii arteriale ridicate. În același timp, ingredientele active sprijină sănătatea inimii și a sistemului nervos, reducând stresul și tensiunea acumulată în organism.</p>
 <p class="presentationTitle"><span class="txt-red">Datorită acestor acțiuni, HYPERON:</span></p>
 <ul>
  <li>Ajută la menținerea valorilor tensiunii arteriale în limite normale</li>
  <li>Contribuie la reducerea riscului de complicații cardiovasculare</li>
  <li>Îmbunătățește circulația sanguină și sănătatea vaselor</li>
  <li>Are un efect relaxant asupra sistemului nervos, diminuând stresul și nervozitatea</li>
  <li>Sprijină procesul natural de reglare a tensiunii, fără efecte adverse</li>
</ul>
   <p>Astfel, utilizarea regulată a capsulelor HYPERON poate aduce o stare de bine generală, ajutând organismul să facă față mai ușor factorilor stresori și să își mențină sănătatea sistemului cardiovascular.</p>
 <p class="presentationTitle"><span class="txt-red">De ce sa alegi Hyperon Active?</span></p>
<ul>
  <li>Sustine tensiunea arteriala sanatoasa si circulatia optima – vasodilatatoare naturale pentru un flux sanguin optim.</li>
  <li>Reduce stresul oxidativ – antioxidanti puternici care protejeaza sistemul cardiovascular de daunele radicalilor liberi.</li>
  <li>Creste energia si vitalitatea – imbunatateste rezistenta fizica si mentala pentru un stil de viata activ.</li>
  <li>Ajuta la echilibrul colesterolului si lipidelor – mentine niveluri sanatoase de colesterol LDL si HDL.</li>
  </ul>

  <p>Mod de administrare pentru rezultate optime: Luati o capsula de doua ori pe zi cu apa.</p>

    <p class="presentationTitle">Exemplu din viață și Concluzii</p>
    <p>EXEMPLU DIN VIAȚĂ: Chiar vreau să vă spun un caz: mătușa mea, persoană foarte apropiată a tot amânat să înceapă un tratament. Își spunea mereu: „Mai am timp, nu e atât de grav.” Până într-o zi, când, dintr-o dată, a simțit o durere puternică în piept și amețeli. A ajuns la spital în grabă — și atunci și-a dat seama cât de mult ar fi putut evita totul dacă ar fi început mai devreme. După ce a urmat programul nostru complet, mi-a spus cu lacrimi în ochi că singurul ei regret e că nu m-a ascultat mai devreme. Cursul de 3 luni nu înseamnă doar să aveți tensiunea normală, ci scade și riscul de accident vascular sau infarct cu 40-50%. Vă dați seama, nu l-aș fi recomandat mătușii mele tratamentul, dacă nu eram sigur de eficiența lui, de aia cu încredere vă recomand și dvs. Asta înseamnă șansa de a trăi liniștit, fără frică pentru inimă, și cheltuieli pe viitor la medicamente și tratamente. Situația ei e foarte asemănătoare cu a dumneavoastră și chiar nu vreau să pierdeți această șansă să vă protejați din timp. Credeți-mă că merită să facem comanda și să faceți primul pas chiar acum! Cu care tratament începem, cel de 3 luni sau 2?</p>
    `,

    courses: `
    <p>Eu ca specialist superior în domeniul medical cu o experiență de mai mult de 10 ani vă recomand 2 cele mai eficiente, cele mai puternice variante de tratament! <span class="txt-green">(oferim mai întâi primele 2 opțiuni)</span></p>
  <p>1. <b>Eficient curs</b> — cel mai eficient. Urmați cursul timp de 3 luni. În acest timp, funcționarea sistemului cardiovascular se restabilește la nivel sistemic: tensiunea arterială se normalizează, circulația sanguină se îmbunătățește, iar pereții vaselor devin mai elastici. Este perfect pentru rezultate durabile și o stare de bine stabilă.</p>
  <p>2. Al doilea curs — de <b>bază</b>, de 2 luni. Această opțiune este potrivită pentru începerea terapiei: reduce treptat valorile crescute ale tensiunii, ameliorează amețelile și oboseala, sprijină activitatea inimii și normalizează nivelul de colesterol. Deja în această etapă se simte mai multă energie și echilibru general.</p>
  <p>De asemenea, în cadrul fiecărui tratament veți primi cadou. În cazul dumneavoastră, <b>Nemanex</b> este alegerea ideală — un complex natural de detoxifiere care ajută la eliminarea toxinelor, curățarea vaselor și a sângelui, dar și la întărirea imunității.</p>
<p>Administrarea este foarte simplă: 20 de picături dizolvate în 100 ml de apă, de 2 ori pe zi. Produsul este complet sigur și se combină perfect cu cursul dumneavoastră pentru inimă. În mod normal cutia costă 318 lei, astăzi ca un ajutor suplimentar o primiți gratuit.</p>

    <div id="pricingBlock"></div>

`,

    cross: `
    <div id="crossSellBlock"></div>
`,
    survey: `<p>Domnule/doamnă , să completăm imediat livrarea, pentru a face acest lucru:</p>
    <p>1. Vă rog să-mi spuneți numele și prenumele complet, pentru a putea înregistra corect comanda (notăm numele complet după cum îl pronunță clientul).</p>
    <p>Vă rog să-mi spuneți, veți fi dvs. destinatarul coletului? Sau altcineva va putea primi coletul, dacă dvs. nu veți putea? Sunt gata să notez numele și numărul de telefon. (Notăm în CRM în câmpul „Comentariu”.)</p>
    <p>2. Acum, vă rog să-mi dictați adresa de livrare (regiune, oraș, stradă, număr de casă/clădire, număr de bloc/intrare, etaj, număr de apartament, cod poștal) (notăm datele după cum le dictează clientul).</p>
    <p>3. În plus, vă rugăm să indicați un punct de reper pentru curier (intersecția străzilor, cel mai apropiat magazin, școală, farmacie sau cafenea, numele cartierului sau al complexului rezidențial, stația, caracteristicile casei, poarta) (notăm datele în câmpul „Comentariu” pentru curier).
(Dacă este locul de muncă al clientului, adăugați neapărat și numele companiei și funcția clientului) (notăm datele în câmpul de comentarii pentru curier)</p>
`,
    closing: `<p>Domnule/doamnă , vă rugăm să verificați încă o dată toate datele dvs. pentru a evita erorile la livrare:</p>
    <ol>
    <li>numele și prenumele complet: [repetați numele complet, literă cu literă];</li>
    <li>dacă există un destinatar suplimentar: [repetați numărul de telefon] - totul este corect? (așteptăm confirmarea)</li>
    <li>adresa de livrare: [regiune, oraș, stradă, număr de casă/clădire, număr de bloc/intrare, etaj, număr de apartament, cod poștal];</li>
    <li>numele pe interfon [spunem numele pe interfon].</li>
    </ol>
    <p>Vă rugăm să confirmați că datele sunt corecte, pentru a putea garanta livrarea la timp a comenzii dvs. Domnule/doamnă , am notat totul corect? (Așteptăm confirmarea)</p>
    <p>Comanda se livreaza in decurs de o zi sau doua lucratoare de Luni-Vineri de la orele 08.00-18.00.Veți primi un SMS de la serviciul de livrare în dimineața livrării. Va exista un link pentru a vă urmări comanda. Plata catre curier numai cash la primire.</p>

    <p class="presentationTitle"><span class="txt-red">CONDIȚIILE OFERTEI:</span></p>
    <p>Conform regulamentului nostru, încheiem un acord verbal, în baza căruia compania se obligă să vă furnizeze un produs original, de cea mai înaltă calitate. Eu, nume / prenume, îmi asum responsabilitatea ca tratamentul dumneavoastră să fie eficient. Din partea dumneavoastră, vă asumați responsabilitatea de a primi produsul și de a începe tratamentul. Vă rog să-mi spuneți dacă aceste condiții vă sunt acceptabile în acest moment.</p>
    <p>Vă voi monitoriza rezultatele, așa că vă rugăm să răspundeți la următorul apel.</p>
    <p>Aveti întrebări?</p>
    <p>O zi plăcută!</p>
`,
    objections: `
    <div id="objectionsButtons"></div>
    `,
    products: `
    <div id="productsList"></div>
    `,
  },
  


  

  pricing: [
    {label: "free 16",
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
        <td>Доставка (Livrare)</td>
        <td>free</td>
        <td>free</td>
        <td>30</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Цена (Preț)</td>
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
        <td>Доставка (Livrare)</td>
        <td>free</td>
        <td>free</td>
        <td>free</td>
        <td>23</td>
      </tr>
      <tr>
        <td>Цена (Preț)</td>
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
        <td>Доставка (Livrare)</td>
        <td>free</td>
        <td>free</td>
        <td>free</td>
        <td>free</td>
      </tr>
      <tr>
        <td>Цена (Preț)</td>
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
        <td>Доставка (Livrare)</td>
        <td>free</td>
        <td>free</td>
        <td>30</td>
        
      </tr>
      <tr>
        <td>Цена (Preț)</td>
        <td>695</td>
        <td>477</td>
        <td>348</td>
        
      </tr>
     
    </table>
  `,
    },
  ],

  
crossSellProducts: [
  {
    label: "Cleorix",
    html: `
      <p>Domnule/ Doamna, ați făcut foarte bine că ați ales cursul pentru susținerea mobilității articulațiilor — el va ajuta la reducerea inflamației și la redarea confortului în mișcare.</p>
 <p>Pentru ca efectul să apară mai repede și rezultatul să se mențină pe termen lung, recomandăm întotdeauna și o curățare a organismului.
Sărurile, toxinele și reziduurile se acumulează adesea în țesuturile articulațiilor și împiedică refacerea lor.</p>
 <p>În cazul dumneavoastră, <b>Cleorix</b> este soluția ideală — un complex natural de detoxifiere care ajută la eliminarea substanțelor nocive și la susținerea metabolismului.
El reduce inflamațiile interne, îmbunătățește hrănirea articulațiilor și amplifică efectul cursului principal.</p>
 <p>Compoziția conține trei ingrediente active:</p>
<ul>
  <li>Extract de semințe de dovleac – întărește țesuturile articulare și susține funcția ficatului;</li>
  <li>Extract de frunze de nuc – curăță sângele, elimină inflamațiile și depunerile de săruri;</li>
  <li>Zinc – contribuie la refacerea țesutului cartilaginos și întărește celulele.</li>
</ul>
<p>Administrarea este foarte simplă: 20 de picături dizolvate în 100 ml de apă, de 2 ori pe zi.
Remediul este complet sigur, potrivit și pentru persoanele cu afecțiuni cronice, și se combină perfect cu cursul dumneavoastră pentru articulații.
De obicei, cursul costă 240 lei, dar acum este în promoție — <b>doar 59 lei pentru 10 zile de utilizare</b>.</p>
<p>Domnule/ Doamna, haideți să adăugăm și Nemanex la comandă, ca organismul să se curețe, articulațiile să se refacă mai repede și rezultatul să se mențină mai mult timp. (E bine așa.)</p>
<p>— Excelent, Domnule/Doamnă , atunci vă confirm cursul principal Arthrolux și cursul (cursurile) suplimentar(e) din promoție. Valoarea totală a comenzii dvs., ținând cont de toate reducerile, <b>va fi de XX lei</b>.</p>

    `,
  },
  {
    label: "Hyperon",
    html: `
    <p>Domnule/ Doamna, ați făcut foarte bine că ați ales cursul pentru susținerea mobilității articulațiilor — el va ajuta la reducerea inflamației și la redarea confortului în mișcare.</p>

<p>Pentru ca dvs ati spus ca aveti probleme cu tensiune, probleme cardiace, va recomand desigur si un produs pentru a rezolva problemele cardiace si de tensiune</p>

<p>În cazul dumneavoastră, <b>Hyperon</b> este soluția ideală — poate aduce o stare de bine generală, ajutând organismul să facă față mai ușor factorilor stresori și să își mențină sănătatea sistemului cardiovascular.</p>

<p>Datorită acestor acțiuni, HYPERON:</p>
<ol>
<li>Ajută la menținerea valorilor tensiunii arteriale în limite normale</li>
<li>Contribuie la reducerea riscului de complicații cardiovasculare</li>
<li>Îmbunătățește circulația sanguină și sănătatea vaselor</li>
<li>Are un efect relaxant asupra sistemului nervos, diminuând stresul și nervozitatea</li>
<li>Sprijină procesul natural de reglare a tensiunii, fără efecte adverse</li>
</ol>

<p>Ingrediente cheie pentru o inima sanatoasa:</p>
<ul>
<li>Clorhidrat de arginina – aminoacid esential care sprijina productia de oxid nitric, favorizand relaxarea vaselor de sange si imbunatatirea circulatiei.</li>
<li>Extract de frunze de ginseng (Panax ginseng) – utilizat traditional pentru cresterea rezistentei, reducerea stresului si sustinerea functiei cardiace.</li>
<li>Extract de radacina de maca (Lepidium meyenii) – bogat in compusi bioactivi care ajuta la reglarea tensiunii arteriale si cresterea energiei.</li>
<li>Extract de fructe de ardei iute (Capsicum frutescens L.) – stimulant natural ce promoveaza un flux sanguin sanatos si functia cardiovasculara.</li>
<li>Extract de seminte de guarana (Paullinia cupana) – ofera cafeina naturala si antioxidanti pentru sustinerea energiei si circulatiei.</li>
<li>Extract de fructe citrice (Citrus aurantium) – sursa de bioflavonoide care intaresc vasele de sange si sustin sanatatea inimii.</li>
<li>Extract de fructe Tribulus Terrestris – folosit de secole pentru imbunatatirea circulatiei si sanatatii vasculare.</li>
<li>Extract de rizom de ghimbir (Zingiber officinale) – antiinflamator puternic care ajuta la mentinerea nivelurilor sanatoase de colesterol.</li>
<li>Extract de radacina de urzica (Urtica dioica) – sustine reglarea tensiunii arteriale si functia rinichilor.</li>
<li>Extract de scoarta de pin (Pinus sylvestris) – bogat in antioxidanti ce reduc stresul oxidativ si imbunatatesc functia inimii.</li>
<li>Extract de fructe de piper negru (Piper nigrum L.) – creste absorbtia nutrientilor si promoveaza sanatatea cardiovasculara.</li>
<li>Vitamina C (acid ascorbic) – antioxidant esential care protejeaza vasele sanguine de deteriorarea oxidativa.</li>
<li>Niacina (vitamina B3) – sprijina mentinerea nivelurilor sanatoase de colesterol si circulatia sanguina.</li>
<li>Vitamina B6 (clorhidrat de piridoxina) – contribuie la reducerea nivelului de homocisteina, un factor de risc pentru bolile cardiace.</li>
<li>Zinc – sustine functia imunitara si contribuie la mentinerea sanatatii vaselor de sange.</li>
</ul>
<p>Administrarea este foarte simplă: 2 capsule pe zi(2 ori pe zi a cate 1 capsula).</p>

<p>De obicei, cursul costă 240 lei, dar acum este în promoție — <b>doar 59 lei pentru 10 zile de utilizare</b>.</p>

<p>Domnule/ Doamna, haideți să adăugăm și Hyperon la comandă, ca sa rezolvati si problemele legate de tensiune si probleme cardiace. Articulațiile să se refacă mai repede și rezultatul să se mențină mai mult timp. (E bine așa.)</p>

<p>— Excelent, Domnule/Doamnă , atunci vă confirm cursul principal Artrolux și cursul (cursurile) suplimentar(e) din promoție. Valoarea totală a comenzii dvs., ținând cont de toate reducerile, <b>va fi de XX lei</b>.</p>

    
    `,
  },
  {
    label: "OzemLite  ",
    html: `
    <p>Domnule/ Doamna, ați făcut foarte bine că ați ales cursul pentru susținerea mobilității articulațiilor — el va ajuta la reducerea inflamației și la redarea confortului în mișcare.</p>

<p>Pentru ca dvs ati spus ca aveti chilograme in plus . sa stiti ca  chiar și o greutate excesivă mică crește presiunea asupra articulațiilor, în special asupra genunchilor și coloanei vertebrale. Acest lucru accelerează uzura cartilajului, provoacă inflamații și durere. Dacă nu se reduce presiunea, riscul de invaliditate și operații crește. Este important să mențineți o greutate sănătoasă și să aveți grijă de starea articulațiilor în mod complex, nu-i așa, domnule/doamnă ? <span class="txt-green">(Așteptăm răspunsul)</span></p>

<p>Deaceea va recomand  <b>OzemLite</b>, pentru a scapa si de chilogramele in plus.</p>

<p>și, de asemenea:</p>
<ul>
<li>eliminați surplusul de apă și să curățați corpul de toxine;</li>
<li>reglați și accelerați metabolismul;</li>
<li>eliminați celulita și grăsimea din zonele cu probleme, (astfel încât la sfârșitul tratamentului să aveți o pierdere în greutate uniformă);</li>
<li>reduceți nivelul de colesterol din sânge, să îmbunătățiți digestia și să creșteți activitatea sucului gastric;</li>
<li>eliminați poftele și senzația excesivă de foame;</li>
<li>blocați absorbția glucozei și a carbohidraților în intestin, reducând astfel acumularea de grăsime;</li>
<li>reglați funcția tiroidiană și echilibrul hormonal</li>
</ul>


<p>Administrarea este foarte simplă: 2 capsule pe zi(2 ori pe zi a cate 1 capsula).</p>

<p>De obicei, cursul costă 240 lei, dar acum este în promoție —<b> doar 59 lei pentru 10 zile de utilizare</b>.</p>

<p>Domnule/ Doamna, haideți să adăugăm și Ozem Lite la comandă, ca sa rezolvati si problemele legate de chilogramele in plus. Articulațiile să se refacă mai repede și rezultatul să se mențină mai mult timp. (E bine așa.)</p>

<p>— Excelent, Domnule/Doamnă , atunci vă confirm cursul principal Artrolux și cursul (cursurile) suplimentar(e) din promoție. Valoarea totală a comenzii dvs., ținând cont de toate reducerile, <b>va fi de XX lei</b>.</p>

    
    `,
  },
],

// objectionsButtons: [ будет //

objectionsButtons: [
    {
      label: "E scump",
      html: `
        <p><b>operator:</b> Vă înțeleg perfect, domnule — la prima vedere pare o sumă. Dar vă rog să-mi spuneți sincer: dvs până acum ați încercat produse mai ieftine sau pur și simplu vi se pare că prețul este ridicat față de așteptări? mai ieftine: Exact aici este problema. Produsele ieftine doar maschează simptomele — mai scad tensiunea pe moment sau dau o ușoară senzație de bine. Iar eu sunt sigură că, dacă tratamentele încercate își făceau efectul, astăzi noi nu am fi discutat, nu sunteți de acord? HYPERON acționează asupra circulației și echilibrării tensiunii, tratează cauza, nu doar efectul. De aceea funcționează.</p>
      `,
    },
    {
      label: "prețul e prea mare",
      html: `
        <p><b>operator:</b> Prețul reflectă eficiența. Nu vorbim de un produs, ci de un tratament care acționează asupra circulației și ajută la stabilizarea tensiunii. Alternativa este să cheltuiți mai puțin acum și să continuați cu aceleași fluctuații și stări neplăcute, dar prin asta ați trecut deja, nu? Totuși, o testare scurtă nu rezolvă o problemă serioasă, ci doar arată direcția. La circulație și tensiune NU contează prețul unei cutii, ci doza zilnică de substanțe active.</p>
      `,
    },
    {
      label: "Costul zilnic",
      html: `
        <p><b>operator:</b> Haideți să calculăm altfel: costul unei zile de sănătate. Acest tratament este pentru 3 luni. 775 lei împărțiți la aproximativ 100 de zile înseamnă în jur de 8 lei pe zi — mai puțin decât o ceașcă de cafea. Nu plătiți un produs, ci șansa reală de a vă recâștiga calitatea vieții și siguranța de zi cu zi.</p> 
      `,
    },
    {
      label: "Nu am bani",
      html: `
        <p><b>operator:</b> Vă înțeleg perfect, domnule. În prezent, situația financiară este îngrijorătoare (dacă e pensionar adăugăm: mai ales pentru pensionari). Dar spuneți-mi sincer: problemele cu tensiunea așteaptă un moment mai bun? AGRAVARE: Stimate domn, dacă aceste probleme de circulație și tensiune nu sunt tratate acum, ele se agravează rapid. Circulația deficitară și valorile instabile ale tensiunii pot deveni cronice, iar odată cu ele apar oboseala constantă, lipsa de energie, amețelile și scăderea capacității de concentrare. Mulți oameni ajung să nu mai poată reveni la o stare normală de echilibru și confort zilnic. De aceea este important să acționați acum.</p> 
      `,
    },

    {
      label: "Am pensie mică",
      html: `
        <p><b>operator:</b> Vă înțeleg perfect, domnule, pensiile sunt limitate și este dificil să vă descurcați, dar sănătatea inimii și circulația dvs. nu sunt ceva cu care să faceți compromisuri. Dacă doriți rezultate reale și protecție pe termen lung, doar cursul complet de Hyperon vă oferă eficiență maximă. Orice altă variantă e doar un compromis — efectele vor fi reduse și riscul problemelor viitoare rămâne.</p> 
      `,
    },

    {
      label: "Totuși nu-mi permit/nu am bani/am văzut o cutie la 159 lei",
      html: `
        <p><b>operator:</b> Desigur, vă înțeleg, doar că ați văzut - o cutie este pentru 10 zile la 159 lei. Dacă dvs ați fi luat 9 cutii la 159 lei - totalul trebuia să fie de 1431 lei, astăzi cu reducerea pentru pensionari - le luați la 849 lei, nu uitați de (numim cross-ul) pe care o primiți cadou. De aia continui să repet, este important pentru dvs să faceți astăzi comanda. În primul rând fiindcă este un ajutor financiar incredibil de bun pentru dvs, în al doilea rând fiindcă nu veți sta să așteptați până problema se complică.</p> 
      `,
    },

    {
      label: "Impactul emoțional", // тут тоже нада буде виділити на червоний ///
      html: `
        <p><b>operator:</b> Impactul emoțional: Uitați-vă, eu nu încerc să vă oblig, nu vreau să insist, simplu vă explic: lucrez zilnic cu oameni care au spus același lucru la început, după o perioadă, când problema s-a agravat - au revenit cu o nouă solicitare și un singur regret - că nu au început mai devreme. Știți de ce? Fiindcă irosind prima reducere, vă întoarceți la prețul inițial de 3 ori mai mare și o problemă mult mai gravă! Presupun că toată viața ați lucrat pentru familie/soție/copii, pentru casă, mașină și alte chestii care la moment vi se păreau importante. Nu credeți că acum este timpul să vă gândiți la starea dvs? Fiindcă dacă nu vă gândiți dvs, cine o va face?</p> 
      `,
    },

    {
      label: "Totuși e foarte scump. Tratament de 1 luna",
      html: `
        <p><b>operator:</b>Domnule / Doamnă dragă, vă înțeleg foarte bine, situația financiară nu este ușoară pentru nimeni, și tocmai de aceea vreau să vă ajut sincer. Ați fost foarte plăcut(ă) în discuție și chiar mi-aș dori să puteți încerca produsul nostru și să obțineți rezultatul dorit, nu doar să vorbim despre el. De aceea, vreau să fac pentru dumneavoastră un gest personal. Am posibilitatea să folosesc cuponul meu personal de reducere, lucru pe care îl pot face doar pentru un singur client pe zi. Astăzi aleg să îl folosesc pentru dumneavoastră. În loc de prețul standard pentru 3 (4 ) cutii, care ar fi 954 lei (3*318), vă pot oferi acest pachet la doar 535 lei, plus un cadou (aici se menționează cadoul) sau 480 (dacă fără cadou). Este un curs complet de tratament pentru o lună întreagă, nu pentru câteva zile, astfel încât organismul să aibă timp real să reacționeze, iar rezultatele să poată apărea treptat și stabil. Mai mult decât atât, eu personal vă voi suna la 10 zile după ce primiți comanda, ca să vă întreb cum vă simțiți și dacă observați îmbunătățiri.</p> 
      `,
    },

    {
      label: "Totuși e foarte scump. Tratament de 1 luna",
      html: `
        <p><b>operator:</b>Domnule / Doamnă dragă, vă înțeleg foarte bine, situația financiară nu este ușoară pentru nimeni, și tocmai de aceea vreau să vă ajut sincer. Ați fost foarte plăcut(ă) în discuție și chiar mi-aș dori să puteți încerca produsul nostru și să obțineți rezultatul dorit, nu doar să vorbim despre el. De aceea, vreau să fac pentru dumneavoastră un gest personal. Am posibilitatea să folosesc cuponul meu personal de reducere, lucru pe care îl pot face doar pentru un singur client pe zi. Astăzi aleg să îl folosesc pentru dumneavoastră. În loc de prețul standard pentru 3 (4 ) cutii, care ar fi 954 lei (3*318), vă pot oferi acest pachet la doar 535 lei, plus un cadou (aici se menționează cadoul) sau 480 (dacă fără cadou). Este un curs complet de tratament pentru o lună întreagă, nu pentru câteva zile, astfel încât organismul să aibă timp real să reacționeze, iar rezultatele să poată apărea treptat și stabil. Mai mult decât atât, eu personal vă voi suna la 10 zile după ce primiți comanda, ca să vă întreb cum vă simțiți și dacă observați îmbunătățiri. Practic, veți fi sub atenția mea directă. Singura mea rugăminte este ca, după ce folosiți produsul, să lăsați o recenzie pe site-ul nostru oficial. Ne ajută foarte mult, iar oamenii au încredere când văd experiențe reale. Pentru mine este important, deoarece rezultatele clienților sunt cele care contează cel mai mult, iar satisfacția dumneavoastră este și responsabilitatea mea (drept spunem beneficiile tratamentului de 1 luna).</p> 
      `,
    },

    {
      label: "Al treilea curs — inițial",
      html: `
        <p><b>operator:</b>1 luna Această opțiune este potrivită pentru cei care doresc să înceapă cu pași mici. În decursul unei luni: tensiunea se stabilizează parțial, durerile de cap se reduc, somnul se îmbunătățește și senzația de greutate dispare. Dar rezultatul este temporar — pentru consolidare, va fi necesară continuarea cursului. Cursul de 1 luna: 30 capsule de Cardiotonus + (spunem ce cadou) și un bonus pentru dumneavoastră: 10 capsule cadou — sprijin suplimentar pentru întregul curs! Adică veți primi 40 de capsule în loc de 30 la prețul de 488 lei, cu livrare gratuită. Deja în această perioadă, majoritatea pacienților simt că pot controla mai bine tensiunea, iar durerile de cap încep să dispară. — În prima lună o să fiți mereu sprijinit și putem discuta orice întrebare împreună. Dacă rezultatul vă place, continuăm cursul cu condiții mai avantajoase decât pentru pacienții noi.</p> 
      <p>Imediat de zis!!! Și mai avem un bonus suplimentar pentru dvs, program de loialitate: imediat după plata cursului, returnăm 100% din sumă în contul dvs. de bonus, pe care îi puteți folosi pentru a plăti comenzi pentru orice bunuri sau servicii din compania noastră. Acest lucru înseamnă că, în viitor, veți putea beneficia de orice curs cu reducere de 30–40% din acești bani (bonusurile se adună până la suma totală de 100%).</p>
        `,
    },

    {
      label: "Impactul emoțional:",
      html: `
        <p><b>operator:</b>Vorbim anume de sănătate, aceasta nu doare până nu o pierdem complet. Și e păcat să trăiți anii frumoși care urmează cu aceste probleme, când noi avem șansa acum să le rezolvăm la timp, natural și fără riscuri. Vă reamintesc, nu încerc să vă oblig, dar vă rog să vă gândiți un pic logic la ce s-ar putea întâmpla în viitor, dacă problema se agravează. Iar acum imaginați-vă toate beneficiile și plăcerile care vă așteaptă după tratament! Haideți să începem cu un tratament ca să vă bucurați cât mai repede de rezultate.</p> 
      `,
    },

   
  ],



products: [
  {
    name: "Artrolux Pro",
    image: "assets/products/ro/product1.jpg", // або https://...
    origin: "Producatorul-Letonia",
    format: "30 capsul",
    usage: "3 ori / zi",
    description: "ARTROLUX PRO CAPS N30 este un supliment alimentar conceput pentru a susține sănătatea articulațiilor și a cartilajului. Combinația de glucozamină, condroitină, boswellia, ghimbir, MSM și curcumin ajută la întărirea structurii articulare, reducerea inflamațiilor și îmbunătățirea flexibilității. Vitamina C și manganul susțin sinteza colagenului și elasticitatea țesuturilor. Recomandat persoanelor active fizic sau cu rigiditate articulară legată de vârstă.",
    ingredients: [
      { name: "Glucozamină sulfat (Glucosamine sulphate 2KCl)", effect: "ajută la refacerea și protejarea cartilajului, îmbunătățește mobilitatea articulațiilor și reduce rigiditatea." },
      { name: "Condroitină sulfat (Chondroitin sulfate)", effect: "menține elasticitatea cartilajului, reduce inflamațiile și sprijină lubrifierea articulațiilor." },
      { name: "Extract de Boswellia serrata", effect: "component natural antiinflamator, ajută la reducerea umflăturilor și disconfortului articular.   " },
      { name: "Extract de ghimbir (Ginger extract)", effect: "îmbunătățește circulația în țesuturile articulare, oferă un efect de încălzire și relaxare." },
      { name: "MSM (Metil sulfonil metan)", effect: "sursă de sulf organic implicată în sinteza colagenului, susținând elasticitatea țesutului conjunctiv." },
      { name: "Curcumin C3 Complex", effect: "antioxidant care protejează articulațiile de stresul oxidativ și sprijină refacerea lor." },
      { name: "Vitamina C (Ascorbic acid)", effect: "contribuie la formarea normală a colagenului, necesar pentru oase și cartilaje sănătoase." },
      { name: "Sulfat de mangan (Manganese sulfate)", effect: "sprijină formarea normală a țesutului conjunctiv și întărește articulațiile." },
    ],
  },

  {
    name: "Cleorix",
    image: "assets/products/ro/product2.jpg",
    origin: "Producatorul-Letonia",
    format: "20 capsul",
    usage: "2 ori / zi",
    description: "Capsulele antiparazitare sunt o soluție inovatoare pentru combaterea paraziților și susținerea procesului natural de detoxifiere a organismului. Cu ajutorul lor, se obține nu numai eliminarea eficientă a paraziților, ci și o îmbunătățire semnificativă a stării generale de sănătate datorită unui complex unic de ingrediente active. Aceste capsule ajută la întărirea sistemului imunitar, stimulează îmbunătățirea digestiei și activează eliminarea toxinelor din organism. Utilizarea regulată duce la o stare generală de bine și la creșterea vitalității, ceea ce le face un instrument indispensabil pentru menținerea sănătății și a bunăstării.",
    ingredients: [
      { name: "Vitamina C (acid ascorbic) - 200 mg (222% din valoarea zilnică)", effect: "Un antioxidant puternic care susține sistemul imunitar.Ajută la eliminarea toxinelor și la îmbunătățirea stării generale a organismului." },
      { name: "Badian (Illicium verum Hook f.) - 80 mg", effect: "Posedă proprietăți antiinflamatorii și antimicrobiene.Susține sistemul digestiv și ajută la eliminarea paraziților." },
      { name: "Curcumină (Curcuma Longa) - 60 mg", effect: "Principalul ingredient activ din turmeric, are proprietăți antiinflamatorii și antioxidante puternice.Susține detoxifierea ficatului și procesul general de curățare a organismului." },
      { name: "Extract de usturoi deshidratat (Amaryllidaceae Allium sativum L.) - 60 mg", effect: "Are puternice proprietăți antiparazitare și antibacteriene.Ajută la întărirea sistemului imunitar și la îmbunătățirea digestiei." },
      { name: "Extract din rădăcină de păpădie (Taraxacum officinale) - 60 mg", effect: "Susține sănătatea ficatului și a rinichilor, ajutând la eliminarea toxinelor.Are proprietăți diuretice și antiinflamatoare." },
      { name: "Extract uscat de mentă (Lamiaceae Mentha x piperita L.) - 50 mg", effect: "Posedă proprietăți calmante și antiinflamatoare.Ajută la îmbunătățirea digestiei și la reducerea disconfortului stomacal." },
      { name: "Extract din rădăcină de lemn dulce - 40 mg", effect: "Are proprietăți antiinflamatorii și antibacteriene.Susține sănătatea gastrointestinală și sistemul imunitar." },
      { name: "Extract din semințe de in (Linum usitatissimum L.) - 40 mg", effect: "Bogat în fibre și acizi grași omega-3, susține sănătatea digestivă.Ajută la eliminarea toxinelor și paraziților din organism." },
      { name: "Extract uscat de pelin (Compositae Artemisia absinthium L.) - 20 mg", effect: "Cunoscut pentru proprietățile sale antiparazitare și antifungice.Ajută la eliminarea paraziților și la îmbunătățirea digestiei." },
    ],
  },
  {
    name: "Hyperon",
    image: "assets/products/ro/product3.jpg",
    origin: "Producatorul-Letonia",
    format: "20 capsul",
    usage: "2 ori / zi",
    description: "HYPERON active este un supliment alimentar conceput pentru a susține funcția cardiovasculară normală, sănătatea inimii și tensiunea arterială. Conține 20 de capsule care conțin ingrediente active precum L-taurină, acid ascorbic, oxid de magneziu, bicarbonat de potasiu, pulbere de spirulină, extracte de păducel, sunătoare și frunze de măslin, rutin, coenzima Q10 și extract de piper negru. Aceste ingrediente acționează în sinergie pentru a ajuta la îmbunătățirea circulației, normalizarea tensiunii arteriale și susținerea sănătății mușchilor inimii. Se recomandă utilizarea HYPERON active ca parte a unui stil de viață sănătos pentru rezultate optime.",
    ingredients: [
      { name: "L-taurină (L-taurine)", effect: "taurina este un aminoacid care susține sănătatea cardiovasculară. Aceasta ajută la reglarea nivelului de electroliți, îmbunătățește funcția cardiacă și circulația și are efecte antioxidante." },
      { name: "Acid ascorbic", effect: "vitamina C este un antioxidant puternic care protejează celulele de stresul oxidativ. De asemenea, susține sănătatea vasculară și promovează sinteza colagenului, importantă pentru artere și capilare sănătoase." },
      { name: "Oxid de magneziu", effect: "Magneziul este important pentru menținerea ritmului cardiac normal și a tensiunii arteriale. De asemenea, este implicat în metabolismul și producerea de energie în celule." },
      { name: "Bicarbonat de potasiu (Potassium bicarbonate)", effect: "Potasiul ajută la reglarea tensiunii arteriale prin menținerea echilibrului lichidelor și electroliților din organism. De asemenea, este esențial pentru funcționarea normală a mușchiului cardiac." },
      { name: "Spirulină pulbere", effect: "Spirulina este o sursă bogată de proteine, vitamine și minerale. Aceasta susține sănătatea inimii datorită proprietăților sale antioxidante și antiinflamatorii." },
      { name: "Extract de păducel [3% flavonoide]", effect: "Extractul de păducel susține sănătatea cardiovasculară, îmbunătățește circulația și ajută la normalizarea tensiunii arteriale datorită conținutului său de flavonoide." },
      { name: "Extract de sunătoare", effect: "sunătoarea este utilizată pentru a calma sistemul nervos și a reduce stresul, ceea ce poate avea un efect pozitiv asupra tensiunii arteriale și a ritmului cardiac." },
      { name: "Extract din frunze de măslin (Olea leaf extract)", effect: "extractul din frunze de măslin are proprietăți antioxidante și ajută la scăderea tensiunii arteriale. De asemenea, îmbunătățește sănătatea cardiovasculară generală." },
      { name: "Rutin (Rutin pulbere)", effect: "Rutinul este un bioflavonoid care întărește capilarele și îmbunătățește circulația sângelui. De asemenea, are proprietăți antioxidante și susține sănătatea vasculară." },
      { name: "Coenzima Q10", effect: "Coenzima Q10 este implicată în producerea de energie în celule și are proprietăți antioxidante. Susține sănătatea inimii și poate ajuta la îmbunătățirea funcției vaselor de sânge." },
      { name: "Extract de piper negru [95% piperină]", effect: "piperina îmbunătățește biodisponibilitatea altor ingrediente și are proprietăți antioxidante și antiinflamatorii, care pot susține sănătatea cardiovasculară generală." },
    ],
  },

  {
    name: "OzemLite",
    image: "assets/products/ro/product5.jpg",
    origin: "Producatorul-Letonia",
    format: "20 capsul",
    usage: "2 ori / zi",
    description: "OzemLite este un supliment alimentar pentru controlul greutății și susținerea metabolismului. Conține extract de ceai verde, Garcinia Cambogia, guarana, carnitină și fibre solubile, care acționează împreună pentru a reduce pofta de mâncare, a accelera arderea grăsimilor și a oferi senzație de sațietate. OzemLite ajută la transformarea grăsimilor în energie și susține menținerea rezultatelor pe termen lung, ca parte a unui stil de viață echilibrat.",
    ingredients: [
      { name: "Extract de ceai verde", effect: "Ajută la accelerarea metabolismului și la arderea grăsimilor. Este bogat în antioxidanți care susțin detoxifierea organismului, reduc retenția de lichide și contribuie la transformarea grăsimilor în energie. De asemenea, sprijină controlul apetitului." },
      { name: "Extract de Garcinia Cambogia", effect: "Conține acid hidroxicitric (HCA), care reduce pofta de mâncare și blochează transformarea excesului de carbohidrați în grăsimi. Ajută la controlul apetitului emoțional și susține scăderea în greutate într-un mod natural." },
      { name: "Guarana", effect: "Este o sursă naturală de energie, care stimulează arderea caloriilor și crește nivelul de activitate fizică. Reduce oboseala, îmbunătățește concentrarea și ajută organismul să consume mai eficient rezervele de grăsime." },
      { name: "Carnitină", effect: "Joacă un rol esențial în transportul grăsimilor către celule, unde acestea sunt transformate în energie. Susține scăderea țesutului adipos, crește rezistența fizică și ajută la menținerea masei musculare în timpul procesului de slăbire." },
      { name: "Fibre alimentare solubile", effect: "Creează senzația de sațietate, reduc pofta de mâncare și ajută la controlul porțiilor alimentare. Îmbunătățesc digestia, stabilizează nivelul zahărului din sânge și contribuie la eliminarea toxinelor din organism." },
      
    ],
  },

  {
    name: "Arthrolon",
    image: "assets/products/ro/product6.jpg",
    origin: "Producatorul-Letonia",
    format: "30 mg",
    usage: "Se aplică de 2 ori pe zi.",
    ingredients: [
      { name: "Gaultheria fragrantissima (3 mg)", effect: "Are un efect antiinflamator și analgezic puternic, contribuind la reducerea durerii articulare și musculare. Ajută la ameliorarea rigidității și la îmbunătățirea mobilității." },
      { name: "Mentha spicata (2,1 mg)", effect: "Oferă un efect răcoritor și calmant, reduce disconfortul local și tensiunea musculară, contribuind la relaxarea articulațiilor." },
      { name: "Pinus roxburghii (1,5 mg)", effect: "Susține circulația sanguină locală, ajută la reducerea inflamației și accelerează procesele naturale de regenerare a țesuturilor." },
      { name: "Cinnamomum camphora (0,9 mg)", effect: "Are efect de încălzire și stimulare a circulației, reduce durerea și îmbunătățește flexibilitatea articulațiilor." },
      { name: "Capsicum annuum (0,15 mg)", effect: "Stimulează circulația și oferă un efect de încălzire intens, ajutând la diminuarea durerii și a rigidității articulare." },
      { name: "Zingiber officinale (0,05 mg)", effect: "Contribuie la reducerea inflamației, susține mobilitatea articulațiilor și ajută la calmarea durerii cronice." },
    
    ],
  },

],








  accordions: {
    needs: [
      
{
        q: `1. Comanda este pentru dumneavoastră sau pentru cineva din apropiați? <span class="txt-green">(Așteptăm răspunsul)</span>`,
      },

      {
        q: `2. Ce vârstă aveți? <span class="txt-green">(Facem COMPLIMENT)</span>. <span class="txt-blue">„Ce frumos! N-aș fi ghicit, păreți mult mai tânăr(ă)! Sunteți în floarea tinereții, mulți ani înainte! Vreau să vă spun că vârsta joacă un rol esențial în evaluarea riscurilor. După vârsta de 45 de ani, riscul de hipertensiune arterială, accident vascular sau probleme cardiace crește semnificativ, doamna mea/domnul meu.</span>`,
      },

      {
        q: `3. Acum să vorbim despre problema dumneavoastră. Vă rog să-mi spuneți care este tensiunea dumneavoastră? <span class="txt-green">(Așteptăm răspunsul) (notăm limitele superioare și inferioare ale tensiunii clientului)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă valorile sunt între 140 și 165</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă valoarea este mai mare de 170</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>da, este deja peste normă — vasele de sânge sunt supraîncărcate, alimentarea creierului și a inimii este perturbată.</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>am înțeles. O presiune mai mare de 170 este periculoasă. În orice moment poate apărea o criză.</p>
          </div>
        `,
      },

      {
        q: `4. Domnule/doamnă, ați suferit deja accidente vasculare cerebrale sau infarcturi, Doamne ferește?<span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă da</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă nu a fost</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>dacă ați avut deja un infarct sau un accident vascular cerebral, organismul a dat deja un semnal că resursele sunt la limită.</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>am înțeles, la un astfel de nivel de tensiune, este într-adevăr un mare noroc. Dar, din păcate, riscul nu a dispărut. Infarcturile și accidentele vasculare cerebrale apar brusc, fără semnale prealabile.</p>
          </div>
        `,
      },
{
        q: `5. Domnule/doamnă, vă rog să-mi spuneți: cât de des aveți dureri de cap, amețeli, zgomote în urechi, oboseală? Ați observat probleme cu vederea, de exemplu, vedere încețoșată, „musculițe” în fața ochilor sau ceață dimineața?<span class="txt-green">(Așteptăm răspunsul)  (notăm în formular ce îl deranjează pe client)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă da</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă nu există simptome</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>da, aceste simptome sunt un semnal că vasele de sânge sunt afectate. Hipertensiunea le distruge în mod imperceptibil, iar apoi apare complicații.</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>am înțeles, Hipertensiunea arterială decurge adesea fără simptome și afectează în mod imperceptibil vasele de sânge ale inimii.</p>
          </div>
        `,
      },

{
        q: `6. Ați avut episoade de creștere sau scădere bruscă a tensiunii arteriale?`,
        a: `
    <p><b>Notiță operator:</b>Variațiile bruște sunt extrem de periculoase — pot afecta creierul, inima și rinichii. Pot duce la pierderea cunoștinței, amețeli severe sau accident vascular.</p>
  `,
      },

{
        q: `7. Domnule/doamnă, spuneți-mi, vreunul dintre rudele dumneavoastră apropiate – părinți, bunici – a avut tensiune arterială crescută?<span class="txt-green">(Așteptăm răspunsul) (notăm cine suferă de această boală/fie „Da”/„Nu”)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă „Da”</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă răspunsul este „Nu”</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>acest lucru este foarte important. Dacă rudele au avut hipertensiune, riscul de a o dezvolta și de a avea complicații – infarct și accident vascular cerebral – este mai mare. De aceea, este important să se ia măsuri preventive: curățarea și întărirea vaselor de sânge, refacerea circulației sanguine!</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>chiar și fără predispoziție genetică, vârsta, stilul de viață și alimentația afectează vasele de sânge. Fără prevenire, riscul de infarct și accident vascular cerebral crește odată cu vârsta, de aceea este important să curățați și să întăriți vasele de sânge în mod regulat.</p>
          </div>
        `,
      },

{
        q: `8. Domnule/doamnă, spuneți-mi, ați observat simptome precum dureri în piept, dificultăți de respirație, bătăi rapide ale inimii?<span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
    <p><b>Notiță operator:</b>Am înțeles, astfel de simptome indică adesea tulburări de circulație sanguină în inimă — când vasele de sânge nu mai fac față, dar nu vă faceți griji, Hyperon este aici exact pentru a elimina aceste simptome.</p>
  `,
      },


      {
        q: `9. Domnule/doamnă, vi se întâmplă să vă treziți brusc în mijlocul nopții — cam la ora 3-4, ca și cum ar fi sunat ceasul, și apoi să nu mai puteți adormi?<span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
    <p><b>Notiță operator:</b>acesta este un semnal de alarmă: organismul suferă de stres din cauza circulației sanguine perturbate. Tocmai în acest moment vasele de sânge sunt supraîncărcate, iar somnul este întrerupt. Odată ce facem curățarea vaselor și mai relaxează, vă asigurați că și somnul se îmbunătățește.</p>
  `,
      },

     {
        q: `AGRAVARE: Domnule/Doamnă, atunci când inima nu este susținută, apar probleme foarte clare: tensiunea începe să urce sau să varieze brusc, pot apărea bătăi neregulate ale inimii, senzație de presiune în piept, oboseală accentuată chiar și la efort mic, amețeli sau lipsă de aer. Circulația se înrăutățește, iar inima este nevoită să lucreze constant în suprasarcină. În timp, aceste lucruri duc la complicații serioase, cum ar fi crize cardiace sau accidente vasculare. De aceea este important să acționăm acum, cât problema încă poate fi ținută sub control.`,
      },

      {
        q: `10. Domnule/doamnă, vă rog să-mi spuneți dacă aveți boli concomitente, de exemplu, diabet zaharat sau probleme cu rinichii? <span class="txt-green">(Așteptăm răspunsul)</span>`,
      },

{
        a: `
    <p class="groupSubtitle">Simptome și Prevenție</p>
  `,
      },

     {
        q: `11. Domnule/doamnă, vă rog să-mi spuneți: cât de des aveți dureri de cap, amețeli, zgomote în urechi, oboseală? Ați observat probleme cu vederea, de exemplu, vedere încețoșată, „musculițe” în fața ochilor sau ceață dimineața?<span class="txt-green">(Așteptăm răspunsul) (notăm în formular ce îl deranjează pe client)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă da</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă nu există simptome</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>da, aceste simptome sunt un semnal că vasele de sânge sunt afectate. Hipertensiunea le distruge în mod imperceptibil, iar apoi apar complicații.</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>am înțeles, Hipertensiunea arterială decurge adesea fără simptome și afectează în mod imperceptibil vasele de sânge ale inimii.</p>
          </div>
        `,
      },
{
        q: `12. Ați avut episoade de creștere sau scădere bruscă a tensiunii arteriale?`,
        a: `
    <p><b>Notiță operator:</b>Variațiile bruște sunt extrem de periculoase — pot afecta creierul, inima și rinichii. Pot duce la pierderea cunoștinței, amețeli severe sau accident vascular.</p>
  `,
      },
{
        q: `13. Domnule/doamnă, spuneți-mi, vreunul dintre rudele dumneavoastră apropiate – părinți, bunici – a avut tensiune arterială crescută?<span class="txt-green">(Așteptăm răspunsul) (notăm cine suferă de această boală/fie „Da”/„Nu”)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă „Da”</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă răspunsul este „Nu”</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>acest lucru este foarte important. Dacă rudele au avut hipertensiune, riscul de a o dezvolta și de a avea complicații – infarct și accident vascular cerebral – este mai mare. De aceea, este important să se ia măsuri preventive: curățarea și întărirea vaselor de sânge, refacerea circulației sanguine!</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>chiar și fără predispoziție genetică, vârsta, stilul de viață și alimentația afectează vasele de sânge. Fără prevenire, riscul de infarct și accident vascular cerebral crește odată cu vârsta, de aceea este important să curățați și să întăriți vasele de sânge în mod regulat.</p>
          </div>
        `,
      },

  {
        a: `
    <p class="groupSubtitle">Impactul asupra Inimii și Somnului</p>
  `,
      },

{
        q: `14. Domnule/doamnă, spuneți-mi, ați observat simptome precum dureri în piept, dificultăți de respirație, bătăi rapide ale inimii? <span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
    <p><b>Notiță operator:</b> Am înțeles, astfel de simptome indică adesea tulburări de circulație sanguină în inimă — când vasele de sânge nu mai fac față, dar nu vă faceți griji, Hyperon este aici exact pentru a elimina aceste simptome.</p>
  `,
      },
{
        q: `15. Domnule/doamnă, vi se întâmplă să vă treziți brusc în mijlocul nopții — cam la ora 3-4, ca și cum ar fi sunat ceasul, și apoi să nu mai puteți adormi? <span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
    <p><b>Notiță operator:</b> acesta este un semnal de alarmă: organismul suferă de stres din cauza circulației sanguine perturbate. Tocmai în acest moment vasele de sânge sunt supraîncărcate, iar somnul este întrerupt. Odată ce facem curățarea vaselor și mai relaxează, vă asigurați că și somnul se îmbunătățește.</p>
  `,
      },
{
        q: `AGRAVARE: Domnule/Doamnă, atunci când inima nu este susținută, apar probleme foarte clare: tensiunea începe să urce sau să varieze brusc, pot apărea bătăi neregulate ale inimii, senzație de presiune în piept, oboseală accentuată chiar și la efort mic, amețeli sau lipsă de aer. Circulația se înrăutățește, iar inima este nevoită să lucreze constant în suprasarcină. În timp, aceste lucruri duc la complicații serioase, cum ar fi crize cardiace sau accidente vasculare. De aceea este important să acționăm acum, cât problema încă poate fi ținută sub control.`,
      },

{
        q: `16. Domnule/doamnă, vă rog să-mi spuneți dacă aveți boli concomitente, de exemplu, diabet zaharat sau probleme cu rinichii? <span class="txt-green">(Așteptăm răspunsul)</span>`,
      },





     
     
      
     
    ],

    objections: [



    ],



  },
});

