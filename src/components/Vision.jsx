export default function Vision() {
  const visions = [
    {
      title: "Scalable Public Infrastructure",
      desc: "Building robust, mobile-first financial and administrative infrastructures that handle edge cases seamlessly, extending enterprise-grade tech to government and civic layers."
    },
    {
      title: "Localized Solutions",
      desc: "Leveraging state-of-the-art tech stacks not merely for aesthetics, but to solve ground-level problems in fragmented markets—from automated compliance checks to optimized schedule syncing."
    },
    {
      title: "The Tech Backbone",
      desc: "Developing the architecture for the next generation of enterprises. We are pushing past minimum viable products into highly secure, performant ecosystems."
    }
  ];

  return (
    <section id="vision" className="py-24 px-6 border-t border-[#333] bg-[#000]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight text-center">The Vision Forward</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((v, i) => (
            <div key={i} className="flex flex-col border border-[#333] bg-[#0a0a0a] rounded-xl p-8 group hover:border-[#666] transition-colors duration-300">
              <div className="w-12 h-12 rounded-full border border-[#333] bg-[#111] flex items-center justify-center text-white font-bold mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                0{i + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{v.title}</h3>
              <p className="text-[#a1a1aa] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
