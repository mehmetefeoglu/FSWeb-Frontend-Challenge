import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold text-center">Skills</h2>
      <ul className="mt-4 space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="border-b py-2 text-lg">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
