import Inside from "@/components/Inside/page";
import { properties } from "@/helpers/properties";

export async function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default function Home({ params }) {
  return (
    <Inside params={params} />
  );
}