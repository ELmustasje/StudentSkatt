function Welcome() {
  return (
    <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '600px' }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2.5rem', color: '#333' }}>
        Velkommen til StudentSkatt
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Få full oversikt over skattefordeler og fradrag som student! Jeg hjelper deg med å spare penger og gjøre skatteprosessen enklere.
      </p>
      <p style={{ fontSize: '1rem', color: '#666', marginTop: '10px' }}>
        NB: Dette er bare tips og triks.
      </p>
      <a
        href="/guides"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
        }}
      >
        Start her
      </a>
    </div>
  );
}

export default Welcome;
