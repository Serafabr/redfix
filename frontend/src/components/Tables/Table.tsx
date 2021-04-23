import style from './Table.module.scss';

import doneIcon from '../../assets/icons/check.svg'
import cancelIcon from '../../assets/icons/x.svg'

type Props = any;

export const Table = ({ 
  data: {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  }
 }: Props) => {
  return (
    <table className={style.Table} {...getTableProps()}>
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
      <tbody className={style.Body} {...getTableProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                <td {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}
