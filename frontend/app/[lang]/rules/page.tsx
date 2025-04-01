import { getStrapiData } from '@/data/getData';
type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Blog({ params }: Readonly<Props>) {
  const { lang } = await params;
  const locale = lang === 'en' ? 'en' : 'uk';
  const strapiData = await getStrapiData(
    `/api/blog?populate[blogPost][populate]=*&locale=${locale}`
  );
  return <div className="flex flex-col gap-16">rules</div>;
}
