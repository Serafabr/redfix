import { Logs, NewMessage } from './Logs';

export const tabConfig: any = {
  logs: { 
    name: "Histórico", 
    view: <Logs />, 
    buttons:[<NewMessage />] 
  },
  supplies: { name: "Suprimentos", view: <div>Suprimentos</div>, buttons:[] },
  assets: { name: "Ativos", view: <div>Ativos</div>, buttons:[] },
  checklist: { name: "Checklist", view: <div>Checklist</div>, buttons:[] },
  files: { name: "Arquivos", view: <div>Arquivos</div>, buttons:[] },
  billings: { name: "Faturamentos", view: <div>Faturamentos</div>, buttons:[] },
  monitors: { name: "Monitores", view: <div>Monitores</div>, buttons:[] },
}