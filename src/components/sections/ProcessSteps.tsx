import { processSteps } from '@/data/process';
import { FaArrowRight, FaBolt } from 'react-icons/fa';

export default function ProcessSteps() {
  return (
    <section className="section bg-primary-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary-900 mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            5 basit adımda aracınızı satın ve paranızı alın. Tüm süreç çok hızlı ve güvenli!
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Card */}
              <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all h-full">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-3 text-center">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary-900 mb-2 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-primary-600 text-center">
                  {step.description}
                </p>
              </div>

              {/* Arrow (hidden on last item and mobile) */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-full text-accent text-2xl z-10">
                  <FaArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-primary-700 font-semibold mb-4 flex items-center justify-center gap-2">
            <FaBolt className="text-accent" /> Ortalama işlem süresi: <span className="text-accent">2-3 saat</span>
          </p>
          <p className="text-sm text-primary-600">
            * Evrak durumuna göre süre değişiklik gösterebilir
          </p>
        </div>
      </div>
    </section>
  );
}
