import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import all project images
import memexlensImage from '/assets/memexlens.png';
import galleryImage from '/assets/gallery.png';
import awsImage from '/assets/aws.png';
import etestImage from '/assets/etest.jpg';
import ddsImage from '/assets/dds.jpg';
import chatbotImage from '/assets/chatbot.jpg';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string;
  image: string;
  github: string;
  website?: string;
}

interface ProjectsProps {
  isDarkMode: boolean;
}

const projects: Project[] = [
  {
    id: 4,
    name: "Semantic Browsing History Chrome Extension",
    description: "A Chrome extension for natural language search of browsing history, powered by Flask, PostgreSQL, Gemini GenAI, and Pinecone, with a Next.js UI.",
    technologies: "Python, Google Cloud Run, Docker, Pinecone, PostgreSQL, Flask, Gemini GenAI, Next.js",
    image: memexlensImage,
    github: "https://github.com/AgentHacks/MemExLens_Server"
  },
  {
    id: 5,
    name: "Personal Photo Gallery",
    description: "A cloud-based photo gallery (React, Node.js, Express) with Firestore and Google Cloud Storage, deployed on Google Cloud with GitHub Actions CI/CD.",
    technologies: "Node.js, Google Cloud Run, Firestore, Material UI, React, Express, shadcn/ui, Google Cloud Storage, Google App Engine, GitHub Actions",
    image: galleryImage, 
    github: "https://github.com/sarthak-deshmukh1999/galleryserver"
  },
  {
    id: 6,
    name: "AWS Cloud Infrastructure",
    description: "Highly available and secure AWS infrastructure provisioned with Terraform, automated via GitHub Actions, using IAM, KMS, Load Balancers, and Auto Scaling.",
    technologies: "Packer, Terraform, EC2, Load Balancer, Auto Scaler, AWS, IAM, KMS, Secrets Manager, Route 53, GitHub Actions",
    image: awsImage, 
    github: "https://github.com/SarthakOrg/tf-aws-infra"
  },
  {
    id: 1,
    name: "Online Testing System",
    description: "A web-based system that enables online examinations through internet or intranet using computer systems. The system provides automated evaluation, real-time results, and intelligent answer processing capabilities.",
    technologies: "PHP, Html, CSS, JavaScript, Bootstrap, MySQL",
    image: etestImage,
    github: "https://github.com/sarthak-wq/ETest-System",
  },
  {
    id: 2,
    name: "Drowsiness Detector",
    description: "An efficient real-time drowsiness detection system to prevent road accidents caused by driver fatigue. It uses computer vision techniques to monitor driver's facial features and alerts them when signs of drowsiness are detected.",
    technologies: "Matlab, Voila Jones Algorithm",
    image: ddsImage,
    github: "https://github.com/sarthak-wq/Drowsiness-Detector",
  },
  {
    id: 3,
    name: "AI Course Advisor",
    description: "AI-powered course registration platform simplifies the academic planning process by helping students select courses that align with their academic goals and career aspirations.",
    technologies: "MERN Stack, Llama-70B",
    image: chatbotImage,
    github: "https://github.com/sarthak-wq/enrollai",
    website: "https://enrollfrontend.vercel.app/"
  }
];

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div
      className={`py-20 ${isDarkMode ? 'bg-backgroundDark text-textDark' : 'bg-backgroundLight text-textLight'}`}
      id="project"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-primary animate-fade-in"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative p-6 rounded-lg shadow-lg group overflow-hidden
                ${isDarkMode ? 'bg-cardDark' : 'bg-cardLight'}
                transition-all duration-300 ease-in-out hover:shadow-xl hover-grow
              `}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={index}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-md mb-4 w-full h-48 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="text-2xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-sm font-medium text-textLight dark:text-textDark opacity-80 mb-3">
                {project.technologies}
              </p>
              <p className="text-base leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out hover-lift"
                >
                  <FaGithub /> <span>GitHub</span>
                </a>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-accent hover:bg-yellow-600 text-textLight font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out hover-lift"
                  >
                    <FaExternalLinkAlt /> <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;