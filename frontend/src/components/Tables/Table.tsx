import style from './Table.module.scss';

import doneIcon from '../../assets/icons/check.svg'
import cancelIcon from '../../assets/icons/x.svg'

type Props = any;

const defaultPropsGetter = () => ({})

export const Table = ({ 
  data: {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  },
  getCellProps = defaultPropsGetter,
  getHeaderProps = defaultPropsGetter
 }: Props) => {
  
  return (
    <table className={style.Table} {...getTableProps()}>
      {/* <colgroup>
        <col style={{ width: "10%" }}/>
        <col style={{ width: "40%" }}/>
        <col style={{ width: "15%", minWidth: "140px" }}/>
        <col style={{ width: "20%" }}/>
        <col style={{ width: "15%" }}/>
      </colgroup> */}
      <thead className={style.Head}>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps([
                getHeaderProps(column)
              ])}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={style.Body} {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow && prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                <td {...cell.getCellProps([
                  getCellProps(cell),
                ])}>
                  <div className={`${style.Cell} ${style.Small}`}>
                    {cell.render('Cell')}
                  </div>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}
