import Inside from "@/components/Inside/page";
import { API_URL } from "@/app/config";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  // Llamada a la API para obtener las propiedades de EE. UU.
  const res = await fetch(`${API_URL}/api/propiedades?populate[Gallery][fields][0]=url&populate[imageMobileSlider][fields][0]=url&populate[TitlePageSliderDesktop][fields][0]=url&filters[Country]=US`);
  const data = await res.json();
 
  
  const properties = data.data; // Extraemos las propiedades

  console.log(properties);
  // Retornamos un array con los slugs de las propiedades filtradas
  return properties.map(property => ({
    slug: property.slug, // Ajusta según la estructura del objeto de la API
  }));
}

export default function Home({ params }) {
  return (
    <Inside params={params} isMX={false} /> 
  );
}
