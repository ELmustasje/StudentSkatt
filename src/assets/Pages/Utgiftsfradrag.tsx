
const Utgiftsfradrag = () => {
  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm">
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary">Fradrag for Utdanningsutgifter</h1>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Som student har du rett til fradrag for kostnader direkte knyttet til utdanningen din. Alle disse
            utgiftene omfattes av minstefradraget ditt, som er 46% av inntekt opptil 92 000 kroner. Men hvis utdanningsutgiftene
            overstiger minstefradraget, har du muligheten til å velge fradrag for faktiske utgifter i stedet.
          </p>
          <a href="https://www.skatteetaten.no/person/skatt/hjelp-til-riktig-skatt/arbeid-trygd-og-pensjon/utdanning/fradrag-for-kostnader-til-utdanning/" target="_blank" rel="noopener noreferrer">
            Les mer her.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Utgiftsfradrag;
