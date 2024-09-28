import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ThemeToggle from '../components/ThemeToggle';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page" style={{padding:'2rem',fontFamily:'Arial, sans-serif'}}>
      <Header />
      <div style={{ position: 'absolute', top: '240px', right: '40px' }}> 
        <ThemeToggle />
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default ProfilePage;
