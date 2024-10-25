import { API_URL } from "@/app/config";
import Inside from "@/components/Inside/page";

export const dynamic = 'force-static';

// Función para obtener todos los slugs con los campos necesarios
async function getAllSlugs() {
  let allSlugs = [];
  let page = 1;
  let totalPages = 1;

  // Hacemos solicitudes paginadas hasta obtener todas las páginas
  while (page <= totalPages) {
    const res = await fetch(`${API_URL}/api/propiedades?fields[0]=slug&filters[Country]=US&pagination[page]=${page}&pagination[pageSize]=100`, {
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
    const res = await fetch(`${API_URL}/api/propiedades?filters[slug][$eq]=${params.slug}&filters[Country]=US&populate[Gallery][fields][0]=url&populate[TitlePageSliderDesktop][fields][0]=url`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      const errorDetails = await res.text(); // Obtenemos el cuerpo del error en texto
      throw new Error(`Failed to fetch property data: ${res.status} ${errorDetails}`);
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
    const property = data[0];

    // Extrae los campos necesarios
    const {
      TitlePageSliderDesktop,
      Gallery,
      Name,
      video_url,
      Location,
      Progress,
      Description,
      Unit,
      Stage,
      Quantity,
      Type,
      Amenities,
    } = property;

    // Devuelve el componente Inside con todos los campos
    return (
      <Inside
        item={{
          TitlePageSliderDesktop,
          Gallery,
          Name,
          video_url,
          Location,
          Progress,
          Description,
          Unit,
          Stage,
          Quantity,
          Type,
          Amenities,
        }}
        isMX={false}
      />
    );
  } catch (error) {
    console.error('Error fetching property:', error);
    return <div>Error fetching property: {error.message}</div>;
  }
}
