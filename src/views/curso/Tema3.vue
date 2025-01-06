<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Diseño de entornos inclusivos'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    p.mb-4(data-aos="fade-up") Iniciaremos este último segmento de la unidad, con una historia que puede haber sucedido en un hermoso lugar construido en la ciudad de Medellín; este tema nos llevará a reflexionar sobre los espacios que nos rodean y cuántos de ellos realmente permiten la diversidad.
    .bg-full-width.bg-10.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 La Magia del Parque de la Vida
             p.mb-4 El diseño de entornos inclusivos es una herramienta clave para garantizar la igualdad de oportunidades y fomentar la participación plena de todas las personas en diversos espacios, desde los educativos hasta los recreativos. En el PDF #[strong La Magia del Parque de la Vida] se presenta un inspirador ejemplo práctico de cómo un lugar accesible puede promover la inclusión y la diversidad, ilustrando la importancia de eliminar barreras físicas y sociales. A través de esta historia, se reflexiona sobre la relevancia de diseñar espacios que valoren la diversidad, asegurando que todos puedan participar y disfrutar de manera equitativa.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/magia_parque_vida.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> La Magia del Parque de la Vida
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t3/1.png', alt='')
    

    #t_3_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.1] Principios del diseño de entornos inclusivos
    p.mb-4(data-aos="fade-up") A continuación, abordaremos diferentes contextos con sus principios y características, además profundizaremos un poco más en su importancia y la aplicación en los entornos educativos.
    p.mb-4(data-aos="fade-up") Los entornos inclusivos se fundamentan en los siguientes principios claves:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/2.png')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-secundario.large
          div(numero='1' titulo='Universalidad') 
            p Todos los espacios, productos y servicios, deben diseñarse desde el principio para ser accesibles a todas las personas. Esto implica considerar las necesidades de las personas con discapacidad, pero también de aquellas que tienen alguna limitación temporal o situacional (por ejemplo, una persona mayor, una mujer embarazada o alguien con una lesión temporal). Mace R. (1985), fue uno de los pioneros en el concepto de diseño universal, destacando la importancia de crear entornos accesibles para todos.
            p.mt-3 #[strong Ejemplo.] Un edificio público diseñado bajo los principios de la universalidad, tendría rampas y no escaleras, puertas anchas, señalización visual y táctil, baños accesibles y suficientes espacios para maniobrar sillas de ruedas.

          div(numero='2' titulo='Equidad') 
            p Todos los usuarios deben tener las mismas oportunidades de acceder y utilizar los espacios, independientemente de sus características personales. Esto implica eliminar las barreras que impiden la participación plena y efectiva de las personas. Moreno (2018), ha enfatizado la importancia de la equidad en el diseño de entornos inclusivos, destacando la necesidad de considerar los requisitos de todos los usuarios.
            p.mt-3 #[strong Ejemplo.] En una biblioteca, la equidad se garantiza al ofrecer libros en diferentes formatos (braille, audiolibros), proporcionar computadoras con #[i software] de accesibilidad y organizar actividades que incluyan a personas con varias habilidades.

          div(numero='3' titulo='Flexibilidad') 
            p Los entornos deben adaptarse a las diferentes necesidades y preferencias de los usuarios. Esto implica la utilización de tecnologías flexibles, la posibilidad de personalizar los espacios y la oferta de diferentes opciones de uso. La UNESCO ha destacado la importancia de la flexibilidad en la creación de entornos de aprendizaje inclusivos, que permitan a los estudiantes alcanzar su máximo potencial.
            p.mt-3 #[strong Ejemplo.] Un aula flexible puede ser adaptada para diferentes tipos de actividades y configuraciones, permitiendo a los estudiantes con diferentes necesidades de aprendizaje, encontrar un espacio que se adapte a su estilo de aprendizaje.

          div(numero='4' titulo='Accesibilidad') 
            p Garantiza que las personas con discapacidad puedan acceder y utilizar plenamente los espacios y recursos disponibles. Esto implica eliminar barreras físicas, de comunicación, tecnológicas y actitudinales. La Ley 1618 del 2013 en Colombia, establece los derechos de las personas con discapacidad y garantiza su acceso a una educación inclusiva, lo cual incluye la accesibilidad física y relacional de los entornos educativos.
            p.mt-3 #[strong Ejemplo.] Una página web accesible, cumple con los estándares de accesibilidad web (WCAG), que permite que personas con discapacidad visual, auditiva o motriz, accedan a la información y utilicen las funcionalidades de la página.
    
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .p-4.bg-3.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t3/4.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Estos cuatro principios están estrechamente relacionados y se complementan entre sí (Moreno, 2018). Al crear entornos que sean universales, equitativos, flexibles y accesibles, se promueve la inclusión y se garantiza que todas las personas puedan participar plenamente, en la sociedad y, de esta manera, que se promueva la participación, dado que es fundamental involucrar a las personas con discapacidad, en el diseño y la evaluación de los entornos inclusivos.
        p.mb-0 También permea la construcción de una #[strong cultura inclusiva], puesto que la accesibilidad física es importante, pero también es necesario crear una cultura inclusiva que valore la diversidad y promueva la igualdad de oportunidades. Por ejemplo, el uso de la #[b tecnología asistida], la cual puede ser una herramienta valiosa para facilitar la inclusión y no debe ser vista como una única solución.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/3.png')

    #t_3_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.2] Importancia de los entornos y tipos de entornos inclusivos

    .bg-full-width.bg-7.mb-5(data-aos="fade-up")
      .px-5.py-4
          .row.align-items-center
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/t3/5.svg')
            .col-sm-12.col-lg-6
              p.mb-5 Al hablar del diseño de entornos, es necesario resaltar la importancia de ellos en la sociedad. Pascual (2024), sostiene que este no solo beneficia a las personas con discapacidad, sino que también mejora la calidad de vida de toda la población al eliminar barreras y promover la interacción social.  
              .p-4.bg-16.mb-0
                p.mb-0.text-white Estas iniciativas son promotoras de la equidad, al favorecer la participación activa de grupos históricamente excluidos, como personas con discapacidad, comunidades indígenas y adultos mayores; también permite el fortalecimiento de la cohesión social, pues fomenta la convivencia entre personas diversas, rompiendo estereotipos y prejuicios (Booth & Ainscow, 2002). 

    p.mb-4(data-aos="fade-up") Cumple con los derechos humanos, puesto que estos entornos   se convierten en una herramienta para garantizar derechos fundamentales, como la educación, la salud y el trabajo (Naciones Unidas, 2006). 
    p.mb-4(data-aos="fade-up") En este aspecto, se debe introducir el diseño inclusivo, en diferentes ámbitos:
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/6.png', alt='Imagen de una calle con señalización inclusiva')
            .col-sm-12.col-lg-7
              h5 Entornos físicos
              p.mb-0 Como los espacios públicos, diseñar calles, parques y edificios accesibles, con rampas, ascensores y señalización en braille. También incorporarlos al transporte, porque al implementar sistemas de transporte accesibles, como autobuses con plataformas para sillas de ruedas o vagones de tren adaptados, muchas más personas podrán movilizarse sin tantas dificultades.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/7.png', alt='Persona en silla de ruedas usando una computadora')
            .col-sm-12.col-lg-7
              h5 Entornos digitales
              p.mb-0 Permiten la accesibilidad a Internet, al diseñar sitios web y aplicaciones que sean compatibles con lectores de pantalla y que permitan navegación sencilla para personas con discapacidades visuales o motoras. También las tecnologías inclusivas como la incorporación de herramientas como subtítulos, audio, descripciones y traductores de lenguaje de señas, en contenidos digitales.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/8.png', alt='Salón de clase con estudiantes y profesor')
            .col-sm-12.col-lg-7
              h5 Entornos educativos
              p.mb-0 Es particularmente relevante, debido a que es un derecho fundamental reconocido internacionalmente y un motor para el desarrollo humano.


    #t_3_3.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.3] Entornos educativos inclusivos: características y prácticas
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8.bg-6.px-4.py-3
          p.mb-0 Un entorno educativo inclusivo, es aquel que permite la participación de todos los estudiantes, eliminando barreras para el aprendizaje y asegurando que todos tengan acceso equitativo a los recursos educativos (Booth & Ainscow, 2002). Esto incluye no solo a personas con discapacidad, sino también a estudiantes de diferentes culturas, géneros y contextos socioeconómicos.  
      .col-sm-12.col-lg-4.d-none.d-lg-block.mb-0
        img.mb-0(src='@/assets/curso/t3/9.png', alt='')

    p.mb-4(data-aos="fade-up") Este, debe cumplir con algunas características:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/10.png')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-secundario.large
          div(numero='1' titulo='Accesibilidad física') 
            p.mb-0 Como las rampas, ascensores y mobiliario adaptado; también aulas organizadas para facilitar la movilidad y la interacción (Moreno, 2018).

          div(numero='2' titulo='Accesibilidad pedagógica') 
            p.mb-0 Planes de estudio diseñados para responder a la diversidad de los estudiantes y el uso de recursos y estrategias didácticas y variadas, que se ajusten a diferentes estilos de aprendizaje.

          div(numero='3' titulo='Formación docente') 
            p.mb-0 Esta capacitación en educación inclusiva, permitirá que los maestros puedan identificar y atender las necesidades individuales de sus estudiantes.

          div(numero='4' titulo='Colaboración entre familia y escuela') 
            p.mb-0 Está comprobado que fomentar la comunicación y el trabajo conjunto, entre los docentes y las familias, para apoyar el aprendizaje y desarrollo de los estudiantes, se verá reflejado tanto, en el desempeño académico como en la educación integral.

          div(numero='5' titulo='Uso de tecnologías de apoyo') 
            p.mb-0 Como lectores de pantalla, software de aprendizaje interactivo, audiolibros y pizarras digitales interactivas, para apoyar a estudiantes con discapacidad visual, auditiva o cognitiva y de esta manera buscar una evaluación inclusiva. Al diseñar métodos de evaluación, permitirá a los estudiantes demostrar sus conocimientos de diversas maneras, respetando sus capacidades y estilos de aprendizaje.
    

    .bg-full-width.bg-10.mb-5(data-aos="fade-up")
      .px-5.py-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t3/11.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 El diseño de entornos inclusivos y, en particular, de entornos educativos, es fundamental para garantizar el derecho a la igualdad y la participación plena de todas las personas. Aunque se han logrado avances significativos, persisten desafíos que requieren un compromiso conjunto entre gobiernos, instituciones educativas, docentes y comunidades. La promoción de la accesibilidad, la formación docente, el uso de tecnologías inclusivas y la sensibilización cultural son pilares esenciales para construir sociedades más justas y equitativas.


    .bg-full-width.border-top.actividad.ctn-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    cuestionario: {
      tema: '--',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La exclusión en la educación está relacionada con la discriminación.',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La exclusión en la educación no está relacionada con la discriminación.',
          mensaje_incorrecto:
            'Incorrecto. Revisa el material sobre inclusión educativa.',
        },
        {
          id: 2,
          texto:
            'La participación es un principio inclusivo que fomenta la igualdad de oportunidades.',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La participación es fundamental para la inclusión.',
          mensaje_incorrecto:
            'Incorrecto. La participación es un principio clave de la inclusión.',
        },
        {
          id: 3,
          texto:
            'El respeto por la diversidad excluye a las minorías culturales.',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El respeto por la diversidad incluye a todas las personas.',
          mensaje_incorrecto:
            'Incorrecto. El respeto por la diversidad es inclusivo por naturaleza.',
        },
        {
          id: 4,
          texto: 'La equidad garantiza la igualdad en los entornos inclusivos.',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La equidad es fundamental para garantizar la igualdad.',
          mensaje_incorrecto:
            'Incorrecto. La equidad es un principio básico de los entornos inclusivos.',
        },
        {
          id: 5,
          texto:
            'Las políticas inclusivas en Colombia no consideran la diversidad cultural.',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las políticas inclusivas en Colombia sí consideran la diversidad cultural.',
          mensaje_incorrecto:
            'Incorrecto. Colombia tiene políticas que consideran la diversidad cultural.',
        },
      ],
      mensaje_final_aprobado: '¡Felicidades! Has superado la prueba con éxito.',
      mensaje_final_reprobado:
        'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
