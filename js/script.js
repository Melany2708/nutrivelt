// Utilidades de apoyo
const $ = (selector) => document.querySelector(selector);

function element(tag, className, textContent = '') {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;
  return el;
}

// Configuración por defecto si falta config.js
const C = window.config || {
  gantt: {
    weeks: 14,
    tasks: [
      { name: "1. Tarea Inicial", start: 1, duration: 3 },
      { name: "2. Desarrollo", start: 3, duration: 6 },
      { name: "3. Pruebas", start: 8, duration: 4 },
      { name: "4. Entrega", start: 12, duration: 3 }
    ]
  }
};

// Renderizado del Calendario de Ejecución (Gantt)
function renderGantt() {
  const root = $('#gantt-chart');
  if (!root) return;

  root.innerHTML = ''; // Limpiar previo

  const weeks = Number(C.gantt?.weeks) || 14;
  const tasks = C.gantt?.tasks || [];

  // Configuración de columnas
  root.style.gridTemplateColumns = `180px repeat(${weeks}, 1fr)`;

  // Encabezado
  root.append(element('div', 'gantt-head', 'Actividad'));
  for (let week = 1; week <= weeks; week += 1) {
    root.append(element('div', 'gantt-head', `S${week}`));
  }

  // Filas por cada actividad
  tasks.forEach((task) => {
    root.append(element('div', 'gantt-label', task.name));
    
    for (let week = 1; week <= weeks; week += 1) {
      const active = week >= task.start && week < (task.start + task.duration);
      const cell = element('div', `gantt-cell ${active ? 'active' : ''}`);
      if (active) {
        cell.setAttribute('aria-label', `${task.name}: semana ${week}`);
      }
      root.append(cell);
    }
  });
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  renderGantt();
});
