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
    <section className="projects p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white mx-24">
      <h2 className="text-2xl font-bold">{language === 'en' ? 'Projects' : 'Projeler'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="project-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Site
                </a>
              </div>
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
