(() => {
  'use strict';

  const C = window.NUTRIVELT_CONFIG;

  if (!C) return;

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const project = C.project;

  const modal = $('#media-modal');
  const modalBody = $('#modal-body');
  const modalNav = $('#modal-navigation');

  let activeCollection = [];
  let activeIndex = 0;
  let lastFocused = null;


  /* =========================================================
     UTILIDADES
  ========================================================= */

  const safeUrl = (value) => {
    if (!value || typeof value !== 'string') return '';

    const trimmed = value.trim();

    if (
      /^(https?:\/\/|\.\/|\.\.\/|assets\/|\/)/i.test(trimmed)
    ) {
      return trimmed;
    }

    return '';
  };


  const element = (tag, className = '', text) => {
    const node = document.createElement(tag);

    if (className) {
      node.className = className;
    }

    if (text !== undefined) {
      node.textContent = text;
    }

    return node;
  };


  function placeholder(label, extraClass = '') {
    const box = element(
      'div',
      `media-placeholder ${extraClass}`.trim()
    );

    box.append(
      element(
        'span',
        '',
        label || 'ESPACIO PARA AGREGAR EVIDENCIA'
      ),
      element(
        'small',
        '',
        'Reemplazable desde js/config.js'
      )
    );

    return box;
  }


  function mediaFrame(media = {}, options = {}) {

    const {
      className = '',
      clickable = false,
      title = '',
      caption = '',
      collection = null,
      index = 0
    } = options;

    const frame = element(
      'div',
      `media-frame ${className}`.trim()
    );

    const src = safeUrl(media.src);

    const putPlaceholder = () => {
      frame.replaceChildren(
        placeholder(media.label)
      );

      frame.dataset.placeholder = 'true';
    };


    if (src) {

      const img = document.createElement('img');

      img.src = src;

      img.alt =
        media.alt ||
        title ||
        media.label ||
        'Imagen del proyecto NUTRIVELT';

      img.loading = 'lazy';

      img.addEventListener(
        'error',
        putPlaceholder,
        { once: true }
      );

      frame.append(img);

    } else {

      putPlaceholder();

    }


    if (clickable) {

      frame.classList.add(
        'clickable-media'
      );

      frame.tabIndex = 0;

      frame.setAttribute(
        'role',
        'button'
      );

      frame.setAttribute(
        'aria-label',
        `Ampliar: ${
          title ||
          media.label ||
          'evidencia'
        }`
      );


      const open = () => {

        openMedia(
          {
            media,
            title,
            caption
          },
          collection || [
            {
              media,
              title,
              caption
            }
          ],
          index
        );

      };


      frame.addEventListener(
        'click',
        open
      );


      frame.addEventListener(
        'keydown',
        (event) => {

          if (
            event.key === 'Enter' ||
            event.key === ' '
          ) {

            event.preventDefault();

            open();

          }

        }
      );

    }

    return frame;
  }


  function setText(selector, value) {

    const node = $(selector);

    if (node) {
      node.textContent = value ?? '';
    }

  }


  function clearAndAppend(root, ...children) {

    if (!root) return;

    root.replaceChildren();

    children.forEach(
      (child) => {
        if (child) {
          root.append(child);
        }
      }
    );

  }


  /* =========================================================
     IDENTIDAD DEL PROYECTO
  ========================================================= */

  function fillProjectIdentity() {

    document.title =
      `${project.name} | Proyecto de emprendimiento`;


    setText(
      '#project-name',
      project.name
    );

    setText(
      '#project-tagline',
      project.tagline
    );

    setText(
      '#team-name',
      project.team
    );

    setText(
      '#institution-short',
      project.institutionShort
    );

    setText(
      '#project-year',
      project.year
    );

    setText(
      '#unit-price',
      C.prices.unit
    );

    setText(
      '#offer-price',
      C.prices.offer
    );

    setText(
      '#sales-unit-price',
      C.prices.unit
    );

    setText(
      '#sales-offer-price',
      C.prices.offer
    );

    setText(
      '#institution-name',
      project.institution
    );

    setText(
      '#institution-code',
      project.institutionCode
    );

    setText(
      '#institution-category',
      project.category
    );

    setText(
      '#cover-team',
      project.team
    );

    setText(
      '#cover-student',
      project.student
    );

    setText(
      '#cover-institution',
      project.institutionShort
    );

    setText(
      '#cover-category',
      project.category
    );

    setText(
      '#cover-year',
      project.year
    );

    setText(
      '#footer-year',
      project.year
    );


    /* LOGOS */

    const heroLogos =
      $('#hero-logos');

    if (heroLogos) {

      heroLogos.replaceChildren();

      heroLogos.append(

        mediaFrame(
          C.media.logos.institution,
          {
            className: 'logo-slot',
            title: 'Logotipo institucional'
          }
        ),

        mediaFrame(
          C.media.logos.project,
          {
            className: 'logo-slot',
            title: 'Logotipo NUTRIVELT'
          }
        )

      );

    }


    /* HERO */

    const heroMedia =
      $('#hero-media');

    if (heroMedia) {

      heroMedia.replaceChildren(

        mediaFrame(
          C.media.hero,
          {
            className: 'hero-media',
            title: 'Foto principal del producto'
          }
        )

      );

    }


    /* INNOVACIÓN */

    const innovationMedia =
      $('#innovation-media');

    if (innovationMedia) {

      innovationMedia.replaceChildren(

        mediaFrame(
          C.media.innovation,
          {
            title: 'Innovación de NUTRIVELT'
          }
        )

      );

    }


    /* MAPA DE EMPATÍA */

    const empathyMap =
      $('#empathy-map');

    if (empathyMap) {

      empathyMap.replaceChildren(

        mediaFrame(
          C.media.empathyMap,
          {
            title: 'Mapa de empatía'
          }
        )

      );

    }


    /* LOGO INSTITUCIONAL */

    const institutionLogo =
      $('#institution-logo');

    if (institutionLogo) {

      institutionLogo.replaceChildren(

        mediaFrame(
          C.media.logos.institution,
          {
            title: 'Institución educativa'
          }
        )

      );

    }


    /* CARÁTULA */

    const coverMedia =
      $('#cover-media');

    if (coverMedia) {

      coverMedia.replaceChildren(

        mediaFrame(
          C.media.cover,
          {
            title: 'Foto representativa'
          }
        )

      );

    }


    /* PROBLEMA */

    const problem =
      $('#problem-media');

    if (problem) {

      problem.replaceChildren(

        mediaFrame(
          C.media.problem,
          {
            title: 'Foto del problema'
          }
        ),

        mediaFrame(
          C.media.problemEvidence,
          {
            title: 'Evidencia del problema'
          }
        )

      );

    }

  }


  /* =========================================================
     SOLUCIÓN
  ========================================================= */

  function renderSolution() {

    const root =
      $('#solution-flow');

    if (!root) return;

    root.replaceChildren();

    C.solutionSteps.forEach(
      (step) => {

        const card =
          element(
            'article',
            'process-card reveal'
          );

        card.append(

          mediaFrame(
            step.media,
            {
              className: 'process-media',
              title: step.title
            }
          ),

          element(
            'h3',
            '',
            step.title
          ),

          element(
            'p',
            '',
            step.text
          )

        );

        root.append(card);

      }
    );

  }


  /* =========================================================
     INGREDIENTES
  ========================================================= */

  function renderIngredients() {

    const root =
      $('#ingredient-grid');

    if (!root) return;

    root.replaceChildren();

    C.ingredients.forEach(
      (ingredient) => {

        const card =
          element(
            'article',
            'ingredient-card reveal'
          );

        const info =
          element('div');

        info.append(

          element(
            'h3',
            '',
            ingredient.name
          ),

          element(
            'p',
            '',
            ingredient.description
          ),

          element(
            'small',
            '',
            ingredient.note
          )

        );

        card.append(

          mediaFrame(
            ingredient.media,
            {
              title: ingredient.name
            }
          ),

          info

        );

        root.append(card);

      }
    );

  }


  /* =========================================================
     TABLAS
  ========================================================= */

  function createTable(
    rootId,
    headers,
    rows
  ) {

    const root =
      $(rootId);

    if (!root) return;

    root.replaceChildren();


    const tableEl =
      element(
        'table',
        'data-table'
      );


    const thead =
      element('thead');

    const headRow =
      element('tr');


    headers.forEach(
      (header) => {

        headRow.append(
          element(
            'th',
            '',
            header.label
          )
        );

      }
    );


    thead.append(headRow);


    const tbody =
      element('tbody');


    rows.forEach(
      (row) => {

        const tr =
          element('tr');


        headers.forEach(
          ({ key }) => {

            tr.append(

              element(
                'td',
                '',
                row[key] ||
                'Información pendiente de completar.'
              )

            );

          }
        );


        tbody.append(tr);

      }
    );


    tableEl.append(
      thead,
      tbody
    );


    const mobile =
      element(
        'div',
        'table-mobile'
      );


    rows.forEach(
      (row) => {

        const card =
          element(
            'article',
            'mobile-row'
          );


        card.append(

          element(
            'h3',
            '',
            row[
              headers[0].key
            ] ||
            'Información pendiente'
          )

        );


        headers
          .slice(1)
          .forEach(
            ({ label, key }) => {

              const paragraph =
                element('p');


              paragraph.append(

                element(
                  'strong',
                  '',
                  `${label}: `
                ),

                document.createTextNode(
                  row[key] ||
                  'Información pendiente de completar.'
                )

              );


              card.append(paragraph);

            }
          );


        mobile.append(card);

      }
    );


    root.append(
      tableEl,
      mobile
    );

  }


  function renderTables() {

    createTable(

      '#competition-table',

      [
        {
          label: 'Producto',
          key: 'product'
        },
        {
          label: 'Características',
          key: 'features'
        },
        {
          label: 'Fortalezas',
          key: 'strengths'
        },
        {
          label: 'Limitaciones',
          key: 'limits'
        }
      ],

      C.competition

    );


    createTable(

      '#validation-plan',

      [
        {
          label: 'Fase',
          key: 'phase'
        },
        {
          label: 'Hipótesis',
          key: 'hypothesis'
        },
        {
          label: 'Acciones',
          key: 'actions'
        },
        {
          label: 'Indicadores',
          key: 'indicators'
        },
        {
          label: 'Tiempo',
          key: 'time'
        }
      ],

      C.validationPlan

    );


    createTable(

      '#retention-table',

      [
        {
          label: 'Cliente',
          key: 'client'
        },
        {
          label: 'Acción',
          key: 'action'
        },
        {
          label: 'Evidencia',
          key: 'evidence'
        }
      ],

      C.retention.map(
        (row) => ({
          ...row,
          evidence:
            row.evidence ||
            'Espacio para agregar evidencia.'
        })
      )

    );

  }


  /* =========================================================
     DESIGN THINKING
  ========================================================= */

  function renderDesignThinking() {

    const tabs =
      $('#dt-tabs');

    const panel =
      $('#dt-panel');

    if (!tabs || !panel) return;

    tabs.replaceChildren();


    const activate =
      (index) => {

        const stage =
          C.designThinking[index];

        if (!stage) return;


        $$('.dt-tab', tabs)
          .forEach(
            (button, tabIndex) => {

              const active =
                tabIndex === index;

              button.classList.toggle(
                'active',
                active
              );

              button.setAttribute(
                'aria-selected',
                String(active)
              );

            }
          );


        panel.replaceChildren();


        const text =
          element('div');


        text.append(

          element(
            'span',
            'eyebrow light',
            `${stage.number} · ${stage.title.toUpperCase()}`
          ),

          element(
            'h3',
            '',
            stage.summary
          ),

          element(
            'p',
            '',
            'Registra aquí la descripción, evidencia, fotografías y resultados de esta etapa.'
          )

        );


        const result =
          element(
            'div',
            'dt-result'
          );


        result.append(

          element(
            'strong',
            '',
            'RESULTADO: '
          ),

          document.createTextNode(
            stage.result
          )

        );


        text.append(result);


        panel.append(

          text,

          mediaFrame(
            stage.media,
            {
              title:
                `Evidencia: ${stage.title}`
            }
          )

        );

      };


    C.designThinking.forEach(
      (stage, index) => {

        const button =
          element(
            'button',
            `dt-tab ${
              index === 0
                ? 'active'
                : ''
            }`
          );


        button.type =
          'button';

        button.setAttribute(
          'role',
          'tab'
        );

        button.setAttribute(
          'aria-selected',
          String(index === 0)
        );


        button.append(

          element(
            'small',
            '',
            stage.number
          ),

          element(
            'strong',
            '',
            stage.title
          )

        );


        button.addEventListener(
          'click',
          () => activate(index)
        );


        tabs.append(button);

      }
    );


    activate(0);

  }


  /* =========================================================
     ENTREVISTA
  ========================================================= */

  function renderInterview() {

    const accordion =
      $('#interview-accordion');

    if (!accordion) return;

    accordion.replaceChildren();


    C.interview.questions.forEach(
      (item) => {

        const article =
          element(
            'article',
            'accordion-item reveal'
          );


        const button =
          element(
            'button',
            'accordion-button',
            item.question
          );


        button.type =
          'button';

        button.setAttribute(
          'aria-expanded',
          'false'
        );


        const panel =
          element(
            'div',
            'accordion-panel'
          );


        const inner =
          element('div');


        inner.append(

          element(
            'p',
            '',
            item.answer
          )

        );


        panel.append(inner);


        button.addEventListener(
          'click',
          () => {

            const open =
              article.classList.toggle(
                'open'
              );


            button.setAttribute(
              'aria-expanded',
              String(open)
            );

          }
        );


        article.append(
          button,
          panel
        );


        accordion.append(article);

      }
    );

  }


  /* =========================================================
     IDEACIÓN
  ========================================================= */

  function renderIdeation() {

    const root =
      $('#ideation-gallery');

    if (!root) return;

    root.replaceChildren();


    C.ideationGallery.forEach(
      (item) => {

        const card =
          element(
            'article',
            'ideation-card reveal'
          );


        card.append(

          mediaFrame(
            item.media,
            {
              title: item.title
            }
          ),

          element(
            'h3',
            '',
            item.title
          ),

          element(
            'p',
            '',
            item.date
          )

        );


        root.append(card);

      }
    );

  }


  /* =========================================================
     PROTOTIPOS
  ========================================================= */

  function renderPrototypes() {

    const root =
      $('#prototype-track');

    if (!root) return;

    root.replaceChildren();


    C.prototypeJourney.forEach(
      (stage) => {

        const card =
          element(
            'article',
            'prototype-card reveal'
          );


        const heading =
          element(
            'h3',
            '',
            stage.name
          );


        heading.append(

          element(
            'small',
            '',
            stage.subtitle
          )

        );


        const description =
          element(
            'p',
            '',
            stage.description
          );


        const info =
          element(
            'div',
            'prototype-info'
          );


        [

          [
            'Fecha',
            stage.date
          ],

          [
            'Resultado',
            stage.result
          ],

          [
            'Aprendizaje',
            stage.learning
          ]

        ].forEach(
          ([name, value]) => {

            info.append(

              element(
                'strong',
                '',
                name.toUpperCase()
              ),

              element(
                'p',
                '',
                value
              )

            );

          }
        );


        card.append(

          mediaFrame(
            stage.media,
            {
              title:
                `${stage.name}: ${stage.subtitle}`
            }
          ),

          heading,

          description,

          info

        );


        root.append(card);

      }
    );


    const before =
      C.prototypeJourney[0];

    const after =
      C.prototypeJourney[
        C.prototypeJourney.length - 1
      ];


    const beforeMedia =
      $('#before-media');

    if (beforeMedia && before) {

      beforeMedia.replaceChildren(

        mediaFrame(
          before.media,
          {
            title:
              `Antes: ${before.name}`
          }
        )

      );

    }


    const afterMedia =
      $('#after-media');

    if (afterMedia && after) {

      afterMedia.replaceChildren(

        mediaFrame(
          after.media,
          {
            title:
              `Después: ${after.name}`
          }
        )

      );

    }

  }


  /* =========================================================
     ENCUESTA
  ========================================================= */

  function renderSurvey() {

    const root =
      $('#survey-results');

    if (!root) return;

    root.replaceChildren();


    const percentage =
      C.survey.targetResponses > 0
        ? Math.round(
            (
              C.survey.completedResponses /
              C.survey.targetResponses
            ) * 100
          )
        : 0;


    const progress =
      element(
        'div',
        'survey-progress reveal'
      );


    progress.append(

      element(
        'strong',
        '',
        `${C.survey.completedResponses}/${C.survey.targetResponses}`
      ),

      element(
        'span',
        '',
        ` respuestas registradas · ${percentage}%`
      )

    );


    root.append(progress);


    root.append(

      element(
        'p',
        'survey-note reveal',
        C.survey.note
      )

    );


    C.survey.results.forEach(
      (result) => {

        const card =
          element(
            'article',
            'survey-card reveal'
          );


        card.append(

          element(
            'h3',
            '',
            result.indicator
          ),

          element(
            'p',
            '',
            result.value
          )

        );


        root.append(card);

      }
    );

  }


  /* =========================================================
     CRONOGRAMA
  ========================================================= */

  function renderGantt() {

    const root =
      $('#gantt-grid');

    if (!root) return;

    root.replaceChildren();


    const weeks =
      C.gantt.weeks;


    const header =
      element(
        'div',
        'gantt-header'
      );


    header.append(
      element(
        'div',
        'gantt-task-label',
        'ACTIVIDAD'
      )
    );


    const weekContainer =
      element(
        'div',
        'gantt-weeks'
      );


    for (
      let week = 1;
      week <= weeks;
      week++
    ) {

      weekContainer.append(
        element(
          'span',
          '',
          `S${week}`
        )
      );

    }


    header.append(
      weekContainer
    );


    root.append(header);


    C.gantt.tasks.forEach(
      (task) => {

        const row =
          element(
            'div',
            'gantt-row reveal'
          );


        const label =
          element(
            'div',
            'gantt-task-label',
            task.name
          );


        const timeline =
          element(
            'div',
            'gantt-timeline'
          );


        for (
          let week = 1;
          week <= weeks;
          week++
        ) {

          const cell =
            element(
              'span',
              'gantt-cell'
            );


          if (
            week >= task.start &&
            week <
              task.start +
              task.duration
          ) {

            cell.classList.add(
              'active'
            );

          }


          timeline.append(cell);

        }


        row.append(
          label,
          timeline
        );


        root.append(row);

      }
    );

  }


  /* =========================================================
     REDES SOCIALES
  ========================================================= */

  function socialAnchor(
    name,
    url,
    className = 'social-button'
  ) {

    const validUrl =
      safeUrl(url);


    if (!validUrl) {

      const disabled =
        element(
          'span',
          `${className} disabled`,
          `${name} · Pendiente`
        );


      disabled.title =
        'Agrega el enlace en js/config.js';


      return disabled;

    }


    const anchor =
      element(
        'a',
        className,
        name
      );


    anchor.href =
      validUrl;

    anchor.target =
      '_blank';

    anchor.rel =
      'noopener noreferrer';


    return anchor;

  }


  /* =========================================================
     MODELO DE NEGOCIO
  ========================================================= */

  function renderBusiness() {

    const canvas =
      $('#lean-canvas');

    if (canvas) {

      canvas.replaceChildren();


      C.leanCanvas.forEach(
        (block) => {

          const card =
            element(
              'article',
              'canvas-card reveal'
            );


          card.append(

            element(
              'h3',
              '',
              block.title
            ),

            element(
              'p',
              '',
              block.text
            )

          );


          canvas.append(card);

        }
      );

    }


    const socials =
      $('#social-buttons');

    const footer =
      $('#footer-socials');


    if (socials) {
      socials.replaceChildren();
    }

    if (footer) {
      footer.replaceChildren();
    }


    const socialItems = [

      [
        'WhatsApp',
        C.socialLinks.whatsapp
      ],

      [
        'Instagram',
        C.socialLinks.instagram
      ],

      [
        'Facebook',
        C.socialLinks.facebook
      ],

      [
        'TikTok',
        C.socialLinks.tiktok
      ]

    ];


    socialItems.forEach(
      ([name, url]) => {

        if (socials) {

          socials.append(
            socialAnchor(
              name,
              url
            )
          );

        }


        if (footer) {

          footer.append(
            socialAnchor(
              name,
              url,
              'footer-social'
            )
          );

        }

      }
    );

  }


  /* =========================================================
     CAPTACIÓN
  ========================================================= */

  function linkOrPlaceholder(
    label,
    url,
    className = ''
  ) {

    const validUrl =
      safeUrl(url);


    if (!validUrl) {

      return element(
        'span',
        `${className} disabled`.trim(),
        'Link pendiente'
      );

    }


    const link =
      element(
        'a',
        className,
        label
      );


    link.href =
      validUrl;

    link.target =
      '_blank';

    link.rel =
      'noopener noreferrer';


    return link;

  }


  function renderAcquisition() {

    const root =
      $('#acquisition-grid');

    if (!root) return;

    root.replaceChildren();


    C.acquisition.forEach(
      (item) => {

        const card =
          element(
            'article',
            'acquisition-card reveal'
          );


        card.append(

          mediaFrame(
            item.media,
            {
              title: item.title
            }
          ),

          element(
            'h3',
            '',
            item.title
          ),

          element(
            'p',
            '',
            item.description
          ),

          linkOrPlaceholder(
            'Ver recurso',
            item.link,
            'small-link'
          )

        );


        root.append(card);

      }
    );

  }


  /* =========================================================
     GALERÍA
  ========================================================= */

  function renderGallery() {

    const filters =
      $('#gallery-filters');

    const root =
      $('#general-gallery');

    if (!filters || !root) return;

    filters.replaceChildren();
    root.replaceChildren();


    const categories = [

      'Todas',

      ...new Set(
        C.gallery.map(
          (item) =>
            item.category
        )
      )

    ];


    const update =
      (filter) => {

        $$('.filter-button', filters)
          .forEach(
            (button) => {

              button.classList.toggle(
                'active',
                button.dataset.filter === filter
              );

            }
          );


        $$('.gallery-card', root)
          .forEach(
            (card) => {

              card.hidden =
                filter !== 'Todas' &&
                card.dataset.category !== filter;

            }
          );

      };


    categories.forEach(
      (category, index) => {

        const button =
          element(
            'button',
            `filter-button ${
              index === 0
                ? 'active'
                : ''
            }`,
            category
          );


        button.type =
          'button';

        button.dataset.filter =
          category;


        button.addEventListener(
          'click',
          () => update(category)
        );


        filters.append(button);

      }
    );


    C.gallery.forEach(
      (item, index) => {

        const card =
          element(
            'article',
            'gallery-card reveal'
          );


        card.dataset.category =
          item.category;


        card.append(

          mediaFrame(
            item.media,
            {
              title: item.title
            }
          )

        );


        const footer =
          element('footer');


        footer.append(

          element(
            'strong',
            '',
            item.title
          ),

          element(
            'small',
            '',
            `${item.category} · ${item.date}`
          )

        );


        card.append(footer);


        const open =
          () =>
            openMedia(
              item,
              C.gallery,
              index
            );


        card.addEventListener(
          'click',
          open
        );


        card.tabIndex =
          0;


        card.setAttribute(
          'role',
          'button'
        );


        card.setAttribute(
          'aria-label',
          `Abrir ${item.title}`
        );


        card.addEventListener(
          'keydown',
          (event) => {

            if (
              event.key === 'Enter' ||
              event.key === ' '
            ) {

              event.preventDefault();

              open();

            }

          }
        );


        root.append(card);

      }
    );

  }


  /* =========================================================
     EVIDENCIAS
  ========================================================= */

  function renderEvidence() {

    const filters =
      $('#evidence-filters');

    const root =
      $('#evidence-grid');

    if (!filters || !root) return;

    filters.replaceChildren();
    root.replaceChildren();


    const types = [

      'Todos',

      ...new Set(
        C.evidence.map(
          (item) =>
            item.type
        )
      )

    ];


    const update =
      (filter) => {

        $$('.filter-button', filters)
          .forEach(
            (button) => {

              button.classList.toggle(
                'active',
                button.dataset.filter === filter
              );

            }
          );


        $$('.evidence-card', root)
          .forEach(
            (card) => {

              card.hidden =
                filter !== 'Todos' &&
                card.dataset.type !== filter;

            }
          );

      };


    types.forEach(
      (type, index) => {

        const button =
          element(
            'button',
            `filter-button ${
              index === 0
                ? 'active'
                : ''
            }`,
            type
          );


        button.type =
          'button';

        button.dataset.filter =
          type;


        button.addEventListener(
          'click',
          () => update(type)
        );


        filters.append(button);

      }
    );


    C.evidence.forEach(
      (item, index) => {

        const card =
          element(
            'article',
            'evidence-card reveal'
          );


        card.dataset.type =
          item.type;


        card.append(

          mediaFrame(
            item.media,
            {
              title: item.type
            }
          )

        );


        const body =
          element(
            'div',
            'evidence-card-body'
          );


        body.append(

          element(
            'span',
            'evidence-type',
            item.type
          ),

          element(
            'p',
            '',
            item.description
          ),

          element(
            'time',
            '',
            item.date
          ),

          linkOrPlaceholder(
            'Abrir evidencia',
            item.link,
            'evidence-link'
          )

        );


        card.append(body);


        card.addEventListener(
          'dblclick',
          () =>
            openMedia(
              item,
              C.evidence,
              index
            )
        );


        root.append(card);

      }
    );

  }


  /* =========================================================
     ANEXOS
  ========================================================= */

  function renderAnnexes() {

    const root =
      $('#annex-grid');

    if (!root) return;

    root.replaceChildren();


    C.annexes.forEach(
      (item) => {

        const card =
          element(
            'article',
            'annex-card reveal'
          );


        card.append(

          element(
            'h3',
            '',
            item.title
          ),

          linkOrPlaceholder(
            'Abrir documento',
            item.link,
            'document-link'
          )

        );


        root.append(card);

      }
    );

  }


  /* =========================================================
     EQUIPO
  ========================================================= */

  function renderTeam() {

    const root =
      $('#team-grid');

    if (!root) return;

    root.replaceChildren();


    C.team.forEach(
      (member) => {

        const card =
          element(
            'article',
            'team-card reveal'
          );


        const details =
          element('div');


        const heading =
          element(
            'h3',
            '',
            member.name
          );


        heading.append(

          element(
            'small',
            '',
            member.role
          )

        );


        details.append(

          heading,

          element(
            'p',
            '',
            member.description
          )

        );


        card.append(

          mediaFrame(
            member.media || {},
            {
              title:
                member.name
            }
          ),

          details

        );


        root.append(card);

      }
    );

  }


  /* =========================================================
     MODAL
  ========================================================= */

  function openMedia(
    item,
    collection = [item],
    index = 0
  ) {

    if (!modal || !modalBody) return;


    lastFocused =
      document.activeElement;


    activeCollection =
      collection;


    activeIndex =
      index;


    const media =
      item.media ||
      item;


    modalBody.replaceChildren();


    const src =
      safeUrl(media.src);


    if (src) {

      const image =
        document.createElement('img');


      image.src =
        src;


      image.alt =
        media.alt ||
        item.title ||
        media.label ||
        'Evidencia NUTRIVELT';


      image.className =
        'modal-image';


      image.addEventListener(
        'error',
        () => {

          image.replaceWith(
            placeholder(
              media.label,
              'modal-placeholder'
            )
          );

        }
      );


      modalBody.append(image);

    } else {

      modalBody.append(

        placeholder(
          media.label ||
          'ESPACIO PARA EVIDENCIA',
          'modal-placeholder'
        )

      );

    }


    modalBody.append(

      element(
        'h2',
        'modal-title',
        item.title ||
        item.type ||
        media.label ||
        'Evidencia'
      ),

      element(
        'p',
        'modal-caption',
        item.caption ||
        item.date ||
        'Espacio para agregar evidencia.'
      )

    );


    if (modalNav) {

      modalNav.hidden =
        collection.length < 2;

    }


    openModal();

  }


  function openModal() {

    if (!modal) return;


    modal.classList.add(
      'open'
    );


    modal.setAttribute(
      'aria-hidden',
      'false'
    );


    document.body.classList.add(
      'modal-open'
    );


    const closeButton =
      $('.modal-close', modal);


    if (closeButton) {
      closeButton.focus();
    }

  }


  function closeModal() {

    if (!modal) return;


    modal.classList.remove(
      'open'
    );


    modal.setAttribute(
      'aria-hidden',
      'true'
    );


    document.body.classList.remove(
      'modal-open'
    );


    if (
      lastFocused &&
      typeof lastFocused.focus === 'function'
    ) {

      lastFocused.focus();

    }

  }


  function nextMedia(direction) {

    if (
      !activeCollection.length
    ) return;


    activeIndex =
      (
        activeIndex +
        direction +
        activeCollection.length
      ) %
      activeCollection.length;


    openMedia(
      activeCollection[
        activeIndex
      ],
      activeCollection,
      activeIndex
    );

  }


  /* =========================================================
     NAVEGACIÓN
  ========================================================= */

  function enableNavigation() {

    const menu =
      $('#main-menu');

    const toggle =
      $('.menu-toggle');

    const nav =
      $('.nav');

    const backTop =
      $('.back-top');


    if (!menu || !toggle) return;


    toggle.addEventListener(
      'click',
      () => {

        const open =
          menu.classList.toggle(
            'open'
          );


        toggle.setAttribute(
          'aria-expanded',
          String(open)
        );


        toggle.setAttribute(
          'aria-label',
          open
            ? 'Cerrar menú'
            : 'Abrir menú'
        );

      }
    );


    $$('#main-menu a')
      .forEach(
        (link) => {

          link.addEventListener(
            'click',
            () => {

              menu.classList.remove(
                'open'
              );


              toggle.setAttribute(
                'aria-expanded',
                'false'
              );

            }
          );

        }
      );


    if (backTop) {

      backTop.addEventListener(
        'click',
        () => {

          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });

        }
      );

    }


    if (nav) {

      window.addEventListener(
        'scroll',
        () => {

          nav.classList.toggle(
            'scrolled',
            window.scrollY > 30
          );


          if (backTop) {

            backTop.classList.toggle(
              'show',
              window.scrollY > 600
            );

          }

        },
        {
          passive: true
        }
      );

    }


    const targetLinks =
      new Map(

        $$('#main-menu a')
          .map(
            (link) => [

              link
                .getAttribute('href')
                ?.replace('#', ''),

              link

            ]
          )

      );


    const sections =
      [
        ...targetLinks.keys()
      ]
        .map(
          (id) =>
            document.getElementById(id)
        )
        .filter(Boolean);


    if (
      'IntersectionObserver' in window
    ) {

      const observer =
        new IntersectionObserver(

          (entries) => {

            entries.forEach(
              (entry) => {

                if (
                  entry.isIntersecting
                ) {

                  $$('#main-menu a')
                    .forEach(
                      (link) =>
                        link.classList.remove(
                          'active'
                        )
                    );


                  targetLinks
                    .get(
                      entry.target.id
                    )
                    ?.classList.add(
                      'active'
                    );

                }

              }
            );

          },

          {
            rootMargin:
              '-25% 0px -62% 0px',

            threshold: 0
          }

        );


      sections.forEach(
        (section) =>
          observer.observe(section)
      );

    }

  }


  /* =========================================================
     ANIMACIONES
  ========================================================= */

  function enableReveal() {

    const nodes =
      $$('.reveal');


    if (!nodes.length) return;


    /*
     * Mostramos inicialmente los elementos
     * para evitar que la página quede en blanco
     * si el navegador no soporta IntersectionObserver.
     */

    if (
      !('IntersectionObserver' in window)
    ) {

      nodes.forEach(
        (node) =>
          node.classList.add(
            'visible'
          )
      );

      return;

    }


    const reveal =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  'visible'
                );


                reveal.unobserve(
                  entry.target
                );

              }

            }
          );

        },

        {
          threshold: 0.03
        }

      );


    nodes.forEach(
      (node) =>
        reveal.observe(node)
    );

  }


  /* =========================================================
     MODAL
  ========================================================= */

  function bindModal() {

    if (!modal) return;


    $$('[data-close-modal]')
      .forEach(
        (button) => {

          button.addEventListener(
            'click',
            closeModal
          );

        }
      );


    const previous =
      $('#modal-prev');

    const next =
      $('#modal-next');


    if (previous) {

      previous.addEventListener(
        'click',
        () =>
          nextMedia(-1)
      );

    }


    if (next) {

      next.addEventListener(
        'click',
        () =>
          nextMedia(1)
      );

    }


    modal.addEventListener(
      'click',
      (event) => {

        if (
          event.target === modal
        ) {

          closeModal();

        }

      }
    );


    document.addEventListener(
      'keydown',
      (event) => {

        if (
          !modal.classList.contains(
            'open'
          )
        ) return;


        if (
          event.key === 'Escape'
        ) {

          closeModal();

        }


        if (
          event.key === 'ArrowLeft' &&
          modalNav &&
          !modalNav.hidden
        ) {

          nextMedia(-1);

        }


        if (
          event.key === 'ArrowRight' &&
          modalNav &&
          !modalNav.hidden
        ) {

          nextMedia(1);

        }

      }
    );

  }


  /* =========================================================
     INICIALIZACIÓN
  ========================================================= */

  function init() {

    try {

      fillProjectIdentity();

      renderSolution();

      renderIngredients();

      renderTables();

      renderDesignThinking();

      renderInterview();

      renderIdeation();

      renderPrototypes();

      renderSurvey();

      renderGantt();

      renderBusiness();

      renderAcquisition();

      renderGallery();

      renderEvidence();

      renderAnnexes();

      renderTeam();

      enableNavigation();

      enableReveal();

      bindModal();

    } catch (error) {

      console.error(
        'Error al cargar NUTRIVELT:',
        error
      );

      /*
       * Si ocurre un error, mostramos los elementos
       * .reveal para evitar que toda la página
       * permanezca invisible.
       */

      $$('.reveal')
        .forEach(
          (node) =>
            node.classList.add(
              'visible'
            )
        );

    }

  }


  document.addEventListener(
    'DOMContentLoaded',
    init
  );

})();
