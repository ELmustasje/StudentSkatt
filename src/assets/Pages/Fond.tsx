const Fond = () => {
  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm">
      <meta
        name="description"
        content="StudentSkatt hjelper studenter med skatteplanlegging. Lær mer om fond."
      />
      <meta name="keywords" content="skatt for studenter, student skatt, fradrag for studenter, fond" />
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary">Fond vs. BSU: Hva er bedre for studenter?</h1>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Når det gjelder investeringer for studenter, er fond ofte et bedre alternativ enn BSU (Boligsparing for ungdom), spesielt når man ser på faktorer som avkastning og fleksibilitet.
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-header bg-primary text-white">
          <h2 className="h5">1. Fleksibilitet – Pengene blir ikke bundet</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            BSU har en stor fordel når det gjelder sparing til bolig, men en ulempe er at pengene blir bundet til boligsparing og kan ikke tas ut før du kjøper bolig. For studenter som ikke har planer om å kjøpe bolig med det første, kan dette være en ulempe. Fond, derimot, gir deg mye mer fleksibilitet. Du kan investere pengene dine i aksjefond, rentefond eller blandede fond, og du kan ta ut pengene når du vil, uten å måtte vente på et boligkjøp.
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-header bg-success text-white">
          <h2 className="h5">2. Bedre avkastning over tid</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Generelt sett gir aksjefond og andre investeringsfond en høyere forventet avkastning enn BSU, spesielt på lang sikt. Aksjemarkedet har historisk sett gitt bedre avkastning enn rentebærende investeringer som BSU, som har en lavere rente. For studenter som har tid på sin side, kan investering i fond gi en bedre langsiktig gevinst. Avkastningen i aksjefond kan variere, men over tid har de ofte hatt høyere gjennomsnittlig avkastning enn den 3–4% renten man får på BSU.
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-header bg-warning text-white">
          <h2 className="h5">3. Mer risiko, men også potensial for høyere beløp</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            En ulempe med fond er at de innebærer mer risiko enn BSU, spesielt hvis man velger aksjefond. Verdien av fond kan svinge, og på kort sikt kan du oppleve både gevinster og tap. Men på lang sikt har aksjemarkedet historisk sett hatt en oppadgående trend. Hvis du har tid til å investere før du trenger pengene, kan du dra nytte av den langsiktige veksten som fond kan tilby. Hvis du er komfortabel med litt høyere risiko, kan fond være et bedre alternativ for å bygge formue.
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-header bg-danger text-white">
          <h2 className="h5">4. Ingen sparekrav for bolig</h2>
        </div>
        <div className="card-body">
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            BSU har et krav om at du må bruke pengene til boligformål. Hvis du for eksempel velger å kjøpe bolig etter utdanningen, er pengene i BS
          </p>
        </div>
      </div>

      <div className="card my-3 shadow-sm">
        <div className="card-body">
          <h3 className="text-primary">Oppsummering:</h3>
          <ul className="text-muted" style={{ fontSize: '1.2rem' }}>
            <li>BSU: Lavere avkastning, bundet til boligkjøp, og begrenset fleksibilitet.</li>
            <li>Fond: Høyere potensial for avkastning, mer fleksibilitet, men med høyere risiko.</li>
          </ul>
          <p className="text-muted" style={{ fontSize: '1.2rem' }}>
            Hvis du er en student som ønsker fleksibilitet og er komfortabel med litt mer risiko, kan investering i fond være et bedre valg enn å bruke BSU. Det gir deg muligheten til å bygge formue raskere, samtidig som du beholder kontrollen over pengene dine uten å måtte vente på et boligkjøp.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fond;
