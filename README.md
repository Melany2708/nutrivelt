# NUTRIVELT — sitio de presentación

Sitio web estático, responsive y listo para publicar para el proyecto de emprendimiento **NUTRIVELT** del equipo **Clúster Élan** (2026). Está hecho con HTML, CSS y JavaScript puro: no usa backend, claves ni servicios de pago.

## Ejecutar localmente

La web puede abrirse haciendo doble clic en `index.html`, pero es preferible servir la carpeta para probarla como en producción.

1. Abre una terminal dentro de la carpeta del proyecto.
2. Ejecuta uno de estos comandos si ya tienes la herramienta instalada:

   ```powershell
   py -m http.server 8000
   ```

   o

   ```powershell
   npx serve .
   ```

3. Visita `http://localhost:8000` en el navegador.

No hay instalación ni compilación requerida.

## Estructura

```text
pagina web/
├── index.html                  # Estructura semántica del sitio
├── README.md                   # Esta guía
├── css/
│   └── styles.css              # Diseño responsive
├── js/
│   ├── config.js               # TODO el contenido editable
│   └── script.js               # Interacciones y renderizado
└── assets/
    ├── images/                 # Logos, fotos y favicon
    ├── videos/                 # Videos MP4 locales opcionales
    └── documents/              # Documentos públicos opcionales
```

## Editar el contenido

El archivo principal que debes editar es [`js/config.js`](js/config.js). Está organizado por bloques y cada uno lleva comentarios.

| Si deseas cambiar… | Edita en `config.js` |
| --- | --- |
| Nombre, año, equipo, colegio, estudiante o asesor | `project` |
| Precio y promoción | `prices` |
| WhatsApp y redes sociales | `socialLinks` |
| Logos, portada, problema, mapa de empatía y otras imágenes principales | `media` |
| Ingredientes | `ingredients` |
| Entrevista y sus 13 preguntas | `interview` |
| Fotos de ideas y prototipos | `ideationGallery`, `prototypeJourney`, `gallery` |
| Encuestas y gráfico | `survey` |
| Cronograma de 14 semanas | `gantt` |
| Lean Canvas | `leanCanvas` |
| Evidencias y anexos públicos | `evidence`, `annexes` |
| Integrantes | `team` |

### Agregar un logo o una fotografía

1. Copia el archivo, por ejemplo, a `assets/images/`.
2. En el objeto correspondiente cambia el valor `src: ''` por su ruta relativa.

   ```js
   institution: {
     src: 'assets/images/logo-institucion.png',
     alt: 'Logotipo del Colegio Roosevelt',
     label: 'ESPACIO PARA LOGOTIPO DE LA INSTITUCIÓN'
   }
   ```

3. Guarda y recarga el navegador. Las rutas se actualizan automáticamente donde se use ese elemento.

Los campos vacíos muestran un placeholder visual. Esto es intencional: evita que una imagen inexistente rompa el diseño. Si una imagen configurada no carga, el sitio también vuelve automáticamente al placeholder.

### Agregar videos

En `videos` o `interview.video`, coloca una URL de YouTube, Vimeo o un archivo MP4 local:

```js
{ 
  title: 'Proceso de elaboración',
  description: 'Registro del proceso.',
  date: '2026-05-12',
  url: 'assets/videos/proceso.mp4'
}
```

También puedes usar una URL completa de YouTube o Vimeo. Si dejas `url: ''`, se conserva el espacio de video y el botón indicará que falta agregar el enlace. Nunca se generan enlaces de forma automática.

### Agregar documentos y enlaces

Guarda solo documentos aptos para ser públicos en `assets/documents/` y agrega su ruta en `link`:

```js
{ title: 'Registro de ventas', link: 'assets/documents/registro-ventas.pdf' }
```

No publiques datos personales, facturas sensibles, credenciales, enlaces privados ni información que no cuentes con permiso de compartir.

### Cambiar los resultados de encuesta

El sitio no incluye resultados inventados. Para activar las barras de la sección de validación, edita `survey`:

```js
survey: {
  targetResponses: 10,
  completedResponses: 10,
  note: 'Resultados de la prueba de validación.',
  results: [
    { label: 'Sabor', value: 8, color: '#e7a44c' },
    { label: 'Presentación', value: 7, color: '#72a96a' }
  ]
}
```

Usa únicamente cifras que provengan de tus encuestas reales.

## Publicar gratis con GitHub Pages

1. Crea una cuenta en [GitHub](https://github.com/) si aún no tienes una.
2. Haz clic en **New repository** y nómbralo, por ejemplo, `nutrivelt`.
3. Marca el repositorio como **Public**. No hace falta añadir plantilla ni `.gitignore`.
4. Sube todos los archivos y carpetas de este proyecto. Es importante conservar `index.html` en la raíz y las carpetas `assets`, `css` y `js` completas.
5. En el repositorio, abre **Settings** → **Pages**.
6. En **Build and deployment**, selecciona **Deploy from a branch**.
7. Elige la rama `main` (o `master`) y la carpeta `/(root)`. Haz clic en **Save**.
8. Espera uno o dos minutos. GitHub mostrará la dirección pública, normalmente:

   ```text
   https://TU-USUARIO.github.io/nutrivelt/
   ```

9. Abre la URL y comprueba que las imágenes, videos y documentos se visualicen correctamente.

Cada vez que subas cambios a la rama elegida, GitHub Pages actualizará el sitio sin costo.

### Conectar un dominio propio (opcional)

1. Compra o usa un dominio de un registrador de tu elección.
2. En **Settings** → **Pages** del repositorio, escribe el dominio en **Custom domain** y guarda.
3. En el panel DNS de tu registrador, crea los registros que GitHub indique en esa pantalla. Para `www` suele usarse un registro `CNAME` hacia `TU-USUARIO.github.io`.
4. Espera la propagación DNS y activa **Enforce HTTPS** cuando GitHub la habilite.

Consulta la guía oficial de GitHub Pages si el proveedor DNS solicita una configuración distinta.

## Comprobaciones antes de entregar

- Reemplaza todos los placeholders que ya cuenten con evidencia real.
- Comprueba los enlaces de redes, documentos y videos.
- Verifica que el menú móvil, filtros, acordeón, lightbox y cronograma funcionen en celular.
- Revisa los textos alternativos (`alt`) de cada imagen antes de publicar.
- No conviertas afirmaciones nutricionales en promesas médicas sin una validación profesional.
