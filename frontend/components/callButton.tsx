import { HiOutlinePhone } from 'react-icons/hi2';
type Props = {
  text: string;
  phone: string;
};
export function CallButton({ text, phone }: Props) {
  return (
    <a
      className="bg-[green] rounded-[3px] flex items-center justify-center p-[1.2rem_2rem]"
      href={`tel:${phone}`}
    >
      <HiOutlinePhone className="w-[22px] h-[22px]" />
      <span className="pl-5">{text}</span>
    </a>
  );
}
