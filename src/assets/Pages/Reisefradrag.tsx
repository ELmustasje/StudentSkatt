import { REISEGRENSE } from "./skattesatser.ts";

const Reisefradrag = () => {
  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm">
      <meta
        name="description"
        content="StudentSkatt hjelper studenter med skatteplanlegging. Lær hvordan du kan dra nytte av fradrag som Reisefradrag."
      />
      <meta name="keywords" content="skatt for studenter, student skatt, fradrag for studenter, reisefradrag" />
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary">Fradrag for Reisekostnader</h1>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Du kan kreve fradrag for reise mellom hjem og arbeid dersom du bor langt nok unna
            og har reist ofte nok til at du har kommet over minstebeløpet på {REISEGRENSE.toLocaleString('no-NO')} kroner i 2025.
          </p>
          <a href="https://www.skatteetaten.no/person/skatt/hjelp-til-riktig-skatt/arbeid-trygd-og-pensjon/reise-tilfra-jobb/reisefradragskalkulator/" target="_blank" rel="noopener noreferrer" className="ml-2">
            Se her for mer info
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reisefradrag;
