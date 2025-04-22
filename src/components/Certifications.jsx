import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  {
    title: 'Cloud Computing',
    image: '/nptel.jpg',
    description: 'Achieved certification in Cloud Computing By NPTEL.',
    issuingOrganization: 'NPTEL',
    date: '2024',
    link: 'https://www.aws.training/Certification',
    Certificate: '/Cloud.png', // Make sure the path is correct
  },
  {
    title: 'Mastering Data Structures & Algorithms using C and C++',
    image: '/udemy.png', // Replace with actual image path
    description: 'Completed DSA course using C and C++.',
    issuingOrganization: 'Udemy',
    date: '2024',
    link: 'https://www.udemy.com/course/datastructurescncpp/',
    Certificate: '/DSA.png',
  },
  {
    title: 'Server-side JavaScript With Node JS',
    image: '/coursera.png',
    description: 'Completed backend development course using Node.js.',
    issuingOrganization: 'Coursera',
    date: '2024',
    link: 'https://www.coursera.org/learn/server-side-nodejs',
    Certificate: '/node.png',
  },
];

const bubbles = [
  {
    name: 'Express JS',
    color: 'bg-purple-600',
    x: [0, -20, 0],
    y: null,
    position: ' left-50',
  },
];

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Certificates
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-white/10 p-6 rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:translate-y-[-10px] h-110">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold text-purple-400 mt-4">
                  {certificate.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  {certificate.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-bold text-white">
                    {certificate.issuingOrganization}
                  </p>
                  <p className="text-sm text-white mt-2">{certificate.date}</p>
                  {certificate.Certificate && (
                    <button
                      onClick={() => openModal(certificate.Certificate)}
                      className="mt-4 text-purple-400 hover:underline"
                    >
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal (only image) */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-3xl w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentImage}
                  alt="Certificate"
                  className="rounded-xl w-full max-h-[80vh] object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-purple-400"
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {bubbles.map((bubble, index) => (
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

export default Certificates;
