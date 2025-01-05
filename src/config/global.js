export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Políticas de inclusión en la educación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Políticas de inclusión en la educación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Políticas de inclusión en la educación a nivel universal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Evolución histórica de la atención educativa a la diversidad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Políticas de inclusión en la educación en Colombia',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Inclusión en el ámbito laboral: buenas prácticas y desafíos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Buenas prácticas en la inclusión laboral',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Desafíos en la inclusión laboral',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño de entornos inclusivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Sánchez Fuentes, S. (2023). El diseño universal para el aprendizaje: guía práctica para el profesorado. Narcea Ediciones.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/231716?page=43',
    },
    {
      referencia:
        'Grueso Hinestroza, M. P., Antón Rubio, C. & López-Santamaría, M. (2019). Inclusión laboral de personas en proceso de reintegración en Colombia: guía de apoyo y buenas prácticas empresariales. Editorial Universidad del Rosario.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/117560?page=36',
    },
    {
      referencia:
        'Olivera, N. (2010). Inclusión social y teletrabajo ¿Sociedad de la información o sociedad de control? Derecho y Ciencias Sociales. No. 3. Editorial Red Instituto de Cultura Jurídica y Maestría en Sociología Jurídica',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/99048',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Capacidad de los entornos, productos y servicios para ser utilizados por todas las personas, independientemente de sus capacidades físicas, sensoriales o cognitivas.',
    },
    {
      termino: 'Autonomía',
      significado:
        'Capacidad de una persona para realizar actividades de manera independiente, sin necesidad de asistencia constante.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Ciencia que estudia cómo diseñar productos y entornos para que sean cómodos y eficientes para el uso humano.',
    },
    {
      termino: 'Flexibilidad',
      significado:
        'Capacidad de cambiar o ser modificado para adaptarse a nuevas circunstancias.',
    },
    {
      termino: 'Interactividad',
      significado:
        'Capacidad de un entorno o producto para permitir la participación activa y la comunicación bidireccional entre el usuario y el sistema.',
    },
    {
      termino: 'Interdisciplinariedad',
      significado:
        'Integración de conocimientos y métodos de diferentes disciplinas para abordar un tema o problema.',
    },
    {
      termino: 'Multisensorialidad',
      significado:
        'Diseño que involucra múltiples sentidos (vista, oído, tacto, olfato, gusto) para mejorar la accesibilidad y la experiencia del usuario.',
    },
    {
      termino: 'Paradigma',
      significado:
        'Conjunto de creencias, valores y técnicas que comparten los miembros de una comunidad científica o educativa.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'Facilidad con la que las personas pueden utilizar un producto o entorno para alcanzar sus objetivos de manera efectiva y satisfactoria.',
    },
    {
      termino: 'Universalidad',
      significado:
        'Cualidad de ser aplicable o accesible a todos sin excepción.',
    },
  ],
  complementario: [],
}
