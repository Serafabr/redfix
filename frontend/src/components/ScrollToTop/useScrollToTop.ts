import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*************************\
 * Custom Hook
\*************************/

export const useScrollToTop = (scrollPage: any) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    scrollPage && scrollPage.current.scrollTo(0, 0);
  }, [pathname, scrollPage]);
}
