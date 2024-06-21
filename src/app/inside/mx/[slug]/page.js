import Inside from "@/components/Inside/page";
import { propertiesMX } from "@/helpers/properties";

export async function generateStaticParams() {
  return propertiesMX.map((property) => ({ slug: property.slug }));
}

export default function Home({ params }) {
  return (
    <Inside params={params} isMX />
  );
}
