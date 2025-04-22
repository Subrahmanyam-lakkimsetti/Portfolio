// components/FloatingBubble.jsx
import { motion } from 'framer-motion';

const FloatingBubble = ({
  name,
  color,
  className,
  x = [0, -20, 0],
  y = null,
}) => {
  return (
    <motion.div
      className={`absolute ${className} w-[90px] h-[90px] ${color} text-white flex items-center justify-center text-xs md:text-sm font-bold rounded-full shadow-lg opacity-90 z-0`}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x || 0, y: y || 0 }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: 'easeInOut',
      }}
    >
      {name}
    </motion.div>
  );
};

export default FloatingBubble;
