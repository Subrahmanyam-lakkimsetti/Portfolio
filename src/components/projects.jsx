import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'CineRave',
    image: '/Cinerave1.png',
    description:
      'CineRave is a dynamic movie review platform built with the MERN stack, where users can explore movie details powered by a custom API. Users can rate and comment on movies directly on their individual pages. The app offers an engaging and interactive experience for cinema lovers. Designed for performance and user-friendliness, CineRave blends backend power with sleek frontend design.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Subrahmanyam-lakkimsetti/CIneRave',
    live: 'https://c-ine-rave-subrahmanyam-lakkimsettis-projects.vercel.app/',
  },
  {
    title: 'Food Bridge',
    image: '/food-app.png',
    description:
      'FoodBridge is a food donation platform connecting supermarkets and restaurants with NGOs to reduce food waste and help communities in need. Built with a focus on social impact, the website enables donors to list surplus food and allows NGOs to request and receive it efficiently. FoodBridge simplifies the donation process while promoting sustainability and compassion.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Subrahmanyam-lakkimsetti/FOOD_DONATION',
    live: 'https://food-donation-one.vercel.app/',
  },
  {
    title: 'CaseEase Mobile App',
    image: '/case-main.jpg',
    description:
      'CaseEase is a Kotlin-based legal management app designed for seamless interaction between clients and lawyers. It allows lawyers to assign and manage cases with detailed information, while clients can track their case status and connect with available legal professionals. With Firebase as the backend, CaseEase ensures real-time data sync and secure access for both user roles. The app blends modern Android features for an intuitive and professional user experience.',
    tech: ['Kotlin', 'Firebase'],
    github: 'https://github.com/your/caseease',
    live: 'https://caseease.live',
  },
  {
    title: 'GrowPath',
    image: '/club.png', // Add the image URL for Entrepreneur Club
    description:
      'Entrepreneur Club is a Laravel-based web platform designed to foster innovation and collaboration among student entrepreneurs. It features user registration, event management, startup showcases, and mentorship connections to support budding innovators. The system promotes networking, knowledge sharing, and visibility for student-led ventures. Built with clean architecture, it offers a secure and scalable experience for club members.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    github: 'https://github.com/Subrahmanyam-lakkimsetti/GrowPath',
    live: 'https://entrepreneurclub.live',
  },
  // Add more projects...
];

const floatingBubbles = [
  {
    name: 'PHP',
    color: 'bg-green-600',
    x: null,
    y: [0, -30, 0],
    position: 'bottom-10 right-2',
  },
  {
    name: 'Laravel',
    color: 'bg-emerald-600',
    x: [0, 40, 0],
    y: null,
    position: '-top-24 right-0',
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 max-w-screen-2xl mx-auto relative"
    >
      {/* Floating Bubbles for Skills */}
      {floatingBubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className={`absolute ${bubble.position} w-[110px] h-[110px] ${bubble.color} text-white flex items-center justify-center text-sm md:text-base font-bold rounded-full shadow-lg opacity-90`}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: bubble.x || 0,
            y: bubble.y || 0,
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'easeInOut',
          }}
        >
          {bubble.name}
        </motion.div>
      ))}

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      {/* Project Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => setSelected(project)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="cursor-pointer bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 hover:scale-105 transition-transform relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">
                {project.description.slice(0, 60)}...
              </p>
            </div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 bg-black/40 transition-opacity duration-300 rounded-xl">
              <span className="text-white text-lg font-semibold">See More</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-[#1a1a1a] text-white rounded-xl shadow-2xl max-w-2xl w-full relative p-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="rounded-xl w-full h-60 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {selected.title}
              </h3>
              <p className="text-gray-300 mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600/30 text-sm px-3 py-1 rounded-full border border-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selected.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm bg-white/10 border border-white/20 px-4 py-2 rounded hover:bg-purple-600 transition-all"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={selected.live}
                  target="_blank"
                  className="flex items-center gap-2 text-sm bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition-all"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
