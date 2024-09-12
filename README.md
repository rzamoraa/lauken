# Laukén Inmobiliaria - Página Web

![Laukén Inmobiliaria](./public/logo.svg)

Proyecto de una página web para Laukén Inmobiliaria, enfocado en la venta de terrenos exclusivos en Chile. El sitio está construido con React y Vite, integrando navegación por rutas, optimización de SEO con `react-helmet-async` y un Sitemap generado automáticamente para los motores de búsqueda.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas del Proyecto](#rutas-del-proyecto)
- [Sitemap](#sitemap)
- [Autor](#autor)

## Características

- 🌍 **Single Page Application (SPA)**: Navegación fluida con React Router.
- 🔍 **Optimización SEO**: Integración de `react-helmet-async` para manejo de metaetiquetas.
- 📜 **Sitemap Automático**: Generación de `sitemap.xml` para facilitar la indexación en motores de búsqueda.
- 🎨 **Componentes reutilizables**: Componentes como `Navbar`, `Hero`, `Proyectos`, entre otros.
- ⚡️ **Desempeño Rápido**: Construido con Vite para un desarrollo y build rápido.
- 🔒 **Formulario de Contacto**: Implementación de un formulario para que los usuarios se pongan en contacto.

## Tecnologías Utilizadas

- [React](https://reactjs.org/) - Biblioteca para construir interfaces de usuario.
- [Vite](https://vitejs.dev/) - Herramienta de desarrollo rápida.
- [TailwindCSS](https://tailwindcss.com/) - Framework de utilidades CSS.
- [React Router](https://reactrouter.com/) - Manejo de rutas en la aplicación.
- [react-helmet-async](https://github.com/staylor/react-helmet-async) - Manejo de SEO y metaetiquetas.
- [vite-plugin-sitemap](https://github.com/iamxg/vite-plugin-sitemap) - Generación automática de Sitemap.

## Instalación y Configuración

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tuusuario/lauken-inmobiliaria.git
   cd lauken-inmobiliaria
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y añade las variables de entorno necesarias, si las hubiera.

4. Para el entorno de desarrollo, ejecuta:

   ```bash
   npm run dev
   ```

5. Para construir la aplicación para producción, ejecuta:

   ```bash
   npm run build
   ```

6. Para generar el `sitemap.xml`, se ejecutará automáticamente al hacer el build. El archivo se generará en la carpeta `dist`.

## Estructura del Proyecto

```
/public
   logo.svg          - Logotipo del proyecto.
   vite.svg          - Logotipo de Vite.
/src
   /assets           - Imágenes y otros recursos estáticos.
   /components       - Componentes reutilizables de la aplicación.
   /pages            - Páginas individuales para cada ruta de la aplicación.
   App.jsx           - Componente raíz de la aplicación.
   index.jsx         - Punto de entrada principal de React.
   firebase.js       - Configuración de Firebase (si es necesario).
/dist                - Archivos de producción (generados con npm run build).
/.env                - Variables de entorno (ignorado en el repositorio).
/.vscode             - Configuración de Visual Studio Code.
/.gitignore          - Archivos y carpetas ignorados por Git.
README.md            - Este archivo.
vite.config.js       - Configuración de Vite, incluyendo el Sitemap.
package.json         - Configuración de dependencias del proyecto.
```

## Rutas del Proyecto

- `/` - Página principal, incluye los componentes de `Hero`, `Proyectos`, `Nosotros` y `Contacto`.
- `/entre-valles` - Página del proyecto "Entre Valles".
- `/costa-pulin` - Página del proyecto "Costa Pulin".
- `/san-rafael` - Página del proyecto "San Rafael".

### Componentes Clave

- **Navbar**: Barra de navegación principal.
- **Hero**: Sección principal de la página de inicio con información destacada.
- **Proyectos**: Listado de proyectos de parcelación.
- **Nosotros**: Información sobre la empresa.
- **Contacto**: Formulario para que los clientes se pongan en contacto.

## Sitemap

El `sitemap.xml` es generado automáticamente utilizando `vite-plugin-sitemap`. Este archivo asegura que los motores de búsqueda puedan rastrear e indexar correctamente todas las páginas del sitio.

### Generación del Sitemap

El `sitemap.xml` se genera automáticamente cuando ejecutas el siguiente comando:

```bash
npm run build
```

Puedes encontrar el archivo `sitemap.xml` en la carpeta `dist` una vez completado el build.

## Autor

- **Nombre**: [NOCTILUCA]
- **Email**: fito@noctiluca.cl
