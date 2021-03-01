import style from './Icons.module.scss';

type Props = {
  className?: string | null,
}

function SvgAlertCircle({ className = null }: Props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className || style.Icon}`}
    >
      <path
        d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334zM8 5.333V8M8 10.667h.007"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgAlertCircle;
