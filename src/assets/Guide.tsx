import React, { useState } from 'react';

const Guide: React.FC = () => {
  const [answers, setAnswers] = useState({
    income: '0',
    studentStatus: 'Fulltid',
    expenses: '0',
  });

  const formatNumber = (value: string) => {
    return value
      .replace(/[^0-9]/g, '') // Remove invalid characters
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')// Add dot separators every 3 digits
      .replace(/^0+/, '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'income' || name === 'expenses') {
      const numericValue = value.replace(/[^0-9.,]/g, '').replace(/,/g, '.');
      const formattedValue = formatNumber(numericValue);
      if (formattedValue == '') {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: '0' }));
      } else {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: formattedValue }));
      }
    } else {
      setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User answers:', answers);
    // Logic for processing user answers and providing recommendations goes here
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '600px' }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2rem', color: '#333' }}>
        Skattefordelguide
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Svar på noen spørsmål, så finner vi ut hvilke skattefordeler du kan ha krav på.
      </p>
      <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="income" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
            Hva er din årlige inntekt?
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
          <label htmlFor="studentStatus" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
            Er du fulltids- eller deltidsstudent?
          </label>
          <select
            id="studentStatus"
            name="studentStatus"
            value={answers.studentStatus}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
          >
            <option value="fulltid">Fulltid</option>
            <option value="deltid">Deltid</option>
          </select>
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
      </form>
    </div>
  );
};

export default Guide;
