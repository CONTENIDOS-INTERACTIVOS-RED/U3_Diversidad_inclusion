<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .bg-full-width.bg-fondo-2.mb-5(data-aos="fade-up")
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
            .col-sm-12.col-lg-7
              .p-4.bg-6.mb-3
                    p.mb-5 Bienvenidos a la tercera y última unidad de "Inclusión educativa en contextos educativos y profesionales"; este tema se diseñó para ofrecer una visión integral de cómo las políticas, prácticas y diseños inclusivos, pueden transformar tanto las aulas como los entornos laborales, desde las normativas que rigen la inclusión, hasta las estrategias prácticas que favorecen su implementación. En esta unidad, se busca proporcionar herramientas teóricas y prácticas, que resulten indispensables para su formación pedagógica. 
              p.mb-0 Esta unidad está organizada en tres bloques temáticos:
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/intro/1.svg', alt='')
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-4.mb-lg-0.mb-3
              .custom-image-card.h-100.br-15
                img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/intro/2.png' alt='')
                .custom-image-card__text.p-4
                  h4.mb-2.text-center Bloque 1
                  p.mb-0.text-center Abordaremos las políticas de inclusión en la educación. Se analizarán las normativas internacionales, nacionales y locales, que garantizan el acceso equitativo a la educación para todos. También se estudiarán los desafíos y avances en su implementación.
            .col-sm-12.col-lg-4.mb-lg-0.mb-3
              .custom-image-card.h-100.br-15
                img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/intro/3.png' alt='')
                .custom-image-card__text.p-4
                  h4.mb-2.text-center Bloque 2
                  p.mb-0.text-center Estudiaremos la inclusión en el ámbito laboral, buenas prácticas y desafíos; se explorarán casos de éxito, estrategias efectivas y los retos que enfrentan las empresas y las organizaciones al promover la inclusión en el empleo.
            .col-sm-12.col-lg-4.mb-lg-0.mb-3
              .custom-image-card.h-100.br-15
                img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/intro/4.png' alt='')
                .custom-image-card__text.p-4
                  h4.mb-2.text-center Bloque 3
                  p.mb-0.text-center Diseño de entornos inclusivos, donde se indaga en cómo crear espacios accesibles, tanto físicos como digitales, con especial énfasis en los entornos educativos.
      .bg-full-width.bg-15.mb-0(data-aos="fade-up")
        .px-5.py-4
          p.mb-0 Cada tema se complementará con recursos audiovisuales, artículos, libros y ejemplos prácticos, que facilitarán la comprensión y aplicación de los conceptos. Además, se desarrollarán actividades dinámicas que permitirán reflexionar y evidenciar la apropiación de los conocimientos adquiridos.
  
      .bg-full-width.bg-1.mb-0(data-aos="fade-up")
        .px-5.py-4 
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/intro/5.svg', alt='')
            .col-sm-12.col-lg-6
              p.mb-4 Se espera que los estudiantes estén en capacidad de diseñar estrategias inclusivas para contextos educativos o profesionales, puedan justificar la necesidad de estrategias inclusivas, en diversos entornos y monitorear el impacto de las estrategias de inclusión diseñadas.
              .p-4.bg-11.mb-0
                p.mb-0 Esta unidad no solo ampliará sus conocimientos, sino que les motivará a reflexionar sobre la importancia de la inclusión como motor de cambio en los entornos educativos y profesionales, preparándose para asumir un liderazgo activo en la promoción de una sociedad más inclusiva y equitativa.





  </template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
