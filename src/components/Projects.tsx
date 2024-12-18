import React from "react";
import etest from '/assets/etest.jpg';
import dds from '/assets/dds.jpg';


interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string;
  image: string;
  github: string;
}


const projects: Project[] = [
  // {
  //   id: 1,
  //   name: "Socail Media Web Application",
  //   technologies: "PHP, Html, CSS, JavaScript, Bootstrap",
  //   image: employeeMSImage,
  //   github: "https://github.com/sarthak-wq",
  // },
  {
    id: 1,
    name: "Online Testing System",
    description:"A web-based system that enables online examinations through internet or intranet using computer systems. The system provides automated evaluation, real-time results, and intelligent answer processing capabilities.",
    technologies: "PHP, Html, CSS, JavaScript, Bootstrap, MySQL",
    image: etest,
    github: "https://github.com/sarthak-wq/ETest-System",
  },
  {
    id: 2,
    name: "Drowsiness Detector",
    description:"An efficient real-time drowsiness detection system to prevent road accidents caused by driver fatigue. It uses computer vision techniques to monitor driver's facial features and alerts them when signs of drowsiness are detected.",
    technologies: "Matlab, Voila Jones Algorithm",
    image: dds,
    github: "https://github.com/sarthak-wq/Drowsiness-Detector",
  },
  // {
  //   id: 4,
  //   name: "AI Course Advisor",
  //   technologies: "MERN Stack, Llama-70B",
  //   image: employeeMSImage,
  //   github: "https://github.com/sarthak-wq",
  // },
  // {
  //   id: 5,
  //   name: "Donation & Volunteer Management System",
  //   technologies: "Java, MySQL, Swing, JDBC",
  //   image: employeeMSImage,
  //   github: "https://github.com/sarthak-wq",
  // }
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
              <p className="text-white-400 mb-4 text-sm">{project.description}</p>
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
