# Portfolio de Pito de dimoni

Web personal estática, responsive y sin dependencias de build. Está hecha con HTML, CSS y JavaScript, por lo que se puede publicar directamente en GitHub Pages.

## Antes de publicarla

1. Abre `index.html`.
2. Busca `CAMBIA-ESTE-EMAIL@example.com` y sustitúyelo por tu dirección de correo real. Cambia tanto el texto visible como el `href="mailto:..."`.
3. Edita la presentación y los textos para que describan tu perfil real.
4. Las cuatro tarjetas de proyectos son conceptos de ejemplo. Sustitúyelas por proyectos propios y añade fotos reales cuando las tengas.
5. Si no quieres usar Google Fonts, elimina las dos líneas de `preconnect` y el enlace a Google Fonts en `index.html`; la web seguirá funcionando con fuentes del sistema.

## Publicar con GitHub Pages

### Opción recomendada: repositorio de usuario

1. Entra en https://github.com/new e inicia sesión.
2. Crea un repositorio público llamado exactamente `TUUSUARIO.github.io` (reemplaza `TUUSUARIO` por tu nombre de usuario de GitHub).
3. Descomprime este ZIP en tu ordenador.
4. Sube al repositorio los archivos `index.html`, `styles.css`, `script.js`, `favicon.svg` y la carpeta `assets` si existe. `index.html` debe quedar en la raíz del repositorio, no dentro de otra carpeta.
5. En el repositorio, abre **Settings → Pages**.
6. En **Build and deployment**, selecciona **Deploy from a branch**.
7. Selecciona la rama `main` y la carpeta `/(root)`, y pulsa **Save**.
8. Espera unos minutos y abre `https://TUUSUARIO.github.io`.

### Alternativa: repositorio de proyecto

Si el repositorio tiene otro nombre, por ejemplo `portfolio`, activa Pages con `main` y `/(root)`. La dirección será `https://TUUSUARIO.github.io/portfolio/`.

## Actualizar la web

Edita los archivos localmente y vuelve a subir los cambios al repositorio. GitHub Pages publicará la nueva versión automáticamente después de unos minutos.

## Personalización del correo

En `index.html`, busca `CAMBIA-ESTE-EMAIL@example.com`. Debes cambiar:
- El valor `href` del enlace, que debe quedar como `mailto:tu-correo-real@dominio.com`.
- El texto visible del email.

El botón «Copiar email» utiliza la API del portapapeles cuando el navegador lo permite; si no, abre el cliente de correo.

## Estructura

- `index.html` — contenido y secciones.
- `styles.css` — diseño responsive, colores y estilos.
- `script.js` — menú móvil, año automático y botón para copiar el email.
- `favicon.svg` — icono de la pestaña.
- `assets/` — recursos visuales opcionales.
