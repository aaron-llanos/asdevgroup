import New from "@/components/New/page";
import { news } from "@/helpers/news";

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return news.map((report) => ({ slug: report.slug }));
}

export default function Home({ params }) {
  return (
    <New params={params} />
  );
}