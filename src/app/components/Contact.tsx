import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Hablemos de tu proyecto
            </h2>
            <p className="text-lg text-gray-600">
              Estoy disponible para atenderte y responder todas tus dudas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="https://wa.me/524921234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-6 rounded-xl hover:bg-[#20BD5A] transition-colors flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle size={28} />
              </div>
              <div>
                <div className="text-sm opacity-90 mb-1">Envía un mensaje</div>
                <div className="text-lg">WhatsApp</div>
                <div className="text-sm opacity-90">+52 492 123 4567</div>
              </div>
            </a>

            <a
              href="tel:+524921234567"
              className="bg-[#C87960] text-white p-6 rounded-xl hover:bg-[#B56850] transition-colors flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <div className="text-sm opacity-90 mb-1">Llama directamente</div>
                <div className="text-lg">Teléfono</div>
                <div className="text-sm opacity-90">492 123 4567</div>
              </div>
            </a>

            <a
              href="mailto:contacto@arqzacatecas.com"
              className="bg-white text-gray-900 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-gray-200 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={28} className="text-[#C87960]" />
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Correo electrónico</div>
                <div className="text-lg">contacto@arqzacatecas.com</div>
              </div>
            </a>

            <div className="bg-white text-gray-900 p-6 rounded-xl border-2 border-gray-200 flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={28} className="text-[#C87960]" />
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Área de cobertura</div>
                <div className="text-lg">Zacatecas, Guadalupe</div>
                <div className="text-sm text-gray-600">y municipios cercanos</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl text-gray-900 mb-4">
              Horario de atención
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
              <p>Sábados: 10:00 AM - 2:00 PM</p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-700 mb-6">
                ¿Tienes una pregunta rápida? Escríbeme por WhatsApp y te respondo lo antes posible
              </p>
              <a
                href="https://wa.me/524921234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle size={20} />
                Contactar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
