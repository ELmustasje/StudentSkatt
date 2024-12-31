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

    const inntektsgrense = 199591
    if (income > inntektsgrense) {
      userBenefits.push(
        <a href="/inntektsgrense" target="_blank" rel="noopener noreferrer">
          Du har høy nok inntekt til at du får redusert stipend. Dette er ikke så mye å gjøre med, men du finner mer info her.
        </a>
      );
    }

    const formuegrense = 487340;
    if (networth > formuegrense) {
      userBenefits.push(
        <a href="/formuegrense" target="_blank" rel="noopener noreferrer">
          Du har formue over formuegrensen til Lånekassen. Dette kan påvirke ditt stipend. Se måter å flytte formuen på.
        </a>
      );
    } else if (networth > formuegrense - 100000) {
      <a href="/formuegrense" target="_blank" rel="noopener noreferrer">
        Du nærmer deg formuegrensen, om du venter en øking i formue framover kan dette påvirke ditt stipend. Se måter å flyte formuen på.
      </a>
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
        <a href="/reise-fradrag" target="_blank" rel="noopener noreferrer">
          Du har nok reisekostnadder til å kunne få fradrag på skatte. Se hvordan.
        </a>
      );
    }

    const minExpenses = Math.min(92000, income * 0.46);
    if (expenses > minExpenses) {
      userBenefits.push(
        <a href="/utgiftsfradrag" target="_blank" rel="noopener noreferrer">
          Du har nok utgifter til å overstige minstefradraget. Se hvordan du kan skrive av dette.
        </a>
      );
    }

    const personfradrag = 88250
    const maxWithdrawl = Math.floor((minExpenses + personfradrag - income) / 1.72 / 10) * 10;
    if (maxWithdrawl > 1 && aksje > 1) {
      userBenefits.push(
        <a href="/skattefritt-aksjer" target="_blank" rel="noopener noreferrer">
          Her er et smutthull du kan benytte for å ta ut {Math.min(maxWithdrawl, aksje)} kr i gevinst fra aksjene dine skattefritt!
        </a>
      );
    }

    const maxBSU = 27500;
    const frikort = 70000;
    if (BSU < maxBSU && income > frikort) {
      userBenefits.push(
        <a href="/bsubesparing" target="_blank" rel="noopener noreferrer">
          Du har nok inntekt til at det blir smart å spare i BSU, se her.
        </a>
      );
    } else if (BSU > 0 && income < frikort) {
      userBenefits.push(
        <a href="/fond" target="_blank" rel="noopener noreferrer">
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
    <div className="container my-5 p-4 bg-light rounded shadow-sm text-center">
      <h1 className="mb-4 text-primary">Finn dine Skattefordeler</h1>
      <p className="mb-4 text-muted" style={{ fontSize: '1.2rem' }}>
        Svar på noen spørsmål, så finner vi ut hvilke skattefordeler du kan ha krav på.
      </p>
      <form onSubmit={handleSubmit} className="text-left">
        <div className="form-group mb-3">
          <label htmlFor="income" className="form-label text-secondary">
            Hva er din årlige skattbare inntekt?
          </label>
          <input
            type="text"
            id="income"
            name="income"
            value={formatNumber(answers.income)}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="networth" className="form-label text-secondary">
            Hva er din netto formue? <a href="/nettoformue" target="_blank" rel="noopener noreferrer">(Se hvordan regne ut nettoformue)</a>
          </label>
          <input
            type="text"
            id="networth"
            name="networth"
            value={formatNumber(answers.networth)}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="mortage" className="form-label text-secondary">
            Hvor mye boliglån har du sammen med foreldrene dine?
          </label>
          <input
            type="text"
            id="mortage"
            name="mortage"
            value={formatNumber(answers.mortage)}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="travel" className="form-label text-secondary">
            Har du mye reisekostnadder?
          </label>
          <input
            type="text"
            id="travel"
            name="travel"
            value={formatNumber(answers.travel)}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="aksje" className="form-label text-secondary">
            Har du urealiserte aksje/fonds gevinster?
          </label>
          <input
            type="text"
            id="aksje"
            name="aksje"
            value={formatNumber(answers.aksje)}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="expenses" className="form-label text-secondary">
            Hva er din årlig kostnadd relatert til studie (f.eks. pensum, semesteravgift, osv)?
          </label>
          <input
            type="text"
            id="expenses"
            name="expenses"
            value={formatNumber(answers.expenses)}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="BSU" className="form-label text-secondary">
            Hvor mye har du fyllt opp på din BSU i år?
          </label>
          <input
            type="text"
            id="BSU"
            name="BSU"
            value={formatNumber(answers.BSU)}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
          >
            Se dine fordeler
          </button>
        </div>
      </form>
      {/* Display the benefits list if there are any */}
      {benefits.length > 0 && (
        <div className="mt-5 text-left">
          <h3 className="text-primary mb-3">Dine skattefordeler:</h3>
          <ul className="list-group">
            {benefits.map((benefit, index) => (
              <li key={index} className="list-group-item text-muted" style={{ fontSize: '1.2rem' }}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Guide;
