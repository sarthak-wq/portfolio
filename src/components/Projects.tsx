import React from "react";
import employeeMSImage from '/assets/mypic.jpg';
import bookMSImage from '/assets/mypic.jpg';


interface Project {
  id: number;
  name: string;
  technologies: string;
  image: string;
  github: string;
}


const projects: Project[] = [
  {
    id: 1,
    name: "Facebook Clone",
    technologies: "PHP,html,css,js,bootstrap",
    image: employeeMSImage,
    github: "https://github.com/sarthak-wq",
  },
  {
    id: 2,
    name: "Online Testing System (Web Application)",
    technologies: "MERN",
    image: bookMSImage,
    github: "https://github.com/sarthak-wq",
  },
  {
    id: 3,
    name: "Drowsiness Detector",
    technologies: "Matlab",
    image: employeeMSImage,
    github: "https://github.com/sarthak-wq",
  },
  {
    id: 4,
    name: "AI Course Advisor",
    technologies: "MERN Stack, Llama-70B",
    image: employeeMSImage,
    github: "https://github.com/sarthak-wq",
  },
  {
    id: 5,
    name: "Donation & Volunteer Management System",
    technologies: "Java, MySQL, Swing, JDBC",
    image: employeeMSImage,
    github: "https://github.com/sarthak-wq",
  }
];

const Projects: React.FC = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
