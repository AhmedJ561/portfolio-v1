import React from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { Project } from "../types/Project";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-600/20 transition-transform duration-300"
    >
      <div className="relative h-48 overflow-hidden mb-4 rounded-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-purple-300">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <button
        onClick={() => onViewDetails(project)}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out"
      >
        <FaEye className="mr-2 inline-block" /> View Details
      </button>
    </motion.div>
  );
};

export default ProjectCard;
