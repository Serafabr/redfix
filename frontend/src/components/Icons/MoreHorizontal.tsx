import style from './Icons.module.scss';

type Props = {
  className?: string | null,
}

function SvgMoreHorizontal({ className = null }: Props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className || style.Icon}`}
    >
      <path
        d="M8 8.667a.667.667 0 100-1.334.667.667 0 000 1.334zM12.667 8.667a.667.667 0 100-1.334.667.667 0 000 1.334zM3.333 8.667a.667.667 0 100-1.334.667.667 0 000 1.334z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgMoreHorizontal;
