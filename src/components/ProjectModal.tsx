import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../types/Project";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
      <div className="p-8 rounded-2xl shadow-2xl w-full max-w-4xl mx-4 md:mx-auto relative" style={{ background: 'linear-gradient(135deg, #16161f, #1c1c2a)', border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}>
        <button
          onClick={onClose}
          style={{ color: '#9a9ab0' }}
          className="absolute top-4 right-4 hover:text-yellow-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#c9a84c' }}>
          {project.title}
        </h2>
        <p className="mb-4" style={{ color: '#9a9ab0' }}>{project.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
             <h3 className="text-lg font-semibold mb-2" style={{ color: '#c9a84c' }}>
              About this project
            </h3>
             <p className="mb-4" style={{ color: '#9a9ab0' }}>{project.longDescription}</p>
             <h3 className="text-lg font-semibold mb-2" style={{ color: '#c9a84c' }}>
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: any, index: any) => (
                <span
                  key={index}
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{ background: 'rgba(201,168,76,0.12)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.25)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.features && (
              <>
                 <h3 className="text-lg font-semibold mb-2" style={{ color: '#c9a84c' }}>
                  Key Features
                </h3>
                <ul className="list-disc pl-5" style={{ color: '#9a9ab0' }}>
                  {project.features.map((feature: any, index: any) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 font-bold py-2 rounded-full shadow-md text-center transition-all duration-300 hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg, #c9a84c, #f0c860, #a07830)', color: '#0a0a10', boxShadow: '0 4px 16px rgba(201,168,76,0.3)' }}
            >
              <FaExternalLinkAlt className="mr-2 inline-block" /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-full shadow-md text-center transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', color: '#b8bec7' }}
            >
              <FaGithub className="mr-2 inline-block" /> View Code
            </a>
          )}
          <button
            onClick={onClose}
            style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', color: '#9a9ab0' }}
            className="flex-1 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
