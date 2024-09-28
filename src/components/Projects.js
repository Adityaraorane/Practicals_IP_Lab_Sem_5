import React from 'react';
import useFetchProjects from '../hooks/useFetchProjects';
import styles from '../styles/App.module.css';

const Projects = () => {
  const { projects, loading, error } = useFetchProjects();

  return (
    <section className={styles.section}>
      <h2>Projects</h2>
      {loading && <p>Loading projects...</p>}
      {error && <p>Error fetching projects: {error}</p>}
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {projects.map((project, index) => (
          <div 
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              margin: '10px',
              padding: '20px',
              width: '250px',
              minHeight: '150px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', marginTop: 'auto' }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
