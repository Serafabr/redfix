import { Logs, NewMessage } from './Logs';
import { Supplies, AddSupply, AcceptSupply } from './Supplies';
import { Facilities, AddFacility } from './Facilities';

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
  files: { name: "Arquivos", view: <div>Arquivos</div>, buttons:[] },
  billings: { name: "Faturamentos", view: <div>Faturamentos</div>, buttons:[] },
  monitors: { name: "Monitores", view: <div>Monitores</div>, buttons:[] },
  // checklist: { name: "Checklist", view: <div>Checklist</div>, buttons:[] },
}