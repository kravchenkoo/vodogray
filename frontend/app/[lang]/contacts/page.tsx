import { RouteButton } from '@/components/routeButton';
import { PhoneNumber } from '@/components/phoneNumber';
import { Map } from '@/components/map';
type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Contacts({ params }: Readonly<Props>) {
  const { lang } = await params;

  return (
    <div className="flex flex-col">
      <PhoneNumber
        text={lang === 'en' ? 'Phone:' : 'Телефон:'}
        phone="+380637886444"
      />
      <p className="pb-12">
        {lang === 'en'
          ? 'Pushkin St. 1 (Vingranovskoho St. 1), Sofiivska Borshchahivka, Kyiv, Ukraine'
          : 'C. Софіївська Борщагівка вул. Пушкіна 1 (Миколи Вінграновського, 1)'}
      </p>
      <Map />
      <RouteButton
        text={lang === 'en' ? 'Route' : 'Mаршрут'}
        url="https://maps.app.goo.gl/2T6JH5eH26ZWDtnm9"
      />
    </div>
  );
}
