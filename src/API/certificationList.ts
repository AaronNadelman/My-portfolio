export interface certificationInterface {
  id: number;
  img: string; // Path to the certification image
  title: string;
  duration: string;
  institute: string;
  skills: string;
  description?: string; // Optional description field
}
export const certificationList: certificationInterface[] = [
  {
    id: 1,
    img: '/certifications/UTN.jpg',
    title: 'Curso de desarrollo web',
    duration: 'Seis meses',
    institute: 'UTN',
    skills: 'Git, Github, Python, SQL server, DB',
    description:
      'Desarrollo web con Python y Django, SQL server, modelado de bases de datos',
  },
  {
    id: 2,
    img: '/certifications/DesarrolloWebCODER.svg',
    title: 'Desarrollo web',
    duration: 'Dos meses',
    institute: 'CODER HOUSE',
    skills: 'CSS, HTML5, SASS, Bootstrap',
    description: 'Desarrollo web con HTML5 y CSS, SASS',
  },
  {
    id: 3,
    img: '/certifications/JStitulo.svg',
    title: 'JavaScript',
    duration: 'Tres meses',
    institute: 'CODER HOUSE',
    skills: 'NodeJs, DOM, Ajax y fetch',
    description: 'Curso completo de JavaScript',
  },
  {
    id: 4,
    img: '/certifications/ReactTitulo.svg',
    title: 'Curso de desarrollo web con React Js',
    duration: 'Cuatro meses',
    institute: 'CODER HOUSE',
    skills: 'React, TypeScript, Tailwind, ESLint, Prettier',
    description: 'Components, Routing, Context, Hooks, Librerías, APIs fetch',
  },
]
