import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, CheckCircle, X } from 'lucide-react';
import { projects } from '../../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import ScrollToTop from './utils/ScrollToTop';

export function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen pt-32 pb-16 px-4 text-center">
                <h2 className="text-3xl text-gray-900 mb-4">Proyecto no encontrado</h2>
                <Link to="/" className="text-[#C87960] hover:underline">
                    Volver al inicio
                </Link>
            </div>
        );
    }

    const nextProject = projects.find(p => p.id === project.id + 1);
    const prevProject = projects.find(p => p.id === project.id - 1);

    return (
        <div className="pt-24 md:pt-32 pb-16 bg-white min-h-screen">
            <ScrollToTop />
            <div className="container mx-auto px-4">
                {/* Navigation Breadcrumb */}
                <div className="mb-8">
                    <Link to="/#portafolio" className="inline-flex items-center text-gray-600 hover:text-[#C87960] transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Volver al portafolio
                    </Link>
                </div>

                {/* Header */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="flex flex-wrap gap-4 text-sm text-[#C87960] mb-4 font-medium uppercase tracking-wider">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
                        {project.title}
                    </h1>
                    <div className="flex items-center text-gray-600 text-lg">
                        <MapPin size={20} className="mr-2 text-gray-400" />
                        {project.location}
                    </div>
                </div>

                {/* Main Image */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-16">
                    <ImageWithFallback
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-12 gap-12 mb-16">
                    <div className="lg:col-span-8">
                        <h2 className="text-2xl text-gray-900 mb-6">Sobre el proyecto</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="space-y-8">
                            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#C87960]">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">El Reto</h3>
                                <p className="text-gray-600">{project.challenge}</p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">La Solución</h3>
                                <p className="text-gray-600">{project.solution}</p>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-[#C87960]/10 rounded-xl">
                                <CheckCircle className="text-[#C87960] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Resultado</h3>
                                    <p className="text-gray-600">{project.result}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-gray-900 text-white p-8 rounded-2xl text-center">
                            <h3 className="text-2xl mb-4">¿Te gustó este proyecto?</h3>
                            <p className="text-gray-300 mb-6">
                                Podemos crear algo similar adaptado a tus necesidades y presupuesto.
                            </p>
                            <a
                                href="https://wa.me/523343591191"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-lg hover:bg-[#20BD5A] transition-colors font-medium"
                            >
                                <WhatsAppIcon size={24} />
                                Cotizar mi proyecto
                            </a>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Detalles</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-500">Categoría</span>
                                    <span className="text-gray-900 font-medium">{project.category}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-500">Ubicación</span>
                                    <span className="text-gray-900 font-medium text-right">{project.location}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-500">Año</span>
                                    <span className="text-gray-900 font-medium">{project.year}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <h3 className="text-2xl text-gray-900 mb-8">Galería del proyecto</h3>
                <div className="columns-2 md:columns-4 gap-6 space-y-6 mb-16">
                    {project.gallery.map((img, index) => (
                        <div key={index} className="break-inside-avoid inline-block w-full rounded-xl overflow-hidden shadow-lg cursor-pointer" onClick={() => setSelectedImage(img)}>
                            <ImageWithFallback
                                src={img}
                                alt={`${project.title} - vista ${index + 1}`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Vista ampliada"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}

                {/* Navigation Footer */}
                <div className="border-t border-gray-200 pt-12 flex justify-between items-center">
                    {prevProject ? (
                        <Link to={`/proyecto/${prevProject.slug}`} className="group text-left">
                            <span className="block text-sm text-gray-400 mb-1 group-hover:text-[#C87960] transition-colors">← Proyecto Anterior</span>
                            <span className="text-lg font-medium text-gray-900">{prevProject.title}</span>
                        </Link>
                    ) : <div />}

                    {nextProject ? (
                        <Link to={`/proyecto/${nextProject.slug}`} className="group text-right">
                            <span className="block text-sm text-gray-400 mb-1 group-hover:text-[#C87960] transition-colors">Siguiente Proyecto →</span>
                            <span className="text-lg font-medium text-gray-900">{nextProject.title}</span>
                        </Link>
                    ) : <div />}
                </div>
            </div>
        </div>
    );
}
