import { motion } from "framer-motion";
import {
  FaGlobe,
  FaMobileScreen,
  FaGamepad,
  FaPalette,
  FaClapperboard,
  FaCode,
} from "react-icons/fa6";
const serviceItems = [
  {
    title: "Web Development",
    desc: "HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB (MERN Stack)",
    icon: <FaGlobe color="#D4AF37" />,
  },
  {
    title: "Android Development",
    desc: "XML, Android Studio",
    icon: <FaMobileScreen color="#D4AF37" />,
  },
  {
    title: "Game Development",
    desc: "Exploring game development technologies",
    icon: <FaGamepad color="#D4AF37" />,
  },
  {
    title: "Graphic Design",
    desc: "Blender, Canva, Ibis Paint, SketchUp, Adobe Photoshop",
    icon: <FaPalette color="#D4AF37" />,
  },
  {
    title: "Video Editing",
    desc: "Filmora, Capcut",
    icon: <FaClapperboard color="#D4AF37" />,
  },
  {
    title: "Programming Languages",
    desc: "C++, C#, Python, Dart",
    icon: <FaCode color="#D4AF37" />,
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        <h1 className="section-heading text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
          Skills & Services
        </h1>
        <p className="section-paragraph max-w-2xl mx-auto">
          Explore the range of services I offer, from web development to graphic
          design.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {serviceItems.map((service) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className="gold-border p-6 rounded-xl transition-all duration-300 hover:scale-105 group"
            style={{
              background: "linear-gradient(135deg, #16161f 0%, #1c1c2a 100%)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
            }}
            whileHover={{
              boxShadow: "0 8px 40px rgba(201,168,76,0.2)",
            }}
          >
            <div className="text-3xl mb-3 flex justify-center items-center">
              {service.icon}
            </div>
            <h2
              className="text-xl font-bold mb-2 tracking-wide"
              style={{ color: "#c9a84c" }}
            >
              {service.title}
            </h2>
            <p
              style={{ color: "#9a9ab0", fontSize: "0.9rem", lineHeight: 1.7 }}
            >
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
