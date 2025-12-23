import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
              Tu proyecto, mi compromiso
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Soy arquitecto egresado de la Universidad Autónoma de Zacatecas, con más de 5 años de experiencia en proyectos residenciales y comerciales en la región.
              </p>
              <p>
                Entiendo que construir o remodelar es una decisión importante, por eso mi trabajo se basa en tres pilares:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C87960] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Claridad:</strong> Te explico todo en lenguaje sencillo, sin tecnicismos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C87960] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Presupuesto:</strong> Diseños funcionales que respetan tu inversión.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C87960] rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Acompañamiento:</strong> Estoy contigo en cada etapa del proyecto.</span>
                </li>
              </ul>
              <p>
                Mi objetivo es que tu proyecto se construya correctamente, a tiempo y con el presupuesto que tienes disponible.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl text-[#C87960] mb-1">+50</div>
                <div className="text-sm text-gray-600">Proyectos completados</div>
              </div>
              <div>
                <div className="text-2xl text-[#C87960] mb-1">5+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmNoaXRlY3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjYzNDE0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Arquitecto profesional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
