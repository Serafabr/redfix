import style from './Table.module.scss';

import doneIcon from '../../assets/icons/check.svg'
import cancelIcon from '../../assets/icons/x.svg'

type Props = any;

export const Table = ({ 
  data: {
    headerGroups,
  }
 }: Props) => {
  return (
    <table className={style.Table}>
      <colgroup>
        <col style={{ width: "10%" }}/>
        <col style={{ width: "40%" }}/>
        <col style={{ width: "15%" }}/>
        <col style={{ width: "20%" }}/>
        <col style={{ width: "15%" }}/>
      </colgroup>
      <thead className={style.Head}>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={style.Body}>
        <tr>
          <td >0001</td>
          <td>Manutenção no subsolo do Edifício Principal</td>
          <td><img src={cancelIcon} alt="Concluído" />Cancelado</td>
          <td>Edifício Principal</td>
          <td>31/12/2020</td>
        </tr>
        <tr>
          <td >0001</td>
          <td>Manutenção no subsolo do Edifício Principal</td>
          <td><img src={doneIcon} alt="Concluído" />Concluído</td>
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
