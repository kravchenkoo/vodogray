import { CallButton } from '@/components/callButton';
import { getStrapiData } from '@/data/getData';
type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const locale = lang === 'en' ? 'en' : 'uk';
  const strapiData = await getStrapiData(
    `/api/price?populate[0]=callButton&locale=${locale}`
  );
  const { priceDiscount } = strapiData.data;
  const { priceRegular } = strapiData.data;
  return (
    <div className="flex flex-col gap-16">
      <CallButton
        text={strapiData.data.callButton.buttonText}
        phone={strapiData.data.callButton.phoneNumber}
      />
      <div
        className="tableDiscount rounded-md"
        dangerouslySetInnerHTML={{ __html: priceDiscount }}
      ></div>
      <div
        className="tableRegular rounded-md"
        dangerouslySetInnerHTML={{ __html: priceRegular }}
      ></div>
    </div>
  );
}
