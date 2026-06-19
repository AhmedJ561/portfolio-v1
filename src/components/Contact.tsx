import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "https://portfolio-email-server-seven.vercel.app";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/send-email`, formData);
      if (response.status === 200) {
        toast.success(
          "✅ Message sent! Check your inbox — a confirmation email is on its way.",
          { autoClose: 5000 }
        );
        form.reset();
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error(
        "❌ Could not reach the email server. Make sure the backend is running on port 5000.",
        { autoClose: 6000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen p-4 md:p-8 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(180deg, #0f0f17 0%, #12121a 100%)' }}>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 section-heading">
            Get In Touch
          </h2>
          <p style={{ color: '#9a9ab0' }} className="max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat about technology and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="backdrop-blur-md p-6 rounded-xl" style={{ background: 'rgba(22,22,32,0.8)', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}>
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
                      className="w-full p-2.5 rounded-lg outline-none transition-all" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#e8e8f0' }}
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
                      className="w-full p-2.5 rounded-lg outline-none transition-all" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#e8e8f0' }}
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
                    className="w-full p-2.5 rounded-lg outline-none transition-all" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#e8e8f0' }}
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
                  className="w-full p-2.5 rounded-lg outline-none resize-none transition-all" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#e8e8f0' }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-bold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: 'linear-gradient(135deg, #c9a84c, #f0c860, #a07830)', color: '#0a0a10', boxShadow: '0 4px 20px rgba(201,168,76,0.3)' }}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="backdrop-blur-md p-6 rounded-xl h-full flex flex-col" style={{ background: 'rgba(22,22,32,0.8)', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}>
              <h3 className="text-xl font-semibold mb-6 text-center">
                Contact Information
              </h3>

              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <FaEnvelope className="h-5 w-5 mr-3 mt-0.5" style={{ color: '#c9a84c' }} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:ahmedjamil561@gmail.com"
                      className="hover:text-yellow-400 transition-colors" style={{ color: '#9a9ab0' }}
                    >
                      ahmedjamil561@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhoneAlt className="h-5 w-5 mr-3 mt-0.5" style={{ color: '#c9a84c' }} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+92336-9266-340"
                      className="hover:text-yellow-400 transition-colors" style={{ color: '#9a9ab0' }}
                    >
                      +92336-9266-340
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t my-6" style={{ borderColor: 'rgba(201,168,76,0.15)' }} />

              <div className="space-y-6">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Ahmed_Jamil_Software_Engineer_CV.pdf"
                  className="w-full font-semibold py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c', background: 'rgba(201,168,76,0.06)' }}
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </a>

                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ahmed-jamil-a30975280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}
                  >
                    <FaLinkedin className="h-5 w-5" style={{ color: '#c9a84c' }} />
                  </a>
                  <a
                    href="https://github.com/AhmedJ561"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}
                  >
                    <FaGithub className="h-5 w-5" style={{ color: '#c9a84c' }} />
                  </a>
                  <a
                    href="mailto:ahmedjamil561@gmail.com"
                    className="p-2 rounded-full transition-all duration-300"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}
                  >
                    <FaEnvelope className="h-5 w-5" style={{ color: '#c9a84c' }} />
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
