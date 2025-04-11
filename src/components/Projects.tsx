import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import chatflowImage from "../assets/chatflow.png";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  features?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample projects data
  const projects: Project[] = [
    {
      id: "1",
      title: "ChatFlow",
      category: "mobile",
      image: `${chatflowImage}`,
      githubUrl: "https://github.com/AhmedJ561/ChatFlow",
      demoUrl: "https://youtube.com/shorts/0nbugsEB-4E?si=b7573FBIj0zbb0xb",
      description: "A simple chat app semester project",
      technologies: ["Android Studio", "XML", "Java", "Firebase"],
    },
    // Add more projects as needed
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "game", name: "Game Development" },
    { id: "ai", name: "AI Projects" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
            Project Showcase
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in web development,
            mobile apps, game design, and more.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-transform duration-300 ease-in-out transform ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
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
              <h3 className="text-xl font-semibold mb-2 text-purple-300">
                {project.title}
              </h3>
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
                onClick={() => openProjectModal(project)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <FaEye className="mr-2 inline-block" /> View Details
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl mx-4 md:mx-auto relative">
              <button
                onClick={closeProjectModal}
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
                {selectedProject.title}
              </h2>
              <p className="text-gray-400 mb-4">
                {selectedProject.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">
                    About this project
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {selectedProject.longDescription}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {selectedProject.features && (
                    <>
                      <h3 className="text-lg font-semibold mb-2 text-purple-300">
                        Key Features
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-full shadow-md text-center hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    <FaExternalLinkAlt className="mr-2 inline-block" /> Live
                    Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 text-white py-2 rounded-full shadow-md text-center hover:bg-gray-600 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    <FaGithub className="mr-2 inline-block" /> View Code
                  </a>
                )}
                <button
                  onClick={closeProjectModal}
                  className="flex-1 bg-gray-600 text-white py-2 rounded-full shadow-md hover:bg-gray-500 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
