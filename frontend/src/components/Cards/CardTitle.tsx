import style from './Card.module.scss';

export const CardTitle = () => {
  return (
    <div className={style.CardTitle}>
      Manutenção no subsolo do Edifício Principal. Trocar todos os disjuntores e fazer revisão dos quadros elétricos.
      <span className={style.CardBookmark}>
        <img src={BookmarkIcon} alt="Favoritar tarefa" />
      </span>
    </div>
  )
}
