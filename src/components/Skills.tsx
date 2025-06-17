
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    'JavaScript / TypeScript',
    'React',
    'Node.js / Express',
    'Python',
    'MySQL / MongoDB',
    'Git / GitHub'
  ];

  const softSkills = [
    'Client Communication',
    'Team Collaboration',
    'Problem Solving',
    'Time Management',
    'Adaptability'
  ];

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Soft Skills
              </h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With expertise in both technical development and client collaboration, I ensure clear communication 
              and satisfaction throughout every project while working effectively with diverse teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
