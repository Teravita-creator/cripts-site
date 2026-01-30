registerScript("ro", "hot_1", {
  title: "Arthrolon+Arthrolux",

  stages: {
    greeting: `
      <p>Bună ziua, domnule/doamnă ……….­?</p>
      <p>Numele meu este Numele operatorului, sunt de la clinica Regina Maria”. Ați lăsat o cerere pentru produsul de refacere a mobilității articulațiilor <b>Arthrolon</b>, este corect?</p>
      <p><i>"DA"</i></p>
      <p>Pentru a verifica posibilitatea livrării, vă rugăm să ne spuneți în ce regiune locuiți și în ce oraș?</p>
      <p class="p-accent-green"><i>"Orașul este potrivit"</i></p>
      <p>Excelent, domnule/doamnă, livrarea în orașul dumneavoastră este posibilă.</p>
      <p>Haideți să procedăm astfel: vă voi pune câteva întrebări pentru a înțelege mai bine cum vă simțiți. Apoi vă voi explica cum funcționează Arthrolon și în ce fel vă va fi util acest produs. Apoi voi alege doza potrivită și, dacă sunteți de acord, vă voi ajuta cu formalitățile. Bine?</p>
    `,
    needs: `
      <p class="muted">Întrebări + ramificări sunt mai jos (în blocurile care se deschid).</p>
    `,
    presentation: `
    <p>Domnule/doamnă , haideți să vă spun acum de ce Arthrolon este într-adevăr o alegere fiabilă, bine? (Așteptăm acordul)</p>
    
    <p class="presentationTitle">1. Fiabilitate și încredere:</p>
    <p>Domnule/doamnă :</p>
    <p>— complexul are toate documentele oficiale, confirmate de Ministerul Sănătății din România, și lucrăm doar direct cu producătorul — aceasta este o garanție a calității</p>
 <p>— veți avea întotdeauna la dispoziție un manager personal și o linie telefonică de asistență, la care puteți suna și pune orice întrebare — este convenabil și sigur</p>
 <p>— documentele și numărul liniei de asistență vor fi incluse în colet</p>
 <p>— sunteți de acord că, atunci când aveți documente și asistență, vă simțiți mai liniștit? (Așteptăm acordul)</p>
 
 <p class="presentationTitle">2. Compoziție naturală și siguranță:</p>
  <p>—Arthrolon conține numai ingrediente naturale: ulei de eucalipt, extract de arnică, ulei de ardei iute și altele</p>
 <p>— o astfel de compoziție se întâlnește rar într-un singur produs, ceea ce îl face eficient și sigur, în special pentru refacerea mobilității articulațiilor</p>
 <p>— Este important pentru dumneavoastră ca produsul să fie natural și sigur? <span class="txt-green">(Așteptăm răspunsul afirmativ)</span></p>
 
 <p class="presentationTitle">3. Abordare complexă: ideea și unicitatea Arthrolon</p>
 <p>Domnule/doamnă , este dovedit științific: „unguentul magic” care va scăpa odată pentru totdeauna de durerile articulare nu există — așteptarea unui miracol doar vă răpește timpul și duce la dezamăgire.</p>
 <p>— tocmai de aceea am creat Arthrolon — nu doar un remediu, ci un complex complet pentru refacerea cartilajelor, eliminarea inflamației și întărirea articulațiilor. Noi tratăm cauza durerilor articulare, nu doar mascam simptomele.</p>
 <p>— Sunteți de acord că este mai important să rezolvați problema din interior, decât să eliminați doar simptomele? (Așteptăm acordul)</p>
 
 <p class="presentationTitle">4. Etape de acțiune:</p>

  <p>Domnule/doamnă , complexul nostru Arthrolon acționează în etape pe o perioadă de 3 luni. Fiecare etapă durează exact o lună, iar fiecare dintre ele este extrem de importantă pentru obținerea unui rezultat durabil, care va ajuta la refacerea sănătății articulațiilor și la reducerea durerii.</p>
 <p>— Vă voi explica pe scurt ce se întâmplă în fiecare etapă, deoarece tocmai această succesiune de schimbări în organismul dumneavoastră permite obținerea celui mai bun efect din partea produsului nostru, bine? (Așteptăm acordul sau confirmarea interesului)</p>
 
 <p class="presentationTitle"><span class="txt-red">Prima lună (etapa) — declanșarea proceselor și primele îmbunătățiri:</span></p>
 <ul>
  <li>Articulațiile dumneavoastră încep să primească mai multă hrană datorită îmbunătățirii circulației sanguine.</li>
  <li>Inflamațiile și umflăturile se reduc, ceea ce ajută la diminuarea durerilor.</li>
  <li>Cartilajele încep să se refacă, îmbunătățind elasticitatea și flexibilitatea articulațiilor.</li>
  <li>În doar 2 săptămâni, puteți observa primele îmbunătățiri: mai puțină durere, mai multă energie pentru activități active.</li>
</ul>
<p>Domnule/doamnă , ați înțeles totul după prima lună? Îmbunătățirea circulației sanguine și reducerea inflamației sunt deja un început excelent, nu-i așa? (Așteptăm acordul, apoi trecem la a doua etapă)</p>

    <p class="presentationTitle"><span class="txt-red">A doua lună (etapa) — consolidarea și menținerea rezultatului:</span></p>
    <ul>
  <li>Articulațiile dumneavoastră devin mai mobile, inflamația se reduce semnificativ.</li>
  <li>Organismul dumneavoastră începe să refacă cartilajele mai eficient, întărind țesuturile și îmbunătățind mobilitatea.</li>
  <li>Starea generală de sănătate se îmbunătățește: somnul se normalizează, oboseala dispare, capacitatea de muncă crește.</li>
  <li>Articulațiile devin mai protejate, ceea ce previne posibile agravări și reapariția durerilor.</li>
</ul>
<p> Domnule/doamnă , este totul clar după a doua lună? Cred că sunteți de acord că aceste schimbări sunt importante în atingerea obiectivului, nu-i așa?
(Așteptăm acordul, apoi trecem la a treia etapă)</p>

<p class="presentationTitle"><span class="txt-red">A treia lună (etapa) — protecție pe termen lung și încredere:</span></p>
<ul>
  <li>Articulațiile dumneavoastră se refac și devin mai mobile, cartilajele se întăresc, durerea și inflamațiile nu vă vor mai deranja.</li>
  <li>Organismul dumneavoastră învață să mențină articulațiile sănătoase, prevenind reapariția leziunilor.</li>
  <li>Efectul se menține până la șase luni și mai mult, în funcție de starea organismului, iar dumneavoastră continuați să simțiți îmbunătățiri.</li>
  <li>Veți avea încredere în viitor, știind că durerile și limitările de mobilitate sunt semnificativ reduse.</li>
</ul>
<p>Domnule/doamnă , tocmai această abordare complexă permite obținerea unui rezultat maxim în refacerea sănătății articulațiilor și controlul mobilității. Ați dori să obțineți un astfel de rezultat, nu-i așa? (Așteptăm acordul)</p>
<p>Totuși, pentru grupa dvs. de vârstă (specificăm vârsta clientului) și situația dvs., vă pot oferi două tratamente pentru a obține rezultatul dorit, si anume tratament intern si extern.ca sa aveti rezultat mai rabid va recomanda sa folositi capsulele de uz intern in combinatie cu cerma de uz extern, si rezultataul va fi mult mai rapid si mai eficient.În plus, astăzi avem niște promoții excelente. Oferim produse gratuite la achiziție.</p>
<p>Totuși, pentru grupa dvs. de vârstă (specificăm vârsta clientului) și situația dvs., vă pot oferi două tratamente pentru a obține rezultatul dorit, si anume tratament intern si extern.ca sa aveti rezultat mai rabid va recomanda sa folositi capsulele de uz intern in combinatie cu cerma de uz extern Arthrolon+Artrolux, si rezultataul va fi mult mai rapid si mai eficient.În plus, astăzi avem niște promoții excelente. Oferim produse gratuite la achiziție.</p>
`,

    courses: `
<p>Atunci vă voi povesti mai detaliat despre schema de administrare, cursuri și costuri, bine? (Așteptăm acordul)</p>
<p><b>Comentariu expert:</b> utilizarea Arthroloneste foarte simplă: pulverizați o cantitate mică pe zonele cu probleme și masați cu mișcări de masaj de 2 ori pe zi până la absorbția completă. Nu vă anulăm medicamentele pe care le luați deja — produsul este suplimentar, pentru a întări efectul și a reface organismul.</p>
<p>Așadar, domnule/doamnă , pentru a vă ajuta, ținând cont de vârsta  și starea dumneavoastră, am selectat pentru dumneavoastră 3 cure din care puteți alege:</p>
<p>1. Primul curs — cel mai eficient.</p>
 <p>Acest curs declanșează procese profunde de refacere a țesutului cartilaginos și a lichidului articular. Inflamația și durerile se reduc semnificativ, iar mobilitatea articulațiilor revine treptat. Rezultatul se menține pe termen lung — articulațiile rămân sănătoase și mobile timp de până la 5 ani.
 (Obiectivul principal este motivarea clientului să aleagă acest curs; în cazul obiecțiilor, este posibilă ajustarea prețului.)</p>
<p>2. Al doilea curs — de bază.</p>
<p> Potrivit pentru cei care doresc să înceapă procesul de recuperare într-un mod blând, fără suprasolicitare. Pe parcursul utilizării se reduc rigiditatea și umflăturile, articulațiile devin mai flexibile, iar circulația sanguină și nutriția cartilajelor se îmbunătățesc.</p>
<p>3. Al treilea curs — inițial.</p>
<p>O opțiune bună pentru a face cunoștință cu produsul și pentru a obține primele rezultate vizibile. Durerea se diminuează, apare ușurința în mișcare, iar scrâșnetul din articulații se reduce. Efectul este vizibil, însă necesită continuare pentru consolidare.</p>


      <p><b>oferi</b></p>
      <div id="pricingBlock"></div>

      <p>Diferența de preț este mică, iar rezultatul este enorm. Vă recomand cursul eficient: este mai avantajos și oferă un rezultat complet.</p>
    <p>De asemenea:</p>
    <ol>
    <li>veți primi întregul curs pentru <b>.... lei</b> în loc de 1100 lei. Prețul este de două ori mai mic decât cel obișnuit.</li>
<li>Și încă un bonus plăcut — avem un program de loialitate: imediat după plata cursului, vă returnăm 100% din sumă în contul bonus, pe care o puteți utiliza pentru a plăti comenzi pentru orice produse sau servicii ale companiei noastre</li>
    <li>Datorită programului de loialitate, cursul devine practic gratuit pentru dvs.!</li>
    </ol>
    <p>Domnule/doamnă , spuneți-ne ce opțiune alegeți: pentru 3, 2 sau 1 lună?</p>
    
      `,

    cross: `
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
<p>— Excelent, Domnule/Doamnă , atunci vă confirm cursul principal Arthrolon și cursul (cursurile) suplimentar(e) din promoție. Valoarea totală a comenzii dvs., ținând cont de toate reducerile, <b>va fi de XX lei</b>.</p>
 `,
    survey: `
    <p>Domnule/doamnă , să completăm imediat livrarea, pentru a face acest lucru:</p>
    <p>1. Vă rog să-mi spuneți numele și prenumele complet, pentru a putea înregistra corect comanda (notăm numele complet după cum îl pronunță clientul).</p>
    <p>Vă rog să-mi spuneți, veți fi dvs. destinatarul coletului? Sau altcineva va putea primi coletul, dacă dvs. nu veți putea? Sunt gata să notez numele și numărul de telefon. (Notăm în CRM în câmpul „Comentariu”.)</p>
    <p>2. Acum, vă rog să-mi dictați adresa de livrare (regiune, oraș, stradă, număr de casă/clădire, număr de bloc/intrare, număr de apartament, cod poștal) (notăm datele după cum le dictează clientul).</p>
    <p>3. În plus, vă rugăm să indicați un punct de reper pentru curier (intersecția străzilor, cel mai apropiat magazin, școală, farmacie sau cafenea, numele cartierului sau al complexului rezidențial, stația, caracteristicile casei, poarta) (notăm datele în câmpul „Comentariu” pentru curier).
(Dacă este locul de muncă al clientului, adăugați neapărat și numele companiei și funcția clientului) (notăm datele în câmpul de comentarii pentru curier)</p>
    `,
    closing: `
    <p>Domnule/doamnă , vă rugăm să verificați încă o dată toate datele dvs. pentru a evita erorile la livrare:</p>
    <ol>
    <li>numele și prenumele complet: [repetați numele complet, literă cu literă];</li>
    <li>dacă există un destinatar suplimentar: [repetați numărul de telefon] - totul este corect? (așteptăm confirmarea)</li>
    <li>adresa de livrare: [regiune, oraș, stradă, număr de casă/clădire, număr de bloc/intrare, număr de apartament, cod poștal];</li>
    <li>numele pe interfon [spunem numele pe interfon].</li>
    </ol>
    <p>Vă rugăm să confirmați că datele sunt corecte, pentru a putea garanta livrarea la timp a comenzii dvs. Domnule/doamnă , am notat totul corect? (Așteptăm confirmarea)</p>
    <p>Comanda se livreaza in decurs de o zi sau doua lucratoare de Luni-Vineri de la orele 08.00-18.00.Veți primi un SMS de la serviciul de livrare în dimineața livrării. Va exista un link pentru a vă urmări comanda. Plata catre curier numai cash la primire.</p>

    <p class="presentationTitle"><span class="txt-red">CONDIȚIILE OFERTEI:</span></p>
    <Din>Conform regulamentului nostru, încheiem un acord verbal, în baza căruia compania se obligă să vă furnizeze un produs original, de cea mai înaltă calitate. Eu, nume / prenume, îmi asum responsabilitatea ca tratamentul dumneavoastră să fie eficient. Din partea dumneavoastră, vă asumați responsabilitatea de a primi produsul și de a începe tratamentul. Vă rog să-mi spuneți dacă aceste condiții vă sunt acceptabile în acest moment.</p>
    <p>Vă voi monitoriza rezultatele, așa că vă rugăm să răspundeți la următorul apel.</p>
    <p>Aveti întrebări?</p>
    <p>O zi plăcută!</p>

    `,
    objections: `
  <p class="presentationTitle"></p>
  <div id="objectionsButtons"></div>`,
    products:  `
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
        <td>Доставка (Livrare)</td>
        <td>free</td>
        <td>free</td>
        <td>free</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Цена (Preț)</td>
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

objectionsButtons: [
    {
      label: "Vreau 1 pachet",
      html: `
        <p><b>operator:</b> Domnule/doamnă , vă înțeleg perfect. Și vreau să fiu sincer(ă) cu dumneavoastră — pentru că nu doriți doar să încercați, ci să simțiți cu adevărat ușurarea și să vă recăpătați mobilitatea articulațiilor, nu-i așa? (Acord condiționat)
</p> <p>Un pachet este mai degrabă pentru a vă familiariza cu produsul. Acesta vă va arăta că Hondrolife funcționează cu adevărat, va reduce parțial inflamația și va diminua durerea. Dar rezultatele tangibile, cum ar fi refacerea articulațiilor, eliminarea umflăturilor, redarea flexibilității și obținerea unui rezultat stabil, pot fi obținute cu un tratament de 2-3 luni. Totuși, ați apelat nu doar din curiozitate, ci pentru a obține rezultate. Dacă doriți să începeți cu ceva mai puțin și să vedeți efectul, puteți opta pentru un program lunar. Dar, în cazul dvs., vă recomand totuși un tratament de 2 sau 3 luni — diferența de preț este mică, iar rezultatul va fi pe termen lung.</p>
<p>Iată prețurile:</p>
<ul>
<li>1 lună (90 mililitri) — 340 lei</li>
<li>2 luni (180 mililitri) — 400 lei</li>
<li>3 luni (270 mililitri) — 550 lei</li>
</ul>
<p>Cu ce program începem — cu unul de o lună, două sau trei? (Fără pauză) După cum vedeți, diferența de preț este minimă, iar rezultatul — foarte semnificativ. <span class="txt-green">(Așteptăm răspunsul)</span></p>
      `,
    },
    {
      label: "Curs pentru 20 de zile",
      html: `
        <p><b>operator:</b> Domnule/doamnă , ne pasă de sănătatea dumneavoastră și de reputația produsului, de aceea vă propun să faceți o comandă minimă – pentru 20 de zile. Pentru că numai un curs de 20 de zile vă permite să simțiți primele schimbări pozitive.
Chiar și pentru cursul de probă există acum o reducere, costul său fiind de 240 de lei, inclusiv livrarea. Haideți să facem comanda și, în câteva zile, vă veți simți mai bine, de acord?</p>
      `,
    },
    {
      label: "Scump № 1",
      html: `
        <p><b>operator:</b> Domnule/doamnă , problema prețului este într-adevăr importantă, vă înțeleg.
Dar să privim lucrurile într-o perspectivă mai largă: durerile articulare, rigiditatea, scrâșnitul — acestea nu sunt doar un disconfort, ci o limitare a libertății în viața de zi cu zi.
Este dificil să vă mișcați, să dormiți, să vă plimbați normal sau să efectuați sarcini simple de zi cu zi. Arthrolon acționează din interior: ameliorează inflamația, hrănește țesutul cartilajului și declanșează procesele de refacere a articulațiilor.
Și cel mai important — rezultatul nu este temporar, ci se menține, deoarece tratăm cauza, nu simptomele.</p>
<p>Domnule/doamnă , 550 lei nu este o cheltuială, ci o investiție în sănătate și încredere în sine. În plus, astăzi beneficiați de o reducere de 50%.</p>
<p>Vă înregistrăm pentru un curs complet? <span class="txt-green">(Așteptăm răspunsul)</span></p>
      `,
    },
{
      label: "Scump № 2",
      html: `
      <p><b>operator:</b> Domnule/doamnă , vă înțeleg perfect: în acest moment este foarte important să economisiți, iar îngrijorarea dumneavoastră este absolut justificată. Dar problemele cu articulațiile nu înseamnă doar durere, ci și un risc real de mobilitate limitată, care poate afecta în mod semnificativ calitatea vieții. Sincer, nu-mi este ușor să vorbesc despre asta, dar, conform statisticilor, multe persoane cu dureri articulare ajung în cele din urmă să se confrunte cu invaliditatea, care ar putea fi prevenită dacă tratamentul articulațiilor ar începe într-un stadiu incipient.</p>
      <p>Din păcate, durerile articulare apar adesea în mod imperceptibil, iar persoana nu simte gravitatea problemei până când starea nu se agravează semnificativ. Recuperarea articulațiilor după leziuni grave este întotdeauna mult mai costisitoare, atât din punct de vedere financiar, cât și al sănătății.
</p>
<p>Vestea bună este că ați făcut deja primul pas, v-ați gândit la prevenire. Să nu amânăm: să începem cu un curs de Arthrolon  de 2 luni pentru 400 de lei. Acest lucru va da deja un efect vizibil.
Mai mult, conform programului de bonusuri, întreaga sumă va fi returnată în contul dvs. personal imediat după plată. Nu cheltuiți bani, ci pur și simplu îi investiți în îngrijirea dvs. și a sănătății dvs. Este cea mai avantajoasă opțiune.
Ce curs vom face, unul complet cu o reducere de 50% sau unul de 2 luni cu o reducere de 40%?</p>

        `,
    },
{
      label: "Îndoieli privind calitatea № 1",
      html: `
        <p><b>operator:</b> Domnule/doamnă , vă înțeleg – când vine vorba de sănătate, este absolut normal să aveți îndoieli cu privire la calitate.</p>
        <p>Colaborăm direct cu producătorul și suntem singurul său reprezentant oficial. Produsul vine în ambalajul original, cu instrucțiuni și, cel mai important, cu sprijinul nostru pe toată durata cursului. Dacă ceva nu este clar, ne puteți contacta oricând, suntem la dispoziția dumneavoastră.</p>
        <p>Haideți să vă înscriem la curs, pentru ca dumneavoastră să vă convingeți personal de calitate și să începeți recuperarea chiar acum, bine? <span class="txt-green">(Așteptăm răspunsul)</span></p>
      `,
    },
{
      label: "Nu am încredere în vânzările pe internet № 1",
      html: `
        <p><b>operator:</b> Domnule/doamnă , înțeleg neîncrederea dumneavoastră în cumpărăturile pe internet — în zilele noastre este destul de logic. Dar la noi totul este transparent: plătiți comanda doar la primire, când vă convingeți personal că totul este în ordine. Nu există plăți în avans, ca pe site-urile dubioase. Împreună cu produsul, veți primi instrucțiuni detaliate, iar dacă aveți întrebări, suntem întotdeauna la dispoziție pentru a vă ajuta și a vă oferi sfaturi.</p>
        <p>Haideți să confirmăm comanda acum, și veți primi totul în siguranță și cu asistență completă, bine?</p>
      `,
    },
{
      label: "Ce garanții de eficacitate există? № 1",
      html: `
        <p><b>operator:</b> Domnule/doamnă , întrebarea dumneavoastră este foarte clară – toată lumea vrea să fie sigură de rezultat.</p>
        <p>Recomandăm acest produs deoarece a trecut toate verificările necesare, iar producătorul garantează calitatea acestuia.</p>
        <p>Peste jumătate dintre clienții noștri observă îmbunătățiri semnificative după doar o lună de utilizare, iar aproape 90% spun că după 2-3 luni mobilitatea este complet restabilită, iar durerile sunt semnificativ reduse. Acest lucru permite obținerea unui rezultat pe termen lung, fără stres pentru organism. Să vă facem o comandă pentru 3 luni, bine?</p>
      `,
    },
{
      label: "Voi cere sfatul medicului № 1",
      html: `
        <p><b>operator:</b> Domnule/doamnă , înțeleg dorința dumneavoastră de a consulta medicul – este o abordare foarte responsabilă.</p>
        <p>Produsul nostru este declarat și aprobat pentru utilizare în cazul durerilor și inflamațiilor articulare, fiind adesea recomandat de medici după ce consultă toate documentele.</p>
        <p>Peste jumătate dintre clienții noștri observă îmbunătățiri semnificative după doar o lună de utilizare, iar aproape 90% spun că după 2-3 luni mobilitatea este complet restabilită, iar durerile sunt semnificativ reduse.</p>
        <p>Produsul este natural, nu provoacă efecte secundare și nu interacționează cu medicamentele, de aceea poate fi utilizat în paralel cu terapia de bază.</p>
        <p>Domnule/doamnă , haideți să completăm comanda, pentru ca dumneavoastră să o puteți arăta medicului și să fiți sigur de decizia dumneavoastră, bine?</p>
      `,
    },
{
      label: "Mă voi gândi",
      html: `
        <p><b>operator:</b> Domnule/doamnă , trebuie să abordați cu atenție alegerea oricărui produs. În același timp, produsul este disponibil în cantitate limitată. Ar fi neplăcut dacă v-ați răzgândi și nu ați mai putea lăsa cererea, sunteți de acord cu mine? (Așteptăm acordul)

Imaginați-vă: în curând veți scăpa de , de durere și de rigiditate, iar în afară de Hondrolife nu există alte soluții sigure pentru această problemă. Dacă ratați momentul, problema poate duce la invaliditate — iar acesta este un proces ireversibil, și nu doriți asta, nu-i așa? (Așteptăm acordul)</p>
        <p>De aceea, voi pune totuși întrebarea: domnule/doamnă , spuneți sincer, ce vă împiedică să comandațiHondrolife, mai ales având în vedere o astfel de reducere?</p>
      `,
    },
{
      label: "Nu am bani № 1",
      html: `
       
        <p><b>operator:</b> Domnule/doamnă , înțeleg că acum nu este ușor. Dar să privim lucrurile astfel: acum cheltuiți bani pe simptome, iar eu vă propun să investiți în rezolvarea problemei, să scăpați de durere și să vă recăpătați mobilitatea articulațiilor. Pe termen lung, acest lucru vă va economisi bani pe medicamente și vă va îmbunătăți calitatea vieții. Poate ar trebui să luați în considerare posibilitatea de a redistribui bugetul pentru a investi în sănătatea dumneavoastră acum, sunteți de acord? (Așteptăm acordul)</p>
      `,
    },
{
      label: "Am o pensie mică № 1",
      html: `
        <p><b>operator:</b> Domnule/doamnă , înțeleg perfect că banii nu sunt niciodată suficienți, mai ales când pensia este limitată și trebuie să economisiți literalmente din toate</p>
      <ul>
      <li>dar să fim sinceri: dacă sănătatea vă lasă, toate celelalte — cumpărăturile, planurile și chiar bucuriile simple — trec pe planul secund. Pentru că, dacă nu vă ocupați de prevenție, boala poate schimba brusc viața obișnuită sau chiar o poate întrerupe. Atunci niciun ban nu vă va mai ajuta</li>
      <li>adesea amânăm grija pentru noi înșine din cauza altor cheltuieli, dar fără sănătate nici banii, nici lucrurile nu aduc bucurie</li>
      <li>credeți că există ceva mai important decât starea dvs. de sănătate și liniștea sufletească? Poate că ar trebui să punem sănătatea pe primul loc și să începem să avem grijă de noi înșine chiar acum, nu-i așa? (Așteptăm acordul)
Cu atât mai mult cu cât acum beneficiați de o reducere de 50% și întreaga sumă vă este returnată în contul bonus — este o investiție în viitorul dumneavoastră! Să vă înscriem la un curs de 3 luni pentru 550 de lei?</li>
      </ul>
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


  
  // ✅ Accordions залишаються ТІЛЬКИ needs + objections


  accordions: {
    needs: [
      {
        q: `1. Domnule/doamnă, spuneți-mi: ați lăsat o cerere la recomandarea medicului sau v-au sfătuit cunoștințele să apelați la noi?<span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert (dacă l-ați găsit singur)</button>
          </div>

          <div class="ynPanel" data-panel="yes">
            <p>Am înțeles. Ne bucurăm că ați apelat la noi. Adesea primim recomandări, așa că puteți avea încredere în noi.</p>
          </div>

          <div class="ynPanel" data-panel="no">
            <p>Domnule/doamnă, ne bucurăm că ne-ați găsit! Asta înseamnă că sunteți deja interesat(ă) de o soluție care vă poate ajuta cu adevărat. Lucrăm numai cu metode și produse verificate, care și-au dovedit eficiența.</p>
          </div>
        `,
      },

      {
        q: `2. Domnule/doamnă, pentru a calcula corect doza individuală, vă rugăm să ne spuneți vârsta dvs., înălțimea și greutatea? <span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
    <p><b>Notiță operator:</b> Scrieți sexul clientului (bărbat/femeie), problemele pe care le are și kg.</p>
  `,
      },
      {
        a: `
    <p class="groupSubtitle">Starea actuală:</p>
  `,
      },
      {
        q: `3. Acum să vorbim despre problema dumneavoastră. Spuneți-ne, care anume articulații vă deranjează? De cât timp durează acest lucru? <span class="txt-green">(Așteptăm răspunsul)  (notăm răspunsul clientului)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert</button>
          </div>

          <div class="ynPanel" data-panel="yes">
            <p>vă mulțumim că ne-ați împărtășit asta! Din simptomele dumneavoastră, ar putea fi vorba de modificări ale articulațiilor legate de vârstă, cu care se confruntă 65% dintre persoanele de vârsta dumneavoastră. Dacă durerea sau disconfortul persistă mult timp, acest lucru poate fi un semn că boala progresează și este important să luați măsuri chiar acum, nu-i așa? (Așteptăm acordul)</p>
          </div>

        `,
      },

      {
        q: `4. Domnule/doamnă , vă rugăm să ne spuneți: aveți deseori dureri sau rigiditate la nivelul articulațiilor? <span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă răspunsul este „Da”</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă răspunsul este „Nu”</button>
          </div>

          <div class="ynPanel" data-panel="yes">
            <p>V-am înțeles. Dacă durerile devin regulate, acesta este un semnal de alarmă. Fără tratament, durerea poate deveni permanentă, ceea ce va duce la dureri cronice, limitarea mobilității și chiar invaliditate. Este important să luați măsuri în această etapă pentru a evita aceste consecințe, sunteți de acord cu mine, da, domnule/doamnă ? (Așteptăm acordul)
</p>
          </div>

          <div class="ynPanel" data-panel="no">
            <p>mulțumesc pentru răspuns! Chiar dacă durerile nu sunt încă frecvente, este important să monitorizați starea articulațiilor pentru a preveni agravarea lor. Problemele se pot dezvolta în mod imperceptibil și pot duce la dureri și limitarea mobilității în viitor. Menținerea sănătății articulațiilor într-un stadiu incipient este importantă pentru rezultate pe termen lung, sunteți de acord cu mine, da, domnule/doamnă ? (Așteptăm acordul)</p>
          </div>
        `,
      },

      {
        q: `5. Domnule/doamnă , ați auzit că, dacă durerea articulară nu dispare pentru o perioadă lungă de timp, aceasta poate afecta grav mobilitatea și starea articulațiilor? <span class="txt-green">(Așteptăm acordul)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu al expertului, dacă durerile au apărut recent</button>
          </div>

          <div class="ynPanel" data-panel="yes">
            <p>durerile constante și inflamația distrug cartilajele și țesuturile articulațiilor, ceea ce poate duce la invaliditate și pierderea completă a mobilității. Fără o recuperare la timp, situația se va agrava, iar dumneavoastră cu siguranță nu doriți astfel de consecințe, nu-i așa? (Așteptăm acordul)</p>
          </div>

          <div class="ynPanel" data-panel="no">
            <p>chiar dacă durerile au apărut recent, problemele articulare se pot dezvolta treptat și rareori le acordăm atenție. Dar este important să păstrăm mobilitatea și să prevenim probleme mai grave în viitor. Sunteți de acord că este mai bine să prevenim problema și să începem tratamentul preventiv la timp, nu-i așa? (Așteptăm acordul)</p>
          </div>
        `,
      },

      {
        q: `6. Domnule/doamnă , spuneți-mi, aveți rude cu boli ale articulațiilor? <span class="txt-green">(Așteptăm răspunsul)  (notăm cine suferă/fie „Da”/„Nu”)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă „Da”</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă răspunsul este „Nu”</button>
          </div>

          <div class="ynPanel" data-panel="yes">
            <p>Am înțeles. Ne bucurăm că ați apelat la noi. Adesea primim recomandări, așa că puteți avea încredere în noi.</p>
          </div>

          <div class="ynPanel" data-panel="no">
            <p>Domnule/doamnă, ne bucurăm că ne-ați găsit! Asta înseamnă că sunteți deja interesat(ă) de o soluție care vă poate ajuta cu adevărat. Lucrăm numai cu metode și produse verificate, care și-au dovedit eficiența.</p>
          </div>
        `,
      },
      {
        a: `
    <p class="groupSubtitle">SIMPTOME ȘI CALITATEA VIEȚII:</p>
  `,
      },

      {
        q: `7. Domnule/doamnă , să vorbim acum despre calitatea vieții și simptome. Vă rog să ne spuneți dacă vă este greu să mergeți mult timp, să urcați scările, să vă ocupați de treburile obișnuite sau să vă ridicați după ce v-ați odihnit? <span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă răspunsul este „Da”</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă răspunsul este „Nu”</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>imitarea mișcărilor este un semn al progresiei bolii. Dacă nu vă ocupați acum de refacerea sănătății articulațiilor, puteți pierde rapid autonomia și vă puteți confrunta cu necesitatea unei asistențe permanente, iar dvs. doriți să evitați acest lucru, nu-i așa? (Așteptăm acordul)</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>este bine că nu există încă astfel de limitări. Dar este important să rețineți că problemele articulare se pot dezvolta în mod imperceptibil și, fără prevenire, riscați să vă confruntați cu dificultăți în viitor. Prevenirea în stadiu incipient este cheia sănătății pe termen lung a articulațiilor, nu-i așa? (Așteptăm acordul)</p>
          </div>
        `,
      },
      {
        q: `8. Domnule/doamnă , aveți scrâșniri sau pocnituri la mișcare? <span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă răspunsul este „Da”</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă răspunsul este „Nu”</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>scrâșnitul este un semn precoce al uzurii cartilajului. Fără intervenție, situația se va agrava, iar articulația se poate distruge, ceea ce va duce la necesitatea unei operații sau a unei protezări.</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>este bine că nu aveți încă scrâșniri. Dar chiar și în absența acestor simptome, este important să monitorizați starea articulațiilor. În caz contrar, problemele se pot dezvolta în mod imperceptibil și pot duce la complicații.</p>
          </div>
        `,
      },
      {
        q: `9. Domnule/doamnă , spuneți-mi, aveți umflături sau roșeață în zona articulațiilor? <span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariul expertului, dacă răspunsul este „Da”</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă răspunsul este „Nu”</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>acestea sunt simptome îngrijorătoare de inflamație. Inflamația poate distruge cartilajele și oasele, ceea ce va duce la modificări ireversibile ale articulației și chiar la pierderea funcției articulației.</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>este bine că în acest moment nu aveți umflături sau roșeață. Cu toate acestea, chiar și fără semne evidente de inflamație, este important să mențineți sănătatea articulațiilor pentru a preveni posibile complicații.</p>
          </div>
        `,
      },
      {
        q: `10. Domnule/doamnă , aveți dureri nocturne la nivelul articulațiilor care vă împiedică să dormiți? <span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă răspunsul este „Da”</button>
            <button class="ynBtn" type="button" data-show="no">Comentariul expertului, dacă răspunsul este „Nu”</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>durerea cronică perturbă somnul, scade imunitatea și calitatea vieții. Iar oboseala și depresia pot deveni companioni permanenți. Este important să acționați acum pentru a vă recăpăta somnul normal și a vă îmbunătăți starea de sănătate.</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>este bine că durerile nocturne nu vă deranjează încă. Dar chiar și fără ele, este important să monitorizați starea articulațiilor pentru a preveni apariția durerii și deteriorarea calității somnului în viitor. Măsurile preventive luate la timp vă vor ajuta să evitați acest lucru.</p>
          </div>
        `,
      },

      {
        q: `11. Domnule/doamnă , ați avut leziuni articulare sau operații la articulații? <span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă răspunsul este „Da”</button>
            <button class="ynBtn" type="button" data-show="no">Comentariul expertului, dacă răspunsul este „Nu”</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>leziunile și operațiile cresc riscul de deteriorare repetată a articulațiilor. Fără sprijinul adecvat, recuperarea poate dura mai mult, iar complicațiile se pot acumula. Este bine că ați apelat la noi, vă vom ajuta să preveniți probleme viitoare și să vă întăriți articulațiile.</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>chiar dacă nu ați avut leziuni, articulațiile se pot uza în timp. Prevenirea ajută la evitarea leziunilor grave și la menținerea mobilității pentru mulți ani. O abordare corectă acum va ajuta la prevenirea eventualelor probleme în viitor</p>
          </div>
        `,
      },
      {
        a: `
    <p class="groupSubtitle">DESPRE EXCESUL DE GREUTATE:</p>

  `,
      },
      {
        q: `12. Domnule/doamnă , să vorbim puțin despre greutatea dumneavoastră. La început ați spus că înălțimea dumneavoastră este  și greutatea  — am notat corect? <span class="txt-green">(Așteptăm răspunsul)</span>`,
      },

      {
        q: `13. Comentariu expert: mulțumim pentru precizare. Conform calculelor medicale, la înălțimea dumneavoastră, greutatea optimă este de aproximativ XX-XX kilograme. Dumneavoastră considerați că aveți un ușor exces de greutate și cât de mult vă deranjează acest lucru? <span class="txt-green">(Așteptăm răspunsul)  (notăm răspunsul clientului)</span>`,

        a: `

          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă există</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă nu aveți exces de greutate</button>
          </div>

          <div class="ynPanel" data-panel="yes">
            <p>chiar și o greutate excesivă mică crește presiunea asupra articulațiilor, în special asupra genunchilor și coloanei vertebrale. Acest lucru accelerează uzura cartilajului, provoacă inflamații și durere. Dacă nu se reduce presiunea, riscul de invaliditate și operații crește. Este important să mențineți o greutate sănătoasă și să aveți grijă de starea articulațiilor în mod complex, nu-i așa, domnule/doamnă ? (Așteptăm răspunsul)</p>
          </div>

          <div class="ynPanel" data-panel="no">
            <p>este excelent că aveți o greutate normală. Dar chiar și în absența excesului de greutate, este important să rețineți că vârsta, leziunile și stilul de viață pot afecta starea articulațiilor. Susținerea articulațiilor și prevenirea vă vor ajuta să vă păstrați mobilitatea și să evitați posibile probleme în viitor, nu-i așa? (Așteptăm acordul)</p>
          </div>
        `,
      },
      {
        a: `
    <p class="groupTitle">Boli asociate</p>
    <p class="groupSubtitle">AFECȚIUNI CONCOMITENTE (DIABET, HIPERTENSIUNE):</p>
  `,
      },
      {
        q: `14. Domnule/doamnă , vă rugăm să ne spuneți dacă aveți boli concomitente, de exemplu, diabet zaharat sau probleme cu tensiunea arterială? <span class="txt-green">(Așteptăm răspunsul)</span>`,
      },
      {
        q: `15. (Dacă este diabet) Domnule/doamnă , am înțeles. Probabil știți că, în cazul diabetului, nivelul ridicat al zahărului din sânge are un efect negativ asupra articulațiilor, nu-i așa? <span class="txt-green">(Așteptăm confirmarea)</span>`,
        a: `
    <p><b>Comentariu expert:</b>diabetul este dublu periculos pentru articulații. Deoarece glucoza se cristalizează în lichidul articular, cartilajul se uzează mai repede, iar lubrifiantul devine dens. Capilarele nu alimentează cartilajul în mod adecvat. Drept urmare, articulațiile se deteriorează de 3 ori mai repede. În cazul dumneavoastră, este necesară o protecție specială.</p>
  `,
      },
      {
        q: `16. (Dacă presiunea) Domnule/doamnă , v-am înțeles. Probabil ați auzit că tensiunea arterială ridicată poate afecta starea articulațiilor, nu-i așa? <span class="txt-green">(Așteptăm acordul)</span>`,
        a: `
    <p><b>Comentariu expert:</b>hipertensiunea afectează în mod imperceptibil articulațiile. Din cauza spasmelor vasculare, celulele noastre primesc cu 40% mai puțină hrană. Cartilajul își pierde elasticitatea, iar riscul de artroză crește de două ori.</p>
  `,
      },
      {
        q: `17. (Dacă aveți diabet și hipertensiune) Domnule/doamnă , v-am înțeles. Cred că știți că, în cazul diabetului, nivelul ridicat de zahăr încetinește refacerea articulațiilor, iar tensiunea crescută agravează circulația sanguină, nu-i așa? <span class="txt-green">(Așteptăm confirmarea)</span>`,
        a: `
    <p><b>Comentariu expert:</b>înțeleg că este dificil pentru dumneavoastră și că acesta este un factor de risc serios. Diabetul + hipertensiunea accelerează distrugerea cartilajelor de 5 ori și agravează de două ori alimentarea țesuturilor. Este un cerc vicios. Fără o abordare complexă, recuperarea este practic imposibilă.</p>
  `,
      },
      {
        q: `18. Comentariu expert, dacă nu există/nu se cunoaște:`,
        a: `
    <p>Domnule/doamnă , aveți noroc. Dar după , pierderea anuală de 1-2% din țesutul cartilajului este inevitabilă. Este bine că metodele moderne pot încetini uzura de 2-3 ori și pot ajuta la recuperare. Ați apelat la timp pentru prevenire.</p>
  `,
      },
      {
        a: `
    <p class="groupTitle">Eficacitate și siguranță</p>
    <p class="groupSubtitle">EFICIENȚĂ ȘI SIGURANȚĂ:</p>
  `,
      },
      {
        q: `19. Domnule/doamnă , având în vedere ceea ce știm deja despre starea dumneavoastră, utilizați unguente, comprese sau comprimate pentru articulații? <span class="txt-green">(Așteptăm răspunsul) (notăm răspunsul clientului)</span> `,
        a: `
     <p><b>Comentariu expert:</b>Domnule/doamnă , dacă utilizați frecvent medicamente pentru articulații, înseamnă că problema este gravă. Dar multe medicamente, cum ar fi AINS și unguentele, solicită stomacul, ficatul și rinichii. Utilizarea pe termen lung poate să nu îmbunătățească starea, ci să provoace efecte secundare.</p>
  `,
      },
      {
        q: `20. Domnule/doamnă , alte medicamente provoacă adesea dureri abdominale, oboseală, slăbiciune, deteriorarea memoriei, amețeli sau reacții alergice. Spuneți-mi, ați observat aceste efecte secundare? <span class="txt-green">(Așteptăm răspunsul)</span>`,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert, dacă răspunsul este „Da”</button>
            <button class="ynBtn" type="button" data-show="no">Comentariu expert, dacă răspunsul este „Nu”</button>
          </div>


          <div class="ynPanel" data-panel="yes">
            <p>înțeleg, de aceea este important să alegeți un produs care să vă ajute cu adevărat. ComponenteleHondrolife sunt testate clinic, sunt sigure și elimină eficient inflamația, refăcând cartilajul fără efecte secundare. Doriți să vă recăpătați sănătatea în siguranță, nu-i așa, domnule/doamnă ? (Așteptăm acordul)</p>
          </div>


          <div class="ynPanel" data-panel="no">
            <p>este bine că nu există reacții adverse. Dar fără sprijinul adecvat, articulațiile pot continua să se deterioreze.Hondrolife este testat clinic, reface cartilajul și ameliorează inflamația fără a suprasolicita organismul. Doriți să vă recăpătați sănătatea în siguranță, nu-i așa, domnule/doamnă ? (Așteptăm acordul)</p>
          </div>
        `,
      },
    ],

    objections: [



    ],



  },
});
