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
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl mx-4 md:mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
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
        <h2 className="text-2xl font-bold mb-2 text-purple-300">
          {project.title}
        </h2>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">
              About this project
            </h3>
            <p className="text-gray-400 mb-4">{project.longDescription}</p>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: any, index: any) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.features && (
              <>
                <h3 className="text-lg font-semibold mb-2 text-purple-300">
                  Key Features
                </h3>
                <ul className="list-disc pl-5 text-gray-400">
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
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-full shadow-md text-center hover:shadow-lg transition-transform duration-300 ease-in-out"
            >
              <FaExternalLinkAlt className="mr-2 inline-block" /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-700 text-white py-2 rounded-full shadow-md text-center hover:bg-gray-600 hover:shadow-lg transition-transform duration-300 ease-in-out"
            >
              <FaGithub className="mr-2 inline-block" /> View Code
            </a>
          )}
          <button
            onClick={onClose}
            className="flex-1 bg-gray-600 text-white py-2 rounded-full shadow-md hover:bg-gray-500 hover:shadow-lg transition-transform duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
