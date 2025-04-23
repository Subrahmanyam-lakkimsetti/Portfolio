import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // You can replace this with actual submission logic
  };

  return (
    <section id="contact" className="py-10 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Let’s build something amazing together!
        </h2>
        <p className="text-gray-300 text-lg">
          I’m currently open to opportunities — full-time or collaboration. Feel
          free to reach out and let’s talk!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-12 shadow-xl flex flex-col md:flex-row gap-10"
      >
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-semibold text-white">
            Contact Information
          </h3>
          <p className="text-gray-300">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly hello.
          </p>

          <div className="text-white">
            <div className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-purple-400" />
              <span>lsubrahmanyam1234@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-lg mt-4">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Jalandhar, Punjab, India</span>
            </div>
            <div className="flex items-center gap-3 text-lg mt-4">
              <FaGithub className="text-purple-400" />
              <a
                href="https://github.com/Subrahmanyam-lakkimsetti"
                className="hover:text-purple-400 transition"
                target="_blank"
                rel="noreferrer"
              >
                Git Hub
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg mt-4">
              <FaLinkedin className="text-purple-400" />
              <a
                href="https://www.linkedin.com/in/subrahmanyam-lakkimsetti/"
                className="hover:text-purple-400 transition"
                target="_blank"
                rel="noreferrer"
              >
                Linked In
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2">
          <h3 className="text-3xl font-semibold text-white mb-6">
            Send Me a Message
          </h3>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-white mb-1">Name</label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your professional email"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-white mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-medium shadow-lg hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-white text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
              <p>Your message has been sent. I’ll get back to you shortly!</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
