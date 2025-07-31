import React, { useState } from 'react';
import './DoubtSolvingCSS.css';

const DoubtSolving = () => {
  const [question, setQuestion] = useState('');
  const [solution, setSolution] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) {
      alert('Please enter a question.');
      return;
    }

    setLoading(true);
    setSolution('Searching best solution...');

    try {
      const res = await fetch('http://localhost:5000/api/get-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setSolution(data.answer || 'No answer found.');
    } catch (error) {
      console.error('Error fetching answer:', error);
      setSolution('Error getting answer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='Head'>
        <h2>Doubt Solution</h2>
      </div>

      <div className='info'>
        <h3 className='a1'>Go from questioning to understanding </h3>
        <h4 className='a2'>Solution of your doubt, help you to understand the concept.</h4>
      </div>

      <div className='input'>
        <input type="text" placeholder='Class' className='class' />
        <input type="text" placeholder='Subject' className='sub' />
        <textarea
          placeholder='Ask your Question?'
          className='question'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <br />
        <button className='submit' onClick={handleSubmit} disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </div>

      <h1 className='ans'>Your Solution:</h1>

      <div>
        <textarea
          className='solution'
          placeholder='Searching best solution'
          value={solution}
          readOnly
        ></textarea>
      </div>
    </>
  );
};

export default DoubtSolving;
