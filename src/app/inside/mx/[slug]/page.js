// src/app/inside/us/[slug]/page.js

import { API_URL } from '@/app/config';
import Inside from '@/components/Inside/page';

//export const dynamic = 'force-static'; // Si quieres generar contenido estático, puedes usar 'force-static' aquí

// Función asíncrona para obtener los datos de la propiedad
async function getPropertyData(slug) {
  try {
    const res = await fetch(`${API_URL}/api/propiedades?filters[slug][$eq]=${slug}&filters[Country]=MX&populate[Gallery][fields][0]=url&populate[TitlePageSliderDesktop][fields][0]=url`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error('Error al obtener la propiedad');
    }

    const data = await res.json();
    return data.data[0]; // Suponiendo que siempre hay al menos un dato
  } catch (error) {
    console.error('Error fetching property:', error);
    return null; // Si hay error, devolvemos null
  }
}

export default async function Page({ params }) {
  const { slug } = params; // Accedemos al slug de la URL

  // Obtenemos los datos de la propiedad
  const property = await getPropertyData(slug);

  // Si no se encuentra la propiedad, podemos retornar un mensaje de error
  if (!property) {
    return <div>No se encontró la propiedad.</div>;
  }

  // Renderizamos el componente Inside con los datos de la propiedad
  return (
    <Inside item={property} isMX={true} />
  );
}
