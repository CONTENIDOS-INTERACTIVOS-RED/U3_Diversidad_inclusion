<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Inclusión en el ámbito laboral: buenas prácticas y desafíos'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-full-width.bg-11.mb-5(data-aos="fade-up")
      .px-5.py-4
        p.mb-0 La inclusión en el ámbito laboral es un tema muy importante para el desarrollo sostenible de las organizaciones y la sociedad en general. 
    
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/1.png')
      .col-sm-12.col-lg-8
        .p-4.bg-3.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/2.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 La inclusión laboral se refiere a la creación de un entorno de trabajo donde todas las personas, independientemente de sus características personales, se sientan valoradas, respetadas y capaces de alcanzar su máximo potencial. Esto incluye a personas con discapacidad, de diferentes etnias, géneros, orientaciones sexuales, edades, y otras diversidades; en Colombia, por ejemplo, se refiere también a la reintegración al mundo laboral de excombatientes de grupos armados del país.
        p.mb-0 Para Paritripti (2022), el Informe Gallup del 2018, describe la diversidad como el "espectro completo de las diferencias humanas", abarcando características únicas de las personas como género, orientaciones sexuales, creencias religiosas, edad, etnias, razas, ubicaciones geográficas, culturas, clase y capacidades físicas. 

    .bg-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Esta diversidad puede manifestarse de diversas maneras, y es importante reconocer que existen diferentes tipos de diversidad en el entorno laboral, algunas visibles y otras más internas. Algunas de estas diversidades son inmutables, mientras que otras pueden ser cambiadas.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/3.png', alt='')

    p.mb-4(data-aos="fade-up") Dentro de los tipos de diversidad, se encuentran:
    .bg-full-width.bg-fondo-slider.mb-0(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/4.png', alt='')
            .col-sm-12.col-lg-7
              h5 Diversidades internas
              p.mb-0 Son factores inherentes a una persona desde su nacimiento, tales como raza, edad, etnia y origen nacional.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/5.png', alt='')
            .col-sm-12.col-lg-7
              h5 Diversidades externas
              p.mb-0 De acuerdo con Paritripti (2022), son características que no son innatas y pueden ser modificadas, incluyendo educación, habilidades, religión, ubicación geográfica, estatus relacional, estatus socioeconómico, experiencias y ciudadanía. Estas categorías ayudan a entender cómo la diversidad puede influir en el entorno laboral.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/6.png', alt='')
            .col-sm-12.col-lg-7
              h5 Diversidad organizacional
              p.mb-0 Se refiere a los diferentes factores de diversidad presentes en cualquier organización, como ubicación de trabajo, función laboral, departamento y nivel de antigüedad (Paritripti, 2022).

    .bg-full-width.bg-10.mb-5(data-aos="fade-up")
      .px-5.py-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/7.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Además, la diversidad en la visión del mundo, implica las diferencias en las perspectivas que las personas tienen sobre la vida, influenciadas por sus experiencias únicas, creencias políticas y conocimiento histórico. Reconocer y valorar estos diferentes tipos de diversidad, es esencial para fomentar un ambiente laboral inclusivo.

    #t_2_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 2.1] Buenas prácticas en la inclusión laboral
    .bg-full-width.bg-1.mb-5
      .px-5.py-0
          .row.align-items-center.justify-content-center
            .col-sm-12.col-lg-6
              p.mb-5 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente pódcast.
              TarjetaAudio.bg-white.mb-3(
                texto="Buenas prácticas en la inclusión laboral"
                :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
              )
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/t2/8.svg', alt='')

    p.mb-4(data-aos="fade-up") Con respecto a las buenas prácticas antes mencionadas, a continuación, las vemos reflejadas de la siguiente manera: 
    .bg-full-width.bg-fondo-slider.mb-0(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/10.png', alt='')
            .col-sm-12.col-lg-7
              h5 Programas de formación y capacitación
              p.mb-3 Son esenciales para mejorar las habilidades y competencias de los excombatientes, facilitando su acceso al mercado laboral. Estos programas incluyen formación técnica, educación formal y desarrollo de habilidades blandas.
              p.mb-0 #[strong Ejemplo.] La Agencia para la Reincorporación y la Normalización (ARN), ofrece programas de formación en diversas áreas, incluyendo agricultura, tecnología y emprendimiento.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/11.png', alt='')
            .col-sm-12.col-lg-7
              h5 Proyectos productivos
              p.mb-3 Son iniciativas que permiten a los excombatientes generar ingresos a través de actividades económicas sostenibles. Estos proyectos pueden incluir agricultura, manufactura y servicios.
              p.mb-0 #[strong Ejemplo.] En los Montes de María, excombatientes han participado en proyectos de cultivo de ñame, generando ingresos y promoviendo la paz en la región.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t2/13.png', alt='')
            .col-sm-12.col-lg-7
              h5 Alianzas público-privadas
              p.mb-3 Las alianzas entre el sector público y el privado, son fundamentales para crear oportunidades de empleo para los excombatientes. Estas alianzas pueden incluir programas de empleo, incentivos fiscales y apoyo técnico.
              p.mb-0 #[strong Ejemplo.] Empresas como Here Technologies, han colaborado con el gobierno para ofrecer oportunidades de empleo a excombatientes.

    .bg-full-width.bg-12.mb-5(data-aos="fade-up")
      .px-5.py-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/12.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Estamos convencidos que los docentes son agentes claves en la construcción de paz y, por ende, al estar informados sobre las políticas y prácticas de reintegración, pueden desempeñar un papel activo en la promoción de la reconciliación y la cohesión social, ayudando a sanar las heridas del conflicto y construir un futuro más prometedor para todos.

    #t_2_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 2.2] Desafíos en la inclusión laboral

    p.mb-4(data-aos="fade-up") Así como lo expresamos anteriormente, pese al esfuerzo que se viene haciendo para promover la inclusión, aún hay desafíos por vencer. Bietti (2023), expresa que entre ellos están:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        LineaTiempoD.color-secundario.large
          div(numero='1' titulo='Resistencia al cambio')
            p.mb-0 Se ha convertido en un gran obstáculo, porque generalmente no se da solo a nivel de directivos, sino también de compañeros de trabajo. Cambiar la cultura organizacional para ser más inclusiva, encuentra oposición por prejuicios y estereotipos arraigados. Cambiar mentalidades y conductas, lleva tiempo y esfuerzo.
          
          div(numero='2' titulo='Brecha entre legislación y práctica')
            p.mb-0 Es una barrera que, aunque existen leyes que promueven la inclusión, su implementación suele ser insuficiente, debido a la falta de supervisión, sanciones o recursos para las empresas.
          
          div(numero='3' titulo='La falta de recursos')
            p.mb-0 La implementación de esas políticas de inclusión, puede requerir recursos significativos, tanto financieros como humanos (Bietti, 2023). Las pequeñas y medianas empresas, en particular, pueden enfrentar dificultades para asignar estos recursos.
          
          div(numero='4' titulo='Medición del impacto')
            p.mb-0 Valorar el impacto de las políticas de inclusión puede ser complejo; por ello es importante desarrollar indicadores claros y métodos de evaluación para asegurar que las iniciativas de inclusión, están logrando los resultados deseados.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/14.png')
    
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/15.png')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-secundario.large
          div(numero='5' titulo='Los factores educativos, culturales y sociales')
            p.mb-0 Históricamente, estas personas han sufrido barreras educativas, debido a un sistema que no ha sido suficientemente inclusivo ni adaptado a sus necesidades específicas. Esto ha generado dificultades en el acceso a oportunidades laborales significativas, perpetuando estereotipos y limitando el potencial de este colectivo. Muchas empresas desconocen cómo implementar políticas inclusivas o sienten que no tienen los recursos necesarios para hacerlo.
          
          div(numero='6' titulo='Aspectos culturales')
            p.mb-0 El desconocimiento, la indiferencia, los prejuicios y la discriminación, son obstáculos persistentes en el camino hacia la inclusión laboral. Estos factores no solo afectan la percepción de las personas con discapacidad, sino que también dificultan su integración en el entorno laboral.
          
          div(numero='7' titulo='Desigualdad de oportunidades')
            p.mb-0 Algunos grupos las enfrentan y les es difícil acceder a empleos formales, como mujeres, minorías étnicas o personas transgénero, debido a sesgos estructurales, incluyendo la diferencia salarial que persiste para mujeres y otros grupos marginados (Bietti, 2023).

    .bg-full-width-2.mb-5(data-aos="fade-up")
      .px-5.py-0-cus
        .row.align-items-center.img-over
          .col-sm-12.col-lg-7
            p.mt-4 Es esencial abordar estos desafíos mediante un compromiso conjunto de todos los actores sociales, incluyendo administraciones públicas, empresas y organizaciones del tercer sector.
            p.mb-0 Como conclusión, sabemos que la inclusión en el ámbito laboral, no solo es una cuestión de justicia social, sino que también aporta beneficios significativos a las organizaciones, como mayor innovación, productividad y satisfacción laboral. A pesar de los desafíos, las buenas prácticas en inclusión laboral, pueden transformar positivamente el entorno de trabajo y contribuir al desarrollo sostenible de las empresas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/t2/16.svg')
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://www1.funcionpublica.gov.co/documents/36025892/0/2021-10-01_10_buenas_practicas_en_la_inclusion_laboral.pdf/634024b4-7954-826e-98e3-94a4e06687e7?t=1633106334218' target='_blank' rel='noopener noreferrer') Función Pública. (2021). 10 buenas prácticas en el camino de la inclusión laboral de personas con discapacidad en el sector público.


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.educadua.es/html/dua/pautasDUA/dua_principios.html' target='_blank' rel='noopener noreferrer') EducaDUA. (s.f.). Educadua.es.

            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://poe.com/' target='_blank' rel='noopener noreferrer') Poe.
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/FNr9LRxLyqg?si=gwuOhMJ_m9L8oeXA' target='_blank' rel='noopener noreferrer') Ministerio de Educación Nacional [@mineducacion]. (2024). Inclusión laboral para las personas con discapacidad.
 
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
