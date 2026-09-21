const PROJECT_DATA = [
  {
    id: "findme",
    title: "FINDME",
    subtitle: "A Reporting portal for lost and found items",
    description: "Helps Uiversity staff and students to report their belongings, either lost or found",
    link: "https://find-me-inky.vercel.app/",
    tags: ["Education", "Trust", "Architecture"]
  },
  {
    id: "crashnotes",
    title: "Crash Notes",
    subtitle: "AI-Driven Education Synthesizer",
    description: "Automatically generates comprehensive crash courses and structured reading materials on various complex topics for students to accelerate learning.",
    link: "https://crash-notes.vercel.app/",
    tags: ["Education", "Gen-AI", "Performance"]
  },
  {
    id: "splitam",
    title: "SplitAm",
    subtitle: "Collaborative Expense Tracker",
    description: "A financial tool simplifying expenses for roommates and colleagues buying things together. Algorithms efficiently track who owes who without friction.",
    link: "https://split-six-mu.vercel.app/",
    tags: ["Fintech", "Algorithms", "State Management"]
  }
];

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col border border-[#333] bg-[#0a0a0a] rounded-xl p-8 hover:bg-[#111] hover:border-[#666] transition-all duration-300">
      <div className="mb-4">
        <span className="text-xs font-semibold tracking-wider text-[#888] uppercase">{project.subtitle}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-[#a1a1aa] leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs bg-[#1a1a1a] text-[#888] px-3 py-1 rounded-full border border-[#333]">
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center text-sm font-medium text-white hover:text-gray-300 group mt-auto"
      >
        View Live Product
        <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-[#333]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Solutions</h2>
          <p className="text-[#888] text-lg max-w-2xl">
            From algorithmic fintech logic to secure government compliance engines, these platforms leverage modern reactive architectures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECT_DATA.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
