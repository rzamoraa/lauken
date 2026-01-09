import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Componentes UI
import Contacto from "../../components/sections/Contacto";
import Vendido from "../../components/ui/Vendido";
import ProjectLogo from "../../components/ui/ProjectLogo";
import ImageGallery from "../../components/ui/ImageGallery";
import HeroBanner from "../../components/ui/HeroBanner";
import Mapa from "../../components/ui/Mapa";
import AttributesWithIcons from "../../components/ui/AttributesWithIcons";
import AttributesSimple from "../../components/ui/AttributesSimple";
import WebPreview from "../../components/ui/WebPreview";
import Folleto from "../../components/ui/Folleto";

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
      
      {/* Hero/Title */}
      <HeroBanner
        logoproyecto={page.title.logo}
        video={page.title.video}
        brochurePdf={page.title.brochurePdf}
        showBrochureButton={page.title.showBrochureButton}
        precio={page.title.precio}
        texto1={page.title.texto1}
        texto2={page.title.texto2}
      />
      
      {/* Descripción */}
      <ProjectLogo
        nombre={page.description.nombre}
        logoproyecto={page.description.logo}
      />
      
      {/* Tour Virtual 360 */}
      {page.webPreview.enabled && (
        <WebPreview url={page.webPreview.url} />
      )}
      
      {/* Atributos - con iconos o solo imagen según el tipo */}
      {page.atributos.tipo === 'icons' ? (
        <AttributesWithIcons
          texto={page.atributos.texto}
          image={page.atributos.image}
          // Mapear los items a las props t1-t10, v1-v10, i1-i10
          t1={page.atributos.items[0]?.titulo}
          v1={page.atributos.items[0]?.valor}
          i1={page.atributos.items[0]?.icon}
          t2={page.atributos.items[1]?.titulo}
          v2={page.atributos.items[1]?.valor}
          i2={page.atributos.items[1]?.icon}
          t3={page.atributos.items[2]?.titulo}
          v3={page.atributos.items[2]?.valor}
          i3={page.atributos.items[2]?.icon}
          t4={page.atributos.items[3]?.titulo}
          v4={page.atributos.items[3]?.valor}
          i4={page.atributos.items[3]?.icon}
          t5={page.atributos.items[4]?.titulo}
          v5={page.atributos.items[4]?.valor}
          i5={page.atributos.items[4]?.icon}
          t6={page.atributos.items[5]?.titulo}
          v6={page.atributos.items[5]?.valor}
          i6={page.atributos.items[5]?.icon}
          t7={page.atributos.items[6]?.titulo}
          v7={page.atributos.items[6]?.valor}
          i7={page.atributos.items[6]?.icon}
          t8={page.atributos.items[7]?.titulo}
          v8={page.atributos.items[7]?.valor}
          i8={page.atributos.items[7]?.icon}
          t9={page.atributos.items[8]?.titulo}
          v9={page.atributos.items[8]?.valor}
          i9={page.atributos.items[8]?.icon}
          t10={page.atributos.items[9]?.titulo}
          v10={page.atributos.items[9]?.valor}
          i10={page.atributos.items[9]?.icon}
        />
      ) : (
        <AttributesSimple
          texto={page.atributos.texto}
          image={page.atributos.image}
        />
      )}
      
      {/* Galería de imágenes */}
      {page.galeria.length > 0 && (
        <ImageGallery
          image1={page.galeria[0]}
          image2={page.galeria[1]}
          image3={page.galeria[2]}
          image4={page.galeria[3]}
          image5={page.galeria[4]}
          image6={page.galeria[5]}
          image7={page.galeria[6]}
          image8={page.galeria[7]}
          image9={page.galeria[8]}
          image10={page.galeria[9]}
        />
      )}
      
      {/* Folleto/Brochure */}
      {page.folleto.enabled && (
        <Folleto
          mocap={page.folleto.mocap}
          fondo={page.folleto.fondo}
          linkfolleto={page.folleto.link}
        />
      )}
      
      {/* Mapa */}
      {page.mapa.enabled && (
        <Mapa
          center={{
            lat: page.mapa.lat,
            lng: page.mapa.lng,
          }}
        />
      )}
      
      {/* Contacto */}
      {page.contactoPadding ? (
        <div className="p-10">
          <Contacto />
        </div>
      ) : (
        <Contacto />
      )}
    </div>
  );
}

export default ProjectPage;
