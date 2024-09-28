import React from 'react';
import styles from '../styles/App.module.css'; 

const AboutMe = () => {
  return (
    <section className={styles.section}> 
      <h2 className={styles.heading}>About Me</h2> 
      <p className={styles.paragraph}>
        Hello, I am <strong>Aditya Nagesh Raorane</strong>,a sophomore at <abbr title="Veveievank Education Society Institute of Technology">VESIT</abbr> and a passionate <em>full-stack web developer</em> with a deep love for crafting modern web applications.
        My journey in web development began several years ago, and over the course of time, I have worked with diverse technologies, frameworks, and tools.
      </p>
      <p className={styles.paragraph}>
        I specialize in <strong>React.js</strong> for building responsive and interactive user interfaces, and <strong>Node.js</strong> for developing scalable back-end services.
        My areas of expertise include:
      </p>
      <ul className={styles.list}>
        <li>Developing highly interactive user interfaces using <strong>React</strong></li>
        <li>Building RESTful APIs with <strong>Node.js</strong> and <strong>Express</strong></li>
        <li>Database design and management using <strong>MongoDB</strong></li>
        <li>Working with cloud platforms like <strong>AWS</strong></li>
      </ul>
      <p className={styles.paragraph}>
        I am constantly seeking to improve my skills by learning new technologies and contributing to open-source projects.
        When I'm not coding, I enjoy exploring the latest trends in tech and sharing my knowledge with the community.
      </p>
      <blockquote className={styles.blockquote}>
        <em>"The best way to predict the future is to create it."</em> – Abraham Lincoln
      </blockquote>
    </section>
  );
};

export default AboutMe;
