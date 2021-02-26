import style from './Plus.module.scss';

type Props = {
  className: string,
}

function SvgPlus({ className }: Props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${style.Plus}`}
    >
      <path
        d="M8 3.333v9.334M3.333 8h9.334"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgPlus;