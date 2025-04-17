import { Page } from '@/payload-types'
import TableCell from './TableCell'

type TableBlock = Extract<Page['layout'][number], { blockType: 'home' }>['tableDiscount']

function Table({ type, table }: { type: string; table: TableBlock }) {
  return table.table.root.children.map((item: any) => {
    if (item.type !== 'table') return null
    return (
      <div className={`${type} rounded-md`}>
        <figure key={type}>
          <table>
            {table.tableHeader && (
              <thead>
                <tr>
                  <th colSpan={0}>{table.tableHeader}</th>
                </tr>
              </thead>
            )}
            <tbody>
              {item.children.map((row: any, index: number) => {
                return (
                  <tr key={index}>
                    {row.children.map((cell: any, cellIndex: number) => {
                      const cellData =
                        cell.children[0].children.length > 0 ? cell.children[0].children : false
                      if (!cellData) return null
                      return <TableCell cell={cellData} key={cellIndex} />
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </figure>
      </div>
    )
  })
}

export default Table
