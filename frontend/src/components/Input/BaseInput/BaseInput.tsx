import style from './BaseInput.module.scss';

type Props = {
  className?: string,
  [any: string]: any,
};

export const BaseInput = ({className, ...rest}: Props) => {
  return (
    <input className={`${style.Input}`} {...rest}/>
  )
};
