import { getStrapiData } from '@/data/getData';
type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Blog({ params }: Readonly<Props>) {
  const { lang } = await params;
  const locale = lang === 'en' ? 'en' : 'uk';
  const strapiData = await getStrapiData(
    `/api/rule?populate[rules][populate]=*&locale=${locale}`
  );
  const { rulesText } = strapiData.data.rules;
  console.log(strapiData);
  return (
    <div
      className="flex flex-col gap-16 rulesText"
      dangerouslySetInnerHTML={{ __html: rulesText }}
    ></div>
  );
}
