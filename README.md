# NUTRIVELT

Presentación digital interactiva del proyecto escolar de emprendimiento alimentario de **Clúster Élan**.

## Ejecutar localmente

```powershell
npm install
npm run dev
```

Vite mostrará la dirección local (normalmente `http://localhost:5173`). Para comprobar la versión de producción:

```powershell
npm run build
npm run preview
```

## Editar contenido y recursos

El centro de configuración es [src/config.js](C:/Users/DELL/Documents/ChatGPT/nutrivelt/src/config.js). Allí se actualizan:

- `WHATSAPP_NUMBER`
- logos y redes sociales
- fotografías de producto y galería
- videos
- ingredientes, precios y textos configurables

Las carpetas de recursos están en `public/assets/`. Copia allí los archivos reales y asigna su ruta en el archivo de configuración, por ejemplo:

```js
hero: {
  src: '/assets/producto/foto-principal.jpg',
  label: 'IMAGEN PRINCIPAL DEL PRODUCTO',
  alt: 'Fotografía principal de NUTRIVELT',
}
```

Mientras una ruta se mantenga vacía, la aplicación presenta un placeholder elegante y explícito. No se incluyen fotografías, enlaces ni resultados ficticios.
