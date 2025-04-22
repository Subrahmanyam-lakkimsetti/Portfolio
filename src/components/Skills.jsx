import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiKotlin,
  SiMysql,
} from 'react-icons/si';

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 color="#E44D26" size={32} /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#264de4" size={32} /> },
      { name: 'JavaScript', icon: <FaJs color="#F0DB4F" size={32} /> },
      { name: 'React', icon: <FaReact color="#61DBFB" size={32} /> },
      { name: 'Tailwind', icon: <SiTailwindcss color="#38BDF8" size={32} /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs color="#3C873A" size={32} /> },
      { name: 'Express.js', icon: <SiExpress color="#ffffff" size={32} /> },
      { name: 'PHP', icon: <SiPhp color="#8892BF" size={32} /> },
      { name: 'Laravel', icon: <SiLaravel color="#FF2D20" size={32} /> },
      { name: 'Java', icon: <FaJava color="#007396" size={32} /> },
    ],
  },
  {
    title: 'Mobile Development',
    skills: [{ name: 'Kotlin', icon: <SiKotlin color="#7F52FF" size={32} /> }],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" size={32} /> },
      { name: 'Firebase', icon: <SiFirebase color="#FFA611" size={32} /> },
      { name: 'MySQL', icon: <SiMysql color="#00758F" size={32} /> },
    ],
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Git', icon: <FaGitAlt color="#F1502F" size={32} /> },
      { name: 'GitHub', icon: <FaGithub color="#ffffff" size={32} /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-16 px-6 md:px-12 bg-gradient-to-br overflow-hidden"
    >
      {/* 🌟 Floating Skill Bubble */}
      <motion.div
        className="absolute top-10 left-10 w-[90px] h-[90px] bg-blue-500 text-white flex items-center justify-center text-sm font-bold rounded-full shadow-lg opacity-90 z-10"
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
      >
        Kotlin
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl font-bold text-purple-400">My Skills</h2>
        <p className="text-lg text-gray-300 mt-2">
          Technologies I use to craft modern web & mobile experiences ✨
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Tilt
              glareEnable={false}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center w-20 text-sm text-white"
                  >
                    <div className="p-3 bg-black/30 rounded-full">
                      {skill.icon}
                    </div>
                    <p className="mt-2 text-gray-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
