import { motion } from 'framer-motion';

export default function Loader() {
  return (
    /* FIX: Set the solid volcanic background (#121416) so the user experiences 
       the correct premium dark theme right from the initial screen mount.
    */
    <div className="fixed inset-0 z-50 bg-[#121416] flex flex-col items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        /* Spinner: Swapped indigo for a pure white layout with a low-opacity white trace */
        className="w-12 h-12 border-4 border-white border-t-white/20 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-4 text-xs font-medium text-stone-400 tracking-widest uppercase font-mono"
      >
        Initializing Architecture...
      </motion.p>
    </div>
  );
}