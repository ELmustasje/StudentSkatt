import { INNTEKTSGRENSE, FORMUEGRENSEN } from "./skattesatser.ts";

const GenerelleTips = () => {
  return (
    <div className="container my-5 shadow p-4 bg-light rounded">
      <meta
        name="description"
        content="StudentSkatt hjelper studenter med skatteplanlegging."
      />
      <meta name="keywords" content="student, skatt, skatt for studenter, formue, Formuegrense, student skatt, fradrag for studenter" />
      <h1 className="mb-4 text-primary">Generelle tips</h1>
      <p>
        Studietiden er en unik periode i livet – en tid for læring, nye opplevelser og minner. Selv om det kan være fristende å jobbe mye for å tjene ekstra penger, er det viktig å være klar over hvordan dette kan påvirke både økonomien og opplevelsen din som student. Her er noen generelle tips for å finne den riktige balansen:
      </p>

      <h2 className="mt-4 text-secondary">1. Hold deg innenfor inntektsgrensen</h2>
      <p>
        Hvis du tjener over {INNTEKTSGRENSE.toLocaleString('no-NO')} kroner i 2025, mister du en del av stipendet ditt fra Lånekassen. For hver krone du tjener over denne grensen, reduseres stipendet med 55 %, i tillegg til at du betaler vanlig inntektsskatt. Dette kan gi en effektiv marginalskatt på over 80 %, noe som betyr at det meste av den ekstra inntekten forsvinner.
      </p>

      <h2 className="mt-4 text-secondary">2. Planlegg økonomien</h2>
      <p>
        Sett opp et budsjett for å få kontroll over utgiftene dine. Med god planlegging kan du klare deg med mindre inntekt og unngå å jobbe for mye. Bruk kalkulatorer, som en stipendreduksjonskalkulator, for å beregne hvordan inntekten påvirker stipendet ditt.
      </p>

      <h2 className="mt-4 text-secondary">3. Prioriter studiene og livet</h2>
      <p>
        Husk at tiden du bruker på jobb også tar tid bort fra studier, venner og andre opplevelser. Studietiden er mer enn bare eksamener – det er en tid for å møte nye mennesker, delta på sosiale aktiviteter og skape minner som varer livet ut. Ikke la jobben ta overhånd og hindre deg i å leve livet.
      </p>

      <h2 className="mt-4 text-secondary">4. Vær oppmerksom på formuegrenser</h2>
      <p>
        Har du en formue over frigrensene ({FORMUEGRENSEN.toLocaleString('no-NO')} kroner i 2025), kan stipendet ditt bli redusert. For hver krone over grensen kan du tape 22 % av beløpet i form av redusert stipend. Dette gjelder ofte for studenter som arver penger eller har andre spareordninger.
      </p>

      <h2 className="mt-4 text-secondary">5. Opplev studietiden til fulle</h2>
      <p>
        Bruk studietiden til å utforske nye interesser, delta på arrangementer og reise. Selv om det kan være viktig å tjene penger, er det enda viktigere å ta vare på denne spesielle tiden i livet. Økonomisk ansvarlighet er viktig, men ikke glem å leve og lage minner.
      </p>

      <p>
        Husk, balansen mellom jobb, studier og fritid er nøkkelen til en minnerik og givende studietid. Hvis du er usikker, kan det være lurt å søke råd hos en økonomisk rådgiver.
      </p>
    </div>
  );
}

export default GenerelleTips;
