import Inside from "@/components/Inside/page";
import { properties } from "@/helpers/properties";

// export const dynamicParams = false
export const dynamic = 'force-static'

export async function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default function Home({ params }) {
  return (
    <Inside params={params} />
  );
}