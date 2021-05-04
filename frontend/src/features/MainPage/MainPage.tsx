import { Suspense } from 'react';
import { AppHeader, AppSidebar, AppSidebarHeader } from '../Layout';
import { navItems } from '../../nav/navItems';
import { Redirect, Route, Switch } from "react-router-dom";
import { routes, RouteType } from '../../nav/routes';

import style from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <div className={style.AppHeader}>
        <AppHeader />
      </div>
      <div className={style.AppSidebarHeader}>
        <AppSidebarHeader />
      </div>
      <div className={style.AppSidebar}>
        <AppSidebar navItems={navItems} />
      </div>
      <main className={style.Body} style={{ backgroundColor: "#e5e5e5", padding: "24px 40px" }}>
        <Suspense fallback={() => (<div>Loading</div>)}>
          <Switch>
            {routes.map((route: RouteType, idx: number) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  //name={route.name}
                  render={routerProps => <route.component {...routerProps} /*{...route.props}*/ />}
                />
              ) : null;
            })}
            <Redirect from="/" to={{ pathname: "/painel" }}/>
          </Switch>
        </Suspense>
      </main>
    </div>
  )
}
