import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { getStrapiData } from '@/data/getData';
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.css';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import ClickOutside from '@/components/clickOutside';

const roboto = Roboto({
  weight: ['500', '600'],
  subsets: ['cyrillic', 'latin'],
  fallback: ['system-ui', 'sans-serif'],
  display: 'swap',
});

type MetadataProps = {
  params: Promise<{ lang: string }>;
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
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
  return (
    <html lang="en">
      <body className={`${roboto.className} font-medium`}>
        <div className="grid grid-cols-[1fr] md:grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-dvh overflow-hidden relative">
          <Sidebar lang={lang}></Sidebar>
          <Header lang={lang}></Header>
          <main className="md:p-[4rem_4.8rem_6.4rem] p-[4rem_1rem_6.4rem] relative bg-gray-50 overflow-y-scroll">
            <div className="flex flex-col gap-12 max-w-[120rem] m-[0_auto]">
              {children}
            </div>
          </main>
          <ClickOutside />
        </div>
      </body>
      <GoogleAnalytics gaId="G-00YLQEXTPH" />
    </html>
  );
}
