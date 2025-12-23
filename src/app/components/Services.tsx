import { House, Wrench, Store, FileText, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: House,
    title: 'Diseño de casa habitación',
    description: 'Planos completos para tu casa nueva. Aprovechamos cada metro cuadrado para que tu presupuesto rinda más.',
  },
  {
    icon: Wrench,
    title: 'Remodelaciones y ampliaciones',
    description: 'Dale nueva vida a tu casa. Ampliaciones, segundos pisos, mejoras funcionales que aumentan el valor de tu propiedad.',
  },
  {
    icon: Store,
    title: 'Proyectos comerciales pequeños',
    description: 'Locales comerciales, consultorios, talleres. Diseños prácticos que ayudan a tu negocio a crecer.',
  },
  {
    icon: FileText,
    title: 'Planos y regularización',
    description: 'Trámites, permisos y regularización de construcciones. Te acompañamos en todo el proceso legal.',
  },
  {
    icon: MessageCircle,
    title: 'Asesoría arquitectónica',
    description: 'Orientación profesional antes de construir o remodelar. Evita errores costosos con nuestra experiencia.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            ¿En qué te puedo ayudar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Servicios diseñados para que tu proyecto sea una realidad, sin complicaciones ni gastos innecesarios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#C87960] rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/523343591191"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C87960] text-white px-8 py-4 rounded-lg hover:bg-[#B56850] transition-colors"
          >
            <MessageCircle size={20} />
            Consulta sin compromiso
          </a>
        </div>
      </div>
    </section>
  );
}
