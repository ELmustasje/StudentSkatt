
const Rentefradrag = () => {
  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm">
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary">Skattefradrag med Medlåntakere</h1>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Har du foreldre som medlåntakere? Da må du være oppmerksom på at de kan få halve skattefradraget ditt
            dersom dere ikke korrigerer dette i skattemeldingene.
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-header bg-primary text-white">
          <h2 className="h5">Eksempel på skattefradragsfordeling</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            <strong>Eksempel:</strong> Hvis en forelder er medlåntaker til en student, vil fordelingen av
            skattefradraget i utgangspunktet være 50/50. Hvis begge foreldre er medlåntakere, vil fordelingen som regel være 33/33/33.
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Selv om foreldrene dine er medlåntakere, er det du som skal ha rett på hele skattefradraget for gjeldsrentene
            hvis det er avtalt at du har det fulle ansvaret for lånet. Pass derfor på å oppdatere skattemeldingen riktig
            slik at du får det fradraget du har krav på.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rentefradrag;
