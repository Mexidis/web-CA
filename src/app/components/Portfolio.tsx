import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = ['Todos', 'Vivienda', 'Comercial', 'Remodelaciones'];

const projects = [
  {
    id: 1,
    title: 'Casa Habitación en Guadalupe',
    category: 'Vivienda',
    description: 'Diseño de casa de 90m² con 2 recámaras, aprovechamiento óptimo del terreno.',
    image: 'https://images.unsplash.com/photo-1607756844432-f4849943f199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaW1wbGUlMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjYzODk1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Remodelación de Sala y Cocina',
    category: 'Remodelaciones',
    description: 'Renovación completa con nuevos acabados, optimización de espacios.',
    image: 'https://images.unsplash.com/photo-1612458930654-8b91aec8cf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NjMzODU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Local Comercial en Centro Histórico',
    category: 'Comercial',
    description: 'Diseño de tienda de 40m² con área de exhibición y bodega.',
    image: 'https://images.unsplash.com/photo-1765980161533-3f6c2d56c86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGNvbW1lcmNpYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjYzODk1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'Ampliación de Segunda Planta',
    category: 'Remodelaciones',
    description: 'Construcción de segundo piso con 2 recámaras adicionales.',
    image: 'https://images.unsplash.com/photo-1765277789236-18b14cb7869f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjYzNTk2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    title: 'Vivienda Económica en Zacatecas',
    category: 'Vivienda',
    description: 'Casa de interés social con diseño funcional y eficiente.',
    image: 'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50cyUyMHBsYW5zfGVufDF8fHx8MTc2NjMyMzQ0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    title: 'Consultorio Médico',
    category: 'Comercial',
    description: 'Diseño interior de consultorio con sala de espera y área de atención.',
    image: 'https://images.unsplash.com/photo-1612458930654-8b91aec8cf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NjMzODU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portafolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Proyectos realizados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada proyecto es único y está pensado para las necesidades reales de nuestros clientes
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-[#C87960] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#C87960] mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
