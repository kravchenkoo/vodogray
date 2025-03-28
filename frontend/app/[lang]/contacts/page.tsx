import { getStrapiData } from '@/data/getData';
import { RouteButton } from '@/components/routeButton';
import { PhoneNumber } from '@/components/phoneNumber';
import { Map } from '@/components/map';
type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Contacts({ params }: Readonly<Props>) {
  const { lang } = await params;
  const locale = lang === 'en' ? 'en' : 'uk';

  const strapiData = await getStrapiData(
    `/api/contact-page?populate[1]=phoneNumber&populate[0]=routeButton&locale=${locale}`
  );
  const { routeButton } = strapiData.data;
  const { phoneNumber } = strapiData.data;
  return (
    <div className="flex flex-col">
      <PhoneNumber
        text={phoneNumber.phoneNumberText}
        phone={phoneNumber.phoneNumberUrl}
      />
      <Map />
      <RouteButton text={routeButton.buttonText} url={routeButton.buttonUrl} />
    </div>
  );
}
