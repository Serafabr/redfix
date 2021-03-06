import { ReactElement } from 'react';
// Components
import { Badge } from '../../Badges';
// Style
import style from './CardTitle.module.scss';
// Icons
import BookmarkIcon from '../../../assets/icons/bookmark.svg';
import BlueBookmarkIcon from '../../../assets/icons/bookmark-checked.svg';

/*************************\
 * PropTypes
\*************************/

type Props = {
  title: string,
  subtitle?: string,
  withBookmark?: boolean,
  bookmarkState?: boolean,
  setBookmarkState?: (state: boolean) => void,
  badges?: Array<ReactElement<typeof Badge>>
}

/*************************\
 * CardTitle Component
\*************************/

export const CardTitle = ({
  title,
  subtitle,
  withBookmark = false,
  bookmarkState = false,
  setBookmarkState,
  badges,
}: Props) => {
  
  const handleBookmarkClick = () => {
    setBookmarkState && setBookmarkState(!bookmarkState);
  }
  
  return (
    <div className={style.CardTitleWrapper}>
      <div className={style.CardTitle} >
        {title}
        {withBookmark && (
          <span className={style.CardBookmark} onClick={handleBookmarkClick}>
            <img src={bookmarkState ? BlueBookmarkIcon : BookmarkIcon } alt="Favoritar tarefa" />
          </span>
        )}
      </div>
      {subtitle && (
        <div className={style.CardSubtitle}>
          {subtitle}
        </div>
      )}
      {badges && (
        <div className={style.CardHeaderTags}>
          {badges.map((badge) => <div style={{ marginRight: "12px" }}>{badge}</div>)}
        </div>
      )}
    </div>
  )
}
