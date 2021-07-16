import style from './FullLoading.module.scss';

export const FullLoading = () => {
  return (
    <div className={style.Background}>
      <div className={style.LoadingBox}>
        Carregando...
      </div>
    </div>
  )
}
