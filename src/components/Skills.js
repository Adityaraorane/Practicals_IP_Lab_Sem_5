import React from 'react';
import styles from '../styles/App.module.css';

const Skills = () => {
  const skills = ['JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'];
  const hackathonExperiences = [
    'Participated in the Invictus Hackathon held at VESIT.',
    'Took part in the ML Hackathon named HackWave at APSIT.',
    'Contributed to the SIH Hackathon with a project called Krushi Mitra, a farming contract-based system and now selcted as 11th team from internal hackthon'
  ];

  const cgpaData = [
    { semester: 'Semester 1', cgpa: 8.64 },
    { semester: 'Semester 2', cgpa: 9.70 },
    { semester: 'Semester 3', cgpa: 9.64 },
    { semester: 'Semester 4', cgpa: 9.87 }
  ];

  return (
    <section className={styles.section}>
      <h2 style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif', marginBottom: '1rem' }}>Skills</h2>
      
      <h3 style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif', marginBottom: '0.5rem' }}>Technical Skills</h3>
      <ul className={styles.skillList} style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ marginBottom: '10px', fontSize: '1.2rem', fontFamily: 'Georgia, serif' }}>
            {skill}
          </li>
        ))}
      </ul>

      <h3 style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif', margin: '20px 0 0.5rem' }}>Hackathon Experiences</h3>
      <ol style={{ paddingLeft: '20px', fontSize: '1.2rem', fontFamily: 'Georgia, serif' }}>
        {hackathonExperiences.map((experience, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {experience}
          </li>
        ))}
      </ol>

      <h3 style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif', margin: '20px 0 0.5rem' }}>CGPA Overview</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '10px', fontSize: '1.2rem', fontFamily: 'Georgia, serif' }}>Semester</th>
            <th style={{ border: '1px solid #ccc', padding: '10px', fontSize: '1.2rem', fontFamily: 'Georgia, serif' }}>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {cgpaData.map((data, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '10px', fontSize: '1rem', fontFamily: 'Georgia, serif' }}>{data.semester}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px', fontSize: '1rem', fontFamily: 'Georgia, serif' }}>{data.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Skills;
