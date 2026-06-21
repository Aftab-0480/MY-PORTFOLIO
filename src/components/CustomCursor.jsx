import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hidden]);

  if (hidden) return null;

  return (
    <motion.div
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: 'spring', damping: 30, mass: 0.2, stiffness: 400 }}
      className="hidden md:block fixed w-6 h-6 border border-indigo-500 rounded-full pointer-events-none z-50 mix-blend-difference"
    />
  );
}