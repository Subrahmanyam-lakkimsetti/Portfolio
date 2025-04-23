import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const educationDetails = [
  {
    title: 'Lovely Professional University',
    degree: 'Computer Science and Engineering',
    period: '2022 – 2026',
    cgpa: 'CGPA: 7.16',
    location: 'Jalandhar, Punjab',
    logo: '/lpu.png',
  },
  {
    title: 'Sri Chaitanya Junior College',
    degree: '12th with Science',
    period: '2020 – 2022',
    cgpa: 'Percentage: 91%',
    location: 'Andhra Pradesh, India',
    logo: 'sri.jpg',
  },
  {
    title: 'ZPHS, I. Polavaram',
    degree: 'Marticulation',
    period: '2019 – 2020',
    cgpa: 'Percentage: 93%',
    location: 'I. Polavaram, Andhra Pradesh',
    logo: 'high.jpg',
  },
];

const bubble = [
  {
    name: 'JavaScript',
    color: 'bg-pink-600',
    x: [0, -20, 0],
    y: null,
    position: ' right-60 bottom-50',
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-12 overflow-x-clip bg-gradient-to-b relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 text-white"
      >
        Education Journey
      </motion.h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Timeline line - centered */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        />

        {educationDetails.map((edu, index) => (
          <motion.div
            key={index}
            className={`flex mb-16 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative w-full ">
              {/* Timeline dot - perfectly centered on the line */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.3,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>
              </div>

              {/* Education card - positioned to alternate sides */}
              <div className={`relative ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  className={`p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-gradient-to-b from-white/5 to-white/10 shadow-xl flex items-center gap-4 ${
                    index % 2 === 0 ? 'mr-160' : 'ml-160'
                  }`}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.4)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={edu.logo}
                    alt={`${edu.title} logo`}
                    className="w-16 h-16 object-contain rounded-full border border-white/20 shadow"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-1">
                      {edu.title}
                    </h3>
                    <p className="text-lg text-white mb-1">{edu.degree}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                      <span className="text-sm bg-purple-900/50 text-purple-200 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                      <span className="text-sm bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full">
                        {edu.cgpa}
                      </span>
                      <span className="text-sm text-gray-300 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {bubble.map((bubble, index) => (
        <motion.div
          key={index}
          className={`absolute ${bubble.position} w-[100px] h-[100px] ${bubble.color} text-white flex items-center justify-center text-xs font-semibold rounded-full shadow-xl opacity-80 z-10`}
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
    </section>
  );
};

export default Education;
