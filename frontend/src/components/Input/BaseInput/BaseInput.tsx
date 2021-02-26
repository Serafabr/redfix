import style from './BaseInput.module.scss';

export const BaseInput = () => {
  return (
    <div>
      <input className={`${style.Input}`} type="text" placeholder="Name..."/>
    </div>
  )
};
