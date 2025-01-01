
const Bsusparing = () => {
  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm">
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary">BSU og Skattefordeler</h1>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Er du under 34 år og har en skattbar inntekt? Da kan du redusere skatten din ved å spare i BSU.
            Du får 10 % skattefradrag på beløpet du setter inn på BSU-kontoen. Husk å kontrollere at dette fradraget
            er inkludert i skattemeldingen din. Dette finner du nederst i skattemeldingen. Hvis fradraget mangler
            og du oppfyller kravene, bør du kontakte Skatteetaten på <a href="tel:80080000">800 80 000</a>.
          </p>
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            En tommelfingerregel er å utnytte skattefradrag så mye som mulig. Men hvis fradraget overstiger det du
            faktisk betaler i skatt, kan det være lurt å vurdere å investere i fond. Fondsløsninger låser ikke pengene dine
            og har historisk sett gitt bedre avkastning enn BSU. <a href="/fond" className="text-primary">Les mer her</a>.
          </p>
        </div>
      </div>
      <meta
        name="description"
        content="StudentSkatt hjelper studenter med skatteplanlegging. Lær hvordan du kan dra nytte av fradrag og holde deg innenfor inntektsgrenser."
      />
      <meta name="keywords" content="skatt for studenter, student skatt, fradrag for studenter" />
    </div>
  );
};

export default Bsusparing;
