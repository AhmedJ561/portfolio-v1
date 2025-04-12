import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <div className="section flex flex-col items-center text-center py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="section-heading text-4xl md:text-5xl font-extrabold tracking-wide mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Skills & Services
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the range of services I offer, from web development to graphic design.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <motion.div variants={itemVariants} className="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-purple-500 dark:text-purple-300">Web Development</h2>
          <p className="text-gray-600 dark:text-gray-300">HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB (MERN Stack)</p>
        </motion.div>
        <motion.div variants={itemVariants} className="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-purple-500 dark:text-purple-300">Android Development</h2>
          <p className="text-gray-600 dark:text-gray-300">Java, XML, Android Studio</p>
        </motion.div>
        <motion.div variants={itemVariants} className="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-purple-500 dark:text-purple-300">Game Development</h2>
          <p className="text-gray-600 dark:text-gray-300">Exploring game development technologies</p>
        </motion.div>
        <motion.div variants={itemVariants} className="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-purple-500 dark:text-purple-300">Graphic Design</h2>
          <p className="text-gray-600 dark:text-gray-300">Blender, Canva, Ibis Paint, SketchUp, Adobe Photoshop</p>
        </motion.div>
        <motion.div variants={itemVariants} className="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-purple-500 dark:text-purple-300">Video Editing</h2>
          <p className="text-gray-600 dark:text-gray-300">Filmora, Capcut</p>
        </motion.div>
        <motion.div variants={itemVariants} className="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-purple-500 dark:text-purple-300">Programming Languages</h2>
          <p className="text-gray-600 dark:text-gray-300">C++, C#, Java, Python, Dart</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
