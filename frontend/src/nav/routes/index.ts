import appliances from './appliances';
import auth from './auth';
import billings from './billings';
import depots from './depots';
import facilities from './facilities';
import main from './main';
import monitors from './monitors';
import plans from './plans';
import projects from './projects';
import receipts from './receipts';
import tasks from './tasks';
import teams from './teams';
import users from './users';

export type RouteType = {
  path: string, 
  exact?: boolean, 
  name: string, 
  //component: LazyExoticComponent<any> | ReactNode,
  component: any,
}

export type RoutesType = Array<RouteType>;

export const routes: RoutesType = [
  ...appliances,
  ...auth,
  ...billings,
  ...depots,
  ...facilities,
  ...main,
  ...monitors,
  ...plans,
  ...projects,
  ...receipts,
  ...tasks,
  ...teams,
  ...users,
];