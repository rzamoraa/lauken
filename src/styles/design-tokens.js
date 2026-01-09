/**
 * Design Tokens - Sistema de diseño unificado para Lauken Inmobiliaria
 * 
 * Este archivo centraliza todos los tokens de diseño para mantener
 * consistencia visual en todos los componentes.
 */

// ============================================
// COLORES
// ============================================
export const colors = {
  // Primarios
  primary: {
    DEFAULT: '#1e293b',    // slate-800
    light: '#334155',      // slate-700
    dark: '#0f172a',       // slate-900
  },
  
  // Acentos
  accent: {
    DEFAULT: '#F0B94D',    // Amarillo dorado (brand)
    hover: '#E0A93D',      // Hover state
    light: '#eab308',      // yellow-500
  },
  
  // Neutros
  neutral: {
    white: '#ffffff',
    light: '#f8fafc',      // slate-50
    gray: '#64748b',       // slate-500
    dark: '#1f2937',       // gray-800
  },
  
  // Estados
  status: {
    success: '#22c55e',    // green-500
    error: '#dc2626',      // red-600
    sold: '#991b1b',       // red-800
  }
};

// ============================================
// TIPOGRAFÍA
// ============================================
export const typography = {
  // Títulos de sección
  sectionTitle: {
    size: 'text-3xl md:text-4xl lg:text-5xl',
    weight: 'font-bold',
    tracking: 'tracking-wide',
    color: 'text-gray-800',
  },
  
  // Subtítulos
  subtitle: {
    size: 'text-xl md:text-2xl',
    weight: 'font-semibold',
    color: 'text-gray-700',
  },
  
  // Texto de cuerpo
  body: {
    size: 'text-base md:text-lg',
    weight: 'font-normal',
    color: 'text-gray-600',
    leading: 'leading-relaxed',
  },
  
  // Texto pequeño
  small: {
    size: 'text-sm',
    color: 'text-gray-500',
  }
};

// ============================================
// ESPACIADO
// ============================================
export const spacing = {
  // Padding de sección
  section: {
    y: 'py-12 md:py-16 lg:py-20',
    x: 'px-4 md:px-6 lg:px-8',
  },
  
  // Padding de título de sección
  sectionTitle: {
    padding: 'py-8 md:py-10',
  },
  
  // Contenedores
  container: {
    maxWidth: 'max-w-7xl',
    center: 'mx-auto',
  },
  
  // Gaps
  gap: {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  }
};

// ============================================
// COMPONENTES BASE
// ============================================
export const components = {
  // Botón primario
  button: {
    primary: `
      bg-[#F0B94D] hover:bg-[#E0A93D] 
      px-8 py-4 
      text-lg md:text-xl font-bold text-white 
      rounded-lg shadow-lg 
      hover:shadow-xl hover:scale-105 
      transition-all duration-300
    `,
    secondary: `
      bg-slate-800 hover:bg-slate-700 
      px-6 py-3 
      text-base font-semibold text-white 
      rounded-lg shadow-md 
      hover:shadow-lg 
      transition-all duration-300
    `,
  },
  
  // Cards
  card: {
    base: 'bg-white rounded-lg shadow-lg overflow-hidden',
    hover: 'hover:shadow-xl transition-shadow duration-300',
  },
  
  // Overlays
  overlay: {
    dark: 'bg-black/50',
    gradient: 'bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent',
  },
  
  // Iconos
  icon: {
    circle: `
      w-12 h-12 md:w-14 md:h-14 
      rounded-full 
      border-2 border-white 
      flex items-center justify-center 
      bg-white/10
    `,
    size: 'w-6 h-6 md:w-7 md:h-7',
  }
};

// ============================================
// CLASES UTILITARIAS COMPUESTAS
// ============================================
export const utilities = {
  // Contenedor de sección estándar
  sectionContainer: `${spacing.container.maxWidth} ${spacing.container.center} ${spacing.section.x}`,
  
  // Título de sección estándar
  sectionTitleClass: `
    ${typography.sectionTitle.size} 
    ${typography.sectionTitle.weight} 
    ${typography.sectionTitle.tracking} 
    ${typography.sectionTitle.color}
  `,
  
  // Centrado de texto
  textCenter: 'text-center',
};

// ============================================
// ANIMACIONES
// ============================================
export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  
  scaleOnHover: {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  },
  
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  }
};

export default {
  colors,
  typography,
  spacing,
  components,
  utilities,
  animations,
};
