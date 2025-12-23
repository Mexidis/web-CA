import { MessageCircle, Mail, MapPin } from 'lucide-react';
import logo from '../../images/casanovaA.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="Casanova Architektur Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-semibold">Arq. Zacatecas</h3>
                <p className="text-sm text-gray-400">Arquitectura Accesible</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Arquitectura funcional y accesible para clientes en Zacatecas y municipios cercanos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#C87960] transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#C87960] transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#C87960] transition-colors"
                >
                  Portafolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#C87960] transition-colors"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#C87960] transition-colors"
                >
                  Proceso
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MessageCircle size={16} className="mt-1 flex-shrink-0" />
                <a href="https://wa.me/523343591191" target="_blank" rel="noopener noreferrer" className="hover:text-[#C87960] transition-colors">
                  +52 33 4359 1191
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:contacto@arqzacatecas.com" className="hover:text-[#C87960] transition-colors">
                  contacto@arqzacatecas.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Zacatecas, Guadalupe y municipios cercanos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Arq. Zacatecas. Todos los derechos reservados.</p>
          <p className="mt-2">Arquitectura funcional y accesible en Zacatecas, México</p>
        </div>
      </div>
    </footer>
  );
}
