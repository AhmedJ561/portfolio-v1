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
      className="p-6 rounded-xl transition-all duration-300"
      style={{ background: 'linear-gradient(135deg, #16161f 0%, #1c1c2a 100%)', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}    >
      <div className="relative h-48 overflow-hidden mb-4 rounded-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: '#c9a84c' }}>{project.title}</h3>
      <p className="mb-4" style={{ color: '#9a9ab0', fontSize: '0.9rem', lineHeight: 1.7 }}>{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-sm font-medium px-3 py-1 rounded-full"
            style={{ background: 'rgba(201,168,76,0.12)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.25)' }}
          >
            {tech}
          </span>
        ))}
      </div>
      <button
        onClick={() => onViewDetails(project)}
        className="w-full font-bold py-2 rounded-full shadow-md transition-all duration-300 hover:scale-[1.03]"
        style={{ background: 'linear-gradient(135deg, #c9a84c, #f0c860, #a07830)', color: '#0a0a10', boxShadow: '0 3px 16px rgba(201,168,76,0.3)' }}
      >
        <FaEye className="mr-2 inline-block" /> View Details
      </button>
    </motion.div>
  );
};

export default ProjectCard;
