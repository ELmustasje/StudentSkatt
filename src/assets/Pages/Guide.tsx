import React, { useState } from 'react';

const Guide: React.FC = () => {
  const [answers, setAnswers] = useState({
    income: 0,
    networth: 0,
    mortage: 0,
    travel: 0,
    expenses: 0,
    aksje: 0,
    BSU: 0,
  });

  const [benefits, setBenefits] = useState<React.ReactNode[]>([]);

  const formatNumber = (value: number) => {
    return value.toLocaleString('no-NO'); // Localized number formatting (Norwegian style)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let numericValue = value.replace(/[^0-9]/g, ''); // Only keep numbers
    let parsedValue = numericValue === '' ? 0 : parseInt(numericValue);
    if (name === 'BSU' && parsedValue > 27500) {
      parsedValue = 27500; // BSU max limit
    }

    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: parsedValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const {
      income,
      networth,
      mortage,
      travel,
      expenses,
      aksje,
      BSU
    } = answers;

    // Create an array to store the benefits
    let userBenefits: React.ReactNode[] = [];

    if (income > 214213) {
      userBenefits.push(
        <a href="/inntektsgrense" target="_blank" rel="noopener noreferrer">
          Du har inntekt over inntektsgrensen til Lånekassen. Dette kan påvirke ditt lån. Leter etter en god løsning for dette.
        </a>
      );
    }

    if (networth > 487340) {
      userBenefits.push(
        <a href="/formuegrense" target="_blank" rel="noopener noreferrer">
          Du har formue over formuegrensen til Lånekassen. Dette kan påvirke ditt lån. Se måter å flytte formuen på.
        </a>
      );
    }

    if (mortage > 0) {
      userBenefits.push(
        <a href="/rente-fradrag" target="_blank" rel="noopener noreferrer">
          Du har lån med dine foreldre. Husk å få max ut av rentefradragene!
        </a>
      );
    }

    if (travel > 14400) {
      userBenefits.push(
        <a href="/reisefradrag" target="_blank" rel="noopener noreferrer">
          Du har nok reisekostnadder til å kunne få fradrag på skatte. Se hvordan!.
        </a>
      );
    }

    const minExpenses = income * 0.46;
    if (expenses > minExpenses) {
      userBenefits.push(
        <a href="/utgiftsfradrag" target="_blank" rel="noopener noreferrer">
          Du har nok utgifter til å overstige minstefradraget. Se hvordan du kan skrive av dette.
        </a>
      );
    }

    const maxWithDrawl = Math.floor((minExpenses + 88250 - income) / 1.72 / 10) * 10;
    if (aksje < maxWithDrawl && aksje > 0) {
      userBenefits.push(
        <a href="/skattefritt-aksjer" target="_blank" rel="noopener noreferrer">
          Her er et smutthull du kan benytte for å ta ut {aksje} kr av aksjene dine skattefritt!
        </a>
      );
    }

    const maxBSU = 27500;
    const frikort = 70000;
    if (BSU > maxBSU && income > frikort) {
      userBenefits.push(
        <a href="/bsubesparing" target="_blank" rel="noopener noreferrer">
          Du har nok inntekt til at det blir smart å spare i BSU, se her.
        </a>
      );
    } else if (BSU > 0 && income < frikort) {
      userBenefits.push(
        <a href="/fondbesparing" target="_blank" rel="noopener noreferrer">
          Du har for lite inntekt til å få nok ut av BSU, se her!
        </a>
      );

    }
    if (userBenefits.length === 0) {
      userBenefits.push(
        <a href="/generelle-tips" target="_blank" rel="noopener noreferrer">
          Vi fant ingen mulige smutthull for deg. Se gjennerelle tips for å forberde deg for neste år: .....
        </a>
      );
    }

    // Set the benefits in the state
    setBenefits(userBenefits);
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '600px' }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2rem', color: '#333' }}>
        Finn dine Skattefordeler
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Svar på noen spørsmål, så finner vi ut hvilke skattefordeler du kan ha krav på.
      </p>
      <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="income" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
            Hva er din årlige skattbare inntekt?

          </label>
          <input
            type="text"
            id="income"
            name="income"
            value={formatNumber(answers.income)}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="networth" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
            Hva er din netto formue? <a href='/nettoformue' target='_blank' rel='noopener noreferrer'>(Se hvordan regne ut nettoformue)</a>
          </label>
          <input
            type="text"
            id="networth"
            name="networth"
            value={formatNumber(answers.networth)}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="mortage" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
            Hvor mye boliglån har du sammen med foreldrene dine?
          </label>
          <input
            type="text"
            id="mortage"
            name="mortage"
            value={formatNumber(answers.mortage)}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="travel" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
            Har du mye reisekostnadder?
          </label>
          <input
            type="text"
            id="travel"
            name="travel"
            value={formatNumber(answers.travel)}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="aksje" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
            Har du urealiserte aksje/fonds gevinster?
          </label>
          <input
            type="text"
            id="aksje"
            name="aksje"
            value={formatNumber(answers.aksje)}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="expenses" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
            Hva er din årlig kostnadd relatert til studie (f.eks. pensum, semesteravgift, osv)?
          </label>
          <input
            type="text"
            id="expenses"
            name="expenses"
            value={formatNumber(answers.expenses)}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="BSU" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
            Hvor mye har du fyllt opp på din BSU i år?
          </label>
          <input
            type="text"
            id="BSU"
            name="BSU"
            value={formatNumber(answers.BSU)}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
          />
        </div>
        <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '600px' }}>
          <button
            type="submit"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Se dine fordeler
          </button>
        </div>
      </form>
      {/* Display the benefits list if there are any */}
      {benefits.length > 0 && (
        <div style={{ marginTop: '40px', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#333' }}>Dine skattefordeler:</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
            {benefits.map((benefit, index) => (
              <li key={index} style={{ fontSize: '1.2rem' }}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Guide;
