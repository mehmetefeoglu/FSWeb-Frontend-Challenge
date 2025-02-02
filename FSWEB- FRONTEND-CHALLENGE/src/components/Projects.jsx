import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <div className="mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition duration-300">
                  GitHub
                </button>
              </a>
              <a href={project.site} target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition duration-300">
                  View Site
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
