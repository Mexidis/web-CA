import disenioCasa from '../images/casa_centro/disenio_casa.jpg';
import casa01 from '../images/casa_centro/casa_01.jpg';
import casa02 from '../images/casa_centro/casa_02.jpg';
import casa03 from '../images/casa_centro/casa_03.jpg';
import casa04 from '../images/casa_centro/casa_04.jpg';
import casa05 from '../images/casa_centro/casa_05.jpg';
import casa06 from '../images/casa_centro/casa_06.jpg';
import casa07 from '../images/casa_centro/casa_lisa.jpg';
import casa08 from '../images/casa_centro/fachada_lisa.jpg';

// Chimenea
import chimenea from '../images/chimenea/chimenea.jpg';
import chimenea0 from '../images/chimenea/chimenea_0.jpg';
import chimenea1 from '../images/chimenea/chimenea_01.jpg';
import chimenea2 from '../images/chimenea/chimenea_02.jpg';
import chimenea3 from '../images/chimenea/chimenea_03.jpg';
import chimenea4 from '../images/chimenea/chimenea_04.jpg';
import chimenea5 from '../images/chimenea/chimenea_05.jpg';

// Cafeteria
import cafeteria00 from '../images/cafeteria/cafeteria_00.jpg';
import cafeteria0 from '../images/cafeteria/cafeteria_0.jpg';
import cafeteria1 from '../images/cafeteria/cafeteria_01.jpg';
import cafeteria2 from '../images/cafeteria/cafeteria_02.jpg';
import cafeteria3 from '../images/cafeteria/cafeteria_03.jpg';
import cafeteria4 from '../images/cafeteria/cafeteria_04.jpg';
import cafeteria5 from '../images/cafeteria/cafeteria_05.jpg';
import cafeteria6 from '../images/cafeteria/cafeteria_06.jpg';

// Estacionamiento
import parkingPrepa1 from '../images/estacionamiento/parking_prepa1.png';
import parking1 from '../images/estacionamiento/IMG_20201012_145221.jpg';
import parking2 from '../images/estacionamiento/IMG_20201003_124028.jpg';
import parking3 from '../images/estacionamiento/IMG_20201001_103937.jpg';
import parking4 from '../images/estacionamiento/IMG_20200930_162709.jpg';
import parking5 from '../images/estacionamiento/IMG_20200930_162709.jpg';
import parking6 from '../images/estacionamiento/IMG_20200925_170556.jpg';

// Casa Guadalupe
import casaGpe from '../images/casa_gpe/casa_gpe.jpg';
import casaGpe1 from '../images/casa_gpe/009317a7-49e1-4698-b8f1-44c0df9ef178.jpg';
import casaGpe2 from '../images/casa_gpe/0d002d31-4dce-4e9c-a16d-2e95a07ef446.jpg';
import casaGpe3 from '../images/casa_gpe/2c79c14b-bf11-4874-b739-34b4ab44a7df.jpg';
import casaGpe4 from '../images/casa_gpe/442fcbd7-92fb-4ff8-a606-5025ed83eeae.jpg';
import casaGpe5 from '../images/casa_gpe/6c2580d4-3f65-48f9-9901-a6f6c6258614.jpg';
import casaGpe6 from '../images/casa_gpe/95cfdd3c-538f-43e7-bc12-fc38a245d419.jpg';

export interface Project {
    id: number;
    slug: string;
    title: string;
    category: string;
    location: string;
    year: string;
    description: string;
    challenge: string;
    solution: string;
    result: string;
    coverImage: string;
    gallery: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        slug: 'departamento-zacatecas',
        title: 'Departamento en Zacatecas',
        category: 'Vivienda',
        location: 'Centro, Zacatecas',
        year: '2015',
        description: 'Diseño de departamento de 120m² con 2 recámaras, aprovechamiento óptimo del terreno.',
        challenge: 'El cliente necesitaba una vivienda funcional en un terreno de dimensiones reducidas (6x15m), buscando maximizar la iluminación natural y la sensación de amplitud con un presupuesto ajustado.',
        solution: 'Propusimos un diseño de planta abierta en el área social para integrar sala, comedor y cocina. Utilizamos cubos de luz estratégicos y ventanas altas para garantizar privacidad y luz. Se optó por materiales locales y aparentes para reducir costos de mantenimiento.',
        result: 'Una casa moderna y acogedora que se siente mucho más grande de lo que es. Los espacios fluyen naturalmente y la iluminación natural reduce el consumo eléctrico. El cliente obtuvo una vivienda digna y funcional dentro de su presupuesto.',
        coverImage: casa07,
        gallery: [
            casa08,
            casa01,
            casa02,
            casa03,
            casa04,
            casa05,
            casa06,
        ]
    },
    {
        id: 2,
        slug: 'remodelacion-sala',
        title: 'Remodelación de Sala',
        category: 'Remodelaciones',
        location: 'Zacatecas Centro',
        year: '2024',
        description: 'Remodelación de espacio de zona de estar.',
        challenge: 'El cliente quería una fuente de calor más estetica que el calentador de gas que tenía pegado a la pared',
        solution: 'Eliminamos el calentador de gas y lo reemplazamos por una chimenea moderna minimalista que armoniza el espacio',
        result: 'Un espacio central vibrante y luminoso que se convirtió en el corazón del hogar. Ahora es un centro de reunión para la familia y amigos',
        coverImage: chimenea,
        gallery: [
            chimenea1,
            chimenea0,
            chimenea2,
            chimenea3,
            chimenea4,
            chimenea5,
        ]
    },
    {
        id: 3,
        slug: 'cafeteria-campus-fresnillo',
        title: 'Cafeteria Campus Fresnillo',
        category: 'Comercial',
        location: 'Fresnillo, Zacatecas',
        year: '2020',
        description: 'Diseño de cafeteria de 185m² con área de exhibición y bodega.',
        challenge: 'El cliente quería una cafeteria moderna con un diseño que se integrara esteticamente con el campus de la UAZ en Fresnillo.',
        solution: 'Propusimos un diseño de planta abierta en el área social para integrar sala, comedor y cocina. Utilizamos cubos de luz estratégicos y ventanas altas para garantizar privacidad y luz. Se optó por materiales locales y aparentes para reducir costos de mantenimiento.',
        result: 'Una cafeteria moderna con un diseño que se integra esteticamente con el campus de la UAZ en Fresnillo.',
        coverImage: cafeteria1,
        gallery: [
            cafeteria2,
            cafeteria00,
            cafeteria0,
            cafeteria3,
            cafeteria4,
            cafeteria5,
            cafeteria6,
        ]
    },
    {
        id: 4,
        slug: 'estacionamientos-campus-zacatecas',
        title: 'Estacionamientos Campus Zacatecas',
        category: 'Comercial',
        location: 'Zacatecas',
        year: '2020',
        description: 'Construcción de estacionamientos en el campus UAZ S.XXI',
        challenge: 'La comunidad universitaria necesitaba un estacionamiento para los vehículos de los estudiantes y personal de la institución.',
        solution: 'Propusimos la construcción de un estacionamiento que se integrara esteticamente con el campus.',
        result: 'Un estacionamiento funcional y estético que se integra con el campus.',
        coverImage: parkingPrepa1,
        gallery: [
            parkingPrepa1,
            parking1,
            parking2,
            parking3,
            parking4,
            parking5,
            parking6,
        ]
    },
    {
        id: 5,
        slug: 'vivienda-economica-guadalupe',
        title: 'Vivienda Económica Guadalupe',
        category: 'Vivienda',
        location: 'Guadalupe, Zacatecas',
        year: '2022',
        description: 'Casa de interés social con diseño funcional y eficiente.',
        challenge: 'Demostrar que el bajo presupuesto no está peleado con el buen diseño. El objetivo era crear una vivienda digna, estética y térmica con materiales convencionales.',
        solution: 'Utilizamos block aparente con un patrón de diseño, orientación solar estratégica para climatización pasiva y cancelería estándar optimizada. Se priorizó la calidad de los espacios interiores sobre acabados costosos.',
        result: 'Un modelo de vivienda replicable y accesible que ofrece confort térmico y espacial superior al promedio de su categoría. Una prueba de que la arquitectura es para todos.',
        coverImage: casaGpe,
        gallery: [
            casaGpe1,
            casaGpe2,
            casaGpe3,
            casaGpe4,
            casaGpe5,
            casaGpe6,
        ]
    },
];
