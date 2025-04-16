type Props = {
  text: string;
  phone: string;
};
export function PhoneNumber({ text, phone }: Props) {
  return (
    <div className="flex mb-12">
      <a href={`tel:${phone}`}>
        {text} <span className="underline">{phone}</span>
      </a>
    </div>
  );
}
