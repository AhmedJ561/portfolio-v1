import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { FileDown, Send, FolderOpen } from "lucide-react";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.1,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.2,
      },
    },
  };

  const socialItemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 opacity-80"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=70')] bg-cover opacity-10 mix-blend-overlay"></div>

      {/* Glass panel */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={itemVariants}
        >
          <motion.h2
            className="text-purple-300 font-medium mb-2"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            variants={itemVariants}
          >
            Ahmed Jamil
          </motion.h1>
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-purple-200 mb-6"
            variants={itemVariants}
          >
            Software Engineer & Creative Developer
          </motion.h3>
          <motion.p
            className="text-gray-300 max-w-xl mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Enthusiastic BSSE student with a passion for web development, game
            development, and Android app development. Skilled in Blender, Canva,
            Photoshop, and eager to explore emerging technologies.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            {/* View Projects */}
            <motion.a
              href="#projects"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FolderOpen className="w-4 h-4" />
              View Projects
            </motion.a>

            {/* Contact Me */}
            <motion.button
              className="flex items-center gap-2 border border-purple-400 text-purple-200 hover:bg-purple-900/30 rounded-full px-6 py-2 font-medium shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Send className="w-4 h-4" />
              Contact Me
            </motion.button>

            {/* Download Resume */}
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-5 mt-8 justify-center md:justify-start"
            variants={socialVariants}
          >
            <motion.a
              href="https://github.com/AhmedJ561"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-full hover:bg-purple-700/50 transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ y: -5 }}
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ahmed-jamil-a30975280/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-full hover:bg-purple-700/50 transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ y: -5 }}
            >
              <Linkedin className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="mailto:ahmedjamil561@gmail.com"
              className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-full hover:bg-purple-700/50 transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ y: -5 }}
            >
              <Mail className="w-5 h-5 text-white" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div className="relative" variants={imageVariants}>
          <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-purple-600 to-violet-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 backdrop-blur-sm shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Ahmed Jamil"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <button
          className="rounded-full border border-purple-400/30 bg-gray-900/30 backdrop-blur-sm hover:bg-purple-900/30 p-3"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <ArrowDown className="h-5 w-5 text-purple-200" />
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
