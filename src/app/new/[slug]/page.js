import { API_URL } from "@/app/config";
import New from "@/components/New/page";

// new/[slug]/page.js
export const dynamic = 'force-static';

export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/api/news?fields[0]=slug&limit=100`); 

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();

  
const datos = data.map((item) => ({
  slug: item.slug,
}));

  console.log(datos);
  
  // Mapeamos para obtener solo los slugs
  return datos;
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
