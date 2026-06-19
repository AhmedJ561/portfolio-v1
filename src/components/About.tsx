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
          className="section-heading text-4xl md:text-5xl font-extrabold tracking-wide mb-4"
        >
          About Me
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="section-paragraph max-w-2xl mx-auto" style={{ color: '#9a9ab0' }}
        >
          Results-driven BSSE graduate specializing in Flutter and
          cross-platform mobile application development. Skilled in building
          responsive, user-friendly, and scalable mobile applications using
          Flutter and Dart.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="section-paragraph max-w-2xl mx-auto mt-4 text-gray-300"
        >
          Strong understanding of Firebase, REST APIs, state management and
          authentication. Additional experience with Next.js, NestJS, MERN
          stack, and full-stack web development. Passionate about continuous
          learning, problem-solving, and developing real-world software
          solutions.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
