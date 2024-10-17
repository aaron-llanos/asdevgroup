import { API_URL } from "@/app/config";
import New from "@/components/New/page";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/api/news?populate[gallery][fields][0]=url`);
  
  // Asegúrate de que los datos se extraigan correctamente
  const { data } = await res.json();
  
  console.log(data); // Para verificar la estructura de los datos

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
    return <p>No se encontró la noticia.</p>; // Manejo de error si no se encuentra la noticia
  }

  return (
    <New item={data[0]} /> // Pasa el primer elemento de los datos a tu componente
  );
}
