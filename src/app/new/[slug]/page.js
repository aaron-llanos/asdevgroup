import { API_URL } from "@/app/config";
import New from "@/components/New/page";

// new/[slug]/page.js
export const dynamic = 'force-static';

export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/api/news?fields[0]=slug`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();

  // Mapeamos para obtener solo los slugs
  return data.map((item) => ({
    slug: item.slug,
  }));
}
// Obtener datos de la API para la noticia específica
export default async function Home({ params }) {
  const res = await fetch(`${API_URL}/api/news?filters[slug][$eq]=${params.slug}&populate=*`);

  if (!res.ok) {
    throw new Error('Failed to fetch news data');
  }

  const { data } = await res.json();

  // Manejo de error si no se encuentra la noticia
  if (!data || data.length === 0) {
    return <p>No se encontró la noticia.</p>;
  }

  return (
    <New item={data[0]} /> // Pasa el primer elemento de los datos a tu componente
  );
}
