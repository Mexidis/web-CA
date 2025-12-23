import { Home, ClipboardList, Wrench, Building, MessageCircle, ShieldCheck } from 'lucide-react';

const packages = [
  {
    icon: Home,
    title: 'Diseño Básico de Vivienda',
    features: [
      'Planos arquitectónicos funcionales',
      'Enfoque en construcción por etapas',
      'Revisiones limitadas y claras',
    ],
    price: 'Desde $___ MXN / m²',
    priceNote: '(Precio final según alcance del proyecto)',
    ctaText: 'Solicitar cotización',
    ctaLink: 'https://wa.me/523343591191?text=Hola,%20me%20interesa%20el%20Diseño%20Básico%20de%20Vivienda',
  },
  {
    icon: ClipboardList,
    title: 'Diseño Completo',
    features: [
      'Arquitectónico',
      'Estructural básico',
      'Instalaciones',
      'Acompañamiento durante el proceso',
    ],
    price: 'Desde $___ MXN / m²',
    priceNote: '',
    ctaText: 'Cotizar por WhatsApp',
    ctaLink: 'https://wa.me/523343591191?text=Hola,%20necesito%20una%20cotización%20para%20Diseño%20Completo',
  },
  {
    icon: Wrench,
    title: 'Remodelaciones',
    features: [
      'Baños',
      'Cocinas',
      'Chimeneas',
      'Ampliaciones',
    ],
    price: 'Cotización personalizada',
    priceNote: '(Después de revisión del espacio)',
    ctaText: 'Agendar asesoría',
    ctaLink: 'https://wa.me/523343591191?text=Hola,%20quiero%20agendar%20una%20asesoría%20para%20remodelación',
  },
  {
    icon: Building,
    title: 'Proyectos Comerciales Pequeños',
    features: [
      'Cafeterías',
      'Locales',
      'Espacios educativos',
    ],
    price: 'Cotización personalizada',
    priceNote: '',
    ctaText: 'Hablar con el arquitecto',
    ctaLink: 'https://wa.me/523343591191?text=Hola,%20tengo%20un%20proyecto%20comercial%20y%20necesito%20información',
  },
];

const trustNotes = [
  'Trabajo por etapas y con anticipo',
  'Pagos claros y sin cargos ocultos',
  'Asesoría inicial disponible',
];

export function ServicePackages() {
  return (
    <section id="paquetes" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Paquetes de servicios claros y sin sorpresas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada proyecto es distinto. Por eso trabajo con paquetes flexibles y cotizaciones personalizadas según tus necesidades y presupuesto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="w-14 h-14 bg-[#C87960] rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  {pkg.title}
                </h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-[#C87960] mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <p className="text-gray-900">
                    {pkg.price}
                  </p>
                  {pkg.priceNote && (
                    <p className="text-sm text-gray-500 mt-1">
                      {pkg.priceNote}
                    </p>
                  )}
                </div>
                <a
                  href={pkg.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#C87960] text-white px-6 py-3 rounded-lg hover:bg-[#B56850] transition-colors w-full"
                >
                  <MessageCircle size={18} />
                  {pkg.ctaText}
                </a>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#C87960] rounded-lg flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl text-gray-900 mb-3">
                Tu tranquilidad es mi prioridad
              </h3>
              <ul className="space-y-2">
                {trustNotes.map((note, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-[#C87960] mr-2">✓</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
