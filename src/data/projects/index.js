/**
 * Índice central de proyectos
 * 
 * Para agregar un nuevo proyecto:
 * 1. Crea un archivo de configuración en esta carpeta (ej: nuevo-proyecto.js)
 * 2. Copia la estructura de un proyecto existente y modifica los datos
 * 3. Importa y agrega el proyecto al array 'projects' abajo
 * 
 * ¡Eso es todo! Las rutas y cards se generarán automáticamente.
 */

import costaPulin from './costa-pulin';
import costaSanRafael from './costa-san-rafael';
import entreValles from './entre-valles';
import laBrisa from './la-brisa';
import vallesDeRangue from './valles-de-rangue';
import bahiaLasPalmas from './bahia-las-palmas';

// Array de todos los proyectos - El orden aquí determina el orden de las cards
const projects = [
  costaPulin,
  costaSanRafael,
  bahiaLasPalmas,
  vallesDeRangue,
  laBrisa,
  entreValles,
];

// Exportar el array completo
export default projects;

// Exportar función para obtener un proyecto por ID (para las rutas)
export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

// Exportar función para obtener solo los datos de las cards
export const getProjectCards = () => {
  return projects.map(project => ({
    id: project.id,
    ...project.card,
    url: `/${project.id}`,
  }));
};

// Exportar proyectos individuales por si se necesitan
export {
  costaPulin,
  costaSanRafael,
  entreValles,
  laBrisa,
  vallesDeRangue,
  bahiaLasPalmas,
};
