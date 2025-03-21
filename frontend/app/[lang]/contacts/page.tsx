type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Contacts({ params }: Readonly<Props>) {
  const { lang } = await params;
  return <div>contact page {lang}</div>;
}
