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

export const routes = [
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