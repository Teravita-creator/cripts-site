registerScript("ro", "hot_1", {
  title: "Hyperon",
  stages: {
    greeting: `
      <p><b>Salutul</b></p>
      <p>Bună ziua, domnule/doamnă ………?</p>
      <p>Numele meu este <b>[NUME OPERATOR]</b>, sunt de la clinica „Regina Maria”. Ați lăsat o cerere pentru <b>HYPERON</b>, este corect?</p>
      <p>Pentru a verifica livrarea: în ce regiune locuiți și în ce oraș?</p>
      <p>Excelent, livrarea este posibilă. Vă pun câteva întrebări, apoi vă explic produsul, aleg doza și vă ajut cu comanda. Bine?</p>
    `,
    needs: `
      <p><b>Identificarea nevoilor</b></p>
      <p>Comanda este pentru dumneavoastră sau pentru cineva din apropiați?</p>
      <p>Ce vârstă aveți? <i>(compliment)</i></p>
      <p>Care este tensiunea dvs? <i>(notăm limitele)</i></p>
      <p>Ați avut AVC / infarct?</p>
      <p>Simptome: dureri de cap, amețeli, zgomote în urechi, oboseală, vedere încețoșată?</p>
      <p>Aveți variații bruște ale tensiunii?</p>
      <p>Rude cu hipertensiune?</p>
      <p>Dureri în piept / lipsă de aer / puls rapid?</p>
      <p>Treziri noaptea (3–4)?</p>
      <p><b>AGRAVARE:</b> ...</p>
      <p>Diabet / rinichi?</p>
    `,
    presentation: `
      <p><b>Prezentare</b></p>
      <p>Companie internațională, produse naturale, certificate.</p>
      <p><b>HYPERON</b> ajută la reglarea tensiunii, susține inima și vasele.</p>
      <ul>
        <li>Reglarea tensiunii</li>
        <li>Îmbunătățește circulația</li>
        <li>Reduce stresul</li>
      </ul>
      <p><b>Mod administrare:</b> ...</p>
    `,
    courses: `
      <p><b>Cursuri / Oferte</b></p>
      <p>3 luni: ... lei</p>
      <p>2 luni: ... lei</p>
      <p>Cadou: ...</p>
    `,
    closing: `
      <p><b>Plasarea comenzii</b></p>
      <p>Livrare 2–3 zile lucrătoare.</p>
      <p>Nume + Adresă completă.</p>
      <p>Confirmați comanda?</p>
    `,
    objections: `
      <p><b>Obiecții</b></p>
      <p>Mai jos sunt răspunsuri rapide (se deschid la click).</p>
    `,
    products: `
      <p><b>Produse</b></p>
      <p>HYPERON / Hyperon Active — descriere scurtă.</p>
    `,
  },
  accordions: {
    needs: [
        { q: "Care este tensiunea dvs. (sus/jos)?", a: "Dacă 140–165: peste normă. Dacă >170: periculos." },
      { q: "Care este tensiunea dvs. (sus/jos)?", a: "Dacă 140–165: peste normă. Dacă >170: periculos." },
      { q: "Ați avut AVC / infarct?", a: "Dacă DA: semnal că resursele sunt la limită. Dacă NU: riscul rămâne." },
    ],
    objections: [
      { q: "Client: E scump.", a: "Înțeleg. Produsele ieftine maschează simptomele, tratamentul lucrează cu cauza..." },
      { q: "Client: Nu am bani.", a: "Înțeleg, dar problema nu așteaptă. Dacă amânăm, se agravează..." },
    ],
  },
});
