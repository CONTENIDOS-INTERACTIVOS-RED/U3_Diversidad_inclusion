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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principios del diseño de entornos inclusivos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Importancia de los entornos y tipos de entornos inclusivos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Entornos educativos inclusivos: características y prácticas',
            hash: 't_3_3',
          },
        ],
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
    {
      referencia:
        'Amariles, W. (2022). Evolución histórica de la atención a la diversidad.',
      link: 'https://zaguan.unizar.es/record/99782/files/texto_completo.pdf',
    },
    {
      referencia:
        'Biotti, M. F. (2023). Personas con discapacidad e inclusión laboral en América Latina y el Caribe: principales desafíos de los sistemas de protección social.',
      link:
        'https://www.cepal.org/es/publicaciones/48735-personas-discapacidad-inclusion-laboral-america-latina-caribe-principales',
    },
    {
      referencia:
        'Booth, T. & Ainscow, M. (2002). Guía para la evaluación y mejora de la educación inclusiva. UNESCO.',
      link:
        'https://sid-inico.usal.es/docs/F8/FDO21426/guia_para_la_evaluacion_y_mejora.pdf',
    },
    {
      referencia:
        'Fundación Tatis. (2023). El Diseño inclusivo: Una Herramienta de Transformación Social.',
      link:
        'https://fundaciontatis.org/articulos/el-diseno-inclusivo-una-herramienta-de-transformacion-social/',
    },
    {
      referencia:
        'Ley 1618 de 2013. Por la cual se establecen las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad en Colombia.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52081',
    },
    {
      referencia:
        'Mace, R. L. (1985). Universal Design: Barrier-Free Environments for Everyone. North Carolina State University.',
      link: 'https://design.ncsu.edu/research/center-for-universal-design/',
    },
    {
      referencia:
        'Meyer, A., Rose, D. H. & Gordon, D. (2014). Universal Design for Learning: Theory and Practice. CAST Professional Publishing.',
      link:
        'https://www.cast.org/products-services/resources/2014/universal-design-learning-theory-practice-udl-meyer',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2017). Decreto 1421 de 2017.',
      link:
        'https://www.mineducacion.gov.co/portal/normativa/Decretos/381928:Decreto-1421-de-agosto-29-de-2017',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2020). Lineamientos Política de Educación Superior Inclusiva e Intercultural.',
      link: 'https://www.mineducacion.gov.co/1780/w3-article-357277.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2022). Circular 020 de 2022.',
      link:
        'https://normograma.info/men/docs/circular_mineducacion_0020_2022.htm',
    },
    {
      referencia:
        'Moreno, J. A. (2018). Educación inclusiva: principios, estrategias y desafíos. Revista Internacional de Educación Inclusiva, 11(2), pp. 45-63.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2006). Convención sobre los Derechos de las Personas con Discapacidad.',
      link: 'https://www.un.org/esa/socdev/enable/documents/tccconvs.pdf',
    },
    {
      referencia:
        'Naciones Unidas. (2015). Objetivo de Desarrollo Sostenible 4.',
      link:
        'https://www.unwomen.org/es/news/in-focus/women-and-the-sdgs/sdg-4-quality-education#:~:text=ODS%204%3A%20Garantizar%20una%20educaci%C3%B3n,vida%20para%20todas%20y%20todos',
    },
    {
      referencia:
        'Partidioti, Vantage Circle. (2022). Diversidad e Inclusión en el lugar de trabajo.',
      link:
        'https://www.vantagecircle.com/es/blog/diversidad-e-inclusion-lugar-de-trabajo/',
    },
    {
      referencia:
        'Pineda, A. Y. A. (2021). Modelo del Diseño Universal de Aprendizaje (DUA). Universidad Pontificia Bolivariana.',
      link:
        'https://www.upb.edu.co/es/noticias/diseno-universal-aprendizaje-dua',
    },
    {
      referencia:
        'Rose, D. H. & Meyer, A. (2002). Teaching Every Student in the Digital Age: Universal Design for Learning. Association for Supervision and Curriculum Development (ASCD).',
      link:
        'https://www.researchgate.net/publication/225336097_David_H_Rose_Anne_Meyer_Teaching_Every_Student_in_the_Digital_Age_Universal_Design_for_Learning',
    },
    {
      referencia:
        'UNESCO. (1994). Declaración de Salamanca y Marco de Acción sobre Necesidades Educativas Especiales.',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000098427_spa',
    },
    {
      referencia:
        'UNESCO. (2009). Directrices sobre Políticas de Inclusión en la Educación.',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000177849_spa',
    },
    {
      referencia:
        'Universidad Católica de Pereira. (2013). Lineamientos Política de Educación Superior Inclusiva.',
      link:
        'https://www.ucp.edu.co/portal/wp-content/uploads/2023/02/Lineamientos-Politica-de-Educacion-Superior-Inclusiva.pdf',
    },
    {
      referencia:
        'Universidad Piloto de Colombia. (2014). Política de Educación Inclusiva.',
      link:
        'https://www.unipiloto.edu.co/descargas/Politica-de-Educacion-Inclusiva.pdf',
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
