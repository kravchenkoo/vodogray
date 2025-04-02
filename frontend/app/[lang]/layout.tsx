import type { Metadata, ResolvingMetadata } from 'next';
import { Roboto } from 'next/font/google';
import { getStrapiData } from '@/data/getData';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import '@/styles/globals.css';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import ClickOutside from '@/components/clickOutside';
import { getDictionary } from '@/dictionaries/dictionaries';

const roboto = Roboto({
  weight: ['500', '600'],
  subsets: ['cyrillic', 'latin'],
  fallback: ['system-ui', 'sans-serif'],
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

type Dict = {
  blog: {
    before: string;
    after: string;
    navName: string;
  };
  contacts: {
    navName: string;
  };
  home: {
    navName: string;
  };
  rules: {
    navName: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === 'en' ? 'en' : 'uk';
  const data = await getStrapiData(`/api/home-page?locale=${locale}`);
  const metadata = data.data;
  return {
    title: metadata?.title,
    description: metadata?.description,
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  const dict: Dict = await getDictionary(lang);
  const bcp47 = lang === 'en' ? 'en-GB' : 'uk_UA';
  return (
    <html lang={bcp47}>
      <GoogleAnalytics gaId="G-00YLQEXTPH" />
      <GoogleTagManager gtmId="GTM-KQKSCPPZ" />
      <body className={`${roboto.className} font-medium`}>
        <div className="grid grid-cols-[1fr] md:grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-dvh overflow-hidden relative">
          <Sidebar lang={lang} dict={dict}></Sidebar>
          <Header lang={lang}></Header>
          <main className="md:p-[4rem_4.8rem_6.4rem] p-[4rem_1rem_6.4rem] relative bg-gray-50 overflow-y-scroll">
            <div className="flex flex-col gap-12 max-w-[120rem] m-[0_auto]">
              {children}
            </div>
          </main>
          <ClickOutside />
        </div>
      </body>
    </html>
  );
}
