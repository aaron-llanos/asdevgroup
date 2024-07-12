import Inside from "@/components/Inside/page";
import { propertiesMX } from "@/helpers/properties";

// export const dynamicParams = false
export const dynamic = 'force-static'

export async function generateStaticParams() {
  return propertiesMX.map((property) => ({ slug: property.slug }));
}

export default function Home({ params }) {
  return (
    <Inside params={params} isMX />
  );
}
