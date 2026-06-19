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
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0a10" }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(184,190,199,0.05) 0%, transparent 50%), linear-gradient(135deg, #0a0a10 0%, #14121e 50%, #0f0e16 100%)",
        }}
      ></div>
      {/* Subtle gold particle shimmer lines */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.015) 40px, rgba(201,168,76,0.015) 41px)",
        }}
      ></div>

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
            style={{
              color: "#b8bec7",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
            className="mb-3"
            variants={itemVariants}
          >
            ✦ Hello, I'm
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{
              background:
                "linear-gradient(135deg, #c9a84c 0%, #f0c860 30%, #e8e8f0 55%, #f0c860 70%, #a07830 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "goldShimmer 5s linear infinite",
            }}
            variants={itemVariants}
          >
            Ahmed Jamil
          </motion.h1>
          <motion.h3
            className="text-xl md:text-2xl font-semibold mb-6"
            style={{ color: "#c4bfa8" }}
            variants={itemVariants}
          >
            Software Engineer & Creative Developer
          </motion.h3>
          <motion.p
            className="max-w-xl mb-8 leading-relaxed"
            style={{ color: "#9a9ab0", lineHeight: 1.8 }}
            variants={itemVariants}
          >
            Enthusiastic BSSE graduate with a passion for web development and
            Android app development, currently exploring DevOps.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            {/* View Projects */}
            <motion.a
              href="#projects"
              style={{
                background:
                  "linear-gradient(135deg, #c9a84c, #f0c860, #a07830)",
                color: "#0a0a10",
                fontWeight: 700,
                boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
              }}
              className="flex items-center gap-2 rounded-full px-6 py-2.5 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 28px rgba(201,168,76,0.55)",
              }}
            >
              <FolderOpen className="w-4 h-4" />
              View Projects
            </motion.a>

            {/* Contact Me */}
            <motion.button
              style={{
                border: "1px solid rgba(201,168,76,0.5)",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.07)",
                fontWeight: 600,
              }}
              className="flex items-center gap-2 rounded-full px-6 py-2.5 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(201,168,76,0.15)",
              }}
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
              download="Ahmed_Jamil_Software_Engineer_CV.pdf"
              style={{
                border: "1px solid rgba(184,190,199,0.4)",
                color: "#b8bec7",
                background: "rgba(184,190,199,0.07)",
                fontWeight: 600,
              }}
              className="flex items-center gap-2 rounded-full px-6 py-2.5 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(184,190,199,0.14)",
              }}
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
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
              className="backdrop-blur-sm p-3 rounded-full transition-all duration-300"
              variants={socialItemVariants}
              whileHover={{ y: -5, boxShadow: "0 0 18px rgba(201,168,76,0.4)" }}
            >
              <Github className="w-5 h-5" style={{ color: "#c9a84c" }} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ahmed-jamil-a30975280/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
              className="backdrop-blur-sm p-3 rounded-full transition-all duration-300"
              variants={socialItemVariants}
              whileHover={{ y: -5, boxShadow: "0 0 18px rgba(201,168,76,0.4)" }}
            >
              <Linkedin className="w-5 h-5" style={{ color: "#c9a84c" }} />
            </motion.a>
            <motion.a
              href="mailto:ahmedjamil561@gmail.com"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
              className="backdrop-blur-sm p-3 rounded-full transition-all duration-300"
              variants={socialItemVariants}
              whileHover={{ y: -5, boxShadow: "0 0 18px rgba(201,168,76,0.4)" }}
            >
              <Mail className="w-5 h-5" style={{ color: "#c9a84c" }} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div className="relative" variants={imageVariants}>
          <div
            className="absolute inset-0 -m-4 rounded-full blur-2xl opacity-50 animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,76,0.4) 0%, rgba(160,120,48,0.1) 70%)",
            }}
          ></div>
          <div
            className="absolute inset-0 -m-2 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #c9a84c, #f0c860, #a07830, #c9a84c)",
              filter: "blur(8px)",
              opacity: 0.4,
            }}
          ></div>
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden backdrop-blur-sm shadow-2xl"
            style={{
              border: "3px solid rgba(201,168,76,0.5)",
              boxShadow:
                "0 0 40px rgba(201,168,76,0.2), inset 0 0 20px rgba(201,168,76,0.05)",
            }}
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
          style={{
            border: "1px solid rgba(201,168,76,0.35)",
            background: "rgba(201,168,76,0.08)",
            backdropFilter: "blur(8px)",
          }}
          className="rounded-full p-3 transition-all duration-300 hover:shadow-lg"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <ArrowDown className="h-5 w-5" style={{ color: "#c9a84c" }} />
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
