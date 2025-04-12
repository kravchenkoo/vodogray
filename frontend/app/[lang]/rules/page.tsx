type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Blog({ params }: Readonly<Props>) {
  const { lang } = await params;
  return (
    <div
      className="flex flex-col gap-16 rulesText pl-[1rem] md:pl-0"
      dangerouslySetInnerHTML={{
        __html:
          lang === 'en'
            ? `<h2 style="text-align:center;">Dear Customers!</h2><ul><li>Prices for services may vary depending on the pollution of your car.</li><li>In the event of a power outage, a generator service is included in each check.</li><li>Minibuses are charged +20% to the cost of class 3.</li><li>The car wash administration is not responsible for items left in the car interior.</li><li>The administration is not responsible for the operation of the engine after washing it.</li><li>The administration is not responsible for the condition of the car's protective film after washing it.</li><li>The administration is not responsible for the condition of your car if you left the keys with the car wash employees.</li><li>The administration is not responsible for poorly attached body parts.</li></ul>`
            : `<h2 style="text-align:center;">Шановні клієнти!</h2><ul><li>Ціни на послуги можуть змінюватись взалежності від забрудення вашого автомобіля.</li><li>У разі відключення електроенергії до кожного чеку включається послуга генератор.</li><li>Мікроавтобуси розраховуються +20% до вартості 3 класу.</li><li>Адміністрація автомийки не несе відповідальності за речі, залишені в салоні автомобіля.</li><li>Адміністрація не несе відповідальності за роботу двигуна після його мийки.</li><li>Адміністрація не несе відповідальності за стан захисної плівки автомобіля після його мийки.</li><li>Адміністрація не несе відповідальності за стан вашого автомобіля, якщо ви залишили ключі працівникам мийки.</li><li>Адміністрація не несе відповідальності за погано прикріплені деталі кузова.</li></ul>`,
      }}
    ></div>
  );
}
