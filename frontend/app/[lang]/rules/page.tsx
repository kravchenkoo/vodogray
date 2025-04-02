import { getStrapiData } from '@/data/getData';
type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Blog({ params }: Readonly<Props>) {
  const { lang } = await params;
  const locale = lang === 'en' ? 'en' : 'uk';
  const strapiData = await getStrapiData(`/api/rule?locale=${locale}`);
  const { rulestext } = strapiData.data;
  return (
    <div
      className="flex flex-col gap-16 rulesText pl-[1rem] md:pl-0"
      dangerouslySetInnerHTML={{ __html: rulestext }}
    ></div>
  );
}
