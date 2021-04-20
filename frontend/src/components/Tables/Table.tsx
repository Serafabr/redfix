import style from './Table.module.scss';

export const Table = () => {
  return (
    <table className={style.Table}>
      <colgroup>
        <col className={style.FirstCol} />
        <col/>
        <col/>
        <col/>
        <col/>
      </colgroup>
      <thead className={style.Head}>
        <tr>
          <th >Id</th>
          <th>Título</th>
          <th>Status</th>
          <th>Localização</th>
          <th>Prazo</th>
        </tr>
      </thead>
      <tbody className={style.Body}>
        <tr>
          <td >0001</td>
          <td>Manutenção no subsolo do Edifício Principal</td>
          <td>Concluído</td>
          <td>Edifício Principal</td>
          <td>31/12/2020</td>
        </tr>
        <tr>
          <td >0001</td>
          <td>Manutenção no subsolo do Edifício Principal</td>
          <td>Concluído</td>
          <td>Edifício Principal</td>
          <td>31/12/2020</td>
        </tr>
        <tr>
          <td >0001</td>
          <td>Manutenção no subsolo do Edifício Principal</td>
          <td>Concluído</td>
          <td>Edifício Principal</td>
          <td>31/12/2020</td>
        </tr>
        <tr>
          <td >0001</td>
          <td>Manutenção no subsolo do Edifício Principal</td>
          <td>Concluído</td>
          <td>Edifício Principal</td>
          <td>31/12/2020</td>
        </tr>
        <tr>
          <td >0001</td>
          <td>Manutenção no subsolo do Edifício Principal</td>
          <td>Concluído</td>
          <td>Edifício Principal</td>
          <td>31/12/2020</td>
        </tr>
        <tr>
          <td >0001</td>
          <td>Manutenção no subsolo do Edifício Principal</td>
          <td>Concluído</td>
          <td>Edifício Principal</td>
          <td>31/12/2020</td>
        </tr>
        <tr>
          <td >0001</td>
          <td>Manutenção no subsolo do Edifício Principal</td>
          <td>Concluído</td>
          <td>Edifício Principal</td>
          <td>31/12/2020</td>
        </tr>
      </tbody>
    </table>
  )
}
