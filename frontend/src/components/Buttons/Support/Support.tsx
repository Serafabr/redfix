import style from './Support.module.scss';

export function Support() {
  return (
    <button className={style.Support} >
      <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style.SupportIcon}
      >
        <path
          d="M2.5 15v-5a7.5 7.5 0 0115 0v5"
          // stroke="#1589EE"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 15.833a1.667 1.667 0 01-1.667 1.667H15a1.667 1.667 0 01-1.667-1.667v-2.5A1.667 1.667 0 0115 11.667h2.5v4.166zm-15 0A1.667 1.667 0 004.167 17.5H5a1.667 1.667 0 001.667-1.667v-2.5A1.667 1.667 0 005 11.667H2.5v4.166z"
          stroke="#1589EE"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
