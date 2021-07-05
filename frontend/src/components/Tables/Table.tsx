// Style
import style from './Table.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = any;

export type ColumnStyleT = {
  [id: string]: any,
}

/*************************\
 * Default props
\*************************/

const defaultPropsGetter = () => ({})

/*************************\
 * Utils
\*************************/

const getHeaderStyle = (columnStyle: ColumnStyleT, id: string) => {
  const style = (columnStyle && id) ? columnStyle[id] : {}
  return {
    style: { ...style }
  };
}

/*************************\
 * Table component
\*************************/

export const Table = ({ 
  data: {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  },
  getCellProps = defaultPropsGetter,
  columnStyle,
  smallTable = false,
 }: Props) => {
  
  return (
    <table className={style.Table} {...getTableProps()}>
      <thead className={style.Head}>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps([
                getHeaderStyle(columnStyle, column.id)
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
                  <div className={`${style.Cell} ${smallTable && style.Small}`}>
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
