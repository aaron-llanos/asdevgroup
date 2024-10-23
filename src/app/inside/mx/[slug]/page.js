import Inside from "@/components/Inside/page";
import { API_URL } from "@/app/config";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  // Llamada a la API para obtener las propiedades de México
  const resMX = await fetch(`${API_URL}/api/propiedades?populate[Gallery][fields][0]=url&populate[imageMobileSlider][fields][0]=url&populate[TitlePageSliderDesktop][fields][0]=url&filters[Country]=MX`);
  const dataMX = await resMX.json();
  
  const propertiesMX = dataMX.data; // Extraemos las propiedades para MX
  console.log(propertiesMX);
  return propertiesMX.map(property => ({
    slug: property.slug,
    isMX: true, // Indicador para saber que es MX
  }));
}

export default function Home({ params }) {
  return (
    <Inside params={params} isMX={true} /> 
  );
}
