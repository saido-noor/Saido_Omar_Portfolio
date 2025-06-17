
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Nuru Care Website",
      subtitle: "Healthcare Research Platform",
      description: "Comprehensive documentation platform focusing on infant mortality research in Kenya. Features detailed analysis of mortality rates and contributing factors, providing valuable insights for healthcare professionals and policymakers.",
      technologies: ["React", "Data Visualization", "Research Documentation"],
      link: "https://bespoke-zuccutto-f7f07f.netlify.app/",
      category: "Healthcare"
    },
    {
      title: "Chambers Hotel",
      subtitle: "Luxury Hospitality Website",
      description: "Elegant hotel website featuring sophisticated design and seamless user experience. Built to showcase premium accommodations, amenities, and services while providing an intuitive booking interface for guests.",
      technologies: ["React", "Responsive Design", "Modern UI/UX"],
      link: "https://chambers-hotel-website.netlify.app/",
      category: "Hospitality"
    },
    {
      title: "Girl Power Website",
      subtitle: "Non-Profit Organization Platform",
      description: "Impactful website created for a refugee organization in Kakuma, showcasing their empowerment work and community initiatives. Designed to raise awareness and facilitate support for their important mission.",
      technologies: ["React", "Non-Profit", "Community Impact"],
      link: "https://github.com/saido-noor/girlpoweraction.git",
      category: "Non-Profit"
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <h4 className="text-sm font-medium text-purple-600 mb-3">
                    {project.subtitle}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                  >
                    View Project
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
