import style from './Icons.module.scss';

type Props = {
  className?: string | null,
}

function SvgPlus({ className = null }: Props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className || style.Icon}`}
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
