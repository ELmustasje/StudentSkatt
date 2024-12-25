import React, { useState } from 'react';

const Guide: React.FC = () => {
  const [answers, setAnswers] = useState({
    income: '0',
    mortage: '0',
    travel: '0',
    expenses: '0',
    aksje: '0',
    BSU: '0',
  });

  const formatNumber = (value: string) => {
    return value
      .replace(/[^0-9]/g, '') // Remove invalid characters
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')// Add dot separators every 3 digits
      .replace(/^0+/, '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const bsu_max = 27500;
    const numericValue = value.split('.').join('').replace(/[^0-9.,]/g, '');
    const formattedValue = formatNumber(numericValue);

    if (formattedValue == '') {
      setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: '0' }));
    } else {
      setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: formattedValue }));
    }
    if (name === 'BSU' && parseInt(numericValue) > bsu_max) {
      setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: formatNumber(bsu_max.toString()) }));
    }


  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for processing user answers and providing recommendations goes here
    console.log(answers);
    const income = parseInt(answers.income.split('.').join(''));
    const max_income = 214213;
    if (income > max_income) {
      console.log("too much income");
    }
    const mortage = parseInt(answers.mortage.split('.').join(''));
    if (mortage > 0) {
      console.log("can save in interest");
    }
    const travel = parseInt(answers.travel.split('.').join(''));
    const min_travel = 14400;
    if (travel > min_travel) {
      console.log("kan trekke fra reise");
    };
    const expenses = parseInt(answers.expenses.split('.').join(''));
    const minste_fradrag = income * 0.46;
    if (expenses > minste_fradrag) {
      console.log("spare på utgifter");

    }
    const aksje = parseInt(answers.aksje.split('.').join(''));
    const personfradrag = 88250;
    let max_withdrawl = Math.floor((minste_fradrag + personfradrag - income) / 1.72 / 10) * 10;
    //(lønn + (x*1.72)) - minste_fradrag = personfradrag
    //(lønn + (x*1.72) - minste_fradrag - personfradrag = 0)
    //lønn - minste_fradrag - personfradrag = - (x*1.72)
    //-lønn + minste_fradrag + personfradrag = x*1.72
    //(minste_fradrag + personfradrag - lønn) / 1.72 = x
    if (aksje < max_withdrawl && aksje > 0) {
      console.log("skattefri aksjegevinst");
    }


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
            value={answers.income}
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
            value={answers.mortage}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="reise" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
            Har du mye reisekostnadder?
          </label>
          <input
            type="text"
            id="travel"
            name="travel"
            value={answers.travel}
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
            value={answers.aksje}
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
            value={answers.expenses}
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
            value={answers.BSU}
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
    </div>
  );
};

export default Guide;
