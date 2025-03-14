import React from 'react'
import PropTypes from 'prop-types'
import Boton from '../components/Boton'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Tooltip
} from '@heroui/react'

const Tabla = ({ informacion, columnas, acciones, itemsPorPagina }) => {
  const [page, setPage] = React.useState(1)
  const rowsPerPage = itemsPorPagina
  const pages = Math.ceil(informacion.length / rowsPerPage)
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return informacion.slice(start, end)
  }, [page, informacion])

  return (
    <>
      <Table
        aria-label='Ejemplo de tabla'
        removeWrapper
        classNames={{
          th: 'border-b border-gray-200 text-center text-[15px] bg-rojo-institucional text-white',
          td: 'border border-gray-200 text-center',
          tr: '[&:nth-child(odd)]:bg-gris-intermedio [&:nth-child(even)]:bg-gris-claro'
        }}
      >
        <TableHeader>
          {columnas.map((columna) => (
            <TableColumn key={columna}>{columna}</TableColumn>
          ))}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={items.indexOf(item)}>
              {columnas.slice(0, -1).map((columnKey) => (
                <TableCell key={columnKey}>
                  {getKeyValue(item, columnKey)}
                </TableCell>
              ))}
              <TableCell>
                <div className='flex flex-row justify-center space-x-2 w-full'>
                  {acciones.map(({ icono, tooltip, accion }, index) => (
                    <Tooltip
                      key={index}
                      content={tooltip}
                      placement='bottom'
                      showArrow
                    >
                      <div>
                        <Boton
                          isIconOnly
                          w='32px'
                          h='32px'
                          onClick={() => accion(item)}
                        >
                          {icono}
                        </Boton>
                      </div>
                    </Tooltip>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className='flex w-full justify-center pt-8'>
        <Pagination
          classNames={{ cursor: 'bg-rojo-institucional text-white' }}
          showControls
          color='danger'
          showShadow
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    </>
  )
}

Tabla.propTypes = {
  informacion: PropTypes.array.isRequired,
  columnas: PropTypes.array.isRequired,
  acciones: PropTypes.arrayOf(
    PropTypes.shape({
      icono: PropTypes.node.isRequired,
      tooltip: PropTypes.string.isRequired,
      accion: PropTypes.func.isRequired
    })
  ).isRequired,
  itemsPorPagina: PropTypes.number.isRequired
}

export default Tabla
