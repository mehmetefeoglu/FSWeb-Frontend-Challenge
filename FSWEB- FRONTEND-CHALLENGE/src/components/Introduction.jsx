import React from 'react';

const Introduction = ({ data }) => {
  return (
    <section className="text-center my-8 px-4 md:px-0">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
        {data.about}
      </p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Hire Me
        </button>
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 text-white px-4 py-2 ml-2 rounded hover:bg-gray-600 transition duration-300">
            GitHub
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 text-white px-4 py-2 ml-2 rounded hover:bg-gray-600 transition duration-300">
            LinkedIn
          </button>
        </a>
      </div>
    </section>
  );
};

export default Introduction;
