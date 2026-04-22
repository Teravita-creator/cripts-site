registerScript("ro", "hot_4", {
  title: "ProstaLumina",
  stages: {
    greeting: ` <p>Bună ziua (introduceți numele clientului), numele meu este (introduceți numele dvs.). Sunt fiziolog și specialist al centrului de sănătate online HelpProtect</p>
    <p>Vă sun în legătură cu solicitarea pe care ați lăsat-o pe site cu privire la medicamentul ProstaLumina. produs pentru prostată.</p>
    <p>Poți vorbi acum?</p>
    <ul>
    <li>Dacă clientul este gata să vorbească, atunci trecem la pasul 2.</li>
    <li>Dacă nu: când putem suna înapoi?</li>
    </ul>
    <p>Ca specialist iti voi pune cateva intrebari ca sa intelegem situatia si problema ta si sa te pot ajuta pe cat posibil, ok?</p>
    
`,
    needs: ` 
`,
    presentation: ` <p>Stimata doamna/domnule..., Suntem o companie internationala care lucreaza cu toate tarile europene de mai bine de 5 ani. Folosim doar produse naturale, certificate si standarde europene.</p>
    <p>Produsul ProstaLumina este 100% natural, nu are contraindicații sau efecte secundare asupra organismului.</p>
    <p>Sănătatea sistemului genito-urinar, starea unui bărbat și calitatea vieții intime depind direct de starea glandei prostatei. Prosta Lumina a câștigat rapid popularitate în România datorită eficacității sale în menținerea sănătății prostatei. Acest produs inovator este apreciat pentru formula sa unică care ajută la îmbunătățirea stării de bine a bărbaților.</p>
    <p>Prosta Lumina este un preparat capsulă folosit pentru menținerea sănătății glandei prostatei. Conține ingrediente naturale atent selectate care promovează funcționarea optimă a prostatei și îmbunătățesc calitatea vieții bărbaților.</p>
    <p>Suport pentru sănătatea prostatei: Prosta Lumina ajută la menținerea unei dimensiuni normale a prostatei, prevenind astfel problemele asociate cu mărirea prostatei. Cu utilizarea regulată, poate reduce riscul de simptome neplăcute asociate cu hiperplazia benignă de prostată.</p>
    <p>Flux de urină îmbunătățit: ingredientele active din Prosta Lumina ajută la relaxarea mușchilor vezicii urinare și a uretrei. Acest lucru promovează urinarea mai regulată și reduce frecvența vizitelor nocturne la toaletă.</p>
    <p>Reduce inflamația: suplimentul are proprietăți antiinflamatorii care pot reduce disconfortul cauzat de inflamația prostatei. Ca rezultat, utilizatorii pot experimenta o reducere semnificativă a durerii și iritației.</p>
    <p>Sprijină echilibrul hormonal: Prosta Lumina ajută la reglarea nivelurilor hormonale care afectează sănătatea prostatei. Acest lucru poate ajuta la prevenirea dezechilibrelor care pot afecta funcționarea normală a glandei.</p>
    <p>Unul dintre mecanismele prin care Prosta Lumina își exercită efectele benefice este prin reducerea inflamației și menținerea echilibrului hormonal. Extractele de plante precum saw palmetto și urzica sunt cunoscute pentru capacitatea lor de a inhiba enzimele care pot duce la mărirea prostatei. În plus, zincul și seleniul din compoziție joacă un rol critic în protejarea celulelor de stresul oxidativ, promovând astfel sănătatea generală a glandelor.</p>
    <p>Prosta Lumina nu numai că ajută la ameliorarea simptomelor asociate cu problemele de prostată, dar promovează și bunăstarea generală prin susținerea fluxului normal de urină și reducerea frecvenței urinare pe timp de noapte. Datorită acestor acțiuni sinergice,</p>
    <p>Prosta Lumina demonstreaza ca nu este doar un alt produs de pe piata, ci un adevarat aliat in mentinerea sanatatii barbatilor.</p>
    <p>Prosta Lumina conține o compoziție atent formulată de ingrediente naturale menite să susțină sănătatea prostatei. Fiecare componentă joacă un rol important în eficacitatea suplimentului:</p>
    <ol>
    <li>Saw Palmetto: Ajută la reducerea simptomelor hiperplaziei benigne de prostată și susține funcția urinară.</li>
    <li>Extract de semințe de dovleac: bogat în zinc și antioxidanți, ajută la susținerea sănătății prostatei și a funcției urinare normale.</li>
    <li>Licopen: un antioxidant puternic care protejează celulele de stresul oxidativ și poate reduce riscul de probleme de prostată.</li>
    <li>Urzica: Cunoscută pentru proprietățile sale antiinflamatorii, ajută la ameliorarea disconfortului asociat cu problemele de prostată.</li>
    <li>Vitamina E: Sustine sistemul imunitar si ofera protectie antioxidanta.</li>
    </ol>
    <p>Această combinație sinergică de ingrediente oferă un sprijin optim pentru sănătatea prostatei, făcând din Prosta Lumina un supliment eficient și valoros.</p>
    <p>Prostalis funcționează în 3 etape:</p>
    <ul>
    <li>În prima etapă, vei scăpa de disconfort, durere și arsuri la nivelul sistemului genito-urinar.</li>
    <li>In stadiul 2, focarele de inflamatie vor fi distruse si se va restabili functionarea prostatei.</li>
    <li>La a treia, ultima etapă, sănătatea sistemului genito-urinar va fi complet restabilită, iar funcția erectilă se va îmbunătăți. Datorită acumulării cantității necesare de componente naturale utile în organism, rezultatul pozitiv va dura mult timp.</li>
    </ul>
    <p>Povestirea</p>
    <p>De exemplu, am avut:..................................................(Aici fiecare operator spune o poveste despre modul în care acest produs a ajutat un client)</p>
    
`,
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
  accordions: { needs: [
    
      {
        q: `1. Cumperi acest produs pentru tine sau pentru cineva drag?`,
       
      },
      {
        q: `2. Câți ani ai?`,
       
      },
      {
        q: `3. Ce anume te deranjează? Există simptome evidente? (disfuncție erectilă, ejaculare precoce, scăderea libidoului, oboseală rapidă în timpul actului sexual)`,
       
      },
      {
        q: `4. De cât timp ai aceste simptome?`,
       a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Comentariu expert</button>
          </div>

          <div class="ynPanel" data-panel="yes">
            <p>(Numele clientului), înțeleg că astfel de simptome provoacă disconfort și interferează cu o viață intimă plină. Este foarte important să fim atenți la semnalele organismului și să luăm măsuri cât mai curând posibil pentru a preveni agravarea situației – cu cât începem mai devreme, cu atât șansele de recuperare sunt mai mari.</p>
          </div>
`,
      },
       {
        q: `5. Vă rog să-mi spuneți, observați simptome precum: urinare frecventă și dureroasă, senzație de vezică plină, sânge în urină, durere în zona inghinală? `,
        a: `
          <div class="yn">
            <button class="ynBtn" type="button" data-show="yes">Daca da:</button>
            <button class="ynBtn" type="button" data-show="no">Dacă nu:</button>
          </div>

          <div class="ynPanel" data-panel="yes">
            <p>(Numele clientului), aceste simptome pot indica o infecție sau o altă boală gravă a tractului urinar. Principalul lucru acum este de a preveni agravarea stării, de a evita complicațiile și de a preveni dezvoltarea impotenței. </p>
          </div>

          <div class="ynPanel" data-panel="no">
            <p>(Nume client), este bine că nu aveți aceste simptome în acest stadiu. Dar problemele cu potența care au apărut deja sunt primul semnal că ar trebui să fii atent la sănătatea ta. Aceste simptome nu apar doar de nicăieri - ele indică prezența unui proces inflamator în organism.</p>
          </div>
              <p>Acum este deosebit de important să nu ratați ocazia de a elimina problema și de a preveni complicațiile și riscul de impotență.</p>

        `,
      },
  ], objections: [] },
});
