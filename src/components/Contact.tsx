import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await axios.post(
        "https://email-server-kappa.vercel.app/send-email",
        formData
      );
      if (response.status === 200) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      toast.error("Error sending email.");
    }
  };

  return (
    <div className="w-full min-h-screen p-4 md:p-8 flex flex-col items-center justify-center bg-background">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <motion.div
        className="w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat about technology and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="backdrop-blur-md bg-card/30 border border-purple-500/20 shadow-xl p-6 rounded-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-2 border border-purple-500/30 focus:border-purple-500 rounded-md bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full p-2 border border-purple-500/30 focus:border-purple-500 rounded-md bg-background/50"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    className="w-full p-2 border border-purple-500/30 focus:border-purple-500 rounded-md bg-background/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={6}
                    className="w-full p-2 border border-purple-500/30 focus:border-purple-500 rounded-md bg-background/50 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                >
                  <FaEnvelope className="mr-2 inline-block" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="backdrop-blur-md bg-card/30 border border-purple-500/20 shadow-xl p-6 rounded-lg h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Contact Information
              </h3>

              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <FaEnvelope className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:ahmedjamil561@gmail.com"
                      className="text-muted-foreground hover:text-purple-400 transition-colors"
                    >
                      ahmedjamil561@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhoneAlt className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+92336-9266-340"
                      className="text-muted-foreground hover:text-purple-400 transition-colors"
                    >
                      +92336-9266-340
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-purple-500/20 my-6" />

              <div className="space-y-6">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="AhmedJamil_Resume.pdf"
                  className="w-full border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/50 text-purple-500 hover:text-white font-medium py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center"
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </a>

                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ahmed-jamil-a30975280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background/50 border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300"
                  >
                    <FaLinkedin className="h-5 w-5 text-purple-500" />
                  </a>
                  <a
                    href="https://github.com/AhmedJ561"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background/50 border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300"
                  >
                    <FaGithub className="h-5 w-5 text-purple-500" />
                  </a>
                  <a
                    href="mailto:ahmedjamil561@gmail.com"
                    className="p-2 rounded-full bg-background/50 border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300"
                  >
                    <FaEnvelope className="h-5 w-5 text-purple-500" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
