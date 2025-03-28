import { HiOutlineMapPin } from 'react-icons/hi2';
type Props = {
  text: string;
  url: string;
};
export function RouteButton({ text, url }: Props) {
  return (
    <a
      className="mt-12 bg-brand-600 text-white rounded-[3px] flex items-center justify-center p-[1.2rem_2rem]"
      href={`${url}`}
      target="blank"
    >
      <HiOutlineMapPin className="w-[22px] h-[22px]" />
      <span className="pl-5">{text}</span>
    </a>
  );
}
