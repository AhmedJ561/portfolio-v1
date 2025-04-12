import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="section flex flex-col items-center text-center py-16 px-4 md:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-12"
      >
        <motion.h1
          variants={itemVariants}
          className="section-heading text-4xl md:text-5xl font-extrabold tracking-wide mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          About Me
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="section-paragraph max-w-2xl mx-auto text-gray-300"
        >
          I am Ahmed Jamil, a driven BSSE (Bachelor of Science in Software Engineering) student currently in the 6th semester at ARID University. I have a strong foundation in web development and am eager to expand my knowledge in game development, Android app development, and other emerging technologies.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="section-paragraph max-w-2xl mx-auto mt-4 text-gray-300"
        >
          My skills include Blender, Web Development (MERN Stack), Flutter, Android Development, Canva, Ibis Paint, SketchUp, Adobe Photoshop, ASP.NET, Filmora, Capcut, and programming languages such as C++, C#, Java, Python, and Dart.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
