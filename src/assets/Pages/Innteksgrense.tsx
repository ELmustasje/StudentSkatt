import { FORMUEGRENSEN, INNTEKTSGRENSE } from "./skattesatser.ts";

const Innteksgrense = () => {
  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm">
      <meta
        name="description"
        content="StudentSkatt hjelper studenter med skatteplanlegging. Lær hvordan du kan dra nytte av fradrag og holde deg innenfor inntektsgrenser."
      />
      <meta name="keywords" content="skatt for studenter, student skatt, inntektsgrenser, fradrag for studenter" />
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary">Inntekts- og Formuesgrenser for Studenter</h1>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Det finnes ingen øvre grense for hvor mye en student kan tjene, men vær oppmerksom på at høy inntekt
            eller formue kan føre til reduksjon i den delen av lånet fra Statens lånekasse som omgjøres til stipend.
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-header bg-primary text-white">
          <h2 className="h5">Betingelser for omgjøring til stipend</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Inntil 40 % av basislånet kan omgjøres til stipend for universitets- eller høyskolestudenter, forutsatt at:
            <ul>
              <li>Eksamen er bestått</li>
              <li>Studenten bor borte fra foreldrene</li>
              <li>Inntekt eller formue ikke overstiger Lånekassens grenser</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-header bg-success text-white">
          <h2 className="h5">Grensene for å unngå kutt i stipend (2022)</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Grensene for å unngå kutt i stipend er:
            <ul>
              <li>Inntekt: {INNTEKTSGRENSE.toLocaleString('no-NO')} kroner</li>
              <li>Formue: {FORMUEGRENSEN.toLocaleString('no-NO')} kroner</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Foreløpig finnes det ingen lovlige metoder for å "skjule" eller flytte inntekt for å unngå reduksjoner,
            da dette regnes som hvitvasking. Eventuelle oppdateringer i skattereglene vil bli informert om.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Innteksgrense;
