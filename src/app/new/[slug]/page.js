import { API_URL } from "@/app/config";
import New from "@/components/New/page";

// Función asíncrona para obtener los datos de la noticia
async function getNewsData(slug) {
  try {

    const res = await fetch(`${API_URL}/api/news?filters[slug][$eq]=${slug}&populate[gallery][fields][0]=url`, {
      cache: 'no-store',  // Evita el cacheo de los datos
    });
  

    if (!res.ok) {
      throw new Error('Error al obtener la noticia');
    }

    const data = await res.json();
    return data.data[0];  // Devuelve el primer dato, ya que es único por slug
  } catch (error) {
    console.error('Error fetching news:', error);
    return null;  // Si hay error, devolvemos null
  }
}

// Página del componente con los datos de la noticia
export default async function Page({ params }) {
  const { slug } = params;  // Accedemos al slug desde los parámetros

  // Llamamos a la función que obtiene los datos de la noticia
  const news = await getNewsData(slug);

  console.log(news); // Para verificar que los datos se están obteniendo correctamente

  // Si no se encuentra la noticia, devolvemos un mensaje de error
  if (!news) {
    return <div>No se encontró la noticia.</div>;
  }

  // Si encontramos la noticia, renderizamos el componente con los datos
  return (
    <New item={news} />
  );
}
