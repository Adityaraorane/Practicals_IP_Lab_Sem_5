import React, { useState } from 'react';
import styles from '../styles/App.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState(''); 
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <h2 style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif', marginBottom: '1rem' }}>Contact</h2>
      {submitted ? (
        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', color: '#333' }}>
          Thank you for reaching out, {name}!
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> 
            <label style={{ fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>Name: </label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', flex: 1 }} 
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> 
            <label style={{ fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>Email: </label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', flex: 1 }}
            />
          </div>

          <label style={{ fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>Your Query </label>
          <textarea
            placeholder="Enter your query here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              resize: 'none', 
              height: '100px', 
            }}
          />
          <button type="submit" style={{
            padding: '10px 15px',
            backgroundColor: '#5dade2', 
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            color: '#ffffff',
            fontWeight: 'bold'
          }}>
            Submit
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
