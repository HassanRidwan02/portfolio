import { motion } from 'framer-motion';

export default function Contact() {
  const contacts = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Hotline",
      value: "+2347067307027",
      link: "+2347067307027"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      title: "LinkedIn",
      value: "Hassan Ridwan",
      link: "https://www.linkedin.com/in/hassanridwan02/"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      title: "WhatsApp",
      value: "07067307027",
      link: "https://wa.link/kkr4tk"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 border-t border-[#333] bg-[#020202] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[100px] pointer-events-none rounded-t-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Let's Build It.</h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
            Ready to architect the next scalable system or discuss a potential venture? Reach out instantly via your preferred channel.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, i) => (
             <motion.a
                key={contact.title}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-col items-center p-8 bg-[#0a0a0a] border border-[#333] rounded-2xl hover:border-blue-500/50 hover:bg-[#111] transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-black"
              >
                <div className="w-14 h-14 bg-[#1a1a1a] border border-[#333] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                <p className="text-[#a1a1aa] group-hover:text-gray-300 transition-colors text-center">{contact.value}</p>
             </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
