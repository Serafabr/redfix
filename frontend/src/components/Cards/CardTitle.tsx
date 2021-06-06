import { ReactElement } from 'react';
import style from './Card.module.scss';
import BookmarkIcon from '../../assets/icons/bookmark.svg';
import BlueBookmarkIcon from '../../assets/icons/bookmark-checked.svg';
import { Badge } from '../Badges';

type CardTitleT = {
  title: string,
  withBookmark?: boolean,
  bookmarkState?: boolean,
  setBookmarkState?: (state: boolean) => void,
  badges: Array<ReactElement<typeof Badge>>
}

export const CardTitle = ({
  title,
  withBookmark = false,
  bookmarkState = false,
  setBookmarkState,
  badges,
}: CardTitleT) => {
  
  const handleBookmarkClick = () => {
    setBookmarkState && setBookmarkState(!bookmarkState);
  }
  
  return (
    <div className={style.CardTitleWrapper}>
      <div className={style.CardTitle}>
        {title}
        {withBookmark && (
          <span className={style.CardBookmark} onClick={handleBookmarkClick}>
            <img src={bookmarkState ? BlueBookmarkIcon : BookmarkIcon } alt="Favoritar tarefa" />
          </span>
        )}
      </div>
      <div className={style.CardHeaderTags}>
        {badges}
      </div>
    </div>
  )
}
