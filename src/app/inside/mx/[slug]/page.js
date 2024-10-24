import { API_URL } from "@/app/config";
import Inside from "@/components/Inside/page";

// inside/us/[slug]/page.js
export const dynamic = 'force-static';

// Función para obtener todos los slugs con paginación
async function getAllSlugs() {
  let allSlugs = [];
  let page = 1;
  let totalPages = 1;

  // Hacemos solicitudes paginadas hasta obtener todas las páginas
  while (page <= totalPages) {
    const res = await fetch(`${API_URL}/api/propiedades?fields[0]=slug&filters[Country]=MX&pagination[page]=${page}&pagination[pageSize]=100`, {
      cache: 'no-store', // Evita el almacenamiento en caché
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const { data, meta } = await res.json();

    // Guardamos los slugs de la página actual
    allSlugs = allSlugs.concat(data.map((item) => ({
      slug: item.slug,
    })));

    // Actualizamos el número total de páginas
    totalPages = meta.pagination.pageCount;
    page++;
  }

  return allSlugs;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs(); // Llamamos a la función que obtiene todos los slugs
  console.log(slugs);
  return slugs; // Retornamos todos los slugs
}

// Obtener datos de la API para la propiedad específica
export default async function Page({ params }) {
  try {
    // Ajusta la URL para obtener la propiedad específica según el slug
    const res = await fetch(`${API_URL}/api/propiedades?filters[slug][$eq]=${params.slug}&filters[Country]=MX&populate=*`, {
      cache: 'no-store', // Evita el almacenamiento en caché
    });

    if (!res.ok) {
      throw new Error('Failed to fetch property data');
    }

    const { data } = await res.json();

    if (!data || data.length === 0) {
      return <div>No se encontró la propiedad.</div>;
    }

    return <Inside item={data[0]} isMX={true} />;
  } catch (error) {
    console.error('Error fetching property:', error);
    return <div>Error fetching property: {error.message}</div>;
  }
}
