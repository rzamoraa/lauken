# 📐 Sistema de Diseño - Lauken Inmobiliaria

## Resumen de Estandarización

Este documento describe el sistema de diseño unificado implementado en los componentes UI.

---

## 🎨 Paleta de Colores

| Nombre | Valor | Uso |
|--------|-------|-----|
| **Primary** | `slate-800` (#1e293b) | Fondos oscuros, títulos de sección |
| **Accent** | `#F0B94D` | Botones, badges, highlights (amarillo dorado) |
| **Accent Hover** | `#E0A93D` | Estado hover de botones |
| **Text Dark** | `gray-800` | Títulos principales |
| **Text Body** | `slate-700` | Texto de párrafos |
| **Text Light** | `gray-500` | Texto secundario |
| **Background** | `white` | Fondo de página |
| **Overlay** | `black/60` | Overlays sobre imágenes |

---

## 📏 Espaciado Estándar

### Secciones
- **Padding vertical**: `py-12 md:py-16 lg:py-20`
- **Padding horizontal**: `px-4 md:px-6 lg:px-8`
- **Max width**: `max-w-7xl mx-auto`

### Títulos de Sección
- **Padding**: `py-8 md:py-10`
- **Centrado**: `text-center`

---

## 🔤 Tipografía

### Títulos de Sección
```css
text-3xl md:text-4xl lg:text-5xl
font-bold
tracking-wide
text-gray-800
```

### Subtítulos
```css
text-xl md:text-2xl
font-semibold
text-gray-700
```

### Texto de Cuerpo
```css
text-base md:text-lg lg:text-xl
leading-relaxed
text-slate-700
```

---

## 🧩 Componentes UI

### SectionTitle
Título estandarizado para todas las secciones.

```jsx
<SectionTitle 
  title="GALERÍA"
  subtitle="Opcional"
  variant="default" // 'default' | 'light' | 'dark' | 'accent'
  size="lg"         // 'sm' | 'md' | 'lg'
/>
```

### HeroBanner
Banner principal con video de fondo.

```jsx
<HeroBanner
  video="/video.mp4"
  precio="Desde UF 2.500"
  texto1="500 a 5.000 m²"
  texto2="12 parcelas"
  badge="Proyecto Exclusivo"
/>
```

### ProjectLogo
Muestra el logo del proyecto.

```jsx
<ProjectLogo
  nombre="Costa Pulin"
  logoproyecto="/logo.svg"
  variant="dark"  // 'light' | 'dark' | 'original'
  size="lg"       // 'sm' | 'md' | 'lg'
/>
```

### AttributesWithIcons
Sección de atributos con iconos en círculos.

```jsx
<AttributesWithIcons
  texto="Descripción del proyecto..."
  image="/background.jpg"
  attributes={[
    { name: "Parcelas", value: "12 disponibles", icon: MapIcon },
    { name: "Superficie", value: "500 a 5.000 m²", icon: RulerIcon },
  ]}
/>
```

### AttributesSimple
Versión simple sin iconos.

```jsx
<AttributesSimple
  texto="Descripción del proyecto..."
  image="/imagen.jpg"
/>
```

### ImageGallery
Galería de imágenes con modal de ampliación.

```jsx
<ImageGallery
  images={["/img1.jpg", "/img2.jpg", "/img3.jpg"]}
  title="GALERÍA"
/>
```

### Folleto
Sección de descarga de brochure.

```jsx
<Folleto
  mocap="/mockup.png"
  fondo="/background.jpg"
  linkfolleto="/folleto.pdf"
  title="FOLLETO"
/>
```

### Mapa
Componente de Google Maps.

```jsx
<Mapa
  center={{ lat: -33.4569, lng: -70.6483 }}
  title="UBICACIÓN"
  zoom={15}
/>
```

### WebPreview
Iframe para tours 360° o contenido embebido.

```jsx
<WebPreview
  url="https://tour360.example.com"
  title="TOUR 360°"
/>
```

### Card
Tarjeta de proyecto para la página principal.

```jsx
<Card
  titulo="Costa Pulin"
  descripcion="Parcelas de 500 a 5.000 m²"
  imagen="/card.jpg"
  url="/proyectos/costa-pulin"
  logo="/logo.svg"
  activo={true}
  precio="Desde UF 2.500"
  franja="ÚLTIMAS UNIDADES"
  pronto={false}
/>
```

### Vendido
Banner flotante para proyectos vendidos.

```jsx
<Vendido position="top-right" /> // 'top-right' | 'center'
```

### SectionDivider
Separador decorativo entre secciones.

```jsx
<SectionDivider
  title="Texto opcional"
  showIcon={true}
  variant="gradient" // 'gradient' | 'line' | 'minimal'
/>
```

---

## 📁 Estructura de Archivos

```
src/
├── components/
│   └── ui/
│       ├── index.js              # Exports centralizados
│       ├── SectionTitle.jsx      # Títulos de sección
│       ├── SectionDivider.jsx    # Separadores
│       ├── HeroBanner.jsx        # Banner principal
│       ├── ProjectLogo.jsx       # Logo del proyecto
│       ├── AttributesWithIcons.jsx # Atributos con iconos
│       ├── AttributesSimple.jsx  # Atributos simples
│       ├── ImageGallery.jsx      # Galería de imágenes
│       ├── Folleto.jsx           # Descarga de folleto
│       ├── Mapa.jsx              # Google Maps
│       ├── WebPreview.jsx        # Tour 360°
│       ├── Card.jsx              # Tarjetas de proyecto
│       └── Vendido.jsx           # Banner de vendido
└── styles/
    └── design-tokens.js          # Tokens de diseño
```

---

## 📝 Importación Recomendada

```jsx
// Importar componentes individuales desde el índice
import { 
  Card, 
  SectionTitle, 
  ImageGallery,
  HeroBanner,
} from '@/components/ui';

// O importar todos
import * as UI from '@/components/ui';
```

---

## ✅ Consistencia Visual

Todos los componentes ahora comparten:

1. **Títulos de sección** con el mismo tamaño, peso y color
2. **Espaciado** consistente (padding/margin)
3. **Esquinas redondeadas** (`rounded-lg`)
4. **Sombras** (`shadow-md`, `shadow-lg`)
5. **Transiciones** suaves (`transition-all duration-300`)
6. **Colores** de la paleta definida
7. **Responsive design** (mobile-first)

---

*Última actualización: Sistema de diseño v1.0*
