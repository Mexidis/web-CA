import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import logo from '../../images/casanovaA.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={logo} alt="Casanova Architektur Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-[#C87960]">Casanova Arquitectos</h1>
              <p className="text-xs text-gray-600">Arquitectura Accesible en Zacatecas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#C87960] transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-[#C87960] transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('paquetes')} className="text-gray-700 hover:text-[#C87960] transition-colors">
              Paquetes
            </button>
            <button onClick={() => scrollToSection('portafolio')} className="text-gray-700 hover:text-[#C87960] transition-colors">
              Portafolio
            </button>
            <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-700 hover:text-[#C87960] transition-colors">
              Sobre mí
            </button>
            <button onClick={() => scrollToSection('proceso')} className="text-gray-700 hover:text-[#C87960] transition-colors">
              Proceso
            </button>
            <a
              href="https://wa.me/523343591191"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C87960] text-white px-6 py-2 rounded-lg hover:bg-[#B56850] transition-colors"
            >
              Contactar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-[#C87960] transition-colors py-2">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-left text-gray-700 hover:text-[#C87960] transition-colors py-2">
              Servicios
            </button>
            <button onClick={() => scrollToSection('paquetes')} className="text-left text-gray-700 hover:text-[#C87960] transition-colors py-2">
              Paquetes
            </button>
            <button onClick={() => scrollToSection('portafolio')} className="text-left text-gray-700 hover:text-[#C87960] transition-colors py-2">
              Portafolio
            </button>
            <button onClick={() => scrollToSection('sobre-mi')} className="text-left text-gray-700 hover:text-[#C87960] transition-colors py-2">
              Sobre mí
            </button>
            <button onClick={() => scrollToSection('proceso')} className="text-left text-gray-700 hover:text-[#C87960] transition-colors py-2">
              Proceso
            </button>
            <a
              href="https://wa.me/523343591191"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C87960] text-white px-6 py-3 rounded-lg hover:bg-[#B56850] transition-colors text-center"
            >
              Contactar por WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}