import { getStrapiData } from '@/data/getData';
type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Blog({ params }: Readonly<Props>) {
  const { lang } = await params;
  const locale = lang === 'en' ? 'en' : 'uk';
  const strapiData = await getStrapiData(`/api/rule?locale=${locale}`);
  const { rulestext } = strapiData.data;
  console.log(rulestext);
  return (
    <div
      className="flex flex-col gap-16 rulesText"
      dangerouslySetInnerHTML={{ __html: rulestext }}
    ></div>
  );
}
