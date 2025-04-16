// Define the type for each cell item
type CellItem = { type: 'text'; text: string } | { type: 'listitem'; children: { text: string }[] }

// Define the props for the TableCell component
type Props = {
  cell: CellItem[] // Array of CellItem
}

function TableCell({ cell }: Props) {
  // Render the cell content based on its type
  const renderCell = (cell: CellItem[]) => {
    if (cell.length === 0) {
      return null // Handle empty cell array
    }

    switch (cell[0].type) {
      case 'text':
        return cell.map((item, index) => {
          if (item.type === 'text') {
            return <span key={index}>{item.text}</span>
          }
          return null
        })
      case 'listitem':
        return (
          <ul>
            {cell.map((item, index) => {
              if (item.type === 'listitem' && item.children.length > 0) {
                return <li key={index}>{item.children[0].text}</li>
              }
              return null
            })}
          </ul>
        )
      default:
        return null
    }
  }

  return <td>{renderCell(cell)}</td>
}

export default TableCell
