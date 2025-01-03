const Nettoformue = () => {
  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm">
      <meta
        name="description"
        content="StudentSkatt hjelper studenter med skatteplanlegging."
      />
      <meta name="keywords" content="skatt for studenter, student skatt, fradrag for studenter, nettoformue" />
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary">Beregning av Nettoformue</h1>
      </div>
      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Å regne ut din nettoformue er ikke alltid helt rett fram. Det er viktig å ta hensyn til verdsettelsesrabatter, som varierer avhengig av eiendelene dine – spesielt aksjer, fond og gjeld.
            Disse rabattene kan ha stor innvirkning på den totale verdien av formuen din, slik den rapporteres til Lånekassen eller skattemyndighetene.
          </p>
        </div>
      </div>
      <div className="card my-3 shadow-sm">
        <div className="card-header bg-primary text-white">
          <h2 className="h5">Hva er verdsettelsesrabatt?</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Verdsettelsesrabatt er en regel som reduserer den beregnede verdien av enkelte eiendeler for skattemessige formål eller ved vurdering av formuegrenser.
            For eksempel kan aksjer og aksjefond ha en høyere rabatt enn kontanter, mens gjeld trekkes fra direkte. Dette gjør det viktig å forstå hvordan rabattene påvirker den endelige nettoformuen din.
          </p>
        </div>
      </div>
      <div className="card my-3 shadow-sm">
        <div className="card-header bg-success text-white">
          <h2 className="h5">Bruk en kalkulator for nøyaktighet</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            For å gjøre det enklere å regne ut riktig nettoformue, kan du bruke en spesialtilpasset kalkulator som tar hensyn til de ulike verdsettelsesrabattene.
            Kalkulatoren hjelper deg med å legge inn eiendeler som aksjer, fond, kontanter og gjeld, og gir deg en presis beregning av nettoformuen din.
            Din formue vil stå under "Grunnlag for beregning av formuesskatt" når du har fylt inn tallene.
          </p>
          <a
            href="https://www.smartepenger.no/kalkulatorer/912-formuesskattekalkulator"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Prøv Kalkulatoren
          </a>
        </div>
      </div>
      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <h3 className="text-primary">Hvorfor dette er viktig</h3>
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Ved å forstå og regne ut din nettoformue riktig kan du unngå å overstige formuegrenser, som kan føre til tap av stipend eller andre fordeler.
            Nøyaktige beregninger sikrer også at du følger alle kravene og unngår potensielle feil som kan koste deg dyrt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nettoformue;
