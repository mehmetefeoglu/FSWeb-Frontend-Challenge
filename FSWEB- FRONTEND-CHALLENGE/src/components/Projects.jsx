import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Projects = ({ projects }) => {
  const { language } = useContext(ThemeContext);

  // Dil seçimine göre doğru projeleri almak
  const filteredProjects = projects.map((project) => {
    return {
      ...project,
      name: project[language]?.name, // Dil seçiminden doğru ismi almak
      description: project[language]?.description, // Dil seçiminden doğru açıklamayı almak
    };
  });

  return (
    <section className="projects">
      <h2>{language === 'en' ? 'Projects' : 'Projeler'}</h2>
      <div className="project-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.site} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
            </div>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
