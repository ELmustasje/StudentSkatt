
const SkattefrittAskjer = () => {
  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm">
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary">Skattefri Gevinst på Aksjer og Fond</h1>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Visste du at du i år kan ta ut skattefri gevinst fra aksjer og fond? Dette smutthullet utnytter
            personfradraget, som har økt betydelig de siste årene – fra 52 250 kroner i 2021 til 88 250 kroner
            i 2024. I forslaget til statsbudsjettet for 2025 er det foreslått en ytterligere økning til
            108 550 kroner, noe som utgjør en samlet økning på 106 % over fem år.
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Kombinasjonen av økt personfradrag og et minstefradrag på 46 % (med en maksgrense på 92 000 kroner)
            gjør at du samlet sett kun betaler trygdeavgift, og ikke skatt på alminnelig inntekt under 200 000 kroner.
            Dette gir en mulighet til å ta ut gevinst fra aksjer og fond innenfor denne grensen helt skattefritt.
            Men det finnes regler du må være oppmerksom på.
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-header bg-primary text-white">
          <h2 className="h5">Hvordan Smutthullet Fungerer</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Du kan ha kapitalinntekter tilsvarende personfradraget hvert år uten at det utløser skatt på gevinster.
            For aksjer og aksjefond må oppjusteringsfaktoren tas med i beregningen. Formelen ser slik ut:
          </p>
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            <code>Max uttak = (Minstefradrag + Personfradrag - Inntekt) / 1.72</code>
          </p>
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Oppjusteringsfaktoren for 2024 er 72 %, og minstefradraget utgjør 46 % av inntekten (maks 92 000 kroner).
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-header bg-success text-white">
          <h2 className="h5">Viktig Å Vite</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Når du realiserer gevinst, må du være forsiktig. Dersom du samme dag reinvesterer i de samme aksjene
            eller fondene, risikerer du å bli utsatt for en gjennomskjæring fra Skatteetaten. For å unngå dette
            bør du gjøre en risikoendring, som enten innebærer å vente minst én uke eller investere i andre
            fond/aksjer. Dette sikrer at transaksjonen anses som lovlig.
          </p>
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Du trenger ikke gjøre noe aktivt for å få fradraget, men det er viktig å ha kontroll på inntektene
            dine gjennom året. Jo nærmere årsslutt, desto bedre oversikt har du over hvor mye gevinst du kan ta ut
            skattefritt.
          </p>
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            – Bruk gjerne <a href="https://skattekalkulator.formueinntekt.skatt.skatteetaten.no/skattekalkulator/2025" target="_blank" rel="noopener noreferrer">denne kalkulatoren fra Skatteetaten</a> for å beregne nøyaktig hvor mye gevinst
            du kan realisere når året nærmer seg slutten.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkattefrittAskjer;
