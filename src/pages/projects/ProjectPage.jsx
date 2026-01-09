import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Componentes de Proyecto (usando índice para imports limpios)
import {
  HeroBanner,
  ProjectLogo,
  AttributesWithIcons,
  AttributesSimple,
  ImageGallery,
  Folleto,
  Mapa,
  WebPreview,
  Vendido,
} from "../../components/ui/project";

// Componentes de Secciones
import Contacto from "../../components/sections/Contacto";

// Datos de proyectos
import { getProjectById } from "../../data/projects";

function ProjectPage() {
  // Obtener el ID del proyecto desde la URL
  const { projectId } = useParams();
  
  // Buscar la configuración del proyecto
  const project = getProjectById(projectId);
  
  // Scroll al inicio cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);
  
  // Si no existe el proyecto, mostrar mensaje
  if (!project) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Proyecto no encontrado</h1>
          <p className="text-gray-600 mt-2">El proyecto "{projectId}" no existe.</p>
        </div>
      </div>
    );
  }
  
  const { page } = project;
  
  return (
    <div className="bg-background">
      {/* Banner de Vendido (si aplica) */}
      {page.showVendido && <Vendido />}
      
      {/* Hero Banner */}
      <HeroBanner
        video={page.title.video}
        precio={page.title.precio}
        texto1={page.title.texto1}
        texto2={page.title.texto2}
      />
      
      {/* Logo del proyecto */}
      <ProjectLogo
        nombre={page.description.nombre}
        logoproyecto={page.description.logo}
      />
      
      {/* Tour Virtual 360 */}
      {page.webPreview?.enabled && (
        <WebPreview url={page.webPreview.url} />
      )}
      
      {/* Atributos - con iconos o versión simple */}
      {page.atributos.tipo === 'icons' ? (
        <AttributesWithIcons
          texto={page.atributos.texto}
          image={page.atributos.image}
          attributes={page.atributos.items?.map((item, index) => ({
            id: index + 1,
            name: item.titulo,
            value: item.valor,
            icon: item.icon,
          })) || []}
        />
      ) : (
        <AttributesSimple
          texto={page.atributos.texto}
          image={page.atributos.image}
        />
      )}
      
      {/* Galería de imágenes */}
      {page.galeria?.length > 0 && (
        <ImageGallery images={page.galeria} />
      )}
      
      {/* Folleto/Brochure */}
      {page.folleto?.enabled && (
        <Folleto
          mocap={page.folleto.mocap}
          fondo={page.folleto.fondo}
          linkfolleto={page.folleto.link}
        />
      )}
      
      {/* Mapa de ubicación */}
      {page.mapa?.enabled && (
        <Mapa
          center={{
            lat: page.mapa.lat,
            lng: page.mapa.lng,
          }}
        />
      )}
      
      {/* Sección de Contacto */}
      <div className={page.contactoPadding ? "py-10" : ""}>
        <Contacto />
      </div>
    </div>
  );
}

export default ProjectPage;
