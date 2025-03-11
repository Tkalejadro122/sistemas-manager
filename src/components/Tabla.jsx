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
  getKeyValue
} from '@heroui/react'

const Tabla = ({ usuarios, columnas, opciones }) => {
  const [page, setPage] = React.useState(1)
  const rowsPerPage = 5
  const pages = Math.ceil(usuarios.length / rowsPerPage)
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return usuarios.slice(start, end)
  }, [page, usuarios])

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
            <TableRow key={item.name}>
              {columnas.slice(0, -1).map((columnKey) => (
                <TableCell key={columnKey}>
                  {getKeyValue(item, columnKey)}
                </TableCell>
              ))}
              <TableCell>
                <div className='flex flex-row justify-center space-x-2 w-full'>
                  {opciones.map((Opcion, index) => (
                    <Boton isIconOnly key={index}>
                      {Opcion}
                    </Boton>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className='flex w-full justify-center pt-8'>
        <Pagination
          classNames={{
            cursor: 'bg-rojo-institucional text-white'
          }}
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
  usuarios: PropTypes.array.isRequired,
  columnas: PropTypes.array.isRequired,
  opciones: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default Tabla
