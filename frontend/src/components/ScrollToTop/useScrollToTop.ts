import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const useScrollToTop = (scrollPage: any) => {
  // const history = useHistory();
  
  // useEffect(() => {
  //   console.log("Mounting scroll listener...")
  //   const unlisten = history.listen(() => {
  //     console.log("Applying scroll");
  //     window.scrollTo(0, 0);
  //   });
    
  //   return () => { unlisten() };
  // }, []);
  const { pathname } = useLocation();
  
  useEffect(() => {
    scrollPage && scrollPage.current.scrollTo(0, 0);
  }, [pathname, scrollPage]);
}
