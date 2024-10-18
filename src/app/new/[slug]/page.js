import { API_URL } from "@/app/config";
import New from "@/components/New/page";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/api/news?populate[gallery][fields][0]=url`);
  
  // Extraemos los datos
  const { data } = await res.json();


  // Devuelve un array de objetos que contienen los slugs de cada noticia
  return data.map((item) => ({
    slug: item.slug,
  }));
}

// Aquí estamos obteniendo los datos de la API en lugar de los datos estáticos
export default async function Home({ params }) {
  const res = await fetch(`${API_URL}/api/news?filters[slug][$eq]=${params.slug}&populate=*`);
  const { data } = await res.json();
  
  // Comprueba si se encontraron datos
  if (!data || data.length === 0) {
    return <p>This page doesn't exists.</p>; // Manejo de error si no se encuentra la noticia
  }

  return (
    <New item={data[0]} /> // Pasa el primer elemento de los datos a tu componente
  );
}
