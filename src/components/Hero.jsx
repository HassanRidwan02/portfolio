import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 relative">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-900/50 bg-blue-950/20 px-4 py-1.5 text-sm font-medium text-blue-300 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Engineered for the Enterprise
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg"
        >
          I build systems that <br className="hidden md:block" /> solve real problems.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-[#a1a1aa] mb-10 max-w-2xl font-light leading-relaxed"
        >
          Architecting robust solutions for high-performance compliance, financial logic, and seamless synchronization.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#projects" className="bg-white text-black font-semibold py-3.5 px-8 rounded-lg hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Explore My Work
          </a>
          <a href="#contact" className="bg-[#111] border border-[#333] text-white font-medium py-3.5 px-8 rounded-lg hover:bg-[#1a1a1a] hover:border-gray-500 transition-all duration-200">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  )
}
