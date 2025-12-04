import { stats } from '@/data/site';

export default function StatsSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-800 to-secondary-800">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl mb-3 text-accent-100">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-white/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
