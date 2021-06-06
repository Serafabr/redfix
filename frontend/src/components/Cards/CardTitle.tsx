import style from './Card.module.scss';
import BookmarkIcon from '../../assets/icons/bookmark.svg';
import BlueBookmarkIcon from '../../assets/icons/bookmark-checked.svg';

type CardTitleT = {
  title: string,
  withBookmark?: boolean,
  bookmarkState?: boolean,
  setBookmarkState?: (state: boolean) => void,
}

export const CardTitle = ({
  title,
  withBookmark = false,
  bookmarkState = false,
  setBookmarkState,
}: CardTitleT) => {
  
  const handleBookmarkClick = () => {
    setBookmarkState && setBookmarkState(!bookmarkState);
  }
  
  return (
    <div className={style.CardTitle}>
      {title}
      {withBookmark && (
        <span className={style.CardBookmark} onClick={handleBookmarkClick}>
          <img src={bookmarkState ? BlueBookmarkIcon : BookmarkIcon } alt="Favoritar tarefa" />
        </span>
      )}
    </div>
  )
}
