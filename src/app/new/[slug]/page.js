import { API_URL } from "@/app/config";
import New from "@/components/New/page";

// new/[slug]/page.js
export const dynamic = 'force-static';

// Función para obtener todos los slugs con paginación
async function getAllSlugs() {
  let allSlugs = [];
  let page = 1;
  let totalPages = 1;

  // Hacemos solicitudes paginadas hasta obtener todas las páginas
  while (page <= totalPages) {
    const res = await fetch(`${API_URL}/api/news?fields[0]=slug&pagination[page]=${page}&pagination[pageSize]=100`);
    
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

// Obtener datos de la API para la noticia específica
export default async function Home({ params }) {
  try {
    const res = await fetch(`${API_URL}/api/news?filters[slug][$eq]=${params.slug}&populate=*`);

    console.log('Response:', res.status);
    
    if (!res.ok) {
      throw new Error('Failed to fetch news data');
    }

    const { data } = await res.json();

    if (!data || data.length === 0) {
      return <p>No se encontró la noticia.</p>;
    }

    return <New item={data[0]} />;
  } catch (error) {
    console.error('Error fetching news:', error);
    return <p>Error fetching news: {error.message}</p>;
  }
}
