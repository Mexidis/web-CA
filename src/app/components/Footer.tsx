import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../../images/logo/casanovaA.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#' + id);
    }
  };

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
                <li></li>
                <button
                  onClick={() => handleScroll('inicio')}
                  className="hover:text-[#C87960] transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('servicios')}
                  className="hover:text-[#C87960] transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('portafolio')}
                  className="hover:text-[#C87960] transition-colors"
                >
                  Portafolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('proceso')}
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
