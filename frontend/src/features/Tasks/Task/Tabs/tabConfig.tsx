import { Logs, NewMessage } from './Logs';
import { Supplies, AddSupply, AcceptSupply } from './Supplies';
import { Facilities, AddFacility } from './Facilities';
import { Billings, AddBilling } from './Billings';
import { Monitors, AddMeasure } from './Monitors';

export const tabConfig: any = {
  logs: { 
    name: "Histórico", 
    view: <Logs />, 
    buttons:[<NewMessage />] 
  },
  supplies: { 
    name: "Suprimentos", 
    view: <Supplies />, 
    buttons:[<AcceptSupply />, <AddSupply />] 
  },
  assets: { 
    name: "Ativos", 
    view: <Facilities />, 
    buttons:[<AddFacility />] 
  },
  billings: { 
    name: "Faturamentos", 
    view: <Billings />, 
    buttons: [<AddBilling/>],
  },
  monitors: { 
    name: "Monitores", 
    view: <Monitors />, 
    buttons:[<AddMeasure />] },
  files: { name: "Arquivos", view: <div>Arquivos</div>, buttons:[] },
  // checklist: { name: "Checklist", view: <div>Checklist</div>, buttons:[] },
}