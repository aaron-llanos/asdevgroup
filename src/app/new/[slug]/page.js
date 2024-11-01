import { API_URL } from "@/app/config";
import New from "@/components/New/page";

export const dynamic = 'force-static';

// Función para obtener todos los slugs con los campos necesarios
async function getAllSlugs() {
  let allSlugs = [];
  let page = 1;
  let totalPages = 1;

  // Hacemos solicitudes paginadas hasta obtener todas las páginas
  while (page <= totalPages) {
    const res = await fetch(`${API_URL}/api/news?fields[0]=slug&pagination[page]=${page}&pagination[pageSize]=100`, {
      cache: 'no-store',
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
  const slugs = await getAllSlugs();
  return slugs;
}

// Obtener los datos completos de la propiedad específica
export default async function Page({ params }) {
  try {
    const res = await fetch(`${API_URL}/api/news?filters[slug][$eq]=${params.slug}&populate[gallery][fields][0]=url`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      const errorDetails = await res.text(); // Obtenemos el cuerpo del error en texto
      throw new Error(`Failed to fetch news data: ${res.status} ${errorDetails}`);
    }

    // Leer el cuerpo de la respuesta solo una vez
    const responseData = await res.json();
    console.log("Respuesta de la API:", responseData); // Muestra la respuesta completa en consola

    const { data } = responseData; // Extraer la propiedad `data`

    // Verifica si hay datos
    if (!data || data.length === 0) {
      return <div>No se encontró la propiedad.</div>;
    }

    // Accede a la propiedad específica
    const news = data[0];

    // Extrae los campos necesarios
    const {
      Date,
      gallery,
      Name,
      URL,
      slug,
      Description,
    } = news;

    // Devuelve el componente New con todos los campos
    return (
      <New
        item={{
          Date,
          gallery,
          Name,
          URL,
          slug,
          Description,
        }}
      />
    );
  } catch (error) {
    console.error('Error fetching new:', error);
    return <div>Error fetching new: {error.message}</div>;
  }
}
