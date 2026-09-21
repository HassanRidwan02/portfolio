export default function Narrative() {
  return (
    <section className="py-24 px-6 border-t border-[#333] bg-[#000]">
      <div className="max-w-4xl mx-auto">
        <div className="border border-[#333] bg-[#0a0a0a] rounded-2xl p-10 md:p-16 relative overflow-hidden">
          {/* Subtle gradient effect */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-[0.02] rounded-full blur-3xl"></div>
          
          <h2 className="text-sm font-semibold text-[#888] tracking-widest uppercase mb-6">The Philosophy</h2>
          
          <div className="space-y-6 text-xl md:text-2xl text-[#a1a1aa] leading-relaxed">
            <p>
              Technology shouldn't just be functional; it must be transformative. I look at fragmented systems and build bridges.
            </p>
            <p className="text-white font-medium">
              I don't just see tickets. I see an opportunity to turn complex bottlenecks into elegant, scalable software architecture.
            </p>
            <p>
              Whether it's an enterprise compliance engine or consumer-facing fintech logic, my focus remains unchanged: optimal execution, robust state management, and an uncompromising, pixel-perfect user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
