import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaPlay } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

export default function Hero() {
  const [output, setOutput] = useState('Ready to compile...');
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput('Compiling...');
    
    // Simulating a "Warm Welcome" terminal output
    setTimeout(() => {
      setOutput(
        "Welcome to my portfolio, visitor! 👋\n" +
        "I'm Aftab, a CS Engineering Student and Full Stack Developer.\n" +
        "I'm thrilled to have you here. Let's build something great together!"
      );
      setIsRunning(false);
    }, 1200);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="max-w-6xl w-full bg-[#0a0c0d] border border-white/5 rounded-3xl p-8 md:p-16 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-8 items-end">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 w-full max-w-2xl">
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">Hello, I am Aftab</span>
            
            <div className="h-[360px] bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 shadow-lg font-mono text-xs flex flex-col">
              <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-1.5 items-center">
                   <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                   <span className="text-stone-400 text-xs ml-2">welcome.asm</span>
                </div>
                <button onClick={runCode} className="flex items-center gap-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded transition">
                  <FaPlay size={10} /> <span className="text-[10px] font-bold">RUN</span>
                </button>
              </div>
              
              <div className="p-4 text-stone-300 flex-grow">
                <p><span className="text-blue-400">section</span> .text</p>
                <p><span className="text-yellow-300">global</span> _start</p>
                <p><span className="text-green-400">_start:</span></p>
                <p className="pl-4">mov eax, 1 ; print welcome message</p>
                <p className="pl-4">int 0x80</p>
              </div>

              {/* Terminal displaying the warm welcome */}
              <div className="h-[100px] bg-black/50 p-3 border-t border-white/10 overflow-y-auto">
                <p className="text-emerald-500 font-bold">$ nasm -f elf64 welcome.asm</p>
                <p className={`text-white whitespace-pre-line ${isRunning ? 'animate-pulse' : ''}`}>{output}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="w-full md:w-[320px]">
            <div className="h-[360px] bg-[#121416] border border-white/5 rounded-2xl p-6 shadow-xl flex flex-col">
              <p className="text-stone-400 text-xs uppercase tracking-widest mb-8">Skilled In</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                 {[
                   { icon: SiCplusplus, name: 'C++' }, { icon: FaHtml5, name: 'HTML' }, { icon: FaCss3Alt, name: 'CSS' },
                   { icon: FaReact, name: 'React' }, { icon: FaNodeJs, name: 'Node' }, { icon: FaDatabase, name: 'MongoDB' }
                 ].map((skill, i) => (
                   <div key={i} className="flex items-center gap-3 group">
                     <div className="w-10 h-10 bg-[#1a1d20] rounded-lg border border-white/5 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                       <skill.icon size={18} />
                     </div>
                     <span className="text-xs text-stone-400 font-mono">{skill.name}</span>
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}