import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

import memexlensImage from '../../assets/memexlens.png';
import galleryImage from '../../assets/gallery.png';
import awsImage from '../../assets/aws.png';
import etestImage from '../../assets/etest.jpg';
import ddsImage from '../../assets/dds.jpg';
import chatbotImage from '../../assets/chatbot.jpg';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string;
  image: string;
  github: string;
  website?: string;
}

const projects: Project[] = [
  {
    id: 4,
    name: 'Semantic Browsing History',
    description:
      'A Chrome extension for natural-language search of your browsing history, powered by Flask, PostgreSQL, Gemini, and Pinecone, with a Next.js UI.',
    technologies: 'Python, Google Cloud Run, Docker, Pinecone, PostgreSQL, Flask, Gemini, Next.js',
    image: memexlensImage,
    github: 'https://github.com/AgentHacks/MemExLens_Server',
  },
  {
    id: 5,
    name: 'Personal Photo Gallery',
    description:
      'A cloud-based photo gallery (React, Node.js, Express) on Firestore and Google Cloud Storage, deployed to Google Cloud with GitHub Actions CI/CD.',
    technologies: 'Node.js, Google Cloud Run, Firestore, Material UI, React, Express, shadcn/ui, Cloud Storage, App Engine, GitHub Actions',
    image: galleryImage,
    github: 'https://github.com/sarthak-deshmukh1999/galleryserver',
    website: 'https://galleryapp-457905.uc.r.appspot.com/gallery',
  },
  {
    id: 6,
    name: 'AWS Cloud Infrastructure',
    description:
      'Highly available, secure AWS infrastructure provisioned with Terraform and automated via GitHub Actions, using IAM, KMS, load balancers, and auto scaling.',
    technologies: 'Packer, Terraform, EC2, Load Balancer, Auto Scaler, AWS, IAM, KMS, Secrets Manager, Route 53, GitHub Actions',
    image: awsImage,
    github: 'https://github.com/SarthakOrg/tf-aws-infra',
  },
  {
    id: 1,
    name: 'Online Testing System',
    description:
      'A web-based system for online examinations over internet or intranet, with automated evaluation, real-time results, and intelligent answer processing.',
    technologies: 'PHP, HTML, CSS, JavaScript, Bootstrap, MySQL',
    image: etestImage,
    github: 'https://github.com/sarthak-wq/ETest-System',
  },
  {
    id: 2,
    name: 'Drowsiness Detector',
    description:
      'A real-time drowsiness detector to prevent road accidents from driver fatigue, using computer vision to read facial features and alert the driver.',
    technologies: 'Matlab, Viola-Jones Algorithm',
    image: ddsImage,
    github: 'https://github.com/sarthak-wq/Drowsiness-Detector',
  },
  {
    id: 3,
    name: 'AI Course Advisor',
    description:
      'An AI course-registration platform that helps students pick courses aligned with their academic goals and career plans.',
    technologies: 'MERN Stack, Llama-70B',
    image: chatbotImage,
    github: 'https://github.com/sarthak-wq/enrollai',
    website: 'https://enrollfrontend.vercel.app/',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="section container" id="project">
      <div className="head" data-reveal>
        <h2 className="head__title">What I&rsquo;ve shipped</h2>
      </div>

      <div className="work__grid">
        {projects.map((project, i) => (
          <article className="work__item" key={project.id} data-reveal style={{ '--i': (i % 2) } as React.CSSProperties}>
            <div className="work__shot">
              <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
            </div>
            <h3 className="work__name">{project.name}</h3>
            <p className="work__tech">{project.technologies}</p>
            <p className="work__desc">{project.description}</p>
            <div className="work__links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="icon" aria-hidden="true" /> GitHub
              </a>
              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="icon" aria-hidden="true" /> Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
