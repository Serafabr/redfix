import { Logs, NewMessage } from './Logs';
import { Supplies, AddSupply, AcceptSupply } from './Supplies';
import { Facilities, AddFacility } from './Facilities';
import { Billings, AddBilling } from './Billings';

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
  files: { name: "Arquivos", view: <div>Arquivos</div>, buttons:[] },
  monitors: { name: "Monitores", view: <div>Monitores</div>, buttons:[] },
  // checklist: { name: "Checklist", view: <div>Checklist</div>, buttons:[] },
}