import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center my-8">
      <p>Let’s work together on your next product.</p>
      <a href="mailto:amilia.success@gmail.com" className="block text-blue-500">
        amilia.success@gmail.com
      </a>
      <div className="flex justify-center mt-4 space-x-4">
        <a
          href="https://personal-blog-link.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Personal Blog
          </button>
        </a>
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
          href="https://linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 text-white px-4 py-2 ml-2 rounded hover:bg-gray-600 transition duration-300">
            LinkedIn
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
