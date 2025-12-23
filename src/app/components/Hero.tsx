import { MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
              Arquitectura funcional y accesible en Zacatecas
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Diseño, remodelación y construcción sin gastar de más
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/523343591191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle size={24} />
                Cotiza por WhatsApp
              </a>
              <button
                onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-[#C87960] hover:text-[#C87960] transition-colors"
              >
                Ver proyectos
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl text-[#C87960] mb-1">+50</div>
                <div className="text-sm text-gray-600">Proyectos</div>
              </div>
              <div>
                <div className="text-3xl text-[#C87960] mb-1">+5</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl text-[#C87960] mb-1">100%</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607756844432-f4849943f199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaW1wbGUlMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjYzODk1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Arquitectura moderna en Zacatecas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#C87960] text-white p-6 rounded-xl shadow-lg max-w-[200px]">
              <p className="text-sm">Proyectos desde <span className="text-2xl block mt-1">$5,000 MXN</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
