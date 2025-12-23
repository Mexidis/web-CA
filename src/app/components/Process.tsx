import { MessageCircle, FileText, CircleCheck, Wrench } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Asesoría inicial',
    description: 'Platicamos sobre tu proyecto, necesidades y presupuesto. Primera consulta sin costo.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Diseño y planos',
    description: 'Elaboro planos detallados y renders para que visualices tu proyecto antes de construir.',
  },
  {
    icon: CircleCheck,
    number: '03',
    title: 'Presupuesto y ajustes',
    description: 'Reviso el presupuesto contigo y ajustamos el diseño si es necesario para que todo cuadre.',
  },
  {
    icon: Wrench,
    number: '04',
    title: 'Ejecución y seguimiento',
    description: 'Te acompaño durante la construcción, resuelvo dudas y verifico que todo salga según lo planeado.',
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            ¿Cómo trabajamos juntos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un proceso claro y sencillo para que tu proyecto avance sin sorpresas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gray-200 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#C87960] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="text-4xl text-gray-200 -mt-2">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl text-gray-900 mb-4">
            ¿Listo para empezar tu proyecto?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            La primera consulta es gratuita. Platiquemos sobre lo que tienes en mente y te daré una orientación profesional sin compromiso.
          </p>
          <a
            href="https://wa.me/524921234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle size={20} />
            Agendar consulta gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
