import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../../data/projects';

const categories = ['Todos', 'Vivienda', 'Comercial', 'Remodelaciones'];

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
              className={`px-6 py-2 rounded-full transition-colors ${activeCategory === category
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
            <Link
              to={`/proyecto/${project.slug}`}
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 block group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <ImageWithFallback
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#C87960] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Ver proyecto
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-[#C87960]">
                    {project.category}
                  </div>
                  <div className="text-xs text-gray-400">
                    {project.year}
                  </div>
                </div>
                <h3 className="text-xl text-gray-900 mb-2 group-hover:text-[#C87960] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
