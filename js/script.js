(() => {
  'use strict';

  const C = window.NUTRIVELT_CONFIG;
  if (!C) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const project = C.project;
  const modal = $('#media-modal');
  const modalBody = $('#modal-body');
  const modalNav = $('#modal-navigation');
  let activeCollection = [];
  let activeIndex = 0;
  let lastFocused = null;

  const safeUrl = (value) => {
    if (!value || typeof value !== 'string') return '';
    const trimmed = value.trim();
    if (/^(https?:\/\/|\.\/|\.\.\/|assets\/|\/)/i.test(trimmed)) return trimmed;
    return '';
  };

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  function placeholder(label, extraClass = '') {
    const box = element('div', `media-placeholder ${extraClass}`.trim());
    const text = element('span', '', label || 'ESPACIO PARA AGREGAR EVIDENCIA');
    const hint = element('small', '', 'Reemplazable desde js/config.js');
    box.append(text, hint);
    return box;
  }

  function mediaFrame(media = {}, options = {}) {
    const { className = '', clickable = false, title = '', caption = '', collection = null, index = 0 } = options;
    const frame = element('div', `media-frame ${className}`.trim());
    const src = safeUrl(media.src);
    const putPlaceholder = () => {
      frame.replaceChildren(placeholder(media.label));
      frame.dataset.placeholder = 'true';
    };
    if (src) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = media.alt || title || media.label || 'Imagen del proyecto NUTRIVELT';
      img.loading = 'lazy';
      img.addEventListener('error', putPlaceholder, { once: true });
      frame.append(img);
    } else putPlaceholder();
    if (clickable) {
      frame.classList.add('clickable-media');
      frame.tabIndex = 0;
      frame.setAttribute('role', 'button');
      frame.setAttribute('aria-label', `Ampliar: ${title || media.label || 'evidencia'}`);
      const open = () => openMedia({ media, title, caption }, collection || [{ media, title, caption }], index);
      frame.addEventListener('click', open);
      frame.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
      });
    }
    return frame;
  }

  function setText(selector, value) { const node = $(selector); if (node) node.textContent = value; }

  function fillProjectIdentity() {
    document.title = `${project.name} | Proyecto de emprendimiento`;
    setText('#project-name', project.name);
    setText('#project-tagline', project.tagline);
    setText('#team-name', project.team);
    setText('#institution-short', project.institutionShort);
    setText('#project-year', project.year);
    setText('#unit-price', C.prices.unit);
    setText('#offer-price', C.prices.offer);
    setText('#sales-unit-price', C.prices.unit);
    setText('#sales-offer-price', C.prices.offer);
    setText('#advisor-name', project.advisor);
    setText('#modular-code', project.modularCode);
    setText('#institution-name', project.institution);
    setText('#institution-code', project.institutionCode);
    setText('#institution-category', project.category);
    setText('#cover-team', project.team);
    setText('#cover-student', project.student);
    setText('#cover-advisor', project.advisor);
    setText('#cover-institution', project.institutionShort);
    setText('#cover-category', project.category);
    setText('#cover-year', project.year);
    setText('#footer-year', project.year);

    const heroLogos = $('#hero-logos');
    const institutionLogo = mediaFrame(C.media.logos.institution, { className: 'logo-slot', title: 'Logotipo institucional' });
    const projectLogo = mediaFrame(C.media.logos.project, { className: 'logo-slot', title: 'Logotipo NUTRIVELT' });
    heroLogos.append(institutionLogo, projectLogo);
    $('#hero-media').append(mediaFrame(C.media.hero, { className: 'hero-media', title: 'Foto principal del producto' }));
    $('#innovation-media').append(mediaFrame(C.media.innovation, { title: 'Innovación de NUTRIVELT' }));
    $('#empathy-map').append(mediaFrame(C.media.empathyMap, { title: 'Mapa de empatía' }));
    $('#advisor-media').append(mediaFrame(C.media.advisor, { title: 'Docente asesor' }));
    $('#institution-logo').append(mediaFrame(C.media.logos.institution, { title: 'Institución educativa' }));
    $('#cover-media').append(mediaFrame(C.media.cover, { title: 'Foto representativa' }));

    const problem = $('#problem-media');
    problem.append(
      mediaFrame(C.media.problem, { title: 'Foto del problema' }),
      mediaFrame(C.media.problemEvidence, { title: 'Evidencia del problema' })
    );
  }

  function renderSolution() {
    const root = $('#solution-flow');
    C.solutionSteps.forEach((step) => {
      const card = element('article', 'process-card reveal');
      card.append(mediaFrame(step.media, { className: 'process-media', title: step.title }));
      card.append(element('h3', '', step.title), element('p', '', step.text));
      root.append(card);
    });
  }

  function renderIngredients() {
    const root = $('#ingredient-grid');
    C.ingredients.forEach((ingredient) => {
      const card = element('article', 'ingredient-card reveal');
      const info = element('div');
      info.append(element('h3', '', ingredient.name), element('p', '', ingredient.description), element('small', '', ingredient.note));
      card.append(mediaFrame(ingredient.media, { title: ingredient.name }), info);
      root.append(card);
    });
  }

  function table(rootId, headers, rows) {
    const root = $(rootId);
    const tableEl = element('table', 'data-table');
    const head = element('thead');
    const headRow = element('tr');
    headers.forEach((header) => headRow.append(element('th', '', header.label)));
    head.append(headRow);
    const body = element('tbody');
    rows.forEach((row) => {
      const tr = element('tr');
      headers.forEach(({ key }) => tr.append(element('td', '', row[key] || 'Información pendiente de completar.')));
      body.append(tr);
    });
    tableEl.append(head, body);
    const mobile = element('div', 'table-mobile');
    rows.forEach((row) => {
      const card = element('article', 'mobile-row');
      card.append(element('h3', '', row[headers[0].key] || 'Información pendiente'));
      headers.slice(1).forEach(({ label, key }) => {
        const paragraph = element('p');
        paragraph.append(element('strong', '', `${label}: `), document.createTextNode(row[key] || 'Información pendiente de completar.'));
        card.append(paragraph);
      });
      mobile.append(card);
    });
    root.append(tableEl, mobile);
  }

  function renderTables() {
    table('#competition-table', [
      { label: 'Producto', key: 'product' }, { label: 'Características', key: 'features' },
      { label: 'Fortalezas', key: 'strengths' }, { label: 'Limitaciones', key: 'limits' }
    ], C.competition);
    table('#validation-plan', [
      { label: 'Fase', key: 'phase' }, { label: 'Hipótesis', key: 'hypothesis' }, { label: 'Acciones', key: 'actions' },
      { label: 'Indicadores', key: 'indicators' }, { label: 'Tiempo', key: 'time' }
    ], C.validationPlan);
    table('#retention-table', [
      { label: 'Cliente', key: 'client' }, { label: 'Acción', key: 'action' }, { label: 'Evidencia', key: 'evidence' }
    ], C.retention.map((row) => ({ ...row, evidence: row.evidence || 'Espacio para agregar evidencia.' })));
  }

  function renderDesignThinking() {
    const tabs = $('#dt-tabs');
    const panel = $('#dt-panel');
    const activate = (index) => {
      const stage = C.designThinking[index];
      $$('.dt-tab', tabs).forEach((button, tabIndex) => {
        const active = tabIndex === index;
        button.classList.toggle('active', active);
        button.setAttribute('aria-selected', String(active));
      });
      panel.replaceChildren();
      const text = element('div');
      const label = element('span', 'eyebrow light', `${stage.number} · ${stage.title.toUpperCase()}`);
      text.append(label, element('h3', '', stage.summary), element('p', '', 'Registra aquí la descripción, evidencia, fotografías, videos y resultados de esta etapa.'));
      const result = element('div', 'dt-result');
      result.append(element('strong', '', 'RESULTADO: '), document.createTextNode(stage.result));
      text.append(result);
      panel.append(text, mediaFrame(stage.media, { title: `Evidencia: ${stage.title}` }));
    };
    C.designThinking.forEach((stage, index) => {
      const button = element('button', `dt-tab ${index === 0 ? 'active' : ''}`);
      button.type = 'button'; button.setAttribute('role', 'tab'); button.setAttribute('aria-selected', String(index === 0));
      button.append(element('small', '', stage.number), element('strong', '', stage.title));
      button.addEventListener('click', () => activate(index));
      tabs.append(button);
    });
    activate(0);
  }

  function renderInterview() {
    const video = C.interview.video;
    const root = $('#interview-video');
    const card = element('article', 'video-slot');
    const visual = element('div', 'video-placeholder', video.url ? 'VIDEO DE ENTREVISTA' : 'ESPACIO PARA VIDEO');
    const title = element('h3', '', video.title);
    const description = element('p', '', video.description);
    const button = element('button', 'button button-primary', video.url ? 'Ver reproductor' : 'PEGAR AQUÍ LINK DEL VIDEO');
    button.type = 'button';
    button.addEventListener('click', () => openVideo(video));
    card.append(visual, title, description, button); root.append(card);
    const accordion = $('#interview-accordion');
    C.interview.questions.forEach((item, index) => {
      const article = element('article', 'accordion-item');
      const btn = element('button', 'accordion-button', item.question);
      btn.type = 'button'; btn.setAttribute('aria-expanded', 'false');
      const panel = element('div', 'accordion-panel');
      const inner = element('div'); inner.append(element('p', '', item.answer)); panel.append(inner);
      btn.addEventListener('click', () => {
        const open = article.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
      });
      article.append(btn, panel); accordion.append(article);
    });
  }

  function renderIdeation() {
    const root = $('#ideation-gallery');
    C.ideationGallery.forEach((item) => {
      const card = element('article', 'ideation-card reveal');
      card.append(mediaFrame(item.media, { title: item.title }), element('h3', '', item.title), element('p', '', item.date));
      root.append(card);
    });
  }

  function renderPrototypes() {
    const root = $('#prototype-track');
    C.prototypeJourney.forEach((stage) => {
      const card = element('article', 'prototype-card reveal');
      const heading = element('h3', '', stage.name);
      heading.append(element('small', '', stage.subtitle));
      const description = element('p', '', stage.description);
      const info = element('div', 'prototype-info');
      [['Fecha', stage.date], ['Resultado', stage.result], ['Aprendizaje', stage.learning]].forEach(([name, value]) => {
        info.append(element('strong', '', name.toUpperCase()), element('p', '', value));
      });
      card.append(mediaFrame(stage.media, { title: `${stage.name}: ${stage.subtitle}` }), heading, description, info);
      root.append(card);
    });
    const before = C.prototypeJourney[0];
    const after = C.prototypeJourney[C.prototypeJourney.length - 1];
    $('#before-media').append(mediaFrame(before.media, { title: 'Antes: Prototipo I' }));
    $('#after-media').append(mediaFrame(after.media, { title: 'Después: NUTRIVELT' }));
  }

  function renderSurvey() {
    setText('#survey-target', C.survey.targetResponses ?? '—');
    setText('#survey-completed', C.survey.completedResponses ?? '—');
    setText('#survey-note', C.survey.note || 'Información pendiente');
    const chart = $('#survey-chart');
    const results = Array.isArray(C.survey.results) ? C.survey.results.filter((item) => Number.isFinite(Number(item.value))) : [];
    if (!results.length) { chart.append(element('div', 'chart-empty', 'Aún no hay resultados registrados. Agrega valores en js/config.js.')); return; }
    const maximum = Math.max(...results.map((item) => Number(item.value)), 1);
    results.forEach((item) => {
      const itemEl = element('div', 'bar-item');
      const bar = element('div', 'bar');
      bar.style.height = `${Math.max(7, (Number(item.value) / maximum) * 100)}%`;
      bar.style.background = item.color || '';
      bar.title = `${item.label}: ${item.value}`;
      itemEl.append(bar, element('small', '', item.label)); chart.append(itemEl);
    });
  }

  function renderGantt() {
    const root = $('#gantt-chart');
    const weeks = Number(C.gantt.weeks) || 14;
    root.style.gridTemplateColumns = `210px repeat(${weeks}, 1fr)`;
    root.append(element('div', 'gantt-head', 'Actividad'));
    for (let week = 1; week <= weeks; week += 1) root.append(element('div', 'gantt-head', `S${week}`));
    C.gantt.tasks.forEach((task) => {
      root.append(element('div', 'gantt-label', task.name));
      for (let week = 1; week <= weeks; week += 1) {
        const active = week >= task.start && week < task.start + task.duration;
        const cell = element('div', `gantt-cell ${active ? 'active' : ''}`);
        if (active) cell.setAttribute('aria-label', `${task.name}: semana ${week}`);
        root.append(cell);
      }
    });
  }

  function socialAnchor(name, url, className = 'social-button') {
    const validUrl = safeUrl(url);
    if (!validUrl) {
      const disabled = element('span', `${className} disabled`, `${name} · Pendiente`);
      disabled.title = 'Agrega el enlace en js/config.js';
      return disabled;
    }
    const anchor = element('a', className, name);
    anchor.href = validUrl; anchor.target = '_blank'; anchor.rel = 'noopener noreferrer';
    return anchor;
  }

  function renderBusiness() {
    const canvas = $('#lean-canvas');
    C.leanCanvas.forEach((block) => {
      const card = element('article', 'canvas-card reveal');
      card.append(element('h3', '', block.title), element('p', '', block.text)); canvas.append(card);
    });
    const socials = $('#social-buttons');
    const footer = $('#footer-socials');
    [['WhatsApp', C.socialLinks.whatsapp], ['Instagram', C.socialLinks.instagram], ['Facebook', C.socialLinks.facebook], ['TikTok', C.socialLinks.tiktok]].forEach(([name, url]) => {
      socials.append(socialAnchor(name, url)); footer.append(socialAnchor(name, url, 'footer-social'));
    });
  }

  function linkOrPlaceholder(label, url, className) {
    const validUrl = safeUrl(url);
    if (!validUrl) return element('span', `${className} disabled`, 'Link pendiente');
    const link = element('a', className, label); link.href = validUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; return link;
  }

  function renderAcquisition() {
    const root = $('#acquisition-grid');
    C.acquisition.forEach((item) => {
      const card = element('article', 'acquisition-card reveal');
      card.append(mediaFrame(item.media, { title: item.title }), element('h3', '', item.title), element('p', '', item.description), linkOrPlaceholder('Ver recurso', item.link, 'small-link'));
      root.append(card);
    });
  }

  function renderGallery() {
    const filters = $('#gallery-filters'); const root = $('#general-gallery');
    const categories = ['Todas', ...new Set(C.gallery.map((item) => item.category))];
    const update = (filter) => {
      $$('.filter-button', filters).forEach((button) => button.classList.toggle('active', button.dataset.filter === filter));
      $$('.gallery-card', root).forEach((card) => { card.hidden = filter !== 'Todas' && card.dataset.category !== filter; });
    };
    categories.forEach((category, index) => {
      const button = element('button', `filter-button ${index === 0 ? 'active' : ''}`, category); button.type = 'button'; button.dataset.filter = category;
      button.addEventListener('click', () => update(category)); filters.append(button);
    });
    C.gallery.forEach((item, index) => {
      const card = element('article', 'gallery-card reveal'); card.dataset.category = item.category;
      card.append(mediaFrame(item.media, { clickable: false, title: item.title }));
      const footer = element('footer'); footer.append(element('strong', '', item.title), element('small', '', `${item.category} · ${item.date}`)); card.append(footer);
      const open = () => openMedia(item, C.gallery, index);
      card.addEventListener('click', open); card.tabIndex = 0; card.setAttribute('role', 'button'); card.setAttribute('aria-label', `Abrir ${item.title}`);
      card.addEventListener('keydown', (event) => { if (event.key === 'Enter') open(); }); root.append(card);
    });
  }

  function renderVideos() {
    const root = $('#videos-grid');
    C.videos.forEach((video) => {
      const card = element('article', 'video-card reveal');
      const visual = element('div', 'video-placeholder', video.url ? 'VIDEO DISPONIBLE' : 'ESPACIO PARA VIDEO');
      const heading = element('h3', '', video.title); const text = element('p', '', video.description);
      const meta = element('div', 'video-meta'); meta.append(element('span', '', video.date));
      const button = element('button', 'play-small', video.url ? 'Ver reproductor' : 'Agregar link'); button.type = 'button'; button.addEventListener('click', () => openVideo(video)); meta.append(button);
      card.append(visual, heading, text, meta); root.append(card);
    });
  }

  function renderEvidence() {
    const filters = $('#evidence-filters'); const root = $('#evidence-grid');
    const types = ['Todos', ...new Set(C.evidence.map((item) => item.type))];
    const update = (filter) => {
      $$('.filter-button', filters).forEach((button) => button.classList.toggle('active', button.dataset.filter === filter));
      $$('.evidence-card', root).forEach((card) => { card.hidden = filter !== 'Todos' && card.dataset.type !== filter; });
    };
    types.forEach((type, index) => {
      const button = element('button', `filter-button ${index === 0 ? 'active' : ''}`, type); button.type = 'button'; button.dataset.filter = type;
      button.addEventListener('click', () => update(type)); filters.append(button);
    });
    C.evidence.forEach((item, index) => {
      const card = element('article', 'evidence-card reveal'); card.dataset.type = item.type;
      card.append(mediaFrame(item.media, { title: item.type }));
      const body = element('div', 'evidence-card-body');
      body.append(element('span', 'evidence-type', item.type), element('p', '', item.description), element('time', '', item.date), linkOrPlaceholder('Abrir evidencia', item.link, 'evidence-link'));
      card.append(body);
      card.addEventListener('dblclick', () => openMedia(item, C.evidence, index));
      root.append(card);
    });
  }

  function renderAnnexes() {
    const root = $('#annex-grid');
    C.annexes.forEach((item) => {
      const card = element('article', 'annex-card reveal');
      card.append(element('h3', '', item.title), linkOrPlaceholder('Abrir documento', item.link, 'document-link')); root.append(card);
    });
  }

  function renderTeam() {
    const root = $('#team-grid');
    C.team.forEach((member) => {
      const card = element('article', 'team-card reveal');
      const details = element('div'); const heading = element('h3', '', member.name); heading.append(element('small', '', member.role));
      details.append(heading, element('p', '', member.description)); card.append(mediaFrame(member.media, { title: member.name }), details); root.append(card);
    });
  }

  function openMedia(item, collection = [item], index = 0) {
    lastFocused = document.activeElement; activeCollection = collection; activeIndex = index;
    const media = item.media || item;
    modalBody.replaceChildren();
    const src = safeUrl(media.src);
    if (src) {
      const image = document.createElement('img'); image.src = src; image.alt = media.alt || item.title || media.label || 'Evidencia NUTRIVELT'; image.className = 'modal-image';
      image.addEventListener('error', () => image.replaceWith(placeholder(media.label, 'modal-placeholder'))); modalBody.append(image);
    } else modalBody.append(placeholder(media.label || 'ESPACIO PARA EVIDENCIA', 'modal-placeholder'));
    modalBody.append(element('h2', 'modal-title', item.title || item.type || media.label || 'Evidencia'), element('p', 'modal-caption', item.caption || item.date || 'Espacio para agregar evidencia.'));
    modalNav.hidden = collection.length < 2;
    openModal();
  }

  function videoEmbed(url) {
    const safe = safeUrl(url);
    if (!safe) return null;
    try {
      const parsed = new URL(safe, window.location.href);
      const host = parsed.hostname.replace('www.', '');
      if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtu.be') {
        const id = host === 'youtu.be' ? parsed.pathname.slice(1) : parsed.searchParams.get('v') || parsed.pathname.split('/').pop();
        if (!id) return null;
        const frame = document.createElement('iframe'); frame.className = 'modal-video'; frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`; frame.title = 'Video de NUTRIVELT'; frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'; frame.allowFullscreen = true; return frame;
      }
      if (host === 'vimeo.com' || host.endsWith('.vimeo.com')) {
        const id = parsed.pathname.split('/').filter(Boolean).pop(); if (!id) return null;
        const frame = document.createElement('iframe'); frame.className = 'modal-video'; frame.src = `https://player.vimeo.com/video/${encodeURIComponent(id)}`; frame.title = 'Video de NUTRIVELT'; frame.allowFullscreen = true; return frame;
      }
      if (/\.mp4($|\?)/i.test(parsed.pathname)) { const video = document.createElement('video'); video.className = 'modal-video'; video.src = safe; video.controls = true; return video; }
    } catch { return null; }
    return null;
  }

  function openVideo(video) {
    lastFocused = document.activeElement; modalBody.replaceChildren(); modalNav.hidden = true;
    const embed = videoEmbed(video.url);
    if (embed) modalBody.append(embed);
    else {
      const message = element('div', 'modal-message');
      const copy = element('div'); copy.append(element('strong', '', 'Video pendiente de agregar'), element('p', '', 'Añade una URL de YouTube, Vimeo o un archivo MP4 local en js/config.js.'));
      message.append(copy); modalBody.append(message);
    }
    modalBody.append(element('h2', 'modal-title', video.title || 'Video del proyecto'), element('p', 'modal-caption', video.date || 'Fecha pendiente de completar'));
    openModal();
  }

  function openModal() { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); $('.modal-close', modal).focus(); document.body.classList.add('modal-open'); }
  function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); if (lastFocused?.focus) lastFocused.focus(); }
  function nextMedia(direction) { if (!activeCollection.length) return; activeIndex = (activeIndex + direction + activeCollection.length) % activeCollection.length; openMedia(activeCollection[activeIndex], activeCollection, activeIndex); }

  function enableNavigation() {
    const menu = $('#main-menu'); const toggle = $('.menu-toggle'); const nav = $('.nav'); const backTop = $('.back-top');
    toggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); });
    $$('#main-menu a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 30); backTop.classList.toggle('show', window.scrollY > 600); }, { passive: true });
    const targetLinks = new Map($$('#main-menu a').map((link) => [link.getAttribute('href')?.slice(1), link]));
    const sections = [...targetLinks.keys()].map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { $$('#main-menu a').forEach((link) => link.classList.remove('active')); targetLinks.get(entry.target.id)?.classList.add('active'); } }), { rootMargin: '-25% 0px -62% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  function enableReveal() {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); } }), { threshold: .08 });
    $$('.reveal').forEach((node) => reveal.observe(node));
  }

  function bindModal() {
    $$('[data-close-modal]').forEach((button) => button.addEventListener('click', closeModal));
    $('#modal-prev').addEventListener('click', () => nextMedia(-1)); $('#modal-next').addEventListener('click', () => nextMedia(1));
    document.addEventListener('keydown', (event) => { if (!modal.classList.contains('open')) return; if (event.key === 'Escape') closeModal(); if (event.key === 'ArrowLeft' && !modalNav.hidden) nextMedia(-1); if (event.key === 'ArrowRight' && !modalNav.hidden) nextMedia(1); });
  }

  function init() {
    fillProjectIdentity(); renderSolution(); renderIngredients(); renderTables(); renderDesignThinking(); renderInterview(); renderIdeation(); renderPrototypes(); renderSurvey(); renderGantt(); renderBusiness(); renderAcquisition(); renderGallery(); renderVideos(); renderEvidence(); renderAnnexes(); renderTeam(); enableNavigation(); enableReveal(); bindModal();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
