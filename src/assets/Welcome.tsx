function Welcome() {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="display-4 text-primary mb-4">
          Velkommen til StudentSkatt: Hjelp med skatt for studenter
        </h1>
        <meta
          name="description"
          content="Få hjelp med skatt som student. StudentSkatt gir deg råd om fradrag og tips for studenter som vil spare skatt."
        />
        <meta name="keywords" content="student skatt, skatt for studenter, skatt student, student økonomi" />
        <p className="lead text-muted">
          Få full oversikt over skattefordeler og fradrag som student! Jeg hjelper deg med å spare penger og gjøre skatteprosessen enklere.
        </p>
        <p className="text-secondary mt-3">
          NB: Dette er bare tips og triks.
        </p>
        <a
          href="/guide"
          className="btn btn-primary mt-4"
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
          }}
        >
          Start her
        </a>
      </div>
    </div>
  );
}

export default Welcome;
